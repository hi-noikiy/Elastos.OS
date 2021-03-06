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

#ifndef __ELASTOS_DROID_GOOGLE_MMS_UTILITY_CDOWNLOADDRMHELPER_H__
#define __ELASTOS_DROID_GOOGLE_MMS_UTILITY_CDOWNLOADDRMHELPER_H__

#include "_Elastos_Droid_Google_Mms_Utility_CDownloadDrmHelper.h"
#include "elastos/core/Singleton.h"

using Elastos::Droid::Content::IContext;

namespace Elastos {
namespace Droid {
namespace Google {
namespace Mms {
namespace Utility {

CarClass(CDownloadDrmHelper)
    , public Singleton
    , public IDownloadDrmHelper
{
public:
    CAR_INTERFACE_DECL()
    CAR_SINGLETON_DECL()

    CARAPI IsDrmMimeType(
        /* [in] */ IContext* context,
        /* [in] */ const String& mimetype,
        /* [out] */ Boolean* result);

    CARAPI IsDrmConvertNeeded(
        /* [in] */ const String& mimetype,
        /* [out] */ Boolean* result);

    CARAPI ModifyDrmFwLockFileExtension(
        /* [in] */ const String& filename,
        /* [out] */ String* result);

    CARAPI GetOriginalMimeType(
        /* [in] */ IContext* context,
        /* [in] */ const String& path,
        /* [in] */ const String& containingMime,
        /* [out] */ String* result);
};

} // namespace Utility
} // namespace Mms
} // namespace Google
} // namespace Droid
} // namespace Elastos

#endif // __ELASTOS_DROID_GOOGLE_MMS_UTILITY_CDOWNLOADDRMHELPER_H__
