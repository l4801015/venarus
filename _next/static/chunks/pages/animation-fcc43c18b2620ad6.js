(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{4842:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/animation",function(){return e(2197)}])},2197:function(n,t,e){"use strict";e.r(t);var r=e(5893),u=e(5675),c=e.n(u),i=e(7294),a=function(n,t,e,r){return function(u){return Math.floor(e+(u-n)/(t-n)*(r-e))}},s=a(-1,1,0,350),o=a(-1,1,0,75),l=function(n){return n*Math.PI/180},f=function(n,t){return[n,t]},h=function(n){return Math.sin(n)},x=function(n){return Math.cos(n)};t.default=function(){var n=(0,i.useState)(!0),t=(n[0],n[1],(0,i.useState)(0)),e=t[0],u=t[1],a=[[x(l(e)),h(l(e))],[-h(l(e)),x(l(e))]],p=[f(x(l(0)),h(l(0))),f(x(l(120)),h(l(120))),f(x(l(240)),h(l(240)))],d=(0,i.useRef)(),m=(0,i.useRef)(),v=function(n){if(void 0!=m.current){m.current;u((function(n){return n}))}m.current=n,d.current=requestAnimationFrame(v)};(0,i.useEffect)((function(){return d.current=requestAnimationFrame(v),function(){return cancelAnimationFrame(d.current)}}),[]);var _,j,w=(j=a,(_=p).map((function(n,t){return j[0].map((function(e,r){return n.reduce((function(n,e,u){return n+_[t][u]*j[u][r]}),0)}))}))),N=w[0],b=w[1],g=w[2],k=function(n){var t=s(n[1]),e=o(n[0]),r=n[0]>0;return{"z-index":"".concat(r?100:10),transform:"translateX(".concat(t,"px) translateY(").concat(e,"px) scale(").concat(r?1:.5,")"),"will-change":"transform"}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"relative l-96 w-[374px] h-[374px]",children:[(0,r.jsx)("div",{className:"absolute w-[374px] h-[374px]",style:k(N),children:(0,r.jsx)(c(),{src:"/1.png",layout:"fill"})}),(0,r.jsx)("div",{className:"absolute w-[374px] h-[374px]",style:k(b),children:(0,r.jsx)(c(),{src:"/2.png",layout:"fill"})}),(0,r.jsx)("div",{className:"absolute w-[374px] h-[374px]",style:k(g),children:(0,r.jsx)(c(),{src:"/3.png",layout:"fill"})})]})}),(0,r.jsx)("button",{onClick:function(n){n.preventDefault()},children:"Left"}),(0,r.jsx)("button",{onClick:function(n){n.preventDefault()},children:"Right"})]})}}},function(n){n.O(0,[675,774,888,179],(function(){return t=4842,n(n.s=t);var t}));var t=n.O();_N_E=t}]);