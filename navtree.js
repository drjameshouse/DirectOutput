var NAVTREE =
[
  [ "DirectOutput", "index.html", [
    [ "Installation and Configuration", "installation.html", [
      [ "Requirements", "installation.html#installation_requirements", null ],
      [ "Download", "installation.html#installation_download", null ],
      [ "Installation", "installation.html#installation_installation", [
        [ "Installation within hosting application directory structure", "installation.html#installation_installation_hostappdir", null ],
        [ "Installation in own directory (Recommended)", "installation.html#installation_installation_owndir", null ]
      ] ],
      [ "Unblock the DLLs", "installation.html#installation_unblockauc", null ],
      [ "B2S.Server Configuration", "installation.html#installation_b2sserverconfig", null ],
      [ "Visual Pinball core.vbs Adjustment", "installation.html#installation_visualpinballcorevbs", null ],
      [ "Configuration", "installation.html#installation_configuration", [
        [ "Using Auto configuration", "installation.html#installation_autoconfiguration", null ],
        [ "Using directoutputconfig.ini files", "installation.html#installation_ledcontrolini", null ],
        [ "Using configuration files", "installation.html#installation_configfiles", [
          [ "Table Configuration", "installation.html#installation_tableconfig", null ],
          [ "Global Configuration", "installation.html#installation_globalconfig", null ],
          [ "Cabinet Configuration", "installation.html#installation_cabinetconfig", null ]
        ] ]
      ] ]
    ] ],
    [ "VP Table configuration", "tableconfig.html", [
      [ "Introduction", "tableconfig.html#tableconfig_intro", null ],
      [ "VP solid state (SS) tables", "tableconfig.html#tableconfig_VPSS", [
        [ "Configure SS tables", "tableconfig.html#tableconfig_VPSSconfig", null ],
        [ "Extend SS tables", "tableconfig.html#tableconfig_VPSSextend", null ]
      ] ],
      [ "VP electro mechanical (EM) tables and original tables", "tableconfig.html#tableconfig_VPEM", [
        [ "Initialization", "tableconfig.html#tableconfig_VPEMinit", null ],
        [ "Termination", "tableconfig.html#tableconfig_VPEMexit", null ],
        [ "Score commands", "tableconfig.html#tableconfig_VPEMscore", null ],
        [ "Table element status updates", "tableconfig.html#tableconfig_VPEMtableelements", [
          [ "The basics", "tableconfig.html#tableconfig_VPEMtableelements_basics", null ],
          [ "The easy way", "tableconfig.html#tableconfig_VPEMtableelements_easy", null ]
        ] ]
      ] ],
      [ "Tables w/o B2S.Server Backglass", "tableconfig.html#tableconfig_nobackglass", null ]
    ] ],
    [ "Supported Hardware", "hardware.html", [
      [ "Introduction", "hardware.html#hardware_intro", null ],
      [ "LedWiz (GroovyGameGear)", "hardware.html#hardware_ledwiz", null ],
      [ "PacLed64 (Ultimarc)", "hardware.html#hardware_ultimarc_pacled64", null ],
      [ "PacDrive (Ultimarc)", "hardware.html#hardware_ultimarc_pacdrive", null ],
      [ "Art-Net / DMX", "hardware.html#hardware_artnet", null ],
      [ "WS2811 addressable LedStrip controller", "hardware.html#hardware_WS2811", null ],
      [ "FT245RL based controllers (e.g. SainSmart)", "hardware.html#hardware_FT245bitbang", null ]
    ] ],
    [ "Global Configuration", "globalconfig2.html", [
      [ "Introduction", "globalconfig2.html#globalconfig_introduction", null ],
      [ "Global config editor", "globalconfig2.html#globalconfig_editor", [
        [ "Ini Files tab", "globalconfig2.html#globalconfig_inifiles", null ],
        [ "Cabinet Config tab", "globalconfig2.html#globalconfig_cabinetconfig", null ],
        [ "Logging tab", "globalconfig2.html#globalconfig_logging", null ]
      ] ],
      [ "File format", "globalconfig2.html#globalconfig_fileformat", null ]
    ] ],
    [ "Cabinet Configuration", "cabinetconfig.html", [
      [ "Introduction", "cabinetconfig.html#cabinetconfig_introduction", null ],
      [ "Cabinet configuration file", "cabinetconfig.html#cabinetconfig_configfile", [
        [ "OutputControllers section", "cabinetconfig.html#cabinetconfig_outputcontrollers", null ],
        [ "Toys section", "cabinetconfig.html#cabinetconfig_toys", null ]
      ] ],
      [ "Example cabinet configuration", "cabinetconfig.html#cabinetconfig_example", null ]
    ] ],
    [ "Table configuration file", "tableconfigfile.html", [
      [ "Introduction", "tableconfigfile.html#tableconfigfile_introduction", null ],
      [ "Table config file", "tableconfigfile.html#tableconfigfile_configfilestructure", [
        [ "Table elements section", "tableconfigfile.html#tableconfigfile_configfilestructuretableelements", null ],
        [ "Assigned static effects section", "tableconfigfile.html#tableconfigfile_configfilestructurestaticeffects", null ],
        [ "Effects section", "tableconfigfile.html#tableconfigfile_configfilestructureeffects", null ]
      ] ]
    ] ],
    [ "ini files", "inifiles.html", [
      [ "Introduction", "inifiles.html#inifiles_introduction", null ],
      [ "How it works", "inifiles.html#inifiles_howitworks", null ],
      [ "File locations", "inifiles.html#inifiles_directories", null ],
      [ "LedControl file numbering", "inifiles.html#inifiles_filenumbering", null ],
      [ "Settings in DirectOutputConfig/LedControl ini files", "inifiles.html#inifiles_settings", null ],
      [ "Colors Section", "inifiles.html#inifiles_settingscolors", null ],
      [ "Config DOF Section", "inifiles.html#inifiles_settingsconfigouts", null ],
      [ "Trigger parameters", "inifiles.html#inifiles_triggerpara", null ],
      [ "General parameters", "inifiles.html#inifiles_generalpara", null ],
      [ "Matrix/area effect parameters", "inifiles.html#inifiles_matrix", [
        [ "General Matrix Paras", "inifiles.html#inifiles_matrixeffectpara", null ],
        [ "Shift Effect Paras", "inifiles.html#inifiles_shifteffectpara", null ],
        [ "Flicker Effect Paras", "inifiles.html#inifiles_flickereffectpara", null ],
        [ "Bitmap Effect Paras", "inifiles.html#inifiles_bitmapeffectpara", null ],
        [ "Bitmap Animation Paras", "inifiles.html#inifiles_bitmapanimationpara", null ]
      ] ],
      [ "Setting examples", "inifiles.html#inifiles_settingsexamples", null ],
      [ "LedControl File Testing Application", "inifiles.html#inifiles_testingapp", null ]
    ] ],
    [ "Architecture", "md_50__architecture.html", [
      [ "Object model", "md_50__architecture.html#architecture_objectmodel", [
        [ "Table", "md_50__architecture.html#architecture_table", null ],
        [ "Effects", "md_50__architecture.html#architecture_effects", null ],
        [ "Cabinet", "md_50__architecture.html#architecture_cabinet", [
          [ "Toys", "md_50__architecture.html#architecture_toys", null ],
          [ "Outputcontroller", "md_50__architecture.html#architecture_outputcontroller", null ]
        ] ]
      ] ],
      [ "Multithreading", "md_50__architecture.html#architecture_multithreading", null ]
    ] ],
    [ "B2S Server Plugin", "b2sserverplugin.html", null ],
    [ "Effects/FX", "fx.html", [
      [ "Introduction", "fx.html#fx_introduction", null ],
      [ "Stacking/chaining of effect effects", "fx.html#fx_stacking", null ],
      [ "Built in effects", "fx.html#fx_builtinfx", null ],
      [ "Custom effects", "fx.html#fx_customeffects", null ],
      [ "Implementation guidelines for effects", "fx.html#fx_implementationguideline", null ]
    ] ],
    [ "Built in Effects", "fx_builtin.html", [
      [ "AnalogAlphaMatrixBitmapAnimationEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect", [
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_properties", [
          [ "AnimationBehaviour", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_AnimationBehaviour", null ],
          [ "AnimationFrameCount", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_AnimationFrameCount", null ],
          [ "AnimationFrameDurationMs", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_AnimationFrameDurationMs", null ],
          [ "AnimationStepDirection", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_AnimationStepDirection", null ],
          [ "AnimationStepSize", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_AnimationStepSize", null ],
          [ "BitmapFilePattern", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_BitmapFilePattern", null ],
          [ "BitmapFrameNumber", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_BitmapFrameNumber", null ],
          [ "BitmapHeight", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_BitmapHeight", null ],
          [ "BitmapLeft", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_BitmapLeft", null ],
          [ "BitmapTop", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_BitmapTop", null ],
          [ "BitmapWidth", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_BitmapWidth", null ],
          [ "DataExtractMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_DataExtractMode", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_Height", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_Left", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_Name", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapAnimationEffect_Width", null ]
        ] ]
      ] ],
      [ "AnalogAlphaMatrixBitmapEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_properties", [
          [ "BitmapFilePattern", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_BitmapFilePattern", null ],
          [ "BitmapFrameNumber", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_BitmapFrameNumber", null ],
          [ "BitmapHeight", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_BitmapHeight", null ],
          [ "BitmapLeft", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_BitmapLeft", null ],
          [ "BitmapTop", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_BitmapTop", null ],
          [ "BitmapWidth", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_BitmapWidth", null ],
          [ "DataExtractMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_DataExtractMode", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_Height", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_Left", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_Name", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixBitmapEffect_Width", null ]
        ] ]
      ] ],
      [ "AnalogAlphaMatrixFlickerEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_properties", [
          [ "ActiveValue", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_ActiveValue", null ],
          [ "Density", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_Density", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_Height", null ],
          [ "InactiveValue", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_InactiveValue", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_Left", null ],
          [ "MaxFlickerDurationMs", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_MaxFlickerDurationMs", null ],
          [ "MinFlickerDurationMs", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_MinFlickerDurationMs", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_Name", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixFlickerEffect_Width", null ]
        ] ]
      ] ],
      [ "AnalogAlphaMatrixShiftEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect", [
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_properties", [
          [ "ActiveValue", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_ActiveValue", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_Height", null ],
          [ "InactiveValue", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_InactiveValue", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_Left", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_Name", null ],
          [ "ShiftAcceleration", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_ShiftAcceleration", null ],
          [ "ShiftDirection", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_ShiftDirection", null ],
          [ "ShiftSpeed", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_ShiftSpeed", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixShiftEffect_Width", null ]
        ] ]
      ] ],
      [ "AnalogAlphaMatrixValueEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_properties", [
          [ "ActiveValue", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_ActiveValue", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_Height", null ],
          [ "InactiveValue", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_InactiveValue", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_Left", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_Name", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_AnalogAlphaMatrixValueEffect_Width", null ]
        ] ]
      ] ],
      [ "AnalogToyValueEffect", "fx_builtin.html#use_DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_properties", [
          [ "ActiveValue", "fx_builtin.html#DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_ActiveValue", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_FadeMode", null ],
          [ "InactiveValue", "fx_builtin.html#DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_InactiveValue", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_LayerNr", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_Name", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_AnalogToyFX_AnalogToyValueEffect_ToyName", null ]
        ] ]
      ] ],
      [ "BlinkEffect", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_BlinkEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_BlinkEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_BlinkEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_BlinkEffect_properties", [
          [ "DurationActiveMs", "fx_builtin.html#DirectOutput_FX_TimmedFX_BlinkEffect_DurationActiveMs", null ],
          [ "DurationInactiveMs", "fx_builtin.html#DirectOutput_FX_TimmedFX_BlinkEffect_DurationInactiveMs", null ],
          [ "HighValue", "fx_builtin.html#DirectOutput_FX_TimmedFX_BlinkEffect_HighValue", null ],
          [ "LowValue", "fx_builtin.html#DirectOutput_FX_TimmedFX_BlinkEffect_LowValue", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_TimmedFX_BlinkEffect_Name", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_TimmedFX_BlinkEffect_TargetEffectName", null ],
          [ "UntriggerBehaviour", "fx_builtin.html#DirectOutput_FX_TimmedFX_BlinkEffect_UntriggerBehaviour", null ]
        ] ]
      ] ],
      [ "DelayEffect", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_DelayEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_DelayEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_DelayEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_DelayEffect_properties", [
          [ "DelayMs", "fx_builtin.html#DirectOutput_FX_TimmedFX_DelayEffect_DelayMs", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_TimmedFX_DelayEffect_Name", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_TimmedFX_DelayEffect_TargetEffectName", null ]
        ] ]
      ] ],
      [ "DurationEffect", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_DurationEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_DurationEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_DurationEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_DurationEffect_properties", [
          [ "DurationMs", "fx_builtin.html#DirectOutput_FX_TimmedFX_DurationEffect_DurationMs", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_TimmedFX_DurationEffect_Name", null ],
          [ "RetriggerBehaviour", "fx_builtin.html#DirectOutput_FX_TimmedFX_DurationEffect_RetriggerBehaviour", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_TimmedFX_DurationEffect_TargetEffectName", null ]
        ] ]
      ] ],
      [ "ExtendDurationEffect", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_ExtendDurationEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_ExtendDurationEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_ExtendDurationEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_ExtendDurationEffect_properties", [
          [ "DurationMs", "fx_builtin.html#DirectOutput_FX_TimmedFX_ExtendDurationEffect_DurationMs", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_TimmedFX_ExtendDurationEffect_Name", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_TimmedFX_ExtendDurationEffect_TargetEffectName", null ]
        ] ]
      ] ],
      [ "FadeEffect", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_FadeEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_FadeEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_FadeEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_FadeEffect_properties", [
          [ "FadeDownDuration", "fx_builtin.html#DirectOutput_FX_TimmedFX_FadeEffect_FadeDownDuration", null ],
          [ "FadeDurationMode", "fx_builtin.html#DirectOutput_FX_TimmedFX_FadeEffect_FadeDurationMode", null ],
          [ "FadeUpDuration", "fx_builtin.html#DirectOutput_FX_TimmedFX_FadeEffect_FadeUpDuration", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_TimmedFX_FadeEffect_Name", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_TimmedFX_FadeEffect_TargetEffectName", null ]
        ] ]
      ] ],
      [ "ListEffect", "fx_builtin.html#use_DirectOutput_FX_ListFX_ListEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_ListFX_ListEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_ListFX_ListEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_ListFX_ListEffect_properties", [
          [ "AssignedEffects", "fx_builtin.html#DirectOutput_FX_ListFX_ListEffect_AssignedEffects", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_ListFX_ListEffect_Name", null ]
        ] ]
      ] ],
      [ "MaxDurationEffect", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_MaxDurationEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_MaxDurationEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_MaxDurationEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_MaxDurationEffect_properties", [
          [ "MaxDurationMs", "fx_builtin.html#DirectOutput_FX_TimmedFX_MaxDurationEffect_MaxDurationMs", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_TimmedFX_MaxDurationEffect_Name", null ],
          [ "RetriggerBehaviour", "fx_builtin.html#DirectOutput_FX_TimmedFX_MaxDurationEffect_RetriggerBehaviour", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_TimmedFX_MaxDurationEffect_TargetEffectName", null ]
        ] ]
      ] ],
      [ "MinDurationEffect", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_MinDurationEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_MinDurationEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_MinDurationEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_TimmedFX_MinDurationEffect_properties", [
          [ "MinDurationMs", "fx_builtin.html#DirectOutput_FX_TimmedFX_MinDurationEffect_MinDurationMs", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_TimmedFX_MinDurationEffect_Name", null ],
          [ "RetriggerBehaviour", "fx_builtin.html#DirectOutput_FX_TimmedFX_MinDurationEffect_RetriggerBehaviour", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_TimmedFX_MinDurationEffect_TargetEffectName", null ]
        ] ]
      ] ],
      [ "NullEffect", "fx_builtin.html#use_DirectOutput_FX_NullFX_NullEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_NullFX_NullEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_NullFX_NullEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_NullFX_NullEffect_properties", [
          [ "Name", "fx_builtin.html#DirectOutput_FX_NullFX_NullEffect_Name", null ]
        ] ]
      ] ],
      [ "RGBAColorEffect", "fx_builtin.html#use_DirectOutput_FX_RGBAFX_RGBAColorEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_RGBAFX_RGBAColorEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_RGBAFX_RGBAColorEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_RGBAFX_RGBAColorEffect_properties", [
          [ "ActiveColor", "fx_builtin.html#DirectOutput_FX_RGBAFX_RGBAColorEffect_ActiveColor", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_RGBAFX_RGBAColorEffect_FadeMode", null ],
          [ "InactiveColor", "fx_builtin.html#DirectOutput_FX_RGBAFX_RGBAColorEffect_InactiveColor", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_RGBAFX_RGBAColorEffect_LayerNr", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_RGBAFX_RGBAColorEffect_Name", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_RGBAFX_RGBAColorEffect_ToyName", null ]
        ] ]
      ] ],
      [ "RGBAMatrixBitmapAnimationEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_properties", [
          [ "AnimationBehaviour", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_AnimationBehaviour", null ],
          [ "AnimationFrameCount", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_AnimationFrameCount", null ],
          [ "AnimationFrameDurationMs", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_AnimationFrameDurationMs", null ],
          [ "AnimationStepDirection", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_AnimationStepDirection", null ],
          [ "AnimationStepSize", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_AnimationStepSize", null ],
          [ "BitmapFilePattern", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_BitmapFilePattern", null ],
          [ "BitmapFrameNumber", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_BitmapFrameNumber", null ],
          [ "BitmapHeight", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_BitmapHeight", null ],
          [ "BitmapLeft", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_BitmapLeft", null ],
          [ "BitmapTop", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_BitmapTop", null ],
          [ "BitmapWidth", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_BitmapWidth", null ],
          [ "DataExtractMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_DataExtractMode", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_Height", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_Left", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_Name", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapAnimationEffect_Width", null ]
        ] ]
      ] ],
      [ "RGBAMatrixBitmapEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_properties", [
          [ "BitmapFilePattern", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_BitmapFilePattern", null ],
          [ "BitmapFrameNumber", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_BitmapFrameNumber", null ],
          [ "BitmapHeight", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_BitmapHeight", null ],
          [ "BitmapLeft", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_BitmapLeft", null ],
          [ "BitmapTop", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_BitmapTop", null ],
          [ "BitmapWidth", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_BitmapWidth", null ],
          [ "DataExtractMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_DataExtractMode", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_Height", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_Left", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_Name", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixBitmapEffect_Width", null ]
        ] ]
      ] ],
      [ "RGBAMatrixColorEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_properties", [
          [ "ActiveColor", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_ActiveColor", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_Height", null ],
          [ "InactiveColor", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_InactiveColor", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_Left", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_Name", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixColorEffect_Width", null ]
        ] ]
      ] ],
      [ "RGBAMatrixFlickerEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_properties", [
          [ "ActiveColor", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_ActiveColor", null ],
          [ "Density", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_Density", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_Height", null ],
          [ "InactiveColor", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_InactiveColor", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_Left", null ],
          [ "MaxFlickerDurationMs", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_MaxFlickerDurationMs", null ],
          [ "MinFlickerDurationMs", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_MinFlickerDurationMs", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_Name", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixFlickerEffect_Width", null ]
        ] ]
      ] ],
      [ "RGBAMatrixShiftEffect", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect", [
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_properties", [
          [ "ActiveColor", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_ActiveColor", null ],
          [ "FadeMode", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_FadeMode", null ],
          [ "Height", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_Height", null ],
          [ "InactiveColor", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_InactiveColor", null ],
          [ "LayerNr", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_LayerNr", null ],
          [ "Left", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_Left", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_Name", null ],
          [ "ShiftAcceleration", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_ShiftAcceleration", null ],
          [ "ShiftDirection", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_ShiftDirection", null ],
          [ "ShiftSpeed", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_ShiftSpeed", null ],
          [ "Top", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_Top", null ],
          [ "ToyName", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_ToyName", null ],
          [ "Width", "fx_builtin.html#DirectOutput_FX_MatrixFX_RGBAMatrixShiftEffect_Width", null ]
        ] ]
      ] ],
      [ "TableElementConditionEffect", "fx_builtin.html#use_DirectOutput_FX_ConditionFX_TableElementConditionEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_ConditionFX_TableElementConditionEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_ConditionFX_TableElementConditionEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_ConditionFX_TableElementConditionEffect_properties", [
          [ "Condition", "fx_builtin.html#DirectOutput_FX_ConditionFX_TableElementConditionEffect_Condition", null ],
          [ "Name", "fx_builtin.html#DirectOutput_FX_ConditionFX_TableElementConditionEffect_Name", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_ConditionFX_TableElementConditionEffect_TargetEffectName", null ]
        ] ]
      ] ],
      [ "ValueInvertEffect", "fx_builtin.html#use_DirectOutput_FX_ValueFX_ValueInvertEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_ValueFX_ValueInvertEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_ValueFX_ValueInvertEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_ValueFX_ValueInvertEffect_properties", [
          [ "Name", "fx_builtin.html#DirectOutput_FX_ValueFX_ValueInvertEffect_Name", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_ValueFX_ValueInvertEffect_TargetEffectName", null ]
        ] ]
      ] ],
      [ "ValueMapFullRangeEffect", "fx_builtin.html#use_DirectOutput_FX_ValueFX_ValueMapFullRangeEffect", [
        [ "Summary", "fx_builtin.html#use_DirectOutput_FX_ValueFX_ValueMapFullRangeEffect_summary", null ],
        [ "Sample XML", "fx_builtin.html#use_DirectOutput_FX_ValueFX_ValueMapFullRangeEffect_samplexml", null ],
        [ "Properties", "fx_builtin.html#use_DirectOutput_FX_ValueFX_ValueMapFullRangeEffect_properties", [
          [ "Name", "fx_builtin.html#DirectOutput_FX_ValueFX_ValueMapFullRangeEffect_Name", null ],
          [ "TargetEffectName", "fx_builtin.html#DirectOutput_FX_ValueFX_ValueMapFullRangeEffect_TargetEffectName", null ]
        ] ]
      ] ]
    ] ],
    [ "Toys", "toys.html", [
      [ "Introduction", "toys.html#toys_introduction", null ],
      [ "Builtin toys", "toys.html#toys_bultin", null ],
      [ "Implementation guidelines for custom toys", "toys.html#toys_implementationguideline", null ]
    ] ],
    [ "Built in Toys", "toy_builtin.html", [
      [ "AnalogAlphaToy", "toy_builtin.html#use_DirectOutput_Cab_Toys_Layer_AnalogAlphaToy", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Layer_AnalogAlphaToy_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Layer_AnalogAlphaToy_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Layer_AnalogAlphaToy_properties", [
          [ "FadingCurveName", "toy_builtin.html#DirectOutput_Cab_Toys_Layer_AnalogAlphaToy_FadingCurveName", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Layer_AnalogAlphaToy_Name", null ],
          [ "OutputName", "toy_builtin.html#DirectOutput_Cab_Toys_Layer_AnalogAlphaToy_OutputName", null ]
        ] ]
      ] ],
      [ "AnalogAlphaToyGroup", "toy_builtin.html#use_DirectOutput_Cab_Toys_Virtual_AnalogAlphaToyGroup", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Virtual_AnalogAlphaToyGroup_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Virtual_AnalogAlphaToyGroup_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Virtual_AnalogAlphaToyGroup_properties", [
          [ "LayerOffset", "toy_builtin.html#DirectOutput_Cab_Toys_Virtual_AnalogAlphaToyGroup_LayerOffset", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Virtual_AnalogAlphaToyGroup_Name", null ],
          [ "ToyNames", "toy_builtin.html#DirectOutput_Cab_Toys_Virtual_AnalogAlphaToyGroup_ToyNames", null ]
        ] ]
      ] ],
      [ "GearMotor", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_GearMotor", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_GearMotor_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_GearMotor_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_GearMotor_properties", [
          [ "FadingCurveName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_GearMotor_FadingCurveName", null ],
          [ "KickstartDurationMs", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_GearMotor_KickstartDurationMs", null ],
          [ "KickstartPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_GearMotor_KickstartPower", null ],
          [ "MaxPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_GearMotor_MaxPower", null ],
          [ "MaxRunTimeMs", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_GearMotor_MaxRunTimeMs", null ],
          [ "MinPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_GearMotor_MinPower", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_GearMotor_Name", null ],
          [ "OutputName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_GearMotor_OutputName", null ]
        ] ]
      ] ],
      [ "Lamp", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Lamp", [
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Lamp_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Lamp_properties", [
          [ "FadingCurveName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Lamp_FadingCurveName", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Lamp_Name", null ],
          [ "OutputName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Lamp_OutputName", null ]
        ] ]
      ] ],
      [ "LedStrip", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_LedStrip", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_LedStrip_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_LedStrip_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_LedStrip_properties", [
          [ "ColorOrder", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_LedStrip_ColorOrder", null ],
          [ "FadingCurveName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_LedStrip_FadingCurveName", null ],
          [ "FirstLedNumber", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_LedStrip_FirstLedNumber", null ],
          [ "Height", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_LedStrip_Height", null ],
          [ "LedStripArrangement", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_LedStrip_LedStripArrangement", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_LedStrip_Name", null ],
          [ "OutputControllerName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_LedStrip_OutputControllerName", null ],
          [ "Width", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_LedStrip_Width", null ]
        ] ]
      ] ],
      [ "LedWizEquivalent", "toy_builtin.html#use_DirectOutput_Cab_Toys_LWEquivalent_LedWizEquivalent", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_LWEquivalent_LedWizEquivalent_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_LWEquivalent_LedWizEquivalent_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_LWEquivalent_LedWizEquivalent_properties", [
          [ "LedWizNumber", "toy_builtin.html#DirectOutput_Cab_Toys_LWEquivalent_LedWizEquivalent_LedWizNumber", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_LWEquivalent_LedWizEquivalent_Name", null ],
          [ "Outputs", "toy_builtin.html#DirectOutput_Cab_Toys_LWEquivalent_LedWizEquivalent_Outputs", null ]
        ] ]
      ] ],
      [ "Motor", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Motor", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Motor_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Motor_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Motor_properties", [
          [ "FadingCurveName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Motor_FadingCurveName", null ],
          [ "KickstartDurationMs", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Motor_KickstartDurationMs", null ],
          [ "KickstartPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Motor_KickstartPower", null ],
          [ "MaxPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Motor_MaxPower", null ],
          [ "MaxRunTimeMs", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Motor_MaxRunTimeMs", null ],
          [ "MinPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Motor_MinPower", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Motor_Name", null ],
          [ "OutputName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Motor_OutputName", null ]
        ] ]
      ] ],
      [ "RGBAToy", "toy_builtin.html#use_DirectOutput_Cab_Toys_Layer_RGBAToy", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Layer_RGBAToy_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Layer_RGBAToy_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Layer_RGBAToy_properties", [
          [ "FadingCurveName", "toy_builtin.html#DirectOutput_Cab_Toys_Layer_RGBAToy_FadingCurveName", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Layer_RGBAToy_Name", null ],
          [ "OutputNameBlue", "toy_builtin.html#DirectOutput_Cab_Toys_Layer_RGBAToy_OutputNameBlue", null ],
          [ "OutputNameGreen", "toy_builtin.html#DirectOutput_Cab_Toys_Layer_RGBAToy_OutputNameGreen", null ],
          [ "OutputNameRed", "toy_builtin.html#DirectOutput_Cab_Toys_Layer_RGBAToy_OutputNameRed", null ]
        ] ]
      ] ],
      [ "RGBAToyGroup", "toy_builtin.html#use_DirectOutput_Cab_Toys_Virtual_RGBAToyGroup", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Virtual_RGBAToyGroup_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Virtual_RGBAToyGroup_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Virtual_RGBAToyGroup_properties", [
          [ "LayerOffset", "toy_builtin.html#DirectOutput_Cab_Toys_Virtual_RGBAToyGroup_LayerOffset", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Virtual_RGBAToyGroup_Name", null ],
          [ "ToyNames", "toy_builtin.html#DirectOutput_Cab_Toys_Virtual_RGBAToyGroup_ToyNames", null ]
        ] ]
      ] ],
      [ "RGBLed", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_RGBLed", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_RGBLed_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_RGBLed_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_RGBLed_properties", [
          [ "FadingCurveName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_RGBLed_FadingCurveName", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_RGBLed_Name", null ],
          [ "OutputNameBlue", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_RGBLed_OutputNameBlue", null ],
          [ "OutputNameGreen", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_RGBLed_OutputNameGreen", null ],
          [ "OutputNameRed", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_RGBLed_OutputNameRed", null ]
        ] ]
      ] ],
      [ "Shaker", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Shaker", [
        [ "Summary", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Shaker_summary", null ],
        [ "Sample XML", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Shaker_samplexml", null ],
        [ "Properties", "toy_builtin.html#use_DirectOutput_Cab_Toys_Hardware_Shaker_properties", [
          [ "FadingCurveName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Shaker_FadingCurveName", null ],
          [ "KickstartDurationMs", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Shaker_KickstartDurationMs", null ],
          [ "KickstartPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Shaker_KickstartPower", null ],
          [ "MaxPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Shaker_MaxPower", null ],
          [ "MaxRunTimeMs", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Shaker_MaxRunTimeMs", null ],
          [ "MinPower", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Shaker_MinPower", null ],
          [ "Name", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Shaker_Name", null ],
          [ "OutputName", "toy_builtin.html#DirectOutput_Cab_Toys_Hardware_Shaker_OutputName", null ]
        ] ]
      ] ]
    ] ],
    [ "Output controllers", "outputcontrollers.html", [
      [ "Introduction", "outputcontrollers.html#outputcontrollers_introduction", null ],
      [ "Builtin output controllers", "outputcontrollers.html#outputcontrollers_builtincontrollers", [
        [ "Interfaces for output controllers", "outputcontrollers.html#outputcontrollers_interfaces", [
          [ "IOutputController interface", "outputcontrollers.html#outputcontrollers_ioutputcontroller", null ],
          [ "IOutput interface", "outputcontrollers.html#outputcontrollers_ioutput", null ]
        ] ],
        [ "Implementation guidelines for custom output controllers", "outputcontrollers.html#outputcontrollers_implementationguideline", null ]
      ] ]
    ] ],
    [ "Built in Output controllers", "outputcontrollers_builtin.html", [
      [ "ArtNet", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_DMX_ArtNet", [
        [ "Summary", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_DMX_ArtNet_summary", null ],
        [ "Sample XML", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_DMX_ArtNet_samplexml", null ],
        [ "Properties", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_DMX_ArtNet_properties", [
          [ "BroadcastAddress", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_DMX_ArtNet_BroadcastAddress", null ],
          [ "Name", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_DMX_ArtNet_Name", null ],
          [ "Universe", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_DMX_ArtNet_Universe", null ]
        ] ]
      ] ],
      [ "FT245RBitbangController", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_FTDIChip_FT245RBitbangController", [
        [ "Summary", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_FTDIChip_FT245RBitbangController_summary", null ],
        [ "Sample XML", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_FTDIChip_FT245RBitbangController_samplexml", null ],
        [ "Properties", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_FTDIChip_FT245RBitbangController_properties", [
          [ "Name", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_FTDIChip_FT245RBitbangController_Name", null ],
          [ "SerialNumber", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_FTDIChip_FT245RBitbangController_SerialNumber", null ]
        ] ]
      ] ],
      [ "LedWiz", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_LW_LedWiz", [
        [ "Summary", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_LW_LedWiz_summary", null ],
        [ "Sample XML", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_LW_LedWiz_samplexml", null ],
        [ "Properties", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_LW_LedWiz_properties", [
          [ "Name", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_LW_LedWiz_Name", null ],
          [ "Number", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_LW_LedWiz_Number", null ]
        ] ]
      ] ],
      [ "NullOutputController", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_NullOutputController_NullOutputController", [
        [ "Summary", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_NullOutputController_NullOutputController_summary", null ],
        [ "Sample XML", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_NullOutputController_NullOutputController_samplexml", null ],
        [ "Properties", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_NullOutputController_NullOutputController_properties", [
          [ "Name", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_NullOutputController_NullOutputController_Name", null ]
        ] ]
      ] ],
      [ "PacDrive", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_Pac_PacDrive", [
        [ "Summary", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_Pac_PacDrive_summary", null ],
        [ "Sample XML", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_Pac_PacDrive_samplexml", null ],
        [ "Properties", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_Pac_PacDrive_properties", [
          [ "Name", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_Pac_PacDrive_Name", null ]
        ] ]
      ] ],
      [ "PacLed64", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_Pac_PacLed64", [
        [ "Summary", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_Pac_PacLed64_summary", null ],
        [ "Sample XML", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_Pac_PacLed64_samplexml", null ],
        [ "Properties", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_Pac_PacLed64_properties", [
          [ "Id", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_Pac_PacLed64_Id", null ],
          [ "Name", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_Pac_PacLed64_Name", null ]
        ] ]
      ] ],
      [ "WS2811StripController", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_AdressableLedStrip_WS2811StripController", [
        [ "Summary", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_AdressableLedStrip_WS2811StripController_summary", null ],
        [ "Sample XML", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_AdressableLedStrip_WS2811StripController_samplexml", null ],
        [ "Properties", "outputcontrollers_builtin.html#use_DirectOutput_Cab_Out_AdressableLedStrip_WS2811StripController_properties", [
          [ "ControllerNumber", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_AdressableLedStrip_WS2811StripController_ControllerNumber", null ],
          [ "Name", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_AdressableLedStrip_WS2811StripController_Name", null ],
          [ "NumberOfLeds", "outputcontrollers_builtin.html#DirectOutput_Cab_Out_AdressableLedStrip_WS2811StripController_NumberOfLeds", null ]
        ] ]
      ] ]
    ] ],
    [ "Source Code", "sourcecode.html", [
      [ "Introduction", "sourcecode.html#sourcecode_introduction", null ],
      [ "Download source code/Fork source code", "sourcecode.html#sourcecode_fork", null ],
      [ "Contribute your code/Pull requests", "sourcecode.html#sourcecode_pull", null ],
      [ "Tools", "sourcecode.html#sourcecode_tools", null ],
      [ "Using the source code", "sourcecode.html#sourcecode_use", null ],
      [ "What is where", "sourcecode.html#sourcecode_where", [
        [ "DirectOutput project", "sourcecode.html#sourcecode_wheredirectoutput", null ],
        [ "Documentation project", "sourcecode.html#sourcecode_wheredocu", null ],
        [ "B2SServerPlugin project", "sourcecode.html#sourcecode_whereplugin", null ],
        [ "LedControlFileTester project", "sourcecode.html#sourcecode_wheredplugin", null ]
      ] ],
      [ "Extending and changing the source code (guidelines)", "sourcecode.html#sourcecode_extend", null ]
    ] ],
    [ "Support", "support.html", null ],
    [ "Contribute", "contribute.html", [
      [ "Report bugs and issues", "contribute.html#contribute_bugs", null ],
      [ "Squash some bugs", "contribute.html#contribute_squashbugs", null ],
      [ "Share your knowledge", "contribute.html#contribute_help", null ],
      [ "Contribute the to documentation", "contribute.html#contribute_docu", null ],
      [ "Contribute to the source code", "contribute.html#contribute_source", null ]
    ] ],
    [ "Downloads", "downloads.html", [
      [ "Binary Package", "downloads.html#download_binaries", null ],
      [ "Source Code", "downloads.html#downloads_sourcecode", null ],
      [ "Documentation", "downloads.html#downloads_docu", null ],
      [ "Table config files", "downloads.html#downloads_config", null ]
    ] ],
    [ "History", "_history.html", null ],
    [ "Credits", "md_90__credits.html", null ],
    [ "About and Copyright", "md_99__mainpage_and_about.html", null ],
    [ "Packages", null, [
      [ "Packages", "namespaces.html", "namespaces" ],
      [ "Package Functions", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", null, [
      [ "Class List", "annotated.html", "annotated" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Properties", "functions_prop.html", "functions_prop" ],
        [ "Events", "functions_evnt.html", null ]
      ] ]
    ] ],
    [ "Files", null, [
      [ "File List", "files.html", "files" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_adressable_led_strip_8cs.html",
"_strip_arrangement_enum_8cs.html#adb2af1c5f222fde86a74579aa8364024a25ee1f95f5657c5eed1e5c0c3a5f03b4",
"class_direct_output_1_1_cab_1_1_out_1_1_f_t_d_i_chip_1_1_f_t_d_i.html#acf9fe898665ffb4dfee9eb52b06acc25a2934928efb6b016ccdd2226972d4aa74",
"class_direct_output_1_1_cab_1_1_out_1_1_f_t_d_i_chip_1_1_f_t_d_i_1_1_f_t___x_s_e_r_i_e_s___c_b_u_s___o_p_t_i_o_n_s.html#a2c0a1805108648f8850dec5ce3bd69af",
"class_direct_output_1_1_cab_1_1_toys_1_1_layer_1_1_r_g_b_a_toy.html#aad21f96831beeb1d515450aa782e6a48",
"class_direct_output_1_1_f_x_1_1_timmed_f_x_1_1_fade_effect.html#ad7fd69aa07f31fe06e782615929108c6",
"class_direct_output_1_1_general_1_1_generic_1_1_validate_item_event_args_3_01_ty_01_4.html#a1ad1eab8e3866fed33c9144c1dcf6512",
"class_direct_output_1_1_table_1_1_table.html#acce9bcb673641b708c7ab0397e57eed1",
"fx.html#fx_customeffects",
"fx_builtin.html#use_DirectOutput_FX_NullFX_NullEffect_samplexml",
"outputcontrollers.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
var navTreeSubIndices = new Array();

function getData(varName)
{
  var i = varName.lastIndexOf('/');
  var n = i>=0 ? varName.substring(i+1) : varName;
  return eval(n.replace(/\-/g,'_'));
}

function stripPath(uri)
{
  return uri.substring(uri.lastIndexOf('/')+1);
}

function stripPath2(uri)
{
  var i = uri.lastIndexOf('/');
  var s = uri.substring(i+1);
  var m = uri.substring(0,i+1).match(/\/d\w\/d\w\w\/$/);
  return m ? uri.substring(i-6) : s;
}

function localStorageSupported()
{
  try {
    return 'localStorage' in window && window['localStorage'] !== null && window.localStorage.getItem;
  }
  catch(e) {
    return false;
  }
}


function storeLink(link)
{
  if (!$("#nav-sync").hasClass('sync') && localStorageSupported()) {
      window.localStorage.setItem('navpath',link);
  }
}

function deleteLink()
{
  if (localStorageSupported()) {
    window.localStorage.setItem('navpath','');
  } 
}

function cachedLink()
{
  if (localStorageSupported()) {
    return window.localStorage.getItem('navpath');
  } else {
    return '';
  }
}

function getScript(scriptName,func,show)
{
  var head = document.getElementsByTagName("head")[0]; 
  var script = document.createElement('script');
  script.id = scriptName;
  script.type = 'text/javascript';
  script.onload = func; 
  script.src = scriptName+'.js'; 
  if ($.browser.msie && $.browser.version<=8) { 
    // script.onload does not work with older versions of IE
    script.onreadystatechange = function() {
      if (script.readyState=='complete' || script.readyState=='loaded') { 
        func(); if (show) showRoot(); 
      }
    }
  }
  head.appendChild(script); 
}

function createIndent(o,domNode,node,level)
{
  var level=-1;
  var n = node;
  while (n.parentNode) { level++; n=n.parentNode; }
  var imgNode = document.createElement("img");
  imgNode.style.paddingLeft=(16*level).toString()+'px';
  imgNode.width  = 16;
  imgNode.height = 22;
  imgNode.border = 0;
  if (node.childrenData) {
    node.plus_img = imgNode;
    node.expandToggle = document.createElement("a");
    node.expandToggle.href = "javascript:void(0)";
    node.expandToggle.onclick = function() {
      if (node.expanded) {
        $(node.getChildrenUL()).slideUp("fast");
        node.plus_img.src = node.relpath+"ftv2pnode.png";
        node.expanded = false;
      } else {
        expandNode(o, node, false, false);
      }
    }
    node.expandToggle.appendChild(imgNode);
    domNode.appendChild(node.expandToggle);
    imgNode.src = node.relpath+"ftv2pnode.png";
  } else {
    imgNode.src = node.relpath+"ftv2node.png";
    domNode.appendChild(imgNode);
  } 
}

var animationInProgress = false;

function gotoAnchor(anchor,aname,updateLocation)
{
  var pos, docContent = $('#doc-content');
  if (anchor.parent().attr('class')=='memItemLeft' ||
      anchor.parent().attr('class')=='fieldtype' ||
      anchor.parent().is(':header')) 
  {
    pos = anchor.parent().position().top;
  } else if (anchor.position()) {
    pos = anchor.position().top;
  }
  if (pos) {
    var dist = Math.abs(Math.min(
               pos-docContent.offset().top,
               docContent[0].scrollHeight-
               docContent.height()-docContent.scrollTop()));
    animationInProgress=true;
    docContent.animate({
      scrollTop: pos + docContent.scrollTop() - docContent.offset().top
    },Math.max(50,Math.min(500,dist)),function(){
      if (updateLocation) window.location.href=aname;
      animationInProgress=false;
    });
  }
}

function newNode(o, po, text, link, childrenData, lastNode)
{
  var node = new Object();
  node.children = Array();
  node.childrenData = childrenData;
  node.depth = po.depth + 1;
  node.relpath = po.relpath;
  node.isLast = lastNode;

  node.li = document.createElement("li");
  po.getChildrenUL().appendChild(node.li);
  node.parentNode = po;

  node.itemDiv = document.createElement("div");
  node.itemDiv.className = "item";

  node.labelSpan = document.createElement("span");
  node.labelSpan.className = "label";

  createIndent(o,node.itemDiv,node,0);
  node.itemDiv.appendChild(node.labelSpan);
  node.li.appendChild(node.itemDiv);

  var a = document.createElement("a");
  node.labelSpan.appendChild(a);
  node.label = document.createTextNode(text);
  node.expanded = false;
  a.appendChild(node.label);
  if (link) {
    var url;
    if (link.substring(0,1)=='^') {
      url = link.substring(1);
      link = url;
    } else {
      url = node.relpath+link;
    }
    a.className = stripPath(link.replace('#',':'));
    if (link.indexOf('#')!=-1) {
      var aname = '#'+link.split('#')[1];
      var srcPage = stripPath($(location).attr('pathname'));
      var targetPage = stripPath(link.split('#')[0]);
      a.href = srcPage!=targetPage ? url : "javascript:void(0)"; 
      a.onclick = function(){
        storeLink(link);
        if (!$(a).parent().parent().hasClass('selected'))
        {
          $('.item').removeClass('selected');
          $('.item').removeAttr('id');
          $(a).parent().parent().addClass('selected');
          $(a).parent().parent().attr('id','selected');
        }
        var anchor = $(aname);
        gotoAnchor(anchor,aname,true);
      };
    } else {
      a.href = url;
      a.onclick = function() { storeLink(link); }
    }
  } else {
    if (childrenData != null) 
    {
      a.className = "nolink";
      a.href = "javascript:void(0)";
      a.onclick = node.expandToggle.onclick;
    }
  }

  node.childrenUL = null;
  node.getChildrenUL = function() {
    if (!node.childrenUL) {
      node.childrenUL = document.createElement("ul");
      node.childrenUL.className = "children_ul";
      node.childrenUL.style.display = "none";
      node.li.appendChild(node.childrenUL);
    }
    return node.childrenUL;
  };

  return node;
}

function showRoot()
{
  var headerHeight = $("#top").height();
  var footerHeight = $("#nav-path").height();
  var windowHeight = $(window).height() - headerHeight - footerHeight;
  (function (){ // retry until we can scroll to the selected item
    try {
      var navtree=$('#nav-tree');
      navtree.scrollTo('#selected',0,{offset:-windowHeight/2});
    } catch (err) {
      setTimeout(arguments.callee, 0);
    }
  })();
}

function expandNode(o, node, imm, showRoot)
{
  if (node.childrenData && !node.expanded) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        expandNode(o, node, imm, showRoot);
      }, showRoot);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      } if (imm || ($.browser.msie && $.browser.version>8)) { 
        // somehow slideDown jumps to the start of tree for IE9 :-(
        $(node.getChildrenUL()).show();
      } else {
        $(node.getChildrenUL()).slideDown("fast");
      }
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
    }
  }
}

function glowEffect(n,duration)
{
  n.addClass('glow').delay(duration).queue(function(next){
    $(this).removeClass('glow');next();
  });
}

function highlightAnchor()
{
  var aname = $(location).attr('hash');
  var anchor = $(aname);
  if (anchor.parent().attr('class')=='memItemLeft'){
    var rows = $('.memberdecls tr[class$="'+
               window.location.hash.substring(1)+'"]');
    glowEffect(rows.children(),300); // member without details
  } else if (anchor.parents().slice(2).prop('tagName')=='TR') {
    glowEffect(anchor.parents('div.memitem'),1000); // enum value
  } else if (anchor.parent().attr('class')=='fieldtype'){
    glowEffect(anchor.parent().parent(),1000); // struct field
  } else if (anchor.parent().is(":header")) {
    glowEffect(anchor.parent(),1000); // section header
  } else {
    glowEffect(anchor.next(),1000); // normal member
  }
  gotoAnchor(anchor,aname,false);
}

function selectAndHighlight(hash,n)
{
  var a;
  if (hash) {
    var link=stripPath($(location).attr('pathname'))+':'+hash.substring(1);
    a=$('.item a[class$="'+link+'"]');
  }
  if (a && a.length) {
    a.parent().parent().addClass('selected');
    a.parent().parent().attr('id','selected');
    highlightAnchor();
  } else if (n) {
    $(n.itemDiv).addClass('selected');
    $(n.itemDiv).attr('id','selected');
  }
  if ($('#nav-tree-contents .item:first').hasClass('selected')) {
    $('#nav-sync').css('top','30px');
  } else {
    $('#nav-sync').css('top','5px');
  }
  showRoot();
}

function showNode(o, node, index, hash)
{
  if (node && node.childrenData) {
    if (typeof(node.childrenData)==='string') {
      var varName    = node.childrenData;
      getScript(node.relpath+varName,function(){
        node.childrenData = getData(varName);
        showNode(o,node,index,hash);
      },true);
    } else {
      if (!node.childrenVisited) {
        getNode(o, node);
      }
      $(node.getChildrenUL()).show();
      if (node.isLast) {
        node.plus_img.src = node.relpath+"ftv2mlastnode.png";
      } else {
        node.plus_img.src = node.relpath+"ftv2mnode.png";
      }
      node.expanded = true;
      var n = node.children[o.breadcrumbs[index]];
      if (index+1<o.breadcrumbs.length) {
        showNode(o,n,index+1,hash);
      } else {
        if (typeof(n.childrenData)==='string') {
          var varName = n.childrenData;
          getScript(n.relpath+varName,function(){
            n.childrenData = getData(varName);
            node.expanded=false;
            showNode(o,node,index,hash); // retry with child node expanded
          },true);
        } else {
          var rootBase = stripPath(o.toroot.replace(/\..+$/, ''));
          if (rootBase=="index" || rootBase=="pages" || rootBase=="search") {
            expandNode(o, n, true, true);
          }
          selectAndHighlight(hash,n);
        }
      }
    }
  } else {
    selectAndHighlight(hash);
  }
}

function getNode(o, po)
{
  po.childrenVisited = true;
  var l = po.childrenData.length-1;
  for (var i in po.childrenData) {
    var nodeData = po.childrenData[i];
    po.children[i] = newNode(o, po, nodeData[0], nodeData[1], nodeData[2],
      i==l);
  }
}

function gotoNode(o,subIndex,root,hash,relpath)
{
  var nti = navTreeSubIndices[subIndex][root+hash];
  o.breadcrumbs = $.extend(true, [], nti ? nti : navTreeSubIndices[subIndex][root]);
  if (!o.breadcrumbs && root!=NAVTREE[0][1]) { // fallback: show index
    navTo(o,NAVTREE[0][1],"",relpath);
    $('.item').removeClass('selected');
    $('.item').removeAttr('id');
  }
  if (o.breadcrumbs) {
    o.breadcrumbs.unshift(0); // add 0 for root node
    showNode(o, o.node, 0, hash);
  }
}

function navTo(o,root,hash,relpath)
{
  var link = cachedLink();
  if (link) {
    var parts = link.split('#');
    root = parts[0];
    if (parts.length>1) hash = '#'+parts[1];
    else hash='';
  }
  if (hash.match(/^#l\d+$/)) {
    var anchor=$('a[name='+hash.substring(1)+']');
    glowEffect(anchor.parent(),1000); // line number
    hash=''; // strip line number anchors
    //root=root.replace(/_source\./,'.'); // source link to doc link
  }
  var url=root+hash;
  var i=-1;
  while (NAVTREEINDEX[i+1]<=url) i++;
  if (i==-1) { i=0; root=NAVTREE[0][1]; } // fallback: show index
  if (navTreeSubIndices[i]) {
    gotoNode(o,i,root,hash,relpath)
  } else {
    getScript(relpath+'navtreeindex'+i,function(){
      navTreeSubIndices[i] = eval('NAVTREEINDEX'+i);
      if (navTreeSubIndices[i]) {
        gotoNode(o,i,root,hash,relpath);
      }
    },true);
  }
}

function showSyncOff(n,relpath)
{
    n.html('<img src="'+relpath+'sync_off.png" title="'+SYNCOFFMSG+'"/>');
}

function showSyncOn(n,relpath)
{
    n.html('<img src="'+relpath+'sync_on.png" title="'+SYNCONMSG+'"/>');
}

function toggleSyncButton(relpath)
{
  var navSync = $('#nav-sync');
  if (navSync.hasClass('sync')) {
    navSync.removeClass('sync');
    showSyncOff(navSync,relpath);
    storeLink(stripPath2($(location).attr('pathname'))+$(location).attr('hash'));
  } else {
    navSync.addClass('sync');
    showSyncOn(navSync,relpath);
    deleteLink();
  }
}

function initNavTree(toroot,relpath)
{
  var o = new Object();
  o.toroot = toroot;
  o.node = new Object();
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = new Array();
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;
  o.node.expanded = false;
  o.node.isLast = true;
  o.node.plus_img = document.createElement("img");
  o.node.plus_img.src = relpath+"ftv2pnode.png";
  o.node.plus_img.width = 16;
  o.node.plus_img.height = 22;

  if (localStorageSupported()) {
    var navSync = $('#nav-sync');
    if (cachedLink()) {
      showSyncOff(navSync,relpath);
      navSync.removeClass('sync');
    } else {
      showSyncOn(navSync,relpath);
    }
    navSync.click(function(){ toggleSyncButton(relpath); });
  }

  navTo(o,toroot,window.location.hash,relpath);

  $(window).bind('hashchange', function(){
     if (window.location.hash && window.location.hash.length>1){
       var a;
       if ($(location).attr('hash')){
         var clslink=stripPath($(location).attr('pathname'))+':'+
                               $(location).attr('hash').substring(1);
         a=$('.item a[class$="'+clslink+'"]');
       }
       if (a==null || !$(a).parent().parent().hasClass('selected')){
         $('.item').removeClass('selected');
         $('.item').removeAttr('id');
       }
       var link=stripPath2($(location).attr('pathname'));
       navTo(o,link,$(location).attr('hash'),relpath);
     } else if (!animationInProgress) {
       $('#doc-content').scrollTop(0);
       $('.item').removeClass('selected');
       $('.item').removeAttr('id');
       navTo(o,toroot,window.location.hash,relpath);
     }
  })

  $(window).load(showRoot);
}

