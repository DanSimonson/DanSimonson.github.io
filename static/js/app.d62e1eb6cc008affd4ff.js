webpackJsonp([1],{DyoL:function(t,e){t.exports={_from:"buttercms",_id:"buttercms@1.1.1",_inBundle:!1,_integrity:"sha512-Td5d7drciokW2gtlbOEbmlpaYmu3kNT80VKyN7JyrKHPyTJGT1l1w5hkS1ATKm3ulGv4lzXEYZd2jqetBrJkiQ==",_location:"/buttercms",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"buttercms",name:"buttercms",escapedName:"buttercms",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/buttercms/-/buttercms-1.1.1.tgz",_shasum:"fcd502df47e9157e4f6d6fb18b167d0ba056103e",_spec:"buttercms",_where:"C:\\Users\\USER\\documents\\vueProject2\\buttercms-project",author:{name:"ButterCMS",email:"support@buttercms.com"},bugs:{url:"https://github.com/buttercms/buttercms-js/issues"},bundleDependencies:!1,dependencies:{axios:"0.9.1"},deprecated:!1,description:"ButterCMS API Client",devDependencies:{"uglify-js":"^2.8.22",webpack:"^2.5.0"},engines:{node:">=0.10.32"},homepage:"https://github.com/buttercms/buttercms-js",keywords:["buttercms","butter","cms","api"],license:"MIT",main:"lib/butter.js",name:"buttercms",repository:{type:"git",url:"git://github.com/buttercms/buttercms-js.git"},scripts:{build:"webpack && uglifyjs ./dist/butter.js -c -m -o ./dist/butter.min.js"},version:"1.1.1"}},Ejgy:function(t,e){},N1en:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},n,!1,function(t){s("Ejgy")},null,null).exports,a=s("/ocq"),i=s("a19Z"),u=s.n(i)()("34d3d54d8f742ba36133328ca6b67a50a85ddfe1"),c={name:"customer-page",data:function(){return{page:{fields:{}}}},methods:{getPage:function(){var t=this;u.page.retrieve("*","homepage").then(function(e){console.log(e.data.data),t.page=e.data.data}).catch(function(t){console.log(t)})},goBlog:function(){this.$router.push({name:"blog-home"})}},created:function(){this.getPage()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"customer-page"}},[s("figure",[s("img",{attrs:{src:t.page.fields.hero_image}})]),t._v(" "),s("h1",[t._v(t._s(t.page.fields.headline))]),t._v(" "),s("button",[t._v(t._s(t.page.fields.call_to_action))]),t._v(" "),s("h3",[t._v("Customers Love Us!")]),t._v(" "),t._l(t.page.fields.customer_logos,function(t){return s("img",{attrs:{src:t.logo_image}})}),t._v(" "),s("ul",[s("li",[s("button",{on:{click:t.goBlog}},[t._v("Go To Blogs")])])])],2)},staticRenderFns:[]};var p=s("VU/8")(c,l,!1,function(t){s("N1en")},"data-v-47ed9678",null).exports,m={name:"blog-home",data:function(){return{page_title:"Blog",posts:[]}},methods:{getPosts:function(){var t=this;u.post.list({page:1,page_size:10}).then(function(e){t.posts=e.data.data})}},created:function(){this.getPosts()}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"blog-home"}},[s("h1",[t._v(t._s(t.page_title))]),t._v(" "),t._l(t.posts,function(e,o){return s("div",{key:e.slug+"_"+o},[s("router-link",{attrs:{to:"/blog/"+e.slug}},[s("article",{staticClass:"media"},[s("figure",[e.featured_image?s("img",{attrs:{src:e.featured_image,alt:""}}):s("img",{attrs:{src:"http://via.placeholder.com/250x250",alt:""}})]),t._v(" "),s("h2",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.summary))])])])],1)})],2)},staticRenderFns:[]},g=s("VU/8")(m,d,!1,null,null,null).exports,_={name:"blog-post",data:function(){return{post:{}}},methods:{getPost:function(){var t=this;u.post.retrieve(this.$route.params.slug).then(function(e){console.log(e.data),t.post=e.data}).catch(function(t){console.log(t)})}},watch:{$route:function(t,e){this.getPost()}},created:function(){this.getPost()}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"blog-post"}},[s("h1",[t._v(t._s(t.post.data.title))]),t._v(" "),s("h4",[t._v(t._s(t.post.data.author.first_name)+" "+t._s(t.post.data.author.last_name))]),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.post.data.body)}}),t._v(" "),t.post.meta.previous_post?s("router-link",{staticClass:"button",attrs:{to:/blog/+t.post.meta.previous_post.slug}},[t._v("\n        "+t._s(t.post.meta.previous_post.title)+"\n    ")]):t._e(),t._v(" "),t.post.meta.next_post?s("router-link",{staticClass:"button",attrs:{to:/blog/+t.post.meta.next_post.slug}},[t._v("\n        "+t._s(t.post.meta.next_post.title)+"\n    ")]):t._e()],1)},staticRenderFns:[]},b=s("VU/8")(_,h,!1,null,null,null).exports;o.a.use(a.a);var v=new a.a({mode:"history",routes:[{path:"/",name:"home",component:p},{path:"/blog/",name:"blog-home",component:g},{path:"/blog/:slug",name:"blog-post",component:b}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:v,components:{App:r},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.d62e1eb6cc008affd4ff.js.map