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

#include "elastos/droid/teleservice/services/telephony/CTtyManagerBroadcastReceiver.h"
#include "elastos/droid/teleservice/services/telephony/CPstnIncomingCallNotifierBroadcastReceiver.h"
#include "elastos/droid/teleservice/services/telephony/CTelecomAccountRegistryBroadcastReceiver.h"

namespace Elastos {
namespace Droid {
namespace TeleService {
namespace Services {
namespace Telephony {

CAR_OBJECT_IMPL(CTtyManagerBroadcastReceiver)
CAR_OBJECT_IMPL(CPstnIncomingCallNotifierBroadcastReceiver)
CAR_OBJECT_IMPL(CTelecomAccountRegistryBroadcastReceiver)

} // namespace Telephony
} // namespace Services
} // namespace TeleService
} // namespace Droid
} // namespace Elastos
