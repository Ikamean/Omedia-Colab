(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Header"),a("v-main",[a("router-view"),a("Footer")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{attrs:{app:"",color:"#1F7087",dark:"",flat:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-text-field",{staticClass:"expanding-search",staticStyle:{"padding-top":"25px","margin-left":"10vw"},attrs:{outlined:"",placeholder:"Search","prepend-inner-icon":"mdi-magnify",dense:"",clearable:""}}),a("v-spacer"),a("Login")],1),a("v-navigation-drawer",{attrs:{fixed:"",app:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item",{attrs:{link:""},on:{click:function(t){return e.home()}}},[a("v-list-item-icon",[a("v-icon",{attrs:{router:""}},[e._v("mdi-home")])],1),a("v-list-item-title",[e._v("Home")])],1),a("v-list-item",{attrs:{link:""},on:{click:function(t){return e.uploadPage()}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-cloud-upload-outline")])],1),a("v-list-item-title",[e._v("Upload video")])],1)],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[e.user?[a("div",[a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{text:"",dark:""}},"v-btn",n,!1),r),[e._v(" "+e._s(e.user)+" ")])]}}],null,!1,3316339538)},[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.logout()}}},[a("v-card",{attrs:{width:"200px"}},[a("v-list",[a("v-list-item",{attrs:{link:""}},[a("v-btn",{staticClass:"d-flex align-center",attrs:{text:"",type:"submit"}},[a("v-icon",[e._v("mdi-logout")])],1),a("v-list-item-title",[e._v(" Logout ")])],1)],1)],1)],1)],1)],1)])]:[a("div",[a("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"d-flex align-center",attrs:{text:""}},"v-btn",n,!1),r),[a("v-icon",{attrs:{large:""}},[e._v("mdi-account-circle-outline")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-tabs",{attrs:{dark:"","background-color":"#1F7087",grow:"",flat:"","slider-color":"#ED7B22"}},[a("v-tab",[e._v(" Login ")]),a("v-tab",[e._v(" Register ")]),a("v-tab-item",[a("v-card-title",{staticClass:"justify-center text-h4"},[a("v-icon",{attrs:{"x-large":"",color:"#1F7087"}},[e._v("mdi-account-circle-outline")])],1),a("v-slide-x-transition",[e.error?a("div",[a("v-card-title",{staticClass:"justify-center text-h4"},[a("v-chip",{attrs:{color:"red",outlined:"",label:"",close:""},on:{"click:close":function(t){return e.removeError()}}},[e._v(" "+e._s(e.error))])],1)],1):e._e()]),a("v-form",{on:{submit:function(t){return t.preventDefault(),e.login()}},model:{value:e.validLogin,callback:function(t){e.validLogin=t},expression:"validLogin"}},[a("v-container",{staticClass:"justify-center"},[a("v-row",{attrs:{justify:"center",align:"center",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.nameRules,placeholder:"Username",name:"userName","prepend-inner-icon":"mdi-account",outlined:"",clearable:"",required:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.passwordRules,name:"password",placeholder:"Password","prepend-inner-icon":"mdi-lock",outlined:"",clearable:"",type:"password",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-divider"),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"#1F7087",outlined:"",block:"",disabled:!e.validLogin,type:"submit"}},[e._v(" Login ")])],1)],1)],1)],1)],1),a("v-tab-item",[e.registered?a("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[a("v-icon",{attrs:{size:"70px",color:"#84eb36"}},[e._v("mdi-checkbox-marked-circle-outline")])],1):a("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[a("v-icon",{attrs:{"x-large":"",color:"#1F7087"}},[e._v("mdi-account-circle-outline")])],1),a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.register()}},model:{value:e.validRegister,callback:function(t){e.validRegister=t},expression:"validRegister"}},[a("v-container",{staticClass:"justify-center",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}}},[a("v-row",{attrs:{justify:"center",align:"center",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.nameRules,name:"userName",placeholder:"Username","prepend-inner-icon":"mdi-account",outlined:"",clearable:"",required:""},model:{value:e.userNameRegister,callback:function(t){e.userNameRegister=t},expression:"userNameRegister"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.emailRules,name:"email",placeholder:"Email","prepend-inner-icon":"mdi-email",outlined:"",clearable:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.passwordRules,placeholder:"Password","prepend-inner-icon":"mdi-lock",name:"password",outlined:"",clearable:"",required:"",type:"password"},model:{value:e.passwordRegister,callback:function(t){e.passwordRegister=t},expression:"passwordRegister"}})],1),a("v-divider"),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{disabled:!e.validRegister,color:"#11583E",outlined:"",block:"",type:"submit"}},[e._v(" Sign up ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)]],2)},c=[],u=(a("d3b7"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{justify:"center"}},e._l(e.videos,(function(t,r){return a("v-col",{key:r,attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"6",xs:"12"}},[a("v-card",{staticClass:"ml-4",attrs:{tile:"",hover:"",elevation:"0"}},[a("video",{attrs:{width:"300",height:"250",controls:"",poster:t.thumbnail}},[a("source",{attrs:{src:t.url,type:"video/mp4"}})]),a("v-card-title",[e._v(e._s(t.title))]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}}),a("div",[e._v(e._s(t.author))]),a("v-row",{staticClass:"align-center"},[a("v-col",{attrs:{cols:"12"}},[a("div",[e._v(e._s(t.created))])])],1)],1)],1)],1)})),1)],1)},v=[],p=a("bc3a"),m=a.n(p),f=m.a.create({baseURL:"https://omedia-colab.herokuapp.com/",timout:5e3,headers:{"Content-Type":"application/x-www-form-urlencoded"}}),h={name:"Home",components:{},data:function(){return{videos:[]}},methods:{getVideos:function(){var e=this;f.get("/api/media").then((function(t){e.videos=t.data.data,console.log(e.videos)})).catch((function(e){console.log(e)}))}},created:function(){this.getVideos()}},g=h,b=a("2877"),w=a("6544"),x=a.n(w),V=a("b0af"),y=a("99d9"),k=a("62ad"),_=a("a523"),F=a("0fd9"),C=Object(b["a"])(g,d,v,!1,null,"081b9e50",null),R=C.exports;x()(C,{VCard:V["a"],VCardText:y["c"],VCardTitle:y["d"],VCol:k["a"],VContainer:_["a"],VRow:F["a"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("div",[a("v-container",{staticClass:"mt-4",attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"auto","no-gutters":""}},[a("v-card",{attrs:{width:"80vw"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":"",enctype:"mutlipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.upload()}}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"justify-center",attrs:{align:"center",dense:"","no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",clearable:"",rules:e.nameRules,placeholder:"Name",name:"title",required:"",dense:"","prepend-icon":"mdi-subtitles"},model:{value:e.uploadFile.title,callback:function(t){e.$set(e.uploadFile,"title",t)},expression:"uploadFile.title"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-file-input",{attrs:{label:"Video",outlined:"","show-size":"",dense:"",id:"inputVideo",name:"file",accept:"video/*","prepend-icon":"mdi-video"},model:{value:e.uploadFile.mediaFile,callback:function(t){e.$set(e.uploadFile,"mediaFile",t)},expression:"uploadFile.mediaFile"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-file-input",{attrs:{label:"Thumbnail",outlined:"","show-size":"",dense:"",id:"inputThumbnail",name:"thumbnail",accept:"image/*","prepend-icon":"mdi-image"},model:{value:e.uploadFile.thumbnail,callback:function(t){e.$set(e.uploadFile,"thumbnail",t)},expression:"uploadFile.thumbnail"}})],1),a("v-col",{attrs:{cols:"auto"}},[a("v-radio-group",{attrs:{row:""},model:{value:e.uploadFile.private,callback:function(t){e.$set(e.uploadFile,"private",t)},expression:"uploadFile.private"}},[a("v-radio",{attrs:{label:"Public",value:"false",name:"private"}}),a("v-radio",{attrs:{label:"Private",value:"true",name:"private"}})],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"#11583E",text:"",type:"submit"}},[a("v-icon",{attrs:{dark:"","x-large":""}},[e._v("mdi-cloud-upload-outline")])],1)],1)],1),e.uploaded?[a("v-card",{attrs:{color:"#1F7087",dark:""}},[e.registered?a("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[a("v-icon",{attrs:{size:"70px",color:"#84eb36"}},[e._v("mdi-checkbox-marked-circle-outline")])],1):e._e()],1)]:e._e()],2)],1)],1)],1),a("v-col",{attrs:{cols:"12",xl:"12",lg:"12",md:"12",sm:"12",xs:"12"}},[a("v-card",{staticClass:"ma-0",attrs:{width:"100vw",elevation:"0"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{dark:"",color:"#385F73"}},[a("v-card-title",{staticClass:"text-h5"},[e._v(" My videos ")])],1)],1)],1)],1)],1),a("MyVideos")],1)],1)],1)],1):e._e()},j=[],E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-0 flex",attrs:{width:"100vw",height:"50vh"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},e._l(e.videos,(function(t){return a("v-col",{key:t.title,attrs:{cols:"auto"}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[t.title?a("div",[a("v-img",{attrs:{src:t.thumbnail,width:"300",height:"200"}}),1==t.private?a("div",[a("v-card-subtitle",[e._v(e._s(t.title)+": Private")])],1):a("div",[a("v-card-subtitle",[e._v(e._s(t.title)+": Public")])],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",dark:""},on:{click:function(a){return e.editPage(t._id)}}},[e._v(" edit ")]),a("v-btn",{attrs:{text:"",dark:""},on:{click:function(a){return e.deletePage(t._id)}}},[e._v(" delete ")])],1)],1):a("div",[a("v-card-title",[e._v("You don't have videos")])],1)])],1)})),1)],1)],1)},T=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500px"},model:{value:e.dialogEdit,callback:function(t){e.dialogEdit=t},expression:"dialogEdit"}},[a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":"",enctype:"mutlipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.editVid()}}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"justify-center",attrs:{align:"center",dense:"","no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",clearable:"",rules:e.nameRules,placeholder:"Name",name:"title",dense:"","prepend-icon":"mdi-subtitles"},model:{value:e.editFile.title,callback:function(t){e.$set(e.editFile,"title",t)},expression:"editFile.title"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-file-input",{ref:"thumbnail",attrs:{label:"Thumbnail",outlined:"","show-size":"",dense:"",id:"inputThumbnail",name:"thumbnail",accept:"image/*","prepend-icon":"mdi-image"},model:{value:e.editFile.thumbnail,callback:function(t){e.$set(e.editFile,"thumbnail",t)},expression:"editFile.thumbnail"}})],1),a("v-col",{attrs:{cols:"auto"}},[a("v-radio-group",{attrs:{row:""},model:{value:e.editFile.private,callback:function(t){e.$set(e.editFile,"private",t)},expression:"editFile.private"}},[a("v-radio",{attrs:{label:"Public",value:"false",name:"private"}}),a("v-radio",{attrs:{label:"Private",value:"true",name:"private"}})],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"#1F7087",text:"",type:"submit"}},[a("v-icon",{attrs:{dark:"","x-large":""}},[e._v("mdi-image-edit-outline")])],1)],1)],1)],1)],1)],1)],1)],1)},L=[],$={name:"Edit",props:{},data:function(){return{nameRules:[function(e){return e.length<=50||"Name must be less than 50 characters"}],dialogEdit:!0,editFile:{title:"",private:"",thumbnail:null}}},methods:{editVid:function(){var e=this,t=document.getElementById("inputThumbnail"),a=new FormData;a.append("title",this.editFile.title),a.append("private",this.editFile.private),a.append("thumbnail",t.files[0],"thumbnail");var r={method:"PUT",body:a,redirect:"follow",credentials:"include"};fetch("/api/media/edit/".concat(this.$route.params.id),r).then((function(e){return e.json()})).then((function(e){return console.log(e)})).then((function(){return e.uploadPage()})).catch((function(e){return console.log("error",e)})),this.dialogEdit=!1},uploadPage:function(){Ve.push({path:"/Upload",components:be}).catch((function(){}))}}},I=$,O=a("8336"),D=a("169a"),S=a("23a7"),q=a("4bd4"),B=a("132d"),U=a("67b6"),A=a("43a6"),M=a("8654"),z=Object(b["a"])(I,P,L,!1,null,null,null),H=z.exports;x()(z,{VBtn:O["a"],VCard:V["a"],VCol:k["a"],VContainer:_["a"],VDialog:D["a"],VFileInput:S["a"],VForm:q["a"],VIcon:B["a"],VRadio:U["a"],VRadioGroup:A["a"],VRow:F["a"],VTextField:M["a"]});var G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{text:"",dark:""}},"v-btn",n,!1),r),[e._v(" delete ")])]}}]),model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",[e._v(" Are you sure you want to delete the video? ")]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){return e.deleteVid()}}},[e._v(" Yes ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.uploadPage()}}},[e._v(" No ")])],1)],1)],1)],1)},Y=[],J={name:"Delete",data:function(){return{dialogDelete:!0}},methods:{deleteVid:function(){var e={method:"DELETE",redirect:"follow",credentials:"include"};fetch("/api/media/delete/".concat(this.$route.params.id),e),this.uploadPage()},uploadPage:function(){Ve.push({path:"/Upload",components:be}).catch((function(){}))}}},X=J,K=a("ce7e"),Q=Object(b["a"])(X,G,Y,!1,null,null,null),W=Q.exports;x()(Q,{VBtn:O["a"],VCard:V["a"],VCardActions:y["a"],VCardTitle:y["d"],VDialog:D["a"],VDivider:K["a"]});var Z={name:"MyVideos",components:{},data:function(){return{videos:[]}},methods:{myVideos:function(){var e=this,t={method:"GET",redirect:"follow",credentials:"include"};fetch("/api/user/me",t).then((function(e){return e.json()})).then((function(t){e.videos=t.videos,console.log(e.videos)})).catch((function(e){return console.log("error",e)}))},editPage:function(e){Ve.push({path:"/edit/".concat(e),components:H}).catch((function(){}))},deletePage:function(e){Ve.push({path:"/delete/".concat(e),components:W}).catch((function(){}))}},mounted:function(){this.myVideos()}},ee=Z,te=(a("ee8c"),a("adda")),ae=Object(b["a"])(ee,E,T,!1,null,"6be2d820",null),re=ae.exports;x()(ae,{VBtn:O["a"],VCard:V["a"],VCardActions:y["a"],VCardSubtitle:y["b"],VCardTitle:y["d"],VCol:k["a"],VContainer:_["a"],VImg:te["a"],VRow:F["a"]});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[[a("div",[a("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-tabs",{attrs:{dark:"","background-color":"#1F7087",grow:"",flat:"","slider-color":"#ED7B22"}},[a("v-tab",[e._v(" Login ")]),a("v-tab",[e._v(" Register ")]),a("v-tab-item",[a("v-card-title",{staticClass:"justify-center text-h4"},[a("v-icon",{attrs:{"x-large":"",color:"#1F7087"}},[e._v("mdi-account-circle-outline")])],1),a("v-slide-x-transition",[e.error?a("div",[a("v-card-title",{staticClass:"justify-center text-h4"},[a("v-chip",{attrs:{color:"red",outlined:"",label:"",close:""},on:{"click:close":function(t){return e.removeError()}}},[e._v(" "+e._s(e.error))])],1)],1):e._e()]),a("v-form",{on:{submit:function(t){return t.preventDefault(),e.login()}},model:{value:e.validLogin,callback:function(t){e.validLogin=t},expression:"validLogin"}},[a("v-container",{staticClass:"justify-center"},[a("v-row",{attrs:{justify:"center",align:"center",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.nameRules,placeholder:"Username",name:"userName","prepend-inner-icon":"mdi-account",outlined:"",clearable:"",required:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.passwordRules,name:"password",placeholder:"Password","prepend-inner-icon":"mdi-lock",outlined:"",clearable:"",type:"password",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-divider"),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{color:"#1F7087",outlined:"",block:"",disabled:!e.validLogin,type:"submit"}},[e._v(" Login ")])],1)],1)],1)],1)],1),a("v-tab-item",[e.registered?a("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[a("v-icon",{attrs:{size:"70px",color:"#84eb36"}},[e._v("mdi-checkbox-marked-circle-outline")])],1):a("v-card-title",{staticClass:"justify-center text-h4",attrs:{transition:"scale-transition"}},[a("v-icon",{attrs:{"x-large":"",color:"#1F7087"}},[e._v("mdi-account-circle-outline")])],1),a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.register()}},model:{value:e.validRegister,callback:function(t){e.validRegister=t},expression:"validRegister"}},[a("v-container",{staticClass:"justify-center",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}}},[a("v-row",{attrs:{justify:"center",align:"center",dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.nameRules,name:"userName",placeholder:"Username","prepend-inner-icon":"mdi-account",outlined:"",clearable:"",required:""},model:{value:e.userNameRegister,callback:function(t){e.userNameRegister=t},expression:"userNameRegister"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.emailRules,name:"email",placeholder:"Email","prepend-inner-icon":"mdi-email",outlined:"",clearable:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{rules:e.passwordRules,placeholder:"Password","prepend-inner-icon":"mdi-lock",name:"password",outlined:"",clearable:"",required:"",type:"password"},model:{value:e.passwordRegister,callback:function(t){e.passwordRegister=t},expression:"passwordRegister"}})],1),a("v-divider"),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{disabled:!e.validRegister,color:"#11583E",outlined:"",block:"",type:"submit"}},[e._v(" Sign up ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)]],2)},ie=[],oe={name:"LoginView",components:{},data:function(){return{validLogin:!0,validRegister:!0,dialog:!0,success:!1,registered:!1,email:"",password:"",error:"",userName:"",passwordRegister:"",userNameRegister:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],passwordRules:[function(e){return!!e||"Password is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user}},methods:{login:function(){var e=this,t=new FormData;t.append("userName",this.userName),t.append("password",this.password);var a={method:"POST",body:t,redirect:"follow",credentials:"include"};this.$store.dispatch("login",a).then((function(){e.success=!0,Ve.back()})).catch((function(t){console.log(t),e.error=t.response.data,e.success=!1}))},register:function(){var e=this,t=new FormData;t.append("userName",this.userNameRegister),t.append("email",this.email),t.append("password",this.passwordRegister);var a={method:"POST",body:t,redirect:"follow"};fetch("/api/register",a).then((function(e){return e.text()})).then((function(e){return console.log(e)})).then((function(){e.reset(),e.registered=!0})).catch((function(t){e.success=!1,e.error=t.response.data,console.log(e.error)}))},logout:function(){this.$store.dispatch("logout")},removeError:function(){this.error=""},reset:function(){this.$refs.form.reset()}},mounted:function(){if(document.cookie)return this.$store.getters.isLoggedIn=!0}},se=oe,le=a("cc20"),ce=a("0789"),ue=a("71a3"),de=a("c671"),ve=a("fe57"),pe=Object(b["a"])(se,ne,ie,!1,null,null,null),me=pe.exports;x()(pe,{VBtn:O["a"],VCard:V["a"],VCardTitle:y["d"],VChip:le["a"],VCol:k["a"],VContainer:_["a"],VDialog:D["a"],VDivider:K["a"],VForm:q["a"],VIcon:B["a"],VRow:F["a"],VSlideXTransition:ce["d"],VTab:ue["a"],VTabItem:de["a"],VTabs:ve["a"],VTextField:M["a"]});var fe={name:"Upload",components:{MyVideos:re},data:function(){return{nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],uploaded:!1,error:"",uploadFile:{title:"",private:"",mediaFile:null,thumbnail:null}}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user}},methods:{upload:function(){var e=this,t=new FormData;"true"==this.uploadFile.private?this.uploadFile.private=!0:this.uploadFile.private=!1;var a=document.getElementById("inputVideo"),r=document.getElementById("inputThumbnail");t.append("title",this.uploadFile.title),t.append("private",this.uploadFile.private),t.append("mediaFile",a.files[0],"video"),t.append("thumbnail",r.files[0],"thumbnail"),console.log(t);var n={method:"POST",body:t,redirect:"follow",credentials:"include"};fetch("/api/upload",n).then((function(e){return e.text()})).then((function(e){return console.log(e)})).then((function(){return e.uploaded=!0})).catch((function(e){return console.log("error",e)}))},selectFile:function(){this.uploadFile.mediaFile=this.$refs.file.files[0],this.uploadFile.thumbnail=this.$refs.thumbnail.files[0]},loginPage:function(){Ve.push({path:"/login",components:me}).catch((function(){}))}},created:function(){localStorage.getItem("userName")||this.loginPage()}},he=fe,ge=Object(b["a"])(he,N,j,!1,null,"37a6c272",null),be=ge.exports;x()(ge,{VBtn:O["a"],VCard:V["a"],VCardTitle:y["d"],VCol:k["a"],VContainer:_["a"],VFileInput:S["a"],VForm:q["a"],VIcon:B["a"],VRadio:U["a"],VRadioGroup:A["a"],VRow:F["a"],VTextField:M["a"]}),r["a"].use(u["a"]);var we=[{path:"/",name:"Home",component:R},{path:"/upload",name:"Upload",component:be},{path:"/edit/:id",name:"Edit",component:H},{path:"/delete/:id",name:"Delete",component:W},{path:"/login",name:"Login",component:me}],xe=new u["a"]({mode:"history",base:"/",routes:we}),Ve=xe,ye={name:"Login",components:{},data:function(){return{validLogin:!0,validRegister:!0,dialog:!1,success:!1,registered:!1,email:"",password:"",error:"",userName:"",passwordRegister:"",userNameRegister:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],passwordRules:[function(e){return!!e||"Password is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user}},methods:{login:function(){var e=this,t=new FormData;t.append("userName",this.userName),t.append("password",this.password);var a={method:"POST",body:t,redirect:"follow",credentials:"include"};this.$store.dispatch("login",a).then((function(){e.success=!0})).catch((function(t){console.log(t),e.error=t.response.data,e.success=!1}))},register:function(){var e=this,t=new FormData;t.append("userName",this.userNameRegister),t.append("email",this.email),t.append("password",this.passwordRegister);var a={method:"POST",body:t,redirect:"follow"};fetch("/api/register",a).then((function(e){return e.text()})).then((function(e){return console.log(e)})).then((function(){e.reset(),e.registered=!0})).catch((function(t){e.success=!1,e.error=t.response.data,console.log(e.error)}))},logout:function(){this.$store.dispatch("logout"),Ve.push({path:"/"}).catch((function(){}))},removeError:function(){this.error=""},reset:function(){this.$refs.form.reset()}},mounted:function(){if(document.cookie)return this.$store.getters.isLoggedIn=!0}},ke=ye,_e=a("8860"),Fe=a("da13"),Ce=a("5d23"),Re=a("e449"),Ne=Object(b["a"])(ke,l,c,!1,null,null,null),je=Ne.exports;x()(Ne,{VBtn:O["a"],VCard:V["a"],VCardTitle:y["d"],VChip:le["a"],VCol:k["a"],VContainer:_["a"],VDialog:D["a"],VDivider:K["a"],VForm:q["a"],VIcon:B["a"],VList:_e["a"],VListItem:Fe["a"],VListItemTitle:Ce["a"],VMenu:Re["a"],VRow:F["a"],VSlideXTransition:ce["d"],VTab:ue["a"],VTabItem:de["a"],VTabs:ve["a"],VTextField:M["a"]});var Ee={name:"Header",components:{Login:je},data:function(){return{drawer:!1}},methods:{uploadPage:function(){Ve.push({path:"/Upload",components:be}).catch((function(){}))},home:function(){Ve.push({path:"/"}).catch((function(){}))}},mounted:function(){}},Te=Ee,Pe=a("40dc"),Le=a("5bc1"),$e=a("34c3"),Ie=a("f774"),Oe=a("2fa4"),De=Object(b["a"])(Te,o,s,!1,null,null,null),Se=De.exports;x()(De,{VAppBar:Pe["a"],VAppBarNavIcon:Le["a"],VIcon:B["a"],VList:_e["a"],VListItem:Fe["a"],VListItemIcon:$e["a"],VListItemTitle:Ce["a"],VNavigationDrawer:Ie["a"],VSpacer:Oe["a"],VTextField:M["a"]});var qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{dark:"",padless:"",app:""}},[a("v-card",{staticClass:"flex footer",attrs:{flat:"",tile:"",color:"#11583E"}},[a("v-card-text",{staticClass:"py-2 white--text text-center footer"},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("Omedia Colab")]),a("v-btn",{staticClass:"mx-4",attrs:{dark:"",icon:"",href:"https://github.com/Ikamean/Omedia-Colab"}},[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-github ")])],1)],1)],1)],1)},Be=[],Ue={name:"Footer"},Ae=Ue,Me=(a("68b3"),a("553a")),ze=Object(b["a"])(Ae,qe,Be,!1,null,null,null),He=ze.exports;x()(ze,{VBtn:O["a"],VCard:V["a"],VCardText:y["c"],VFooter:Me["a"],VIcon:B["a"]});var Ge={name:"App",components:{Header:Se,Footer:He},data:function(){return{}}},Ye=Ge,Je=a("7496"),Xe=a("f6c4"),Ke=Object(b["a"])(Ye,n,i,!1,null,null,null),Qe=Ke.exports;x()(Ke,{VApp:Je["a"],VMain:Xe["a"]});var We=a("9483");Object(We["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ze=a("2f62");r["a"].use(Ze["a"]);var et=new Ze["a"].Store({state:{status:"",user:localStorage.getItem("userName")},mutations:{auth_request:function(e){e.status="loading"},auth_success:function(e,t){e.status="success",e.user=t},auth_error:function(e){e.status="error"},logout:function(e){e.status=""}},getters:{isLoggedIn:function(e){return e.status},user:function(e){return e.user}},actions:{login:function(e,t){var a=e.commit;return new Promise((function(e,r){a("auth_request"),fetch("/api/login",t).then((function(e){return e.json()})).then((function(t){console.log(t);var r=t.data.userName;localStorage.setItem("userName",r),console.log(r),a("auth_success",r),e(t),console.log(document.cookie)})).catch((function(e){a("auth_error"),r(e)}))}))},logout:function(e){var t=this,a=e.commit;return new Promise((function(e){var r={method:"POST",body:"",redirect:"follow",credentials:"include"};fetch("/api/logout",r).then((function(){a("logout"),localStorage.removeItem("userName"),t.state.status="",t.state.user=null,e()}))}))}},modules:{}}),tt=a("f309");r["a"].use(tt["a"]);var at=new tt["a"]({});m.a.defaults.withCredentials=!0,r["a"].config.productionTip=!1,new r["a"]({router:Ve,store:et,vuetify:at,render:function(e){return e(Qe)}}).$mount("#app")},"68b3":function(e,t,a){"use strict";a("98b5")},"6c90":function(e,t,a){},"98b5":function(e,t,a){},ee8c:function(e,t,a){"use strict";a("6c90")}});
//# sourceMappingURL=app.22d4e7a6.js.map