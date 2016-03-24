//This file is autogenerated for
//    GamepadList.java
//put this file at the end of the include list
//so the type definition used in this file will be found
#ifndef ELASTOS_GAMEPADLIST_CALLBACK_DEC_HH
#define ELASTOS_GAMEPADLIST_CALLBACK_DEC_HH


#ifdef __cplusplus
extern "C"
{
#endif
    extern void Elastos_GamepadList_nativeSetGamepadData(IInterface* caller,Int64 webGamepadsPtr,Int32 index,Boolean mapping,Boolean connected,const String& devicename,Int64 timestamp,ArrayOf<Float>* axes,ArrayOf<Float>* buttons);
    extern void Elastos_GamepadList_InitCallback(Handle32 cb);
#ifdef __cplusplus
}
#endif


namespace Elastos {
namespace Droid {
namespace Webkit {
namespace Webview {
namespace Chromium {
namespace Content {
namespace Browser {
namespace Input {

struct ElaGamepadListCallback
{
    void (*elastos_GamepadList_updateGamepadData)(Int64 webGamepadsPtr);
    void (*elastos_GamepadList_notifyForGamepadsAccess)(Boolean isAccessPaused);
};

void* GamepadList::ElaGamepadListCallback_Init()
{
    static ElaGamepadListCallback sElaGamepadListCallback;

    sElaGamepadListCallback.elastos_GamepadList_updateGamepadData = &GamepadList::UpdateGamepadData;
    sElaGamepadListCallback.elastos_GamepadList_notifyForGamepadsAccess = &GamepadList::NotifyForGamepadsAccess;

    Elastos_GamepadList_InitCallback((Handle32)&sElaGamepadListCallback);
    return &sElaGamepadListCallback;
}

static void* sPElaGamepadListCallback = GamepadList::ElaGamepadListCallback_Init();

} // namespace Input
} // namespace Browser
} // namespace Content
} // namespace Chromium
} // namespace Webview
} // namespace Webkit
} // namespace Droid
} // namespace Elastos

#endif //ELASTOS_GAMEPADLIST_CALLBACK_DEC_HH