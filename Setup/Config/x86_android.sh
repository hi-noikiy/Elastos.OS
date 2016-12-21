export XDK_TARGET_PLATFORM=android
export XDK_TARGET_CPU=x86
export XDK_COMPILER=gnu
export XDK_COMPILER_VERSION=_gcc4
export XDK_TARGET_FORMAT=elf

export CROSS_COMPILE=x86-linux-androideabi-
export XDK_COMPILER_PATH=$XDK_BUILD_PATH/Compilers/x86_android
export EMULATOR_PATH=$XDK_BUILD_PATH/Emulator/android_sdk

export PATH=$XDK_COMPILER_PATH/bin:$EMULATOR_PATH/tools:$EMULATOR_PATH/platform-tools:$PATH:
