(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},i={app:0},n=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("Header"),r("v-main",[r("router-view"),r("Footer")],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app-bar",{attrs:{app:"",color:"#1F7087",dark:"",flat:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-text-field",{staticClass:"expanding-search",staticStyle:{"padding-top":"25px","margin-left":"10vw"},attrs:{outlined:"",placeholder:"Search","prepend-inner-icon":"mdi-magnify",dense:"",clearable:""}}),r("v-spacer"),r("Login")],1),r("v-navigation-drawer",{attrs:{fixed:"",app:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item",{attrs:{link:""},on:{click:function(t){return e.home()}}},[r("v-list-item-icon",[r("v-icon",{attrs:{router:""}},[e._v("mdi-home")])],1),r("v-list-item-title",[e._v("Home")])],1),r("v-list-item",{attrs:{link:""},on:{click:function(t){return e.uploadPage()}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-cloud-upload-outline")])],1),r("v-list-item-title",[e._v("Upload video")])],1)],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[e.user?[r("div",[r("div",{staticClass:"text-center"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[r("v-btn",e._g(e._b({attrs:{text:"",dark:""}},"v-btn",i,!1),a),[e._v(" "+e._s(e.user)+" ")])]}}],null,!1,3316339538)},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.logout()}}},[r("v-card",{attrs:{width:"200px"}},[r("v-list",[r("v-list-item",{attrs:{link:""}},[r("v-btn",{staticClass:"d-flex align-center",attrs:{text:"",type:"submit"}},[r("v-icon",[e._v("mdi-logout")])],1),r("v-list-item-title",[e._v(" Logout ")])],1)],1)],1)],1)],1)],1)])]:[r("div",[r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"d-flex align-center",attrs:{text:""}},"v-btn",i,!1),a),[r("v-icon",{attrs:{large:""}},[e._v("mdi-account-circle-outline")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-tabs",{attrs:{dark:"","background-color":"#1F7087",grow:"",flat:"","slider-color":"#ED7B22"}},[r("v-tab",[e._v(" Login ")]),r("v-tab",[e._v(" Register ")]),r("v-tab-item",[r("v-card-title",{staticClass:"justify-center text-h4"},[r("v-icon",{attrs:{"x-large":"",color:"#1F7087"}},[e._v("mdi-account-circle-outline")])],1),r("v-slide-x-transition",[e.errorM?r("div",[r("v-card-title",{staticClass:"justify-center text-h4"},[r("v-chip",{attrs:{color:"red",outlined:"",label:"",close:""},on:{"click:close":function(t){return e.removeError()}}},[e._v(" "+e._s(e.errorM))])],1)],1):e._e()]),r("v-form",{ref:"loginform",on:{submit:function(t){return t.preventDefault(),e.login()}},model:{value:e.validLogin,callback:function(t){e.validLogin=t},expression:"validLogin"}},[r("v-container",{staticClass:"justify-center"},[r("v-row",{attrs:{justify:"center",align:"center",dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.nameRules,placeholder:"Username",name:"userName","prepend-inner-icon":"mdi-account",outlined:"",clearable:"",required:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.passwordRules,name:"password",placeholder:"Password","prepend-inner-icon":"mdi-lock",outlined:"",clearable:"",type:"password",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("v-divider"),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"#1F7087",outlined:"",block:"",disabled:!e.validLogin,type:"submit"}},[e._v(" Login ")])],1)],1)],1)],1)],1),r("v-tab-item",[e.registered?r("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[r("v-icon",{attrs:{size:"70px",color:"#84eb36"}},[e._v("mdi-checkbox-marked-circle-outline")])],1):r("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[r("v-icon",{attrs:{"x-large":"",color:"#1F7087"}},[e._v("mdi-account-circle-outline")])],1),r("v-slide-x-transition",[e.errorRegister?r("div",[r("v-card-title",{staticClass:"justify-center text-h4"},[r("v-chip",{attrs:{color:"red",outlined:"",label:"",close:""},on:{"click:close":function(t){return e.removeErrorRegister()}}},[e._v(" "+e._s(e.errorRegister))])],1)],1):e._e()]),r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.register()}},model:{value:e.validRegister,callback:function(t){e.validRegister=t},expression:"validRegister"}},[r("v-container",{staticClass:"justify-center",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}}},[r("v-row",{attrs:{justify:"center",align:"center",dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.nameRules,name:"userName",placeholder:"Username","prepend-inner-icon":"mdi-account",outlined:"",clearable:"",required:""},model:{value:e.userNameRegister,callback:function(t){e.userNameRegister=t},expression:"userNameRegister"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.emailRules,name:"email",placeholder:"Email","prepend-inner-icon":"mdi-email",outlined:"",clearable:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.passwordRules,placeholder:"Password","prepend-inner-icon":"mdi-lock",name:"password",outlined:"",clearable:"",required:"",type:"password"},model:{value:e.passwordRegister,callback:function(t){e.passwordRegister=t},expression:"passwordRegister"}})],1),r("v-divider"),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{disabled:!e.validRegister,color:"#11583E",outlined:"",block:"",type:"submit"}},[e._v(" Sign up ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)]],2)},c=[],u=(r("d3b7"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[e.videos?r("v-row",{attrs:{justify:"center"}},e._l(e.videos,(function(t,a){return r("v-col",{key:a,attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"6",xs:"12"}},[r("v-card",{staticClass:"ml-4",attrs:{tile:"",hover:"",elevation:"0"}},[r("video",{attrs:{width:"300",height:"250",controls:"",poster:t.thumbnail}},[r("source",{attrs:{src:t.url,type:"video/mp4"}})]),r("v-card-title",[e._v(e._s(t.title))]),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}}),r("div",[e._v(e._s(t.author))]),r("v-row",{staticClass:"align-center"},[r("v-col",{attrs:{cols:"12"}},[r("div",[e._v(e._s(t.created))])])],1)],1)],1)],1)})),1):r("v-row",{attrs:{justify:"center"}},e._l(4,(function(e){return r("v-col",{key:e,attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"6",xs:"12"}},[r("v-skeleton-loader",{staticClass:"mx-auto",attrs:{"max-width":"300",type:"card"}})],1)})),1)],1)},v=[],p=r("bc3a"),m=r.n(p),f=m.a.create({baseURL:"https://omedia-colab.herokuapp.com/",timout:5e3,headers:{"Content-Type":"application/x-www-form-urlencoded"}}),h={name:"Home",components:{},data:function(){return{videos:[]}},methods:{getVideos:function(){var e=this;f.get("/api/media").then((function(t){e.videos=t.data.data,console.log(e.videos)})).catch((function(e){console.log(e)}))}},created:function(){this.getVideos()}},g=h,b=r("2877"),w=r("6544"),x=r.n(w),y=r("b0af"),V=r("99d9"),_=r("62ad"),k=r("a523"),R=r("0fd9"),C=r("3129"),F=Object(b["a"])(g,d,v,!1,null,"73813cb2",null),j=F.exports;x()(F,{VCard:y["a"],VCardText:V["c"],VCardTitle:V["d"],VCol:_["a"],VContainer:k["a"],VRow:R["a"],VSkeletonLoader:C["a"]});var N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user?r("div",[r("v-container",{staticClass:"mt-4",attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"auto","no-gutters":""}},[r("v-card",{attrs:{width:"80vw"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":"",enctype:"mutlipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.upload()}}},[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"justify-center",attrs:{align:"center",dense:"","no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{outlined:"",clearable:"",rules:e.nameRules,placeholder:"Name",name:"title",required:"",dense:"","prepend-icon":"mdi-subtitles"},model:{value:e.uploadFile.title,callback:function(t){e.$set(e.uploadFile,"title",t)},expression:"uploadFile.title"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-file-input",{attrs:{label:"Video",outlined:"","show-size":"",dense:"",id:"inputVideo",name:"file",accept:"video/*","prepend-icon":"mdi-video"},model:{value:e.uploadFile.mediaFile,callback:function(t){e.$set(e.uploadFile,"mediaFile",t)},expression:"uploadFile.mediaFile"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-file-input",{attrs:{label:"Thumbnail",outlined:"","show-size":"",dense:"",id:"inputThumbnail",name:"thumbnail",accept:"image/*","prepend-icon":"mdi-image"},model:{value:e.uploadFile.thumbnail,callback:function(t){e.$set(e.uploadFile,"thumbnail",t)},expression:"uploadFile.thumbnail"}})],1),r("v-col",{attrs:{cols:"auto"}},[r("v-radio-group",{attrs:{row:""},model:{value:e.uploadFile.private,callback:function(t){e.$set(e.uploadFile,"private",t)},expression:"uploadFile.private"}},[r("v-radio",{attrs:{label:"Public",value:"false",name:"private"}}),r("v-radio",{attrs:{label:"Private",value:"true",name:"private"}})],1)],1),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"#11583E",text:"",type:"submit"}},[r("v-icon",{attrs:{dark:"","x-large":""}},[e._v("mdi-cloud-upload-outline")])],1)],1)],1),e.uploaded?[r("v-card",{attrs:{color:"#1F7087",dark:""}},[e.registered?r("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[r("v-icon",{attrs:{size:"70px",color:"#84eb36"}},[e._v("mdi-checkbox-marked-circle-outline")])],1):e._e()],1)]:e._e()],2)],1)],1)],1),r("v-col",{attrs:{cols:"12",xl:"12",lg:"12",md:"12",sm:"12",xs:"12"}},[r("v-card",{staticClass:"ma-0",attrs:{width:"100vw",elevation:"0"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{attrs:{dark:"",color:"#385F73"}},[r("v-card-title",{staticClass:"text-h5"},[e._v(" My videos ")])],1)],1)],1)],1)],1),r("MyVideos")],1)],1)],1)],1):e._e()},E=[],T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"ma-0 flex",attrs:{width:"100vw",height:"50vh"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},e._l(e.videos,(function(t){return r("v-col",{key:t.title,attrs:{cols:"auto"}},[r("v-card",{attrs:{color:"#385F73",dark:""}},[t.title?r("div",[r("video",{attrs:{width:"300",height:"200",controls:"",poster:t.thumbnail}},[r("source",{attrs:{src:t.url,type:"video/mp4"}})]),1==t.private?r("div",[r("v-card-subtitle",[e._v(e._s(t.title)+": Private")])],1):r("div",[r("v-card-subtitle",[e._v(e._s(t.title)+": Public")])],1),r("v-card-actions",[r("v-btn",{attrs:{text:"",dark:""},on:{click:function(r){return e.editPage(t._id)}}},[e._v(" edit ")]),r("v-btn",{attrs:{text:"",dark:""},on:{click:function(r){return e.deletePage(t._id)}}},[e._v(" delete ")])],1)],1):r("div",[r("v-card-title",[e._v("You don't have videos")])],1)])],1)})),1)],1)],1)},L=[],P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{width:"500px"},model:{value:e.dialogEdit,callback:function(t){e.dialogEdit=t},expression:"dialogEdit"}},[r("v-card",[r("v-form",{ref:"form",attrs:{"lazy-validation":"",enctype:"mutlipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.editVid()}}},[r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"justify-center",attrs:{align:"center",dense:"","no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{outlined:"",clearable:"",rules:e.nameRules,placeholder:"Name",name:"title",dense:"","prepend-icon":"mdi-subtitles"},model:{value:e.editFile.title,callback:function(t){e.$set(e.editFile,"title",t)},expression:"editFile.title"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-file-input",{ref:"thumbnail",attrs:{label:"Thumbnail",outlined:"","show-size":"",dense:"",id:"inputThumbnail",name:"thumbnail",accept:"image/*","prepend-icon":"mdi-image"},model:{value:e.editFile.thumbnail,callback:function(t){e.$set(e.editFile,"thumbnail",t)},expression:"editFile.thumbnail"}})],1),r("v-col",{attrs:{cols:"auto"}},[r("v-radio-group",{attrs:{row:""},model:{value:e.editFile.private,callback:function(t){e.$set(e.editFile,"private",t)},expression:"editFile.private"}},[r("v-radio",{attrs:{label:"Public",value:"false",name:"private"}}),r("v-radio",{attrs:{label:"Private",value:"true",name:"private"}})],1)],1),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"#1F7087",text:"",type:"submit"}},[r("v-icon",{attrs:{dark:"","x-large":""}},[e._v("mdi-image-edit-outline")])],1)],1)],1)],1)],1)],1)],1)],1)},$=[],I={name:"Edit",props:{},data:function(){return{nameRules:[function(e){return e.length<=50||"Name must be less than 50 characters"}],dialogEdit:!0,editFile:{title:"",private:"",thumbnail:null}}},methods:{editVid:function(){var e=this,t=document.getElementById("inputThumbnail"),r=new FormData;r.append("title",this.editFile.title),r.append("private",this.editFile.private),r.append("thumbnail",t.files[0],"thumbnail");var a={method:"PUT",body:r,redirect:"follow",credentials:"include"};fetch("/api/media/edit/".concat(this.$route.params.id),a).then((function(e){return e.json()})).then((function(e){return console.log(e)})).then((function(){return e.uploadPage()})).catch((function(e){return console.log("error",e)})),this.dialogEdit=!1},uploadPage:function(){ye.push({path:"/Upload",components:be})}}},O=I,D=r("8336"),S=r("169a"),q=r("23a7"),M=r("4bd4"),B=r("132d"),U=r("67b6"),A=r("43a6"),z=r("8654"),H=Object(b["a"])(O,P,$,!1,null,null,null),G=H.exports;x()(H,{VBtn:D["a"],VCard:y["a"],VCol:_["a"],VContainer:k["a"],VDialog:S["a"],VFileInput:q["a"],VForm:M["a"],VIcon:B["a"],VRadio:U["a"],VRadioGroup:A["a"],VRow:R["a"],VTextField:z["a"]});var Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{width:"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[r("v-btn",e._g(e._b({attrs:{text:"",dark:""}},"v-btn",i,!1),a),[e._v(" delete ")])]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[r("v-card",[r("v-card-title",[e._v(" Are you sure you want to delete the video? ")]),r("v-divider"),r("v-card-actions",[r("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){return e.deleteVid()}}},[e._v(" Yes ")]),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.uploadPage()}}},[e._v(" No ")])],1)],1)],1)],1)},J=[],X={name:"Delete",data:function(){return{dialogDelete:!0}},methods:{deleteVid:function(){var e={method:"DELETE",redirect:"follow",credentials:"include"};fetch("/api/media/delete/".concat(this.$route.params.id),e),this.uploadPage()},uploadPage:function(){ye.push({path:"/Upload",components:be}).then((function(){return location.reload()}))}}},W=X,K=r("ce7e"),Q=Object(b["a"])(W,Y,J,!1,null,null,null),Z=Q.exports;x()(Q,{VBtn:D["a"],VCard:y["a"],VCardActions:V["a"],VCardTitle:V["d"],VDialog:S["a"],VDivider:K["a"]});var ee={name:"MyVideos",components:{},data:function(){return{videos:[]}},methods:{myVideos:function(){var e=this,t={method:"GET",redirect:"follow",credentials:"include"};fetch("/api/user/me",t).then((function(e){return e.json()})).then((function(t){e.videos=t.videos,console.log(e.videos)})).catch((function(e){return console.log("error",e)}))},editPage:function(e){ye.push({path:"/edit/".concat(e),components:G}).catch((function(){}))},deletePage:function(e){ye.push({path:"/delete/".concat(e),components:Z}).catch((function(){}))}},mounted:function(){this.myVideos()}},te=ee,re=(r("d3de"),Object(b["a"])(te,T,L,!1,null,"8d018f12",null)),ae=re.exports;x()(re,{VBtn:D["a"],VCard:y["a"],VCardActions:V["a"],VCardSubtitle:V["b"],VCardTitle:V["d"],VCol:_["a"],VContainer:k["a"],VRow:R["a"]});var ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[[r("div",[r("v-dialog",{attrs:{width:"500",presistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-tabs",{attrs:{dark:"","background-color":"#1F7087",grow:"",flat:"","slider-color":"#ED7B22"}},[r("v-tab",[e._v(" Login ")]),r("v-tab",[e._v(" Register ")]),r("v-tab-item",[r("v-card-title",{staticClass:"justify-center text-h4"},[r("v-icon",{attrs:{"x-large":"",color:"#1F7087"}},[e._v("mdi-account-circle-outline")])],1),r("v-slide-x-transition",[e.errorM?r("div",[r("v-card-title",{staticClass:"justify-center text-h4"},[r("v-chip",{attrs:{color:"red",outlined:"",label:"",close:""},on:{"click:close":function(t){return e.removeError()}}},[e._v(" "+e._s(e.errorM))])],1)],1):e._e()]),r("v-form",{ref:"loginform",on:{submit:function(t){return t.preventDefault(),e.login()}},model:{value:e.validLogin,callback:function(t){e.validLogin=t},expression:"validLogin"}},[r("v-container",{staticClass:"justify-center"},[r("v-row",{attrs:{justify:"center",align:"center",dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.nameRules,placeholder:"Username",name:"userName","prepend-inner-icon":"mdi-account",outlined:"",clearable:"",required:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.passwordRules,name:"password",placeholder:"Password","prepend-inner-icon":"mdi-lock",outlined:"",clearable:"",type:"password",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("v-divider"),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"#1F7087",outlined:"",block:"",disabled:!e.validLogin,type:"submit"}},[e._v(" Login ")])],1)],1)],1)],1)],1),r("v-tab-item",[e.registered?r("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[r("v-icon",{attrs:{size:"70px",color:"#84eb36"}},[e._v("mdi-checkbox-marked-circle-outline")])],1):r("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[r("v-icon",{attrs:{"x-large":"",color:"#1F7087"}},[e._v("mdi-account-circle-outline")])],1),r("v-slide-x-transition",[e.errorRegister?r("div",[r("v-card-title",{staticClass:"justify-center text-h4"},[r("v-chip",{attrs:{color:"red",outlined:"",label:"",close:""},on:{"click:close":function(t){return e.removeErrorRegister()}}},[e._v(" "+e._s(e.errorRegister))])],1)],1):e._e()]),r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.register()}},model:{value:e.validRegister,callback:function(t){e.validRegister=t},expression:"validRegister"}},[r("v-container",{staticClass:"justify-center",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}}},[r("v-row",{attrs:{justify:"center",align:"center",dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.nameRules,name:"userName",placeholder:"Username","prepend-inner-icon":"mdi-account",outlined:"",clearable:"",required:""},model:{value:e.userNameRegister,callback:function(t){e.userNameRegister=t},expression:"userNameRegister"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.emailRules,name:"email",placeholder:"Email","prepend-inner-icon":"mdi-email",outlined:"",clearable:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.passwordRules,placeholder:"Password","prepend-inner-icon":"mdi-lock",name:"password",outlined:"",clearable:"",required:"",type:"password"},model:{value:e.passwordRegister,callback:function(t){e.passwordRegister=t},expression:"passwordRegister"}})],1),r("v-divider"),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{disabled:!e.validRegister,color:"#11583E",outlined:"",block:"",type:"submit"}},[e._v(" Sign up ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)]],2)},ne=[],oe={name:"LoginView",components:{},data:function(){return{validLogin:!0,validRegister:!0,dialog:!0,success:!1,registered:!1,email:"",password:"",error:"",errorRegister:"",userName:"",passwordRegister:"",userNameRegister:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 10 characters"}],passwordRules:[function(e){return!!e||"Password is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user},errorM:function(){return this.$store.getters.error}},methods:{login:function(){var e=this,t=new FormData;t.append("userName",this.userName),t.append("password",this.password);var r={method:"POST",body:t,redirect:"follow",credentials:"include"};this.$store.dispatch("login",r).then((function(){e.success=!0,ye.back()})).catch((function(t){console.log(t),e.error=t.response.data,e.success=!1}))},register:function(){var e=this,t=new FormData;t.append("userName",this.userNameRegister),t.append("email",this.email),t.append("password",this.passwordRegister);var r={method:"POST",body:t,redirect:"follow"};fetch("/api/register",r).then((function(e){return e.text()})).then((function(t){"Created"!==t?(e.errorRegister=t,e.registered=!1):(e.reset(),e.registered=!0)})).catch((function(t){e.success=!1,e.errorRegister=t.response.data}))},logout:function(){this.$store.dispatch("logout")},removeError:function(){this.error=""},removeErrorRegister:function(){this.errorRegister=""},reset:function(){this.$refs.form.reset()}},mounted:function(){if(this.email="",this.password="",this.error="",this.errorRegister="",this.userName="",this.passwordRegister="",this.userNameRegister="",document.cookie)return this.$store.getters.isLoggedIn=!0}},se=oe,le=r("cc20"),ce=r("0789"),ue=r("71a3"),de=r("c671"),ve=r("fe57"),pe=Object(b["a"])(se,ie,ne,!1,null,null,null),me=pe.exports;x()(pe,{VBtn:D["a"],VCard:y["a"],VCardTitle:V["d"],VChip:le["a"],VCol:_["a"],VContainer:k["a"],VDialog:S["a"],VDivider:K["a"],VForm:M["a"],VIcon:B["a"],VRow:R["a"],VSlideXTransition:ce["d"],VTab:ue["a"],VTabItem:de["a"],VTabs:ve["a"],VTextField:z["a"]});var fe={name:"Upload",components:{MyVideos:ae},data:function(){return{nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],uploaded:!1,error:"",uploadFile:{title:"",private:"",mediaFile:null,thumbnail:null}}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user}},methods:{upload:function(){var e=this,t=new FormData;"true"==this.uploadFile.private?this.uploadFile.private=!0:this.uploadFile.private=!1;var r=document.getElementById("inputVideo"),a=document.getElementById("inputThumbnail");t.append("title",this.uploadFile.title),t.append("private",this.uploadFile.private),t.append("mediaFile",r.files[0],"video"),t.append("thumbnail",a.files[0],"thumbnail"),console.log(t);var i={method:"POST",body:t,redirect:"follow",credentials:"include"};fetch("/api/upload",i).then((function(e){return e.text()})).then((function(e){return console.log(e)})).then((function(){return e.uploaded=!0})).then((function(){return location.reload()})).catch((function(e){return console.log("error",e)}))},selectFile:function(){this.uploadFile.mediaFile=this.$refs.file.files[0],this.uploadFile.thumbnail=this.$refs.thumbnail.files[0]},loginPage:function(){ye.push({path:"/login",components:me}).catch((function(){}))}},created:function(){localStorage.getItem("userName")||this.loginPage()}},he=fe,ge=Object(b["a"])(he,N,E,!1,null,"261b4214",null),be=ge.exports;x()(ge,{VBtn:D["a"],VCard:y["a"],VCardTitle:V["d"],VCol:_["a"],VContainer:k["a"],VFileInput:q["a"],VForm:M["a"],VIcon:B["a"],VRadio:U["a"],VRadioGroup:A["a"],VRow:R["a"],VTextField:z["a"]}),a["a"].use(u["a"]);var we=[{path:"/",name:"Home",component:j},{path:"/upload",name:"Upload",component:be},{path:"/edit/:id",name:"Edit",component:G},{path:"/delete/:id",name:"Delete",component:Z},{path:"/login",name:"Login",component:me}],xe=new u["a"]({mode:"history",base:"/",routes:we}),ye=xe,Ve={name:"Login",components:{},data:function(){return{validLogin:!0,validRegister:!0,dialog:!1,success:!1,registered:!1,email:"",password:"",error:"",errorRegister:"",userName:"",passwordRegister:"",userNameRegister:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],passwordRules:[function(e){return!!e||"Password is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user},errorM:function(){return this.$store.getters.error}},methods:{login:function(){var e=this,t=new FormData;t.append("userName",this.userName),t.append("password",this.password);var r={method:"POST",body:t,redirect:"follow",credentials:"include"};this.$store.dispatch("login",r).then((function(){e.success=!0,e.resetLogin()})).catch((function(t){console.log(t),e.success=!1}))},register:function(){var e=this,t=new FormData;t.append("userName",this.userNameRegister),t.append("email",this.email),t.append("password",this.passwordRegister);var r={method:"POST",body:t,redirect:"follow"};fetch("/api/register",r).then((function(e){return e.text()})).then((function(t){"Created"!==t?(e.errorRegister=t,e.registered=!1):(e.reset(),e.registered=!0)})).catch((function(t){e.success=!1,e.errorRegister=t.response.data}))},logout:function(){this.$store.dispatch("logout"),ye.push({path:"/"}).catch((function(){}))},removeError:function(){this.errorM=""},removeErrorRegister:function(){this.errorRegister=""},reset:function(){this.$refs.form.reset()},resetLogin:function(){this.$refs.loginform.reset()}},mounted:function(){if(document.cookie)return this.$store.getters.isLoggedIn=!0}},_e=Ve,ke=r("8860"),Re=r("da13"),Ce=r("5d23"),Fe=r("e449"),je=Object(b["a"])(_e,l,c,!1,null,null,null),Ne=je.exports;x()(je,{VBtn:D["a"],VCard:y["a"],VCardTitle:V["d"],VChip:le["a"],VCol:_["a"],VContainer:k["a"],VDialog:S["a"],VDivider:K["a"],VForm:M["a"],VIcon:B["a"],VList:ke["a"],VListItem:Re["a"],VListItemTitle:Ce["a"],VMenu:Fe["a"],VRow:R["a"],VSlideXTransition:ce["d"],VTab:ue["a"],VTabItem:de["a"],VTabs:ve["a"],VTextField:z["a"]});var Ee={name:"Header",components:{Login:Ne},data:function(){return{drawer:!1}},methods:{uploadPage:function(){ye.push({path:"/Upload",components:be}).catch((function(){}))},home:function(){ye.push({path:"/"}).catch((function(){}))}},mounted:function(){}},Te=Ee,Le=r("40dc"),Pe=r("5bc1"),$e=r("34c3"),Ie=r("f774"),Oe=r("2fa4"),De=Object(b["a"])(Te,o,s,!1,null,null,null),Se=De.exports;x()(De,{VAppBar:Le["a"],VAppBarNavIcon:Pe["a"],VIcon:B["a"],VList:ke["a"],VListItem:Re["a"],VListItemIcon:$e["a"],VListItemTitle:Ce["a"],VNavigationDrawer:Ie["a"],VSpacer:Oe["a"],VTextField:z["a"]});var qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{dark:"",padless:"",app:""}},[r("v-card",{staticClass:"flex footer",attrs:{flat:"",tile:"",color:"#11583E"}},[r("v-card-text",{staticClass:"py-2 white--text text-center footer"},[e._v(" "+e._s((new Date).getFullYear())+" — "),r("strong",[e._v("Omedia Colab")]),r("v-btn",{staticClass:"mx-4",attrs:{dark:"",icon:"",href:"https://github.com/Ikamean/Omedia-Colab"}},[r("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-github ")])],1)],1)],1)],1)},Me=[],Be={name:"Footer"},Ue=Be,Ae=(r("68b3"),r("553a")),ze=Object(b["a"])(Ue,qe,Me,!1,null,null,null),He=ze.exports;x()(ze,{VBtn:D["a"],VCard:y["a"],VCardText:V["c"],VFooter:Ae["a"],VIcon:B["a"]});var Ge={name:"App",components:{Header:Se,Footer:He},data:function(){return{}}},Ye=Ge,Je=r("7496"),Xe=r("f6c4"),We=Object(b["a"])(Ye,i,n,!1,null,null,null),Ke=We.exports;x()(We,{VApp:Je["a"],VMain:Xe["a"]});var Qe=r("9483");Object(Qe["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ze=r("2f62");a["a"].use(Ze["a"]);var et=new Ze["a"].Store({state:{status:"",user:localStorage.getItem("userName"),error:""},mutations:{auth_request:function(e){e.status="loading"},auth_success:function(e,t){e.status="success",e.user=t},auth_error:function(e,t){e.status="error",e.error=t},logout:function(e){e.status=""}},getters:{isLoggedIn:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error}},actions:{login:function(e,t){var r=e.commit;return new Promise((function(e,a){r("auth_request"),fetch("/api/login",t).then((function(e){return e.json()})).then((function(t){console.log(t);var a=t.data.userName;localStorage.setItem("userName",a),r("auth_success",a),e(t)})).catch((function(e){r("auth_error","Wrong credentials"),a(e)}))}))},logout:function(e){var t=this,r=e.commit;return new Promise((function(e){var a={method:"POST",body:"",redirect:"follow",credentials:"include"};fetch("/api/logout",a).then((function(){r("logout"),localStorage.removeItem("userName"),t.state.status="",t.state.user=null,e()}))}))}},modules:{}}),tt=r("f309");a["a"].use(tt["a"]);var rt=new tt["a"]({});m.a.defaults.withCredentials=!0,a["a"].config.productionTip=!1,new a["a"]({router:ye,store:et,vuetify:rt,render:function(e){return e(Ke)}}).$mount("#app")},"68b3":function(e,t,r){"use strict";r("98b5")},"98b5":function(e,t,r){},d3de:function(e,t,r){"use strict";r("ec86")},ec86:function(e,t,r){}});
//# sourceMappingURL=app.4102bec2.js.map