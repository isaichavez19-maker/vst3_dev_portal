  >/ [VST Home](../) / [Change History](./Index.md)
>
># Version 3.7.12 (2024/07/23)

## Version 3.7.12 (2024/07/23)

- Interface changes:
  - New Flags/Enums:
    - New predefined speaker arrangements:
      - **k70_2_TF** = 7.0.2 Top Front => L R C Ls Rs Sl Sr Tfl Tfr (~ITU 2+7+0.0).
      - **k71_2_TF** = 7.1.2 Top Front => L R C Lfe Ls Rs Sl Sr Tfl Tfr (~ITU 2+7+0.1).

- [VSTGUI](../What+is+the+VST+3+SDK/VSTGUI.md) update [4.14.0](https://github.com/steinbergmedia/vstgui/releases/tag/vstgui4_14_0)

- Documentation
  - New tutorial: [AudioUnit Tutorial - How to add AUv2 support to your VST 3 plug-in](../Tutorials/Audio+Unit.md).

- cmake
  - Add changes to support the [Apple AudioUnit SDK](https://github.com/apple/AudioUnitSDK) for **AU Wrapper**.

- Tools:

- [Plug-in Wrappers](../What+is+the+VST+3+SDK/Wrappers/Index.md):
  - **AAX** Wrapper: rename project aaxwrapper to aax_wrapper.
  - Audio Unit:
    - **AU/AUv3 Wrappers**:
      - Add support for the old CoreAudio and new official AudioUnitSDK (version 1.1.0).
    - **AU Wrapper**:
      - Add support of MIDI2 (higher-resolution for velocity and CC) using a helper for decoding UMP message (*public.sdk/source/vst/utility/ump.h*).
      - Add support of MIDI Learn interface [Vst::IMidiLearn](../Technical+Documentation/Change+History/3.6.12/IMidiLearn.md).
      - Add cache program list infos so that the edit controller is not called in the process thread.
      - Add MIDI mapping cache instead of calling the IMidiMapping interface in the audio process thread.
      - Cleanup *public.sdk/source/vst/auwrapper/auwrapper.mm/auwrapper.h*.
      - Fix thread issue for program change info update.
      - Fix Reference Counting Issue in *VST3DynLibrary* class.
      - Fix hanging notes.
    - **AUv3 Wrapper**:
      - Fix touch/gesture (begin/end edit).

- [Examples](../What+is+the+VST+3+SDK/Plug-in+Examples.md):
  - README.md files added for each examples.
  - Rename project names for better readability.
  - Temporary disable dataexchange example for linux due to missing linux implementation.
  - Update **Hostchecker** plug-in:
    - with new host check: call of getLatency after setActive and before setProcessing or process.
    - new parameters for Randomize + LowLatency + DryWet with [IParameterFunctionName](../Technical+Documentation/Change+History/3.7.0/IParameterFunctionName.md) support.

- Helpers classes:
  - *hosting/test/connectionproxytest.cpp*: Avoid potential hang in connectionproxytest ([PR#66](https://github.com/steinbergmedia/vst3_public_sdk/pull/66)).
  - *hosting/module_mac.mm*: fix warning (*-Wnullable-to-nonnull-conversion*) ([PR#67](https://github.com/steinbergmedia/vst3_public_sdk/pull/67)).
  - *hosting/module_win32.cpp*: Add better failure report when loading library on Windows ([PR#68](https://github.com/steinbergmedia/vst3_public_sdk/pull/68)).
  - Remove support for VSTGUI version 4.1 or older.
  - *common/pluginview.cpp*: remove virtual function called from destructor ([Issue#79](https://github.com/steinbergmedia/vst3_public_sdk/issues/7)).
  - Refactor *public.sdk/source/vst/utility/stringconvert.cpp* and extract a common base file: *public.sdk/source/common/commonstringconvert.cpp*.

- [VST3PluginTestHost](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md) v3.7:
  - New features:
    - [File => Export Audio...](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md#menu-description)
    - [File => Export Audio for current loaded MIDI...](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md#menu-description)
    - [Transport => Toggle time format between Time and Bars](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md#transport-1)
    - [Transport => Change the song position](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md#transport-1)
    - [Transport => Change tempo and signature](../What+is+the+VST+3+SDK/Plug-in+Test+Host.md#transport-1)
  