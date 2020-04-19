(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d8c2fe18"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/pelicans/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"31f2":function(e,t,r){"use strict";var n=r("ebce"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),c={},s=Object(i["a"])(c,o,a,!1,null,null,null),l=s.exports,u=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HelloWorld"),r("Container")],1)},p=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.searchShow(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search here ..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])])},h=[],f=r("bc3a"),b=r.n(f);async function v(e){return await b.a.get("&s="+e).then(e=>e.data.Search)}var g=r("2f62"),w={name:"HelloWorld",components:{},data(){return{search:""}},computed:{...Object(g["d"])(["searchedList"])},methods:{...Object(g["c"])(["SEARCH_LIST"]),...Object(g["b"])(["addToSearchedList"]),searchShow:function(){v(this.search).then(e=>{this.addToSearchedList(e)})}}},y=w,C=(r("31f2"),Object(i["a"])(y,m,h,!1,null,null,null)),_=C.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("CardContent",{staticClass:"content",attrs:{posterUrl:e.posterUrl}}),r("CardTitle",[e._v(e._s(e.title))])],1)},O=[],j=r("9c56");const S={posterUrl:String},T=Object(j["a"])("div",S)`
    border: none;
    width: 90%;
    height: 90%;
    margin:auto;
    position: relative;
    background-size: cover;
    background-image: url(${e=>e.posterUrl});
    transition: all .4s;
    `;var k=T;const L={primary:Boolean},A=Object(j["a"])("button",L)`
    max-width: 33.3%;
    height: 10%;
    text-decoration: none;
    border: solid .4rem;
    border-radius: 2rem;
    border-color: ${e=>e.primary?"white":"transparent"};

    display: inline-block;
    position: relative;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%);

    margin: 2rem;

`;var E=A;const $=j["a"].h4`
    font-size: 1.2rem;
    font-weight: 500;
    max-height: 3rem;
    max-width: 100%;
    background-color: inherit;
    height: 3%;
    margin: .2rem;

    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;var D={name:"Card",props:{posterUrl:String,title:String},components:{CardContent:k,CardButton:E,CardTitle:$}},P=D,H=(r("d612"),Object(i["a"])(P,x,O,!1,null,null,null)),U=H.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("StyledContainer",[r("Row",e._l(e.searchedList,(function(e,t){return r("Column",{key:t,attrs:{desktop:3,tablet:4,phone:12}},[r("Card",{attrs:{posterUrl:e.Poster,title:e.Title}})],1)})),1)],1)},W=[];const z=j["a"].div`
    width: 100%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    &::before{
        content:' ';
        display: table;
    }
    &::after {
        clear: both;
    }
`,M={desktop:Number,tablet:Number,phone:Number},N=e=>{e||retun;const t=e/12*100;return`width: ${t}%`},F=Object(j["a"])("div",M)`
    float: left;
    padding: .25rem;
    box-sizing: border-box;
    width: 100%;
    height: 50rem;
    margin-bottom: .3rem;

    /*
     Atentar para a ordem das medias pois elas importam
    */
    @media only screen and (max-width: 768px) {
        height: 37rem;
        ${e=>e.phone&&N(e.phone)};
    }
    
    @media only screen and (min-width: 768px) {
        ${e=>e.tablet&&N(e.tablet)};
    }
    
    @media only screen and (min-width: 1024px) {
        ${e=>e.desktop&&N(e.desktop)};
    }
`;var I=F;const B=j["a"].div`
    max-width: 136rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    box-sizing: border-box;
    &::before {
        content: " ";
        display: table
    }
    &::after {
        clear: both;
    }
`;var J={name:"Container",components:{Row:z,Column:I,StyledContainer:B,Card:U},computed:{...Object(g["d"])(["searchedList"])}},V=J,q=Object(i["a"])(V,R,W,!1,null,null,null),G=q.exports,K={name:"Home",computed:{...Object(g["d"])(["searchedList"])},components:{HelloWorld:_,Card:U,Container:G}},Q=K,X=(r("cccb"),Object(i["a"])(Q,d,p,!1,null,null,null)),Y=X.exports;n["a"].use(u["a"]);const Z=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],ee=new u["a"]({mode:"history",base:"/pelicans/",routes:Z});var te=ee;n["a"].use(g["a"]);var re=new g["a"].Store({state:{watched:[],favorites:[],searchedList:[]},mutations:{ADD_TO_FAV:(e,t)=>{e.favorites.push(t)},ADD_TO_WATCHED:(e,t)=>{e.watched.push(t)},SEARCH_LIST:(e,t)=>{e.searchedList=t}},actions:{addToWatched:(e,t)=>{e.commit("ADD_TO_WATCHED",t)},addToFavorites:(e,t)=>{e.commit("ADD_TO_FAV",t)},addToSearchedList:(e,t)=>{e.commit("SEARCH_LIST",t)}},modules:{}}),ne=r("ecee"),oe=r("ad3d"),ae=r("c074");ne["c"].add(ae["c"],ae["b"],ae["a"]),n["a"].component("font-awesome-icon",oe["a"]),n["a"].config.productionTip=!1,b.a.defaults.baseURL="http://www.omdbapi.com/?&apikey=ebcafd7d&Content-Type=application/json",new n["a"]({router:te,store:re,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,r){},"78d2":function(e,t,r){},"85ec":function(e,t,r){},cccb:function(e,t,r){"use strict";var n=r("5ced"),o=r.n(n);o.a},d612:function(e,t,r){"use strict";var n=r("78d2"),o=r.n(n);o.a},ebce:function(e,t,r){}});
//# sourceMappingURL=app.b5f1223b.js.map