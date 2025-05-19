  >/ [VST Home](../) / [Change History](./Index.md)
>
># Version 3.7.14 (2025/??/??)

## Version 3.7.14 (2025/??/??)

- Interface changes:
  - 

- [VSTGUI](../What+is+the+VST+3+SDK/VSTGUI.md) update [4.14.2](https://github.com/steinbergmedia/vstgui/releases/tag/vstgui4_14_2)

- Documentation
  - 

- cmake
  - Fix createlink does not work on macOS 15.4.

- [Plug-in Wrappers](../What+is+the+VST+3+SDK/Wrappers/Index.md):
  - Audio Unit:
    - **AU/AUv3 Wrappers**:
    

- [Examples](../What+is+the+VST+3+SDK/Plug-in+Examples.md):
  - Fix mda plug-ins: mda Synthesizers should convert % parameter strings using 0 to 100, not 0 to 1 ([Issue#135](https://github.com/steinbergmedia/vst3sdk/issues/135)).
  - Fix mda plug-in: mdaPianoController.cpp incorrectly implements 4 presets instead of 7 ([Issue#133](https://github.com/steinbergmedia/vst3sdk/issues/133)).

- Helpers classes:
  - Fix missing implementation of FUID::generate() for Windows on Arm ([Issue#20](https://github.com/steinbergmedia/vst3_pluginterfaces/issues/20)).

- [VST 3 Project Generator](../What+is+the+VST+3+SDK/Project+Generator.md) v2025.02:
  - 

- [VST3PluginTestHost](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md) v3.??:
  - Fix support of parameters with UTF16 characters (not only ASCII).
