  >/ [VST Home](../) / [Change History](./Index.md)
>
># Version 3.7.12 (2024/0?/?)

## Version 3.7.12 (2024/0?/??)

- Interface changes:
  -

- [VSTGUI](../What+is+the+VST+3+SDK/VSTGUI.md) update [4.13.3](https://github.com/steinbergmedia/vstgui/releases/tag/vstgui4_13_3)

- Documentation
  
- cmake
  
- Tools:

- [Plug-in Wrappers](../What+is+the+VST+3+SDK/Wrappers/Index.md):
  - **AAX** Wrapper: rename project aaxwrapper to aax_wrapper.
  - **AU Wrapper**: Fix Reference Counting Issue in VST3DynLibrary class.
  - **AUv3 Wrapper**: Fix touch/gesture (begin/end edit).

- [Examples](../What+is+the+VST+3+SDK/Plug-in+Examples.md):
  - Rename project names for better readability.
  - Temporary disable dataexchange example for linux due to missing linux implementation.
  - Update **Hostchecker** plug-in:
    - with new host check: call of getLatency after setActive and before setProcessing or process.
    - new parameters for Randomize + LowLatency + DryWet with [IParameterFunctionName](../Technical+Documentation/Change+History/3.7.0/IParameterFunctionName.md) support.

- Helpers classes:
  - *hosting/test/connectionproxytest.cpp*: Avoid potential hang in connectionproxytest ([PR#66](https://github.com/steinbergmedia/vst3_public_sdk/pull/66)).
  - *hosting/module_mac.mm*: fix warning [-Wnullable-to-nonnull-conversion] ([PR#67](https://github.com/steinbergmedia/vst3_public_sdk/pull/67)).
  - *hosting/module_win32.cpp*: Add better failure report when loading library on Windows ([PR#68](https://github.com/steinbergmedia/vst3_public_sdk/pull/68)).

- [Validator](../What+is+the+VST+3+SDK/Index.md#validator-command-line):
  
- [VST3PluginTestHost](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md) v3.7:
  
- [VST3 Project Generator](../What+is+the+VST+3+SDK/Project+Generator.md) v2024.01:
  