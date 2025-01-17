  >/ [VST Home](../) / [Change History](./Index.md)
>
># Version 3.7.13 (2025/02/??)

## Version 3.7.13 (2025/02/??)

- Interface changes:
  - Fix -Wundef warnings ([PR#17](https://github.com/steinbergmedia/vst3_public_sdk/pull/17)). 
  - Fix enabling/disabling warnings in public header files ([Issue#18](https://github.com/steinbergmedia/vst3_pluginterfaces/issues/18)).
  - Add the possibility to disable pragma warning on Windows (Visual Studio) with *SMTG_DISABLE_DEFAULT_DIAGNOSTICS*.

- [VSTGUI](../What+is+the+VST+3+SDK/VSTGUI.md) update [4.14.0](https://github.com/steinbergmedia/vstgui/releases/tag/vstgui4_14_0)

- Documentation
  - Update doc about *pluginterfaces/gui/iplugview.h*. See https://forums.steinberg.net/t/iplugview-contentscalesupport-and-macos/930318
- cmake
  
- [Plug-in Wrappers](../What+is+the+VST+3+SDK/Wrappers/Index.md):
   - Audio Unit:
    - **AU/AUv3 Wrappers**:
      - Fix crash running AGain AUv3 thru auval (*public.sdk/source/vst/auv3wrapper/Shared/AUv3Wrapper.mm*).
    - **AU Wrapper**:
       - Fix auwrapper MIDI output bugs ([PR#76](https://github.com/steinbergmedia/vst3_public_sdk/pull/76)) (*public.sdk/ssource/vst/auwrapper/auwrapper.h*).
       - Fix MIDI CC input in AU wrapper ([PR#74](https://github.com/steinbergmedia/vst3_public_sdk/pull/74/)). (*public.sdk/source/vst/auwrapper/auwrapper.mm*).

- [Examples](../What+is+the+VST+3+SDK/Plug-in+Examples.md):
   - Update **Hostchecker** plug-in:
    - Redesign the UI.
    - Add check of COM correct behavior when calling queryInterface ().
    - Add check for ProcessContext::systemtime of continuity.

- Helpers classes:
  - Fix in *openurl.cpp* openURLInDefaultApplication returns wrong result on macOS and Linux.
  - *vst3_public_sdk/source/vst/hosting/module_linux.cpp*: Linux: Plugin bundles with an extra dot in the name fail to load with the Hosting::Module class ([Issue#73](https://github.com/steinbergmedia/vst3_public_sdk/issues/73)).
  - Fix -Wundef warnings ([PR#75](https://github.com/steinbergmedia/vst3_public_sdk/pull/75)). 
  - Fix HostApplication::queryInterface -- mPlugInterfaceSupport Query Interface Should Use "_iid", not "iid"([Issue#131](https://github.com/steinbergmedia/vst3sdk/issues/131)).

- [VST3PluginTestHost](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md) v3.7:
  