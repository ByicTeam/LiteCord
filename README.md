
<div align="center">
 <br>LiteCord is a client makes your Discord experience better without using a lot of resources.
</div>
<img title="Status of builds alt="Builds" src="https://github.com/ByicTeam/LiteCord/actions/workflows/stable.yml/badge.svg">

# Features

- **Standalone client** 

   LiteCord is an independent client that functions without relying on the original Discord client in any way.

- **Various mods built-in**
 
   Enjoy [Vencord](https://github.com/Vendicated/Vencord), [Shelter](https://github.com/uwu/shelter) and their many features, or have a more vanilla experience, it's your choice!

- **Themes**

   LiteCord has native support for app theming, allowing you to easily import and manage BetterDiscord themes for the entire application.

- **Made for Privacy™**

   With LiteCord, you can rest assured that all of Discord's trackers are blocked without the need for any client modifications. Your safety and security are our top priority.

- **Supports Rich Presence**

   LiteCord is unique in its ability to support rich presence (game activity) without the need for additional setup, thanks to [arRPC](https://arrpc.openasar.dev).. Other clients may not offer this feature.
   
- **Mobile support**

   LiteCord has mobile support for Linux-based phones like the PinpPhone, but it is currently experimental. Although it is not perfect, we are working on improving it gradually.

- **Much more stable**

   LiteCord uses a more recent version of Electron compared to the standard Discord application. This can result in a more dependable and protected experience, as well as slightly improved performance.


- **Cross-platform support!**

   ArmCord was first developed to cater to ARM64 Linux devices, as Discord was not compatible with them. However, we later expanded and made the platform available on all devices supported by [Electron supports](https://github.com/electron/electron#platform-support)!
  
# How to run/install it?

## Packaging status
[![Packaging status](https://repology.org/badge/vertical-allrepos/armcord.svg)](https://repology.org/project/armcord/versions)

### Windows
<a href="https://github.com/ByicTeam/LiteCord/releases">
   <img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="Download ArmCord" />
</a>

 [pre-built installers](https://github.com/ByicTeam/LiteCord/releases).

### Flatpak
<a href='https://github.com/ByicTeam/LiteCord/releases'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.svg'/></a>

### Debian, Ubuntu and Raspbian repository
- Soon
  
### Snap package
- Soon
  
### Pre-built binaries:
 Check the **releases tab** for precompiled packages for Linux, Windows, and Mac OS. Alternatively,  
 <a href="https://github.com/ByicTeam/LiteCord/releases"><img alt="Download LiteCord" src="https://a.fsdn.com/con/app/sf-download-button" width=276 height=48 srcset="https://a.fsdn.com/con/app/sf-download-button?button_size=2x 2x"></a>
   
# FAQ
## Do you have a support Discord?

[![](https://dcbadge.vercel.app/api/server/TnhxcqynZ2)](https://discord.gg/TnhxcqynZ2)
## Will I get banned for using this?   
- You are breaking [Discord ToS](https://discord.com/terms#software-in-discord%E2%80%99s-services) by using ArmCord, but no one has been banned from using it or any of the client mods included.

## Can I use this on anything other than ARM?
- Yes! ArmCord should work normally under Windows, MacOS, and Linux as long as it has Electron support.  

## How can I access the settings?
- Either right-click on the tray icon and click `Open Settings` or open Discord settings and scroll down the sidebar until you see information about versions. Click on the ArmCord version and the settings window will pop out.

## How does this work?   
- We are using the official web app and wrapping it up in Electron. While you may think this is lame and done like thousands of times before, what makes us unique is that we actually strive for creating a customized experience. You can very easily load themes and mods with no installers/injectors. You can even make the client have transparency effects and follow the fluent design of Windows! At its core, it's just a simple web wrapper, however, we applied many patches to make this work well for you <3

## Why is macOS support lacking?
- Due to me not owning any macOS device, I can't easily debug/test or do anything related to it. Of course, VMs and Hackintosh machines exist but from my experience, these are unreliable or very time-consuming to set up and maintain. While ArmCord "works" on macOS you may encounter weird issues or inconsistencies with other apps in terms of how they behave (for example macOS lack of tray).

## Where can I translate this?
- Translations are done using our [Weblate page](https://hosted.weblate.org/projects/armcord/armcord/).

# Credits
- [OpenAsar](https://github.com/GooseMod/OpenAsar)
- [arRPC (for Rich Presence)](https://github.com/OpenAsar/arrpc)
- (pre v3.1.0) [GooseMod Extension](https://github.com/GooseMod/extension)
- (Pre v3.0.0) [custom-electron-titlebar](https://github.com/AlexTorresSk/custom-electron-titlebar)
- [electron-builder](https://electron.build)
  
Discord is trademark of Discord Inc. LiteCord is not affiliated with or endorsed by Discord Inc. 
