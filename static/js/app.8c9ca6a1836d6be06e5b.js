webpackJsonp([1],{"4bNg":function(t,e){},"7QPZ":function(t,e){},"7zck":function(t,e){},Agvs:function(t,e){},DyoL:function(t,e){t.exports={_from:"buttercms",_id:"buttercms@1.1.1",_inBundle:!1,_integrity:"sha512-Td5d7drciokW2gtlbOEbmlpaYmu3kNT80VKyN7JyrKHPyTJGT1l1w5hkS1ATKm3ulGv4lzXEYZd2jqetBrJkiQ==",_location:"/buttercms",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"buttercms",name:"buttercms",escapedName:"buttercms",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/buttercms/-/buttercms-1.1.1.tgz",_shasum:"fcd502df47e9157e4f6d6fb18b167d0ba056103e",_spec:"buttercms",_where:"C:\\Users\\USER\\documents\\vueProject2\\buttercms-project",author:{name:"ButterCMS",email:"support@buttercms.com"},bugs:{url:"https://github.com/buttercms/buttercms-js/issues"},bundleDependencies:!1,dependencies:{axios:"0.9.1"},deprecated:!1,description:"ButterCMS API Client",devDependencies:{"uglify-js":"^2.8.22",webpack:"^2.5.0"},engines:{node:">=0.10.32"},homepage:"https://github.com/buttercms/buttercms-js",keywords:["buttercms","butter","cms","api"],license:"MIT",main:"lib/butter.js",name:"buttercms",repository:{type:"git",url:"git://github.com/buttercms/buttercms-js.git"},scripts:{build:"webpack && uglifyjs ./dist/butter.js -c -m -o ./dist/butter.min.js"},version:"1.1.1"}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},o,!1,function(t){a("7QPZ")},null,null).exports,n=a("/ocq"),r=a("a19Z"),l=a.n(r)()("34d3d54d8f742ba36133328ca6b67a50a85ddfe1"),c={name:"customer-page",data:function(){return{page:{fields:{}}}},methods:{getPage:function(){var t=this;l.page.retrieve("*","homepage").then(function(e){console.log(e.data.data),t.page=e.data.data}).catch(function(t){console.log(t)})},goBlog:function(){this.$router.push({name:"blog-home"})}},created:function(){this.getPage()}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"customer-page"}},[e("app-header"),this._v(" "),this._m(0),this._v(" "),e("app-footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{attrs:{id:"showcase"}},[e("div",[e("h1",[this._v("Welcome To The Mariposaweb")]),this._v(" "),e("p",[this._v(" I make progressive apps using the latest JavaScript techniques and Vue. ")])])])}]};var d=a("VU/8")(c,u,!1,function(t){a("rp/n")},null,null).exports,p={name:"blog-home",data:function(){return{page_title:"Blog",posts:[]}},methods:{getPosts:function(){var t=this;l.post.list({page:1,page_size:10}).then(function(e){t.posts=e.data.data})}},created:function(){this.getPosts()}};function m(){var t=document.getElementById("jumboAnimation");setTimeout(function(){t.style.color="red"},1e3),setTimeout(function(){t.style.color="white"},2e3),setTimeout(function(){t.style.color="yellow"},3e3),setTimeout(function(){t.style.color="#00BFFF"},4e3),setTimeout(function(){t.style.color="#1B5E20"},5e3)}m(),setInterval(m,6e3);var v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-header"),t._v(" "),a("div",{attrs:{id:"blog-home"}},[t._m(0),t._v(" "),a("div",{staticClass:"spacing"}),t._v(" "),a("div",{staticClass:"grey lighten-3",staticStyle:{"max-width":"600px",margin:"auto"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},t._l(t.posts,function(e,s){return a("div",{key:e.slug+"_"+s},[a("v-card",{attrs:{raised:"",color:"grey lighten-3"}},[a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/blog/"+e.slug}},[a("article",{staticClass:"media "},[a("figure",[e.featured_image?a("img",{attrs:{src:e.featured_image,alt:" "}}):a("img",{attrs:{src:"http://via.placeholder.com/250x250 ",alt:" "}})]),t._v(" "),a("v-card-text",[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.summary))]),t._v(" "),a("v-btn",{attrs:{flat:"",dark:""}},[t._v("Read More")])],1)],1)])],1)],1)],1)}))],1)],1)]),t._v(" "),a("div",{attrs:{id:"footSpace"}}),t._v(" "),a("app-footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden-md-and-down",attrs:{id:"container"}},[e("div",{staticClass:"circleBase type1",attrs:{id:"jumboAnimation"}},[this._v("\n                Blogging\n            ")])])}]};var h=a("VU/8")(p,v,!1,function(t){a("XW3t")},"data-v-f45b8a16",null).exports,g={name:"blog-post",data:function(){return{post:{}}},methods:{getPost:function(){var t=this;l.post.retrieve(this.$route.params.slug).then(function(e){console.log(e.data),t.post=e.data}).catch(function(t){console.log(t)})}},watch:{$route:function(t,e){this.getPost()}},created:function(){this.getPost()}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"blog-post"}},[a("app-header"),t._v(" "),a("div",{attrs:{id:"spacing"}}),t._v(" "),a("h1",[t._v(t._s(t.post.data.title))]),t._v(" "),a("h4",[t._v(t._s(t.post.data.author.first_name)+" "+t._s(t.post.data.author.last_name))]),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.post.data.body)}}),t._v(" "),t.post.meta.previous_post?a("router-link",{staticClass:"button",staticStyle:{"text-decoration":"none"},attrs:{to:/blog/+t.post.meta.previous_post.slug}},[t._v("Previous \n        ")]):t._e(),t._v(" "),t.post.meta.next_post?a("router-link",{staticClass:"button",staticStyle:{"text-decoration":"none"},attrs:{to:/blog/+t.post.meta.next_post.slug}},[t._v("Next\n        ")]):t._e()],1)])},staticRenderFns:[]};var _=a("VU/8")(g,f,!1,function(t){a("tyN/")},null,null).exports,b={name:"projects",data:function(){return{show:!1,lorem:"Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam \n            ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim\n            in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.",cards:[{title:"Recipe Box",link:"https://recipes-ddb43.firebaseapp.com/#/",text:"Goal: User can create, edit, delete and save recipes. Technologies: Vue, Firestore, MaterializeCSS, JavaScript, ES6",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529491072/recipeBox.jpg",flex:6},{title:"Markdown Previewer",link:"http://mellow-sock.surge.sh/",text:"Goal: User can type GitHub-flavored Markdown into a text area. User can see a preview of the output of his or her markdown that is updated as he or she types Technologies: ES6, React, CSS3, Javascript",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529501983/markdown.png",flex:6},{title:"Calculator",link:"https://dansimonson.github.io/calculator/",text:"Goal: A fully functioning calculator Technologies: JavaScript, Jquery, Bootstrap",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529504760/calculator.jpg",flex:6},{title:"Simon Game",link:"https://dansimonson.github.io/simongame/",text:"Goal: Simulate the simon game online  Technologies: Javascript, CSS3, HTML",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529505532/simon.jpg",flex:6},{title:"Wikipedia Search Engine",link:"https://dansimonson.github.io/wikiviewer/",text:"Goal: Learn new stuff with a wikipedia search engine that uses the Wikipedia api Technologies: Javascript, CSS3, HTML",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529506690/wikipedia.jpg",flex:6},{title:"Twitch",link:"https://dansimonson.github.io/twitchtv/",text:"Goal: Use the Twitch api for streaming shows Technologies: Javascript, CSS3, HTML",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529506574/twitch.png",flex:6},{title:"Local Weather",link:"https://dansimonson.github.io/localweather/",text:"Goal: Access a weather api to find the local weather Technologies: Javascript, CSS3, HTML",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529508180/weather.jpg",flex:6},{title:"Pomodoro Clock",link:"https://dansimonson.github.io/pomodoro/",text:"Goal: A Pomodoro clock to help with time management. Technologies: Javascript, CSS3, HTML",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529508744/pomodoro.png",flex:6},{title:"Tictactoe Game",link:"https://dansimonson.github.io/tictactoe/",text:"Goal: An online TicTacToe game Technologies: Javascript, CSS3, HTML",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529508887/tictactoe.jpg",flex:6},{title:"Random Quote Machine",link:"https://dansimonson.github.io/randomquotemachine/#",text:"Goal: An online random quote generator that can tweet. Technologies: Javascript, CSS3, HTML",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529509063/quote.jpg",flex:6},{title:"Todo list For Procrastinators",link:"https://todolistforprocrastinators.herokuapp.com/todo",text:"Goal: Full stack app with Javascript on the front end and Express and MongoDB running in the background. App deployed on Heroku. Technologies: Javascript, CSS3, HTML",src:"https://res.cloudinary.com/dmglopmul/image/upload/v1529509174/todoList.jpg",flex:6}]}},methods:{display:function(t){console.log(t.link),window.open(t.link,"_blank").focus()}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("app-header"),t._v(" "),a("div",{attrs:{id:"spacer"}}),t._v(" "),a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,function(e){return a("v-flex",t._b({key:e.title,attrs:{"d-flex":"",xs12:"",md6:""}},"v-flex",((s={})["xs"+e.flex]=!0,s),!1),[a("v-card",[a("v-card-media",{attrs:{src:e.src,height:"200px"}}),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"cardBtn",attrs:{ripple:"",flat:""}},[t._v(t._s(e.title))]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"btnStrng",attrs:{color:"blue-grey",dark:""},nativeOn:{click:function(a){t.display(e)}}},[t._v("View\n                            "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("laptop_chromebook")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),t._v(" "),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("\n                            "+t._s(e.text)+"\n                        ")])],1)],1)],1);var s}))],1),t._v(" "),a("div",{attrs:{id:"footSpace"}}),t._v(" "),a("app-footer")],1)},staticRenderFns:[]};var k=a("VU/8")(b,w,!1,function(t){a("Z5en")},null,null).exports,x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("app-header"),t._v(" "),a("div",{attrs:{id:"spacer"}}),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("h4",[t._v("Contact")])])],1),t._v(" "),a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-form",{attrs:{action:"https://formspree.io/dansimonson@mariposaweb.net",method:"POST"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{name:"nm",rules:t.nameRules,counter:10,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{name:"_replyto",rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("v-text-field",{attrs:{name:"MSG",label:"Message","multi-line":"",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),a("v-flex",{attrs:{s12:"",sm6:"","offset-sm3":""}},[a("v-btn",{attrs:{type:"submit",value:"Send"}},[t._v("Submit")])],1)],1)],1)],1)],1),t._v(" "),t._m(0),t._v(" "),a("div",{attrs:{id:"footSpace"}}),t._v(" "),a("app-footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mapouter"},[e("div",{staticClass:"gmap_canvas"},[e("iframe",{attrs:{width:"600",height:"500",id:"gmap_canvas",src:"https://maps.google.com/maps?q=%20silang&t=&z=13&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}}),this._v(" "),e("a",{attrs:{href:"https://www.maps-erstellen.de"}})])])}]};var y=a("VU/8")({data:function(){return{valid:!1,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}]}}},x,!1,function(t){a("Agvs")},"data-v-9c005424",null).exports;s.a.use(n.a);var S=new n.a({mode:"history",routes:[{path:"/",name:"home",component:d},{path:"/projects",name:"projects",component:k},{path:"/contact/",name:"contact",component:y},{path:"/blog/",name:"blog-home",component:h},{path:"/blog/:slug",name:"blog-post",component:_}]}),T=a("3EgV"),C=a.n(T),j=(a("7zck"),{data:function(){return{icons:["fab fa-github","fab fa-facebook","fab fa-linkedin","fab fa-twitter"],rows:[{title:"Company Name",children:["Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit"]},{title:"Products",children:["MDBootstrap","MDWordPress","BrandFlow","Bootstrap Angular"]},{title:"Useful Links",children:["Your account","Become an Affiliate","Shipping Rates","Helper"]}]}},methods:{show:function(t){if(console.log(t.link),"fab fa-github"===t)window.open("https://github.com/DanSimonson/","_blank").focus();else if("fab fa-facebook"===t){window.open("https://www.facebook.com/simonsondan","_blank").focus()}else if("fab fa-linkedin"===t){window.open("https://www.linkedin.com/in/dansimonsonmariposaweb/","_blank").focus()}else if("fab fa-twitter"===t){window.open("https://twitter.com/simonsondan?lang=en","_blank").focus()}}}}),B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{height:"auto",id:"show"}},[a("v-card",{staticClass:"flex blue-grey darken-3 myBtn ",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"text-xs-center"},[a("strong",{staticClass:"subheading"},[t._v("This site is powered with Buttercms and Vue. Get connected with me on social networks!")]),t._v(" "),a("v-spacer"),t._v(" "),t._l(t.icons,function(e){return a("v-btn",{key:e,staticClass:"mx-3",attrs:{icon:"",dark:""},nativeOn:{click:function(a){t.show(e)}}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})],2),t._v(" "),t._v("\n        ©2018 — mariposaweb\n        ")],1)],1)},staticRenderFns:[]};var E=a("VU/8")(j,B,!1,function(t){a("shvh")},"data-v-786de6cd",null).exports,P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{staticClass:"grey darken-4 white--text",attrs:{temporary:"",absolute:"",height:"400px"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pa-1"},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:"https://cdn.buttercms.com/lEfaO9dLTOWcieVcTL7a"}})]),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Dan Simonson")])],1)],1)],1),t._v(" "),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._v(" "),t._l(t.items,function(e){return a("v-list-tile",{key:e.title,attrs:{router:"",to:e.link}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1),t._v(" "),a("v-toolbar",{staticClass:"transparent black-text",attrs:{fixed:""}},[a("v-toolbar-side-icon",{staticClass:"strngBtn",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[a("v-toolbar-title",{staticClass:"strngBtn"},[t._v("mariposaweb")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("div",{staticClass:"hidden-sm-and-down"},[a("router-link",{attrs:{to:"/",tag:"span"}},[a("v-btn",{staticClass:"strngBtn",attrs:{flat:""}},[t._v("home")])],1),t._v(" "),a("router-link",{attrs:{to:"/projects",tag:"span"}},[a("v-btn",{staticClass:"strngBtn",attrs:{flat:""}},[t._v("projects")])],1),t._v(" "),a("router-link",{attrs:{to:"/blog/",tag:"span"}},[a("v-btn",{staticClass:"strngBtn",attrs:{flat:""}},[t._v("blog")])],1),t._v(" "),a("router-link",{attrs:{to:"/contact/",tag:"span"}},[a("v-btn",{staticClass:"strngBtn",attrs:{flat:""}},[t._v("contact")])],1)],1)],1)],1)},staticRenderFns:[]};var M=a("VU/8")({data:function(){return{drawer:null,items:[{title:"Home",icon:"home",link:"/"},{title:"Projects",icon:"build",link:"/projects"},{title:"Blog",icon:"message",link:"/blog/"},{title:"Contact",icon:"message",link:"/contact/"}]}}},P,!1,function(t){a("4bNg")},"data-v-0a3adb87",null).exports;s.a.component("app-footer",E),s.a.component("app-header",M),s.a.use(C.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:S,components:{App:i},template:"<App/>"})},XW3t:function(t,e){},Z5en:function(t,e){},"rp/n":function(t,e){},shvh:function(t,e){},"tyN/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8c9ca6a1836d6be06e5b.js.map