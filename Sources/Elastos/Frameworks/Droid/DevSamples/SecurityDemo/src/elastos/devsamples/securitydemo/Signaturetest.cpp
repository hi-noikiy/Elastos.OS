
#include "elastos/devsamples/securitydemo/Signaturetest.h"
#include "Elastos.CoreLibrary.Core.h"
#include "Elastos.CoreLibrary.Security.h"
#include "elastos/utility/logging/Logger.h"
using Elastos::Utility::Logging::Logger;

using Elastos::Math::CBigInteger;
using Elastos::Math::IBigInteger;
using Elastos::Security::CKeyFactoryHelper;
using Elastos::Security::CSignatureHelper;
using Elastos::Security::IKeyFactory;
using Elastos::Security::IKeyFactoryHelper;
using Elastos::Security::IPublicKey;
using Elastos::Security::ISignature;
using Elastos::Security::ISignatureHelper;
using Elastos::Security::Spec::CRSAPublicKeySpec;
using Elastos::Security::Spec::IKeySpec;
using Elastos::Security::Spec::IRSAPublicKeySpec;

namespace Elastos {
namespace DevSamples {
namespace SecurityDemo {

static AutoPtr<IBigInteger> InitRSA_2048_modulus()
{
    Byte data[] = {
        (Byte) 0x00, (Byte) 0xe0, (Byte) 0x47, (Byte) 0x3e, (Byte) 0x8a, (Byte) 0xb8, (Byte) 0xf2, (Byte) 0x28,
        (Byte) 0x4f, (Byte) 0xeb, (Byte) 0x9e, (Byte) 0x74, (Byte) 0x2f, (Byte) 0xf9, (Byte) 0x74, (Byte) 0x8f,
        (Byte) 0xa1, (Byte) 0x18, (Byte) 0xed, (Byte) 0x98, (Byte) 0x63, (Byte) 0x3c, (Byte) 0x92, (Byte) 0xf5,
        (Byte) 0x2a, (Byte) 0xeb, (Byte) 0x7a, (Byte) 0x2e, (Byte) 0xbe, (Byte) 0x0d, (Byte) 0x3b, (Byte) 0xe6,
        (Byte) 0x03, (Byte) 0x29, (Byte) 0xbe, (Byte) 0x76, (Byte) 0x6a, (Byte) 0xd1, (Byte) 0x0e, (Byte) 0xb6,
        (Byte) 0xa5, (Byte) 0x15, (Byte) 0xd0, (Byte) 0xd2, (Byte) 0xcf, (Byte) 0xd9, (Byte) 0xbe, (Byte) 0xa7,
        (Byte) 0x93, (Byte) 0x0f, (Byte) 0x0c, (Byte) 0x30, (Byte) 0x65, (Byte) 0x37, (Byte) 0x89, (Byte) 0x9f,
        (Byte) 0x79, (Byte) 0x58, (Byte) 0xcd, (Byte) 0x3e, (Byte) 0x85, (Byte) 0xb0, (Byte) 0x1f, (Byte) 0x88,
        (Byte) 0x18, (Byte) 0x52, (Byte) 0x4d, (Byte) 0x31, (Byte) 0x25, (Byte) 0x84, (Byte) 0xa9, (Byte) 0x4b,
        (Byte) 0x25, (Byte) 0x1e, (Byte) 0x36, (Byte) 0x25, (Byte) 0xb5, (Byte) 0x41, (Byte) 0x41, (Byte) 0xed,
        (Byte) 0xbf, (Byte) 0xee, (Byte) 0x19, (Byte) 0x88, (Byte) 0x08, (Byte) 0xe1, (Byte) 0xbb, (Byte) 0x97,
        (Byte) 0xfc, (Byte) 0x7c, (Byte) 0xb4, (Byte) 0x9b, (Byte) 0x9e, (Byte) 0xaa, (Byte) 0xaf, (Byte) 0x68,
        (Byte) 0xe9, (Byte) 0xc9, (Byte) 0x8d, (Byte) 0x7d, (Byte) 0x0e, (Byte) 0xdc, (Byte) 0x53, (Byte) 0xbb,
        (Byte) 0xc0, (Byte) 0xfa, (Byte) 0x00, (Byte) 0x34, (Byte) 0x35, (Byte) 0x6d, (Byte) 0x63, (Byte) 0x05,
        (Byte) 0xfb, (Byte) 0xbc, (Byte) 0xc3, (Byte) 0xc7, (Byte) 0x00, (Byte) 0x14, (Byte) 0x05, (Byte) 0x38,
        (Byte) 0x6a, (Byte) 0xbb, (Byte) 0xc8, (Byte) 0x73, (Byte) 0xcb, (Byte) 0x0f, (Byte) 0x3e, (Byte) 0xf7,
        (Byte) 0x42, (Byte) 0x5f, (Byte) 0x3d, (Byte) 0x33, (Byte) 0xdf, (Byte) 0x7b, (Byte) 0x31, (Byte) 0x5a,
        (Byte) 0xe0, (Byte) 0x36, (Byte) 0xd2, (Byte) 0xa0, (Byte) 0xb6, (Byte) 0x6a, (Byte) 0xfd, (Byte) 0x47,
        (Byte) 0x50, (Byte) 0x3b, (Byte) 0x16, (Byte) 0x9b, (Byte) 0xf3, (Byte) 0x6e, (Byte) 0x3b, (Byte) 0x51,
        (Byte) 0x62, (Byte) 0x51, (Byte) 0x5b, (Byte) 0x71, (Byte) 0x5f, (Byte) 0xda, (Byte) 0x83, (Byte) 0xde,
        (Byte) 0xaf, (Byte) 0x2c, (Byte) 0x58, (Byte) 0xae, (Byte) 0xb9, (Byte) 0xab, (Byte) 0xfb, (Byte) 0x30,
        (Byte) 0x97, (Byte) 0xc3, (Byte) 0xcc, (Byte) 0x9d, (Byte) 0xd9, (Byte) 0xdb, (Byte) 0xe5, (Byte) 0xef,
        (Byte) 0x29, (Byte) 0x6c, (Byte) 0x17, (Byte) 0x61, (Byte) 0x39, (Byte) 0x02, (Byte) 0x8e, (Byte) 0x8a,
        (Byte) 0x67, (Byte) 0x1e, (Byte) 0x63, (Byte) 0x05, (Byte) 0x6d, (Byte) 0x45, (Byte) 0xf4, (Byte) 0x01,
        (Byte) 0x88, (Byte) 0xd2, (Byte) 0xc4, (Byte) 0x13, (Byte) 0x34, (Byte) 0x90, (Byte) 0x84, (Byte) 0x5d,
        (Byte) 0xe5, (Byte) 0x2c, (Byte) 0x25, (Byte) 0x34, (Byte) 0xe9, (Byte) 0xc6, (Byte) 0xb2, (Byte) 0x47,
        (Byte) 0x8c, (Byte) 0x07, (Byte) 0xbd, (Byte) 0xae, (Byte) 0x92, (Byte) 0x88, (Byte) 0x23, (Byte) 0xb6,
        (Byte) 0x2d, (Byte) 0x06, (Byte) 0x6c, (Byte) 0x77, (Byte) 0x70, (Byte) 0xf9, (Byte) 0xf6, (Byte) 0x3f,
        (Byte) 0x3d, (Byte) 0xba, (Byte) 0x24, (Byte) 0x7f, (Byte) 0x53, (Byte) 0x08, (Byte) 0x44, (Byte) 0x74,
        (Byte) 0x7b, (Byte) 0xe7, (Byte) 0xaa, (Byte) 0xa8, (Byte) 0x5d, (Byte) 0x85, (Byte) 0x3b, (Byte) 0x8b,
        (Byte) 0xd2, (Byte) 0x44, (Byte) 0xac, (Byte) 0xec, (Byte) 0x3d, (Byte) 0xe3, (Byte) 0xc8, (Byte) 0x9a,
        (Byte) 0xb4, (Byte) 0x64, (Byte) 0x53, (Byte) 0xab, (Byte) 0x4d, (Byte) 0x24, (Byte) 0xc3, (Byte) 0xac,
        (Byte) 0x69,
    };

    AutoPtr<ArrayOf<Byte> > bytes = ArrayOf<Byte>::Alloc(data, sizeof(data)/sizeof(data[0]));
    AutoPtr<IBigInteger> obj;
    CBigInteger::New(*bytes, (IBigInteger**)&obj);
    return obj;
}

static AutoPtr<IBigInteger> InitRSA_2048_publicExponent()
{
    Byte data[] = {
        (Byte) 0x01, (Byte) 0x00, (Byte) 0x01,
    };

    AutoPtr<ArrayOf<Byte> > bytes = ArrayOf<Byte>::Alloc(data, sizeof(data)/sizeof(data[0]));
    AutoPtr<IBigInteger> obj;
    CBigInteger::New(*bytes, (IBigInteger**)&obj);
    return obj;
}

static AutoPtr<IBigInteger> RSA_2048_modulus = InitRSA_2048_modulus();
static AutoPtr<IBigInteger> RSA_2048_publicExponent = InitRSA_2048_publicExponent();

static Byte Vector2Data[] = {
    (Byte) 0x54, (Byte) 0x68, (Byte) 0x69, (Byte) 0x73, (Byte) 0x20, (Byte) 0x69, (Byte) 0x73, (Byte) 0x20,
    (Byte) 0x61, (Byte) 0x20, (Byte) 0x73, (Byte) 0x69, (Byte) 0x67, (Byte) 0x6e, (Byte) 0x65, (Byte) 0x64,
    (Byte) 0x20, (Byte) 0x6d, (Byte) 0x65, (Byte) 0x73, (Byte) 0x73, (Byte) 0x61, (Byte) 0x67, (Byte) 0x65,
    (Byte) 0x20, (Byte) 0x66, (Byte) 0x72, (Byte) 0x6f, (Byte) 0x6d, (Byte) 0x20, (Byte) 0x4b, (Byte) 0x65,
    (Byte) 0x6e, (Byte) 0x6e, (Byte) 0x79, (Byte) 0x20, (Byte) 0x52, (Byte) 0x6f, (Byte) 0x6f, (Byte) 0x74,
    (Byte) 0x2e, (Byte) 0x0a,
};

static Byte MD5withRSA_Vector2Signature[] = {
    (Byte) 0x04, (Byte) 0x17, (Byte) 0x83, (Byte) 0x10, (Byte) 0xe2, (Byte) 0x6e, (Byte) 0xdf, (Byte) 0xa9,
    (Byte) 0xae, (Byte) 0xd2, (Byte) 0xdc, (Byte) 0x5f, (Byte) 0x70, (Byte) 0x1d, (Byte) 0xaf, (Byte) 0x54,
    (Byte) 0xc0, (Byte) 0x5f, (Byte) 0x0b, (Byte) 0x2c, (Byte) 0xe6, (Byte) 0xd0, (Byte) 0x00, (Byte) 0x18,
    (Byte) 0x4c, (Byte) 0xf6, (Byte) 0x8f, (Byte) 0x18, (Byte) 0x10, (Byte) 0x74, (Byte) 0x90, (Byte) 0x99,
    (Byte) 0xa9, (Byte) 0x90, (Byte) 0x3c, (Byte) 0x5a, (Byte) 0x38, (Byte) 0xd3, (Byte) 0x3d, (Byte) 0x48,
    (Byte) 0xcf, (Byte) 0x31, (Byte) 0xaf, (Byte) 0x12, (Byte) 0x98, (Byte) 0xfb, (Byte) 0x66, (Byte) 0xe8,
    (Byte) 0x58, (Byte) 0xec, (Byte) 0xca, (Byte) 0xe1, (Byte) 0x42, (Byte) 0xf9, (Byte) 0x84, (Byte) 0x17,
    (Byte) 0x6f, (Byte) 0x4c, (Byte) 0x3e, (Byte) 0xc4, (Byte) 0x40, (Byte) 0xc6, (Byte) 0x70, (Byte) 0xb0,
    (Byte) 0x38, (Byte) 0xf3, (Byte) 0x47, (Byte) 0xeb, (Byte) 0x6f, (Byte) 0xcb, (Byte) 0xea, (Byte) 0x21,
    (Byte) 0x41, (Byte) 0xf3, (Byte) 0xa0, (Byte) 0x3e, (Byte) 0x42, (Byte) 0xad, (Byte) 0xa5, (Byte) 0xad,
    (Byte) 0x5d, (Byte) 0x2c, (Byte) 0x1a, (Byte) 0x8e, (Byte) 0x3e, (Byte) 0xb3, (Byte) 0xa5, (Byte) 0x78,
    (Byte) 0x3d, (Byte) 0x56, (Byte) 0x09, (Byte) 0x93, (Byte) 0xc9, (Byte) 0x93, (Byte) 0xd3, (Byte) 0xd2,
    (Byte) 0x9a, (Byte) 0xc5, (Byte) 0xa5, (Byte) 0x2e, (Byte) 0xb2, (Byte) 0xd8, (Byte) 0x37, (Byte) 0xc7,
    (Byte) 0x13, (Byte) 0x1a, (Byte) 0x0b, (Byte) 0xda, (Byte) 0x50, (Byte) 0x28, (Byte) 0x6d, (Byte) 0x47,
    (Byte) 0x65, (Byte) 0x52, (Byte) 0xcd, (Byte) 0xe7, (Byte) 0xec, (Byte) 0x57, (Byte) 0x00, (Byte) 0x41,
    (Byte) 0x34, (Byte) 0x28, (Byte) 0xb9, (Byte) 0x8b, (Byte) 0x03, (Byte) 0x41, (Byte) 0xb6, (Byte) 0xd5,
    (Byte) 0xa8, (Byte) 0xef, (Byte) 0xd3, (Byte) 0xdd, (Byte) 0x80, (Byte) 0xd5, (Byte) 0x69, (Byte) 0xe4,
    (Byte) 0xf0, (Byte) 0x4d, (Byte) 0xa4, (Byte) 0x7d, (Byte) 0x60, (Byte) 0x2f, (Byte) 0xef, (Byte) 0x79,
    (Byte) 0x07, (Byte) 0x75, (Byte) 0xeb, (Byte) 0xf7, (Byte) 0x4b, (Byte) 0x43, (Byte) 0x41, (Byte) 0xdb,
    (Byte) 0x33, (Byte) 0xad, (Byte) 0x9c, (Byte) 0x7b, (Byte) 0x78, (Byte) 0x83, (Byte) 0x34, (Byte) 0x77,
    (Byte) 0xe4, (Byte) 0x80, (Byte) 0xbe, (Byte) 0xe6, (Byte) 0x6f, (Byte) 0xdd, (Byte) 0xac, (Byte) 0xa5,
    (Byte) 0x37, (Byte) 0xcf, (Byte) 0xb5, (Byte) 0x44, (Byte) 0x11, (Byte) 0x77, (Byte) 0x96, (Byte) 0x45,
    (Byte) 0xf9, (Byte) 0xae, (Byte) 0x48, (Byte) 0xa6, (Byte) 0xbe, (Byte) 0x30, (Byte) 0x32, (Byte) 0xeb,
    (Byte) 0x43, (Byte) 0x6f, (Byte) 0x66, (Byte) 0x39, (Byte) 0x57, (Byte) 0xf8, (Byte) 0xe6, (Byte) 0x60,
    (Byte) 0x31, (Byte) 0xd0, (Byte) 0xfc, (Byte) 0xcf, (Byte) 0x9f, (Byte) 0xe5, (Byte) 0x3d, (Byte) 0xcf,
    (Byte) 0xbd, (Byte) 0x7b, (Byte) 0x13, (Byte) 0x20, (Byte) 0xce, (Byte) 0x11, (Byte) 0xfd, (Byte) 0xe5,
    (Byte) 0xff, (Byte) 0x90, (Byte) 0x85, (Byte) 0xdf, (Byte) 0xca, (Byte) 0x3d, (Byte) 0xd9, (Byte) 0x44,
    (Byte) 0x16, (Byte) 0xc2, (Byte) 0x32, (Byte) 0x28, (Byte) 0xc7, (Byte) 0x01, (Byte) 0x6d, (Byte) 0xea,
    (Byte) 0xcb, (Byte) 0x0d, (Byte) 0x85, (Byte) 0x08, (Byte) 0x6f, (Byte) 0xcb, (Byte) 0x41, (Byte) 0x6a,
    (Byte) 0x3c, (Byte) 0x0f, (Byte) 0x3d, (Byte) 0x38, (Byte) 0xb5, (Byte) 0x61, (Byte) 0xc5, (Byte) 0x64,
    (Byte) 0x64, (Byte) 0x81, (Byte) 0x4c, (Byte) 0xcd, (Byte) 0xd1, (Byte) 0x6a, (Byte) 0x87, (Byte) 0x28,
    (Byte) 0x02, (Byte) 0xaf, (Byte) 0x8f, (Byte) 0x59, (Byte) 0xe5, (Byte) 0x67, (Byte) 0x25, (Byte) 0x00,
};

ECode SignatureTest::MD5WithRSA()
{
    AutoPtr<IKeyFactoryHelper> helper;
    CKeyFactoryHelper::AcquireSingleton((IKeyFactoryHelper**)&helper);
    AutoPtr<IKeyFactory> kf;
    helper->GetInstance(String("RSA"), (IKeyFactory**)&kf);
    AutoPtr<IRSAPublicKeySpec> keySpec;
    CRSAPublicKeySpec::New(RSA_2048_modulus, RSA_2048_publicExponent, (IRSAPublicKeySpec**)&keySpec);
    AutoPtr<IPublicKey> pubKey;
    kf->GeneratePublic(IKeySpec::Probe(keySpec), (IPublicKey**)&pubKey);
    assert(pubKey != NULL);

    AutoPtr<ISignatureHelper> sh;
    CSignatureHelper::AcquireSingleton((ISignatureHelper**)&sh);
    AutoPtr<ISignature> sig;
    Logger::D("SignatureTest", "[TODO wanli] MD5withRSA==========================1");
    sh->GetInstance(String("MD5withRSA"), (ISignature**)&sig);
    Logger::D("SignatureTest", "[TODO wanli] MD5withRSA==========================2");
    sig->InitVerify(pubKey);
    Logger::D("SignatureTest", "[TODO wanli] MD5withRSA==========================3");

    // AutoPtr<ArrayOf<Byte> > bytes = ArrayOf<Byte>::Alloc(Vector2Data, sizeof(Vector2Data)/sizeof(Vector2Data[0]));
    String text("123");
    AutoPtr<ArrayOf<Byte> > bytes = text.GetBytes();
    // AutoPtr<ArrayOf<Byte> > bytes = ArrayOf<Byte>::Alloc(Vector2Data, sizeof(Vector2Data)/sizeof(Vector2Data[0]));
    sig->Update(bytes);
    Logger::D("SignatureTest", "[TODO wanli] MD5withRSA==========================4");

    Boolean isVerified = FALSE;
    AutoPtr<ArrayOf<Byte> > bytes2 = ArrayOf<Byte>::Alloc(MD5withRSA_Vector2Signature
            , sizeof(MD5withRSA_Vector2Signature)/sizeof(MD5withRSA_Vector2Signature[0]));
    Logger::D("SignatureTest", "[TODO wanli] MD5withRSA==========================5");
    sig->Verify(bytes2, &isVerified);
    assert("Signature must match expected signature" && isVerified);
    return NOERROR;
}

} // namespace SecurityDemo
} // namespace DevSamples
} // namespace Elastos
