>/ [VST Home](../) / [What is the VST 3 SDK?](Index.md)
>
># VST 3 Plug-in Test Host

**On this page:**

[[_TOC_]]

**Related pages:**

- [VST 3 Plug-in Examples](Plug-in+Examples.md)

---

## Introduction

The SDK provides a test application called **VST3PluginTestHost** for Apple macOS X (x86_64/Apple M1) and Microsoft Windows (x64 and Arm64EC).

This application allows you to load a plug-in, simulates some inputs (Audio and Event) and acts like a small **VST 3** host application based on an **ASIO** driver.

Included in this application is a test module which allows you to check your plug-in in regard to the **VST 3** standard.

![what_if_15](../../resources/what_is_15.png)

Check the folder *"bin"* of the SDK!

## How to use it?

### Command Line

You could start **VST3PluginTestHost** with some options in the command line:

 - Speficy a folder where the app should scan **VST 3** Plug-ins:
    - --pluginfolder "Folder to scan for plug-ins"
 - Rendering *MIDI* files into audio files for the first loaded instrument (samplerate and blocksize (size of audio block in samples) are optionals; if not provided, the current settings of the ASIO is used):
    - --audioexport "MIDI Folder location" "Audio Output Folder" [samplerate] [blocksize]
    - for example: 
      - *VST3PluginTestHost.exe --audioexport "C:\Content\MIDI" "C:\Content\Audio Output" 48000 128*

### Menu Description

#### File

![what_if_39](../../resources/what_is_39.png)

- **File => Load Preset...**: Load a VST 3 Preset for the first loaded plug-in (first slot).
- **File => Save Preset...**: Save a VST 3 Preset for the first loaded plug-in.
---
- **File => Load MIDI File...**: Load a MIDI file which could be played by using the transport section, all loaded plug-ins will received the MIDI events.
---
- **File => Export Audio...**: this allows to choose a folder with MIDI files, loaded each of them and export the audio renderings of the first loaded plug-in.
- **File => Export Audio for current loaded MIDI...**: this allows to use the current loaded MIDI file for exporting the audio renderings of the first loaded plug-in.
---
- **File => Convert VST 3 Presets to VST 2 Presets**: this allows to convert **VST 3** Presets to compatible **VST 2** Presets (fxp or fxb).
- **File => Overwrite Plug-in Name in VST 3 Presets...**: this allows to rename the plug-in name in a set of **VST 3** Presets.
---
- **File => Rescan blocklisted VST 3 Plug-in**: this allows to force a rescan of plug-ins which were put in the blocklist.

#### Edit

![what_if_40](../../resources/what_is_40.png)

- **Edit => Key Commands...**: opens the key commands windows.
- **Edit => Global Preferences...**: opens the global preferences windows where you could change the ASIO driver, for example.
- **Edit => Plug-In Preferences...**: opens the plug-in preferences windows where you could change Inputs/Outputs routing, for example.

#### View

![what_if_41](../../resources/what_is_41.png)
- **View => Open Plug-in Information Window**: opens a window showing all registered component and controller **VST 3** plug-ins.
- **View => Open Plug-in Unit Tests Window**: opens a window where you can test your plug-in with a series of unit tests.
- **View => Open Preset Editor**: allows you to open, check and modify **VST 3** presets (adding meta attributes like in Instrument/- Style/Character)

#### Transport

![what_if_42](../../resources/what_is_42.png)

 - Typical Transport actions.

#### Help

![what_if_43](../../resources/what_is_43.png)

- Some useful links for developing VST 3 Plug-ins.

---

#### Dark Mode version

![what_if_16](../../resources/what_is_16.png)

 - Selectable in the **Edit => Global Preferences** Windows.

## VST Player Window

### Audio Input

In this section you can select the audio source of your plug-in for the *Main Input Audio Bus* and for the *Aux Input Audio Bus* ([Side-chain](../Technical+Documentation/Change+History/3.0.0/Multiple+Dynamic+IO.html#what-is-a-side-chain): if available) between:

- A sine wave
- Noise
- Silence
- ASIO Input (first stereo)
- An Audio File (in this case use the browser (... button) to choose the file (wave, aiff))

![what_if_45](../../resources/what_is_45.png)

A Volume slider allows you to control the level of the source.

### Event Input

This section simulates note events sent to the plug-in.

![what_if_46](../../resources/what_is_46.png)

- A pattern could be defined and initialized with randomized, chromatic or manual events. (for Chromatic choose the start note in the pattern and select Chromatic in the pop-up menu).
- Active check box: enable/disable the playback of this pattern.
- You can choose different loop stepping for this pattern (1, 1/2, ...1/32)
- If you have already loaded a MIDI file, choose "No Pattern" to play this MIDI file.

### VST Rack

This section allows you to load serialized multiple plug-ins. Each plug-in will be loaded in a slot.

![what_if_44](../../resources/what_is_44.png)

- To load a plug-in (Audio or Instrument) click on the associated pop-up menu and select one plug-in.
- To unload a plug-in, click on its associated X button on its slot.

For each loaded plug-in in a slot you can:

- Enable/disable the plug-in with the **On** button.
- Bypass/process the plug-in with the **Byp** button (if available as parameter).
- Enable/disable the [Side-chain](../Technical+Documentation/Change+History/3.0.0/Multiple+Dynamic+IO.html#what-is-a-side-chain) bus with the **Aux** button (available only if the plug-in has input [Side-chain](../Technical+Documentation/Change+History/3.0.0/Multiple+Dynamic+IO.html#what-is-a-side-chain)).
- Open its editor with the **Edit** button. A second **Edit** button allows to open a second editor (useful for checking if the used GUI Framework of the plug-in allows this!).
- Save a Preset with the **Store** button.
- Load a Preset with the **Load** button.
- Open the information page of this plug-in with the **Info** button (see below).

### Info Window

- Information window of AGain plug-in showing the **Parameters** panel:

![what_if_17](../../resources/what_is_17.jpg)

- Information window of NoteExpressionSynth plug-in showing the **[Note Expression](../Technical+Documentation/Change+History/3.5.0/INoteExpressionController.md)** panel:

![what_if_18](../../resources/what_is_18.jpg)

- Information window of AGain plug-in showing the **Properties** panel:

![what_if_19](../../resources/what_is_19.jpg)

### Context Menu

Right click on the opened plug-in opens a context menu which allows to trigger some actions:

![what_if_20](../../resources/what_is_20.jpg)

- **Switch to Generic Editor**: open the generic editor instead of the one provided by the plug-in.
- **Export Presets Parameters as XML**: load automatically all available VST 3 Presets for this plug-in and create a readable XML file for each preset including the parameter states.

### Transport

In this section you can:

| • set the gain of the output audio<br> • toggle time format between Seconds and Bars and Beats<br> • set the gain of the output audio<br> • change the song position<br> • control the transport state (Loop/Start/Stop/Rewind)<br> • change the tempo and signature | ![what_if_21](../../resources/what_is_21.png) |
| :- | - |

## VST 3 Plug-ins Tests Window

![what_if_22](../../resources/what_is_22.jpg)

In this window you can select a specific test branch for a specific plug-in. You can navigate in the test tree (left part), then click on the button **Run Selected** to process only the selected tests.

There are 2 kinds of tests concerning the way the plug-in is instantiated:

- Global Instance: only one instance of the plug-in will be instantiated for all tests.
- Local Instances: for each test a new instance of the plug-in will be instantiated.

We define currently 2 sets of test:

- VST 3 Conformity
- Special Features

You can run all available tests with **Run All**. It is possible also to disable some tests with the check box in the left view.

Error reports will be displayed in the **Errors view**. In the **Messages View** some warnings (or some plug-in limitations), test results and progress are displayed.

In this version of this **Plug-in Test Host**, the tests are limited to the main **VST 3** features, in future version the test coverage will be extended.

## Preset Editor

![what_if_23](../../resources/what_is_23.jpg)

With this editor you can load and modify **VST 3** presets created with the **Store** button of the VST Rack by adding some meta-attributes.

