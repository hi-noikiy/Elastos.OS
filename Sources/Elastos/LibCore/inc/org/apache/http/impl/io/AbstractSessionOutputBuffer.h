//=========================================================================
// Copyright (C) 2012 The Elastos Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//=========================================================================

#ifndef __ORG_APACHE_HTTP_IMPL_IO_ABSTRACTSESSIONOUTPUTBUFFER_H__
#define __ORG_APACHE_HTTP_IMPL_IO_ABSTRACTSESSIONOUTPUTBUFFER_H__

#include "Elastos.CoreLibrary.Apache.h"
#include "Elastos.CoreLibrary.IO.h"
#include "org/apache/http/impl/io/HttpTransportMetricsImpl.h"

using Elastos::IO::IOutputStream;
using Org::Apache::Http::IO::ISessionOutputBuffer;
using Org::Apache::Http::IO::IHttpTransportMetrics;
using Org::Apache::Http::Params::IHttpParams;
using Org::Apache::Http::Utility::IByteArrayBuffer;
using Org::Apache::Http::Utility::ICharArrayBuffer;

namespace Org {
namespace Apache {
namespace Http {
namespace Impl {
namespace IO {

class AbstractSessionOutputBuffer
    : public Object
    , public ISessionOutputBuffer
{
public:
    AbstractSessionOutputBuffer();

    CAR_INTERFACE_DECL()

    CARAPI Flush();

    CARAPI Write(
        /* [in] */ ArrayOf<Byte>* b,
        /* [in] */ Int32 off,
        /* [in] */ Int32 len);

    CARAPI Write(
        /* [in] */ ArrayOf<Byte>* b);

    CARAPI Write(
        /* [in] */ Int32 b);

    CARAPI WriteLine(
        /* [in] */ const String& s);

    CARAPI WriteLine(
        /* [in] */ ICharArrayBuffer* buffer);

    CARAPI GetMetrics(
        /* [out] */ IHttpTransportMetrics** metrics);

protected:
    CARAPI Init(
        /* [in] */ IOutputStream* outstream,
        /* [in] */ Int32 buffersize,
        /* [in] */ IHttpParams* params);

    CARAPI FlushBuffer();

private:
    static const AutoPtr< ArrayOf<Byte> > CRLF;

    static const Int32 MAX_CHUNK = 256;

    AutoPtr<IOutputStream> mOutstream;
    AutoPtr<IByteArrayBuffer> mBuffer;
    String mCharset;
    Boolean mAscii;
    AutoPtr<HttpTransportMetricsImpl> mMetrics;
};

} // namespace IO
} // namespace Impl
} // namespace Http
} // namespace Apache
} // namespace Org

#endif // __ORG_APACHE_HTTP_IMPL_IO_ABSTRACTSESSIONOutputBUFFER_H__
