import g from"./ContentDoc.BTGR36uv.js";import{f as y,g as k,o,c as e,a as s,F as i,r as $,u as b,h as w,b as r,w as u,d as x,t as l,P as p}from"./entry.h4ZVvIXW.js";import{_ as B}from"./nuxt-link.Bu2nNNud.js";import{q as v}from"./query.DfwhkPCF.js";import"./vue.f36acd1f.D-xkq7BF.js";import"./ContentRenderer.DyPbXoGB.js";import"./ContentRendererMarkdown.vue.h6Qo6Tbp.js";import"./index.BsYmvPZw.js";import"./preview.CNU1L_h8.js";import"./ContentQuery.D8WHgNmY.js";const C=s("h1",null,"Blog",-1),N=["src"],P=y({__name:"BlogPosts",async setup(c){let t,n;const{data:a}=([t,n]=k(()=>w(()=>v("/blog").sort({date:-1}).where({_partial:!1}).find(),"$bMkErHolNh")),t=await t,n(),t);return(A,E)=>{const m=B;return o(),e(i,null,[C,s("ul",null,[(o(!0),e(i,null,$(b(a),({_path:_,title:d,date:h,cover:f})=>(o(),e("li",{key:_},[r(m,{to:_},{default:u(()=>[x(l(d)+" "+l(h),1)]),_:2},1032,["to"]),s("img",{src:f,alt:"f",style:{width:"100px",height:"auto"}},null,8,N)]))),128))])],64)}}}),D={key:0},V={key:1},q=s("h2",null,"Blog post not found",-1),I={__name:"[...slug]",setup(c){return(t,n)=>{const a=g;return o(),e("div",null,[(t._.provides[p]||t.$route).params.slug?(o(),e("div",V,[r(a,{path:"/blog/"+(t._.provides[p]||t.$route).params.slug.join("/")},{"not-found":u(()=>[q]),_:1},8,["path"])])):(o(),e("div",D,[r(P)]))])}}};export{I as default};