
***
> ## 一．搭建Elastos开发环境

   首先，热烈欢迎您加入Elastos系统开发，与我们一道学习、研究和研发一款稳定的智能移动终端操作系统。

   接下来我将向你介绍如何下载源码、搭建开发环境，以及一些推荐了解的技术资料。开发环境推荐使用 ubuntu 12.04（也支持ubuntu 14.04），编辑器推荐 Subline Text 3。

> ### 1.下载源码

   目前，支持在GitHub上下载Elastos代码。下载方式（目前该源码版本为elastos5）：
   ```
   git clone https://github.com/elastos/Elastos.OS
   ```

> ### 2.安装工具链

1)安装依赖库 

请根据不同的操作系统版本选择相应的命令下载安装链：

Ubuntu 14.04:
```
$ sudo apt-get install bison g++-multilib git gperf libxml2-utils make zlib1g-dev:i386 zip
```

Ubuntu 12.04:
```
$ sudo apt-get install git gnupg flex bison gperf build-essential zip curl libc6-dev libncurses5-dev:i386 x11proto-core-dev libx11-dev:i386 libreadline6-dev:i386 libgl1-mesa-glx:i386 libgl1-mesa-dev g++-multilib mingw32 tofrodos python-markdown libxml2-utils xsltproc zlib1g-dev:i386
$ sudo ln -s /usr/lib/i386-linux-gnu/mesa/libGL.so.1 /usr/lib/i386-linux-gnu/libGL.so
```

2)安装 JDK 6：
```
$ sudo apt-get update
$ sudo apt-get install openjdk-6-jdk
```

更新环境变量:
```
$ sudo update-alternatives --config java
$ sudo update-alternatives --config javac
```

3)安装 android device： 

创建空白文档 70-android.rules，使用编辑器在其中输入如下内容：
```
SUBSYSTEM=="usb", ATTRS{idVendor}=="18d1", ATTRS{idProduct}=="0003",MODE="0666"
```

或下载 70-android.rules：http://pan.baidu.com/s/1pJDlPQb，提取密码：bd27

创建或下载完毕之后，执行如下命令：
```
$ sudo cp 70-android.rules /etc/udev/rules.d/
$ adb kill-server
$ adb start-server
$ adb devices
```

应该能够看到类似如下的输出：
```
20080411 device
```

> ### 3.编译

1)设置编译环境  

Elastos 源码下载完毕之后，打开 terminal 进入 Elastos5/Setup 目录，运行如下命令设置 arm 平台编译环境：
```
source SetEnv.sh arm_android
```

设置编译环境之后，你就可以使用相关编译命令进行编译了。

2)普通编译：
```
emake （编译）
emake clean （清除当前目录下的编译）
emake rebuild（重新编译，相当于emake clean，然后再emake）
emake clobber（清除 target 目录）
```

3)并行编译：(速度快，推荐)
```
para-emake arm_android
```

4)拷贝编译结果到设备上
```
eldrop（拷贝 Elastos 相关库）
eldrop java（拷贝 android 兼容相关库）
eldrop epk （拷贝 epk）
```

5)重启设备，就能体验Elastos系统了。

6)其他命令
```
pd @（从当前目录跳转到target目录）
pd（从target目录返回到之前目录）
```

7)CAR 编译工具ToolChains（只有更新CAR编译器时才需要进行此操作）
 
打开 terminal 进入 Elastos5/Setup 目录，运行如下命令设置 arm 平台编译环境：
```
source SetEnv.sh gcc_devtools
```

然后进入 Elastos5/Sources/ToolChains 目录，执行rls进入release环境，然后执行emake编译该目录，编译完成之后，执行pd @跳转到 target 目录，执行 cp lube PathToElastos5/Build/Tools/拷贝 CAR 编译工具 lube 到 Build/Tools 目录下。然后进入 Elastos5/Sources 目录重新编译 Elastos 源码。

> ### 4.运行

1)运行Elastos控制台程序

进入Elastos5/Sources/Elastos/LibCore/tests/Quintet目录，执行 emake 编译，然后执行 pd @跳转到 target 目录，执行 ls 查看是否生成了 testQuintet 可执行文件；若是，执行elcopy testQuintet 命令将生成的可执行文件拷贝到设备中（将被拷贝到设备的/data/data/com.elastos.runtime/elastos目录下）。
然后，执行adb shell进入adb shell 环境下，执行：cd data/data/com.elastos.runtime/elastos 命令进入该目录，然后执行 ls命令查看是否成功拷贝了 testQuintet 文件。输入命令 ./testQuintet 执行程序，应该能看到该程序的输出。

2)运行Elastos App

进入Elastos5/Sources/Elastos/Frameworks/Droid/DevSamples/ImageViewDemo 目录，执行emake编译，然后执行 pd @ 跳转到 target 目录，执行 ls 查看是否生成了 ImageViewDemo.epk 文件，然后执行 elcopy ImageViewDemo.epk /data/app 拷贝目录到设备中（将被拷贝到设备的/data/app目录下）。
然后，重启设备，在系统应用程序界面上就能看到该 app，双击即可运行。

3)运行Android App

Elastos 系统兼容Android app，将现有的apk文件，通过执行 elcopy XXX.apk /data/app 拷贝目录到设备中（将被拷贝到设备的/data/app目录下）。然后，重启设备，在系统应用程序界面上就能看到该 app，双击即可运行。

***
> ## 二．Android编译(以CM12为例)

首先是安卓源码的下载，目前支持在GitLab上下载。

下载方式：
```
git clone git@gitlab.com:elastos/CM12_0-Android501.git
```

接下简述Android的代码编译：打开terminal进入CM12_0-Android501/目录下，先切换到对应的Elastos的分支，然后运行命令设置编译环境， 并进行代码的编译。具体如下：
```
切换分支：
git checkout CM12_0-Android501_ForJava

设置编译环境：
source build/envsetup.sh

编译代码：
brunch victara
```

***
> ## 三．MotoX原厂至Elastos img的烧写流程

* **备注：**
  * 如果手机不是初次刷机，在此之前已经做过1~5操作，那么以后再烧写elastos image的操作步骤从6开始即可。
  * 在此使用的手机型号为MOTO XT1085手机32G。

> ### 1.开启开发者模式

  进入"设置->关于手机"，连续点击版本号，出现"只需4步操作即可进入开发者模式"对话框，再点击直至出现"您已处于开发者模式"对话框。

> ### 2.开启OEM解锁开关，解锁OEM

1)进入"设置í开发者选项"，勾选"启用OEM解锁"和"USB调试"。

2)手机通过USB连接Ubuntu开发机。

3)进入Ubuntu Terminal，输入"adb reboot bootloader"，手机重启并直接进入fastboot模式；然后再输入"sudo fastboot oem get_unlock_data"获取解锁数据，如下文所示：
```
(bootloader) 3A35430736922305#54413039303033
(bootloader) 34384600585431303835000000#90E1
(bootloader) EE454107ABEEFC7AB5C76F3EC212C21
(bootloader) 80978#96A1AC0F0B000000000000000
(bootloader) 0000000
```

解锁数据需去除"(bootloader)"前缀，合并成一行：
```
3A35430736922305#5441303930303334384600585431303835000000#90E1EE454107ABEEFC7AB5C76F3EC212C2180978#96A1AC0F0B0000000000000000000000
```

4)进入如下MOTO官方OEM解锁网页（需注册MOTO账号）：
```
https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-b
```
登录后输入解锁数据，验证解锁信息；然后选择"I Agree"单选框，点击"Request Unlock Key"按钮。稍后在你注册账号的邮箱中会收到解锁码。

5)再次进入Ubuntu Terminal，输入"sudo fastboot oem unlock ********"（*号为邮箱中收到的解锁码），解锁完毕。

> ### 3.烧写分区表gpt.bin 

  进入Ubuntu Terminal，输入"sudo fastboot flash partition gpt.bin"。

> ### 4.使用RSD Lite恢复MOTO X出厂系统

1)在Windows开发机上分别安装RSDLite6.2.4.msi和驱动MotorolaDeviceManager_2.5.4.exe。

2)解压VICTARA_RETCN_XT1085_5.0.2_LXE22.92-18_cid11_CFC.xml.zip至本地磁盘。

3)手机进入fastboot模式后通过USB连接Windows开发机。

4)开启RSD Lite，点击"Filename"右侧的"…"按键，选择本地磁盘上 VICTARA_RETCN_XT1085_5.0.2_LXE22.92-18_cid11_CFC.xml目录下的文件servicefile.xml，点击"start"按钮开始恢复出厂系统。

5)恢复出厂系统后，手机需重新开启开发者模式。

> ### 5.烧写 Recovery image

1)打开开发者模式的手机通过USB连接Ubuntu开发机。

2)进入Ubuntu Terminal，输入"adb reboot fastboot"，让手机进入bootloader模式，再输入"sudo fastboot flash recovery twrp-2.8.7.1-victara.img"，烧写Recovery image。

> ### 6.使用 Recovery烧写Elastos image

1)手机通过USB连接Ubuntu开发机。

2)进入Ubuntu Terminal， 输入"adb reboot recovery"，让手机进入Recovery模式。

3)把cm-12-20170808-UNOFFICIAL-victara.zip(Android代码编译出来的安装包)复制到手机Inernal Storage分区的Images目录。

4)在Recovery模式下，点击"install"按键，进入/sdcard/Images目录，选择cm-12-20170808-UNOFFICIAL-victara.zip，滑动"Swipe to Confirm Flash"滑块完成烧写Elastos image。

> ### 7.安装Elastos并启动运行设备

1)请先删除/system/app/ 以及 /system/priv-app/目录下的原生app

2)在Elastos运行环境下，通过命令安装Elastos链接库及app
```
eldrop && eldrop java && eldrop epk
```

3)重新启动设备，系统正常运行。

***
> ## 四．刷机常见问题集锦

1.完成烧写Elastos image后，必须先删除/system/app/ 以及 /system/priv-app/目录下的原生app，然后才开始链接elastos链接库以及拷贝epk。

2.刷完机后，elastos链接库以及epk已安装，但是系统一直起不来。

  原因可能是，eldrop未成功，重新eldrop。

3.有一个问题手机，刷完image后，重启会再次进入recovery界面。

  解决办法：刷完image后，进入Home->Reboot里面，找到Bootloader，直接从normal进入，达到重启系统的目的。然后删除/system/app/ 以及 /system/priv-app/目录下的原生app，然后才开始链接elastos链接库以及拷贝epk，adb reboot（重启后），再次进入recovery界面，进入Reboot里面，找到Bootloader，直接从normal进入。
