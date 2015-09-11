// Created by iWeb 3.0.4 local-build-20110822

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:2,offset:new IWPoint(0.5513,1.9225),color:'#6f6f6f',opacity:1.000000}),shadow_4:new IWShadow({blurRadius:12,offset:new IWPoint(-0.2094,5.9963),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:6,offset:new IWPoint(-0.1396,3.9976),color:'#000000',opacity:1.000000}),shadow_0:new IWShadow({blurRadius:12,offset:new IWPoint(-0.2094,5.9963),color:'#000000',opacity:1.000000}),stroke_0:new IWEmptyStroke(),stroke_1:new IWPhotoFrame([IWCreateImage('Template_files/FormalShadow_01.png'),IWCreateImage('Template_files/FormalShadow_02.png'),IWCreateImage('Template_files/FormalShadow_03.png'),IWCreateImage('Template_files/FormalShadow_06.png'),IWCreateImage('Template_files/FormalShadow_12.png'),IWCreateImage('Template_files/FormalShadow_11.png'),IWCreateImage('Template_files/FormalShadow_10.png'),IWCreateImage('Template_files/FormalShadow_04.png')],null,2,0.858388,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),shadow_3:new IWShadow({blurRadius:2,offset:new IWPoint(0.5513,1.9225),color:'#6f6f6f',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Template_files/TemplateMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Template_files','shapeimage_16','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
