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
        [ "Using LedControl.ini files", "installation.html#installation_ledcontrolini", null ],
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
        [ "Table element status updates", "tableconfig.html#tableconfig_VPEMtableelements", null ]
      ] ],
      [ "Tables w/o B2S.Server Backglass", "tableconfig.html#tableconfig_nobackglass", null ]
    ] ],
    [ "Supported Hardware", "hardware.html", [
      [ "Introduction", "hardware.html#hardware_intro", null ],
      [ "Fully supported hardware", "hardware.html#hardware_ready", [
        [ "LedWiz (GroovyGameGear)", "hardware.html#hardware_ledwiz", null ],
        [ "PacLed64 (Ultimarc)", "hardware.html#hardware_ultimarc_pacled64", null ],
        [ "Art-Net / DMX", "hardware.html#hardware_artnet", null ]
      ] ],
      [ "Hardware support in development", "hardware.html#hardware_development", [
        [ "PacDrive (Ultimarc)", "hardware.html#hardware_ultimarc_pacdrive", null ]
      ] ],
      [ "WS2811 based led stripes", "hardware.html#hardware_WS2811", null ],
      [ "Other Hardware", "hardware.html#hardware_other", null ]
    ] ],
    [ "Global Configuration", "globalconfig.html", [
      [ "Introduction", "globalconfig.html#globalconfig_introduction", null ],
      [ "Global configuration file sections", "globalconfig.html#globalconfig_settings", [
        [ "TableScriptFilePatterns", "globalconfig.html#globalconfig_tablescriptsfilepattern", null ],
        [ "CabinetConfigFilePatterns", "globalconfig.html#globalconfig_cabinetconfigfilepattern", null ],
        [ "CabinetScriptsFilePattern", "globalconfig.html#globalconfig_cabinetscriptsfilepattern", null ],
        [ "TableConfigFilePatterns", "globalconfig.html#globalconfig_tableconfigfilepatterns", [
          [ "LedControl options", "globalconfig.html#globalconfig_ledcontrol", null ],
          [ "LedControlIniFiles", "globalconfig.html#globalconfig_ledcontrolinifiles", null ],
          [ "LedControl settings", "globalconfig.html#globalconfig_ledcontrolsettings", null ]
        ] ],
        [ "Logging", "globalconfig.html#globalconfig_logging", null ]
      ] ],
      [ "Example", "globalconfig.html#globalconfig_example", null ]
    ] ],
    [ "Cabinet Configuration", "cabinetconfig.html", [
      [ "Introduction", "cabinetconfig.html#cabinetconfig_introduction", null ],
      [ "Cabinet configuration file", "cabinetconfig.html#cabinetconfig_configfile", [
        [ "OutputControllers section", "cabinetconfig.html#cabinetconfig_outputcontrollers", null ],
        [ "Toys section", "cabinetconfig.html#cabinetconfig_toys", [
          [ "Toy configuration examples", "cabinetconfig.html#cabinetconfig_toysexamples", null ]
        ] ],
        [ "Effects section", "cabinetconfig.html#cabinetconfig_effects", null ],
        [ "Colors section", "cabinetconfig.html#cabinetconfig_colors", null ]
      ] ],
      [ "Example cabinet configuration", "cabinetconfig.html#cabinetconfig_example", null ]
    ] ],
    [ "Table configuration file", "tableconfigfile.html", [
      [ "Introduction", "tableconfigfile.html#tableconfigfile_introduction", null ],
      [ "Table config file", "tableconfigfile.html#tableconfigfile_configfilestructure", [
        [ "Table elements section", "tableconfigfile.html#tableconfigfile_configfilestructuretableelements", null ],
        [ "Assigned static effects section", "tableconfigfile.html#tableconfigfile_configfilestructurestaticeffects", null ],
        [ "Effects section", "tableconfigfile.html#tableconfigfile_configfilestructureeffects", [
          [ "BasicAnalogEffect", "tableconfigfile.html#tableconfigfile_configfilestructureeffectsbasicanalogeffect", null ],
          [ "BasicDigitalEffect", "tableconfigfile.html#tableconfigfile_configfilestructureeffectsbasicdigitaleffect", null ],
          [ "BasicRGBEffect", "tableconfigfile.html#tableconfigfile_configfilestructureeffectsbasicrgbeffect", null ],
          [ "ListEffect", "tableconfigfile.html#tableconfigfile_configfilestructureeffectslisteffect", null ]
        ] ],
        [ "AddLedControlConfig section", "tableconfigfile.html#tableconfigfile_configfilestructureaddledcontrolconfig", null ]
      ] ]
    ] ],
    [ "LedControl files", "ledcontrolfiles.html", [
      [ "Introduction", "ledcontrolfiles.html#ledcontrol_introduction", null ],
      [ "Auto Configuration", "ledcontrolfiles.html#ledcontrol_autoconfig", [
        [ "Auto Table config", "ledcontrolfiles.html#ledcontrol_autoconfigtable", null ],
        [ "Auto Cabinet Config", "ledcontrolfiles.html#ledcontrol_autoconfigcabinet", null ],
        [ "LedControl file numbering", "ledcontrolfiles.html#ledcontrol_autoconfignumbering", null ]
      ] ],
      [ "Manual Configuration", "ledcontrolfiles.html#ledcontrol_manualconfig", null ],
      [ "Settings in LedControl files", "ledcontrolfiles.html#ledcontrol_settings", [
        [ "Colors Section", "ledcontrolfiles.html#ledcontrol_settingscolors", null ],
        [ "Config Outs Section", "ledcontrolfiles.html#ledcontrol_settingsconfigouts", null ]
      ] ],
      [ "LedControl File Testing Application", "ledcontrolfiles.html#ledcontrol_testingapp", null ],
      [ "Example LedControl.ini", "ledcontrolfiles.html#ledcontrol_example", null ]
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
      [ "Introduction", "fx.html#effects_introduction", null ],
      [ "Builtin effects", "fx.html#effects_builtineffects", null ],
      [ "Custom effects", "fx.html#effects_customeffects", [
        [ "Implementation guidelines for custom effects", "fx.html#effects_implementationguideline", null ]
      ] ]
    ] ],
    [ "Toys", "toys.html", [
      [ "Introduction", "toys.html#toys_introduction", null ],
      [ "Builtin toys", "toys.html#toys_builtin", [
        [ "Contactor", "toys.html#toys_contactor", null ],
        [ "Lamp", "toys.html#toys_lamp", null ],
        [ "RGBLed", "toys.html#toys_rgbled", null ],
        [ "ReplayKnocker", "toys.html#toys_replayknocker", null ],
        [ "Motor/Shaker/GearMotor", "toys.html#toys_motor", null ],
        [ "Flasher", "toys.html#toys_flasher", null ],
        [ "LedWizEquivalent", "toys.html#toys_ledwizequivalent", null ],
        [ "GenericDigitalToy", "toys.html#toys_genericdigitaltoy", null ],
        [ "GenericAnalogToy", "toys.html#toys_genericanalogtoy", null ]
      ] ],
      [ "Custom toys", "toys.html#toys_custom", [
        [ "Implementation guidelines for custom toys", "toys.html#toys_implementationguideline", null ]
      ] ]
    ] ],
    [ "Output controllers", "outputcontrollers.html", [
      [ "Introduction", "outputcontrollers.html#outputcontrollers_introduction", null ],
      [ "Builtin output controllers", "outputcontrollers.html#outputcontrollers_builtineffects", [
        [ "LedWiz (GroovyGameGear)", "outputcontrollers.html#outputcontrollers_ledwiz", null ],
        [ "PacLed64 (Ultimarc)", "outputcontrollers.html#outputcontrollers_ultimarc_pacled64", null ],
        [ "Art-Net / DMX", "outputcontrollers.html#outputcontrollers_artnet", null ]
      ] ],
      [ "Custom output controllers", "outputcontrollers.html#outputcontrollers_customeffects", [
        [ "Interfaces for output controllers", "outputcontrollers.html#outputcontrollers_interfaces", [
          [ "IOutputController interface", "outputcontrollers.html#outputcontrollers_ioutputcontroller", null ],
          [ "IOutput interface", "outputcontrollers.html#outputcontrollers_ioutput", null ]
        ] ],
        [ "Implementation guidelines for custom output controllers", "outputcontrollers.html#outputcontrollers_implementationguideline", null ]
      ] ]
    ] ],
    [ "Scripting", "scripting.html", [
      [ "Introduction", "scripting.html#scripting_introduction", null ],
      [ "Scripting guidelines", "scripting.html#scripting_guidelines", null ]
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
        [ "LedControlFileTester project", "sourcecode.html#sourcecode_wheredplugin", null ],
        [ "DirectOutput_Test project", "sourcecode.html#sourcecode_wheredirectoutputest", null ]
      ] ],
      [ "Extending and changing the source code (guidelines)", "sourcecode.html#sourcecode_extend", null ]
    ] ],
    [ "Contribute", "contribute.html", [
      [ "Report bugs and issues", "contribute.html#contribute_bugs", null ],
      [ "Squash some bugs", "contribute.html#contribute_squashbugs", null ],
      [ "Share your knowledge", "contribute.html#contribute_help", null ],
      [ "Create scripts", "contribute.html#contribute_scripting", null ],
      [ "Contribute the to documentation", "contribute.html#contribute_docu", null ],
      [ "Contribute to the source code", "contribute.html#contribute_source", null ]
    ] ],
    [ "Downloads", "downloads.html", null ],
    [ "History and Roadmap", "_history_roadmap.html", [
      [ "Roadmap", "_history_roadmap.html#roadmap", null ],
      [ "History", "_history_roadmap.html#history", null ]
    ] ],
    [ "Credits", "md_90__credits.html", null ],
    [ "About and Copyright", "md_99__mainpage_and_about.html", null ],
    [ "Todo List", "todo.html", null ],
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
"_alarm_handler_8cs.html",
"_out_8cs.html",
"class_direct_output_1_1_cab_1_1_out_1_1_output_event_args.html#a21f65d878c4bcfe48b4fc296ceb579db",
"class_direct_output_1_1_f_x_1_1_effect_base.html#a06cdee7610ce58faaf7beb19fc6cbda7",
"class_direct_output_1_1_global_configuration_1_1_global_config.html#af7ae1ee9330b9ae82b5061b39f387b1b",
"contribute.html#contribute_docu",
"namespace_direct_output_1_1_cab_1_1_out_1_1_d_m_x_1_1_artnet_engine.html"
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

