var _banano_si7numpad=new banano_si7numpad();var _banano_sithasoionic7_modsithasoionic=new banano_sithasoionic7_modsithasoionic();var _banano_si7numpad_pghome=new banano_si7numpad_pghome();var _banano_si7numpad_pgindex=new banano_si7numpad_pgindex();
/* App */
function banano_si7numpad_pghome() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._name="home";this._title="Ionic 7 NumPad";this._icon="logo-ionic";this._path="/";this._color="";this._home= new banano_sithasoionic7_shiontab();this._button1= new banano_sithasoionic7_shionbutton();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._home.initialize(_B,"home","home");_B._home.settitle("Ionic 7 NumPad");_B._home.settab("home");_B._home.sethasheader(true);_B._home.setmenubuttonautohide(false);_B._home.setcontentionpadding(true);_B._home.addtoparent("mainpagetabs",_B._home._custprops);_B._name=_B._home.getpgname();_B._title=_B._home.getpgtitle();_B._icon=_B._home.getpgicon();_B._path=_B._home.getpgpath();_B._color=_B._home.getpgiconcolor();_B._button1.initialize(_B,"button1","button1");_B._button1.settext("");_B._button1.setnumpad(true);_B._button1.addtoparent("homecontent",_B._button1._custprops);_B._app.addpagepath(_B._name,_B._title,_B._icon,_B._path);_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_B._app.navigateto(_B._path,"forward");};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.getpath=function() {if (_B==null) _B=this;return _B._path;};this.getcolor=function() {if (_B==null) _B=this;return _B._color;};this.buildpage=function() {if (_B==null) _B=this;};this.button1_numpadvalue=function(_value) {if (_B==null) _B=this;_B._app.showtoastsuccess("NumPad",_value);};}function banano_si7numpad_pgindex() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._apptoast= new banano_sithasoionic7_shiontoast();this._apploading= new banano_sithasoionic7_shionloading();this._maincontent= new banano_sithasoionic7_shioncontent();this._mainpage= new banano_sithasoionic7_shionpage();this.initialize=function() {if (_B==null) _B=this;_B._app.initialize(_B,"ios");_B._app.addapprouter();_B._maincontent.initialize(_B,"maincontent","maincontent");_B._maincontent.setparentid("app");_B._maincontent.setionpage(false);_B._maincontent.addtoparent("app",_B._maincontent._custprops);_B._mainpage.initialize(_B,"mainpage","mainpage");_B._mainpage.setroutername("");_B._mainpage.setpath("");_B._mainpage.sethastabs(true);_B._mainpage.addtoparent("maincontent",_B._mainpage._custprops);_B._apptoast.initialize(_B,"apptoast","apptoast");_B._apptoast.setparentid("app");_B._apptoast.settoasttype("custom");_B._apptoast.setduration(3000);_B._apptoast.setlayout("stacked");_B._apptoast.setposition("top");_B._apptoast.setmode("ios");_B._apptoast.addtoparent("app",_B._apptoast._custprops);_B._app.settoastcontroller(_B._apptoast);_B._apploading.initialize(_B,"apploading","apploading");_B._apploading.setduration(3000);_B._apploading.setmode("ios");_B._apploading.addtoparent("app",_B._apptoast._custprops);_B._app.setloadingcontroller(_B._apploading);_B._app._pageviewer=_B._mainpage._pagetabsid;await _B.addpages(_B);_B.adddraweritems(_B);_B.addpagetabs(_B);_banano_si7numpad_pghome.show();};this.addpages=function() {if (_B==null) _B=this;_banano_si7numpad_pghome.initialize(_B._app);};this.adddraweritems=function() {if (_B==null) _B=this;};this.addpagetabs=function() {if (_B==null) _B=this;};this.app_ionroutedidchange=function(_e) {if (_B==null) _B=this;var _frompage,_topage;console.log("app_IonRouteDidChange");_frompage=_B._app.getnavigatingfrom(_e);_topage=_B._app.getnavigatingto(_e);console.log(_frompage);console.log(_topage);switch ("" + _topage) {case "" + "home":break;}};this.app_ionroutewillchange=function(_e) {if (_B==null) _B=this;var _frompage,_topage;console.log("app_IonRouteWillChange");_frompage=_B._app.getnavigatingfrom(_e);_topage=_B._app.getnavigatingto(_e);console.log(_frompage);console.log(_topage);switch ("" + _topage) {case "" + "home":break;}};}function banano_si7numpad() {var _B;this._appname="sithasoionic7empty";this._apptitle="SithasoIONIC7 Empty";this._publish="C:\laragon\www";this._version="0.01";this._serverip="";this.banano_ready=function() {if (_B==null) _B=this;_banano_si7numpad_pgindex.initialize();};}function banano_sithasoionic7_page() {var _B=this;_B._name="";_B._title="";_B._icon="";_B._path="";_B.initialize=function() {};}function banano_sithasoionic7_profiletype() {var _B=this;_B._id="";_B._name="";_B._verified=false;_B._email="";_B._token="";_B._avatar="";_B._username="";_B._size=0;_B.initialize=function() {};}function banano_sithasoionic7_fileobject() {var _B=this;_B._filename="";_B._filedate="";_B._filesize=0;_B._filetype="";_B._status="";_B._fullpath="";_B._filedateonly="";_B._fileok=false;_B._fo=null;_B._extension="";_B.initialize=function() {};}function banano_sithasoionic7_gmaplatlng() {var _B=this;_B._lat=0;_B._lng=0;_B.initialize=function() {};}function banano_sithasoionic7_gridrow() {var _B=this;_B._rows=0;_B._columns=[];_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_gridcolumn() {var _B=this;_B._columns=0;_B._gxs="";_B._gsm="";_B._gmd="";_B._glg="";_B._gxl="";_B._ofxs="";_B._ofsm="";_B._ofmd="";_B._oflg="";_B._ofxl="";_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_prefitem() {var _B=this;_B._title={};_B._itemtype=0;_B._extra={};_B._key="";_B._required=false;_B._component={};_B._value={};_B._isbuilt=false;_B._visible=false;_B._disabled=false;_B._multiple=false;_B.initialize=function() {};}function banano_sithasoionic7_countryitem() {var _B=this;_B._code="";_B._name="";_B._flag="";_B._dialcode="";_B._position=0;_B._flagurl="";_B.initialize=function() {};}function banano_sithasoionic7_storage() {var _B=this;_B._usage=0;_B._quota=0;_B._percentused=0;_B._remaining=0;_B.initialize=function() {};}window.addEventListener('online', function() {if (typeof _banano_si7numpad['banano_online']==="function") {_banano_si7numpad.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_si7numpad['banano_offline']==="function") {_banano_si7numpad.banano_offline();}});var BANversion=1706661789619;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_si7numpad.banano_ready();}}var hidden, visibilityChange;if (typeof document.hidden !== "undefined") {hidden = "hidden";visibilityChange = "visibilitychange";} else if (typeof document.msHidden !== "undefined") {hidden = "msHidden";visibilityChange = "msvisibilitychange";} else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden";visibilityChange = "webkitvisibilitychange";}function handleVisibilityChange() {if (document[hidden]) {if (typeof _banano_si7numpad['banano_visibilitychanged']==="function") {_banano_si7numpad.banano_visibilitychanged(false);}} else {if (typeof _banano_si7numpad['banano_visibilitychanged']==="function") {_banano_si7numpad.banano_visibilitychanged(true);}}};if (typeof document.addEventListener === "undefined" || hidden === undefined) {console.log("This requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");} else {document.addEventListener(visibilityChange, handleVisibilityChange, false);}