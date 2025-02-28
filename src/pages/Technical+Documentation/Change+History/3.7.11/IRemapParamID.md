>/ [VST Home](../../../) / [Technical Documentation](../../Index.md)
>
># \[3.7.11\] Remap Parameter ID

**On this page:**

[[_TOC_]]

**Related pages:**

- [Moduleinfo](../../../Technical+Documentation/VST+Module+Architecture/ModuleInfo-JSON.md)
- [Compatibility with VST 2.x or VST 1](../../../FAQ/Compatibility+with+VST+2.x+or+VST+1.md)

---

## Introduction

When a VST 3 plug-in intends to replace another one, whether it's an older version or a VST 2 version, it may be necessary to inform the host about parameter remapping. The **IRemapParamID** new plug-in interface facilitates such remapping.

There is two main use cases when a plug-in requires such remapping:
- When a VST 3 plug-in replaces another plug-in (whether VST 2 or a previously released VST 3 version) with a different UID. In this scenario, this new VST 3 plug-in should utilize the [Moduleinfo](../../../Technical+Documentation/VST+Module+Architecture/ModuleInfo-JSON.md) to indicate that it replaces another plug-in. Certain parameters from the older plug-in may be remapped to dedicated parameters of the new plug-in to enable the host resynchronize any references to older parameters (such as in automation or remote control). 
For example, VST 2 parameters are identified using indices, while VST 3 parameters utilize ParamIDs. With this new interface, hosts can remap the older indices to the new associated ParamIDs if there are not the same.

- When a VST 3 plug-in is updated to a new version wherein some parameters have changed their ParamIDs. Upon loading a project, the plug-in detects that the project was created with an older version and notifies the host (**kParamIDMappingChanged**) that the **IRemapParamID** interface must be used for resynchronize certain parameters (if the host already has references to plug-in parameters, such as in automation).

## IRemapParamID

The Plug-in has to implement this interface **IRemapParamID** in its *EditController*. The retrieved paramID should match the one it replaces, maintaining the same behavior during automation playback.

- \[plug imp\]
- \[released: 3.7.11\]

## RestartFlags: kParamIDMappingChanged

In the second use case defined above, upon loading its state, the plug-in informs the host of parameter ID changes using the **kParamIDMappingChanged** flag within the *IComponentHandler::restartComponent* function. This notification should be triggered by the *EditController* whithin the **setComponentState** or **setState** methods (during project loading). Subsequently, the host can remap any utilized parameters, such as automation, by utilizing the **IRemapParamID** interface.

- \[plug imp\]
- \[released: 3.7.11\]

## Example

**In controller.h**:

``` c++
//------------------------------------------------------------------------
class TestRemapParamIDController : public EditController, public IRemapParamID
{
public:
    //...
    //--- from IRemapParamID ---------------------------------------------
    tresult PLUGIN_API getCompatibleParamID (const TUID pluginToReplaceUID /*in*/,
                                         Vst::ParamID oldParamID /*in*/,
                                         Vst::ParamID& newParamID /*out*/) override;

    //--- from EditController --------------------------------------------
	tresult PLUGIN_API setComponentState (IBStream* state) override;

    //---Interface---------
    DEFINE_INTERFACES
    	DEF_INTERFACE (IRemapParamID)
    END_DEFINE_INTERFACES (EditController)
    DELEGATE_REFCOUNT (EditController)
    //... 
};
``` 

**In controller.cpp**:

``` c++
//------------------------------------------------------------------------
tresult PLUGIN_API TestRemapParamIDController::getCompatibleParamID (const TUID pluginToReplaceUID,
                                                                     Vst::ParamID oldParamID,
                                                                     Vst::ParamID& newParamID)
{
	//--- We want to replace the AGain plug-in-------
	//--- check if the host is asking for remapping parameter of the AGain plug-in
	static const FUID AGainProcessorUID (0x84E8DE5F, 0x92554F53, 0x96FAE413, 0x3C935A18);
	FUID uidToCheck (FUID::fromTUID (pluginToReplaceUID));
	if (AGainProcessorUID != uidToCheck)
		return kResultFalse;

	//--- host wants to remap from AGain------------
	newParamID = -1;
	switch (oldParamID)
	{
		//--- map the kGainId (0) to our param kMyGainParamTag
		case 0:
		{
			newParamID = kMyGainParamTag;
			break;
		}
	}
	//--- return kResultTrue if the mapping happens------------
	return (newParamID == -1) ? kResultFalse : kResultTrue;
}

//------------------------------------------------------------------------
tresult PLUGIN_API TestRemapParamIDController::setComponentState (IBStream* state)
{
	//...
    IBStreamer streamer (state, kLittleEndian);

    // Read the state

    bool remapNeeded = false;
    // here if we decode that the state was from an older plug-in
    //...

    // then restartComponent
    if (remapNeeded)
        componentHandler->restartComponent (kParamIDMappingChanged);

    return kResultOk;
}

```
