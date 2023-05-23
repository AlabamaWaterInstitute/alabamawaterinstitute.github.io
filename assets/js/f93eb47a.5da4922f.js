"use strict";(self.webpackChunkciroh_docusite=self.webpackChunkciroh_docusite||[]).push([[907],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>T,frontMatter:()=>v,metadata:()=>y,toc:()=>O});var n=r(7462),a=r(7294),o=r(3905),i=r(6010),s=r(2389),l=r(7392),c=r(7094),u=r(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:r,block:o,defaultValue:s,values:m,groupId:b,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,c.U)(),[w,T]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==w&&v.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==w&&(I(t),T(n),null!=b&&O(b,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,s.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}const h="tabItem_Ymn6";function f(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(h,n),hidden:r},t)}const v={sidebar_position:1},g="CIROH 2i2c Portal",y={unversionedId:"services/2i2c-intro",id:"services/2i2c-intro",title:"CIROH 2i2c Portal",description:"CIROH's 2i2c JupyterHub details",source:"@site/docs/services/2i2c-intro.md",sourceDirName:"services",slug:"/services/2i2c-intro",permalink:"/docs/services/2i2c-intro",draft:!1,editUrl:"https://github.com/AlabamaWaterInstitute/data_access_examples/blob/main/README.md/docs/services/2i2c-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Utah State University.",permalink:"/docs/members/UtahState/members-intro"},next:{title:"AWS - IAM - Creating User Groups and Adding Permissions:",permalink:"/docs/services/aws-iam-config"}},k={},O=[{value:"CIROH&#39;s 2i2c JupyterHub details",id:"cirohs-2i2c-jupyterhub-details",level:2},{value:"How to access these environments?",id:"how-to-access-these-environments",level:3}],w={toc:O};function T(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ciroh-2i2c-portal"},"CIROH 2i2c Portal"),(0,o.kt)("h2",{id:"cirohs-2i2c-jupyterhub-details"},"CIROH's 2i2c JupyterHub details"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("a",{href:"https://github.com/2i2c-org/awi-ciroh-image"},"Github URL for AWI-CIROH 2i2c Hub Image")),(0,o.kt)(b,{mdxType:"Tabs"},(0,o.kt)(f,{value:"production",label:"Production",default:!0,mdxType:"TabItem"},(0,o.kt)("span",{class:"badge badge--secondary"},"CIROH 2i2c Production Hub"),(0,o.kt)("hr",null),(0,o.kt)("a",{href:"https://ciroh.awi.2i2c.cloud/hub/login"},"https://ciroh.awi.2i2c.cloud/hub/login")),(0,o.kt)(f,{value:"staging",label:"Staging",mdxType:"TabItem"},(0,o.kt)("span",{class:"badge badge--secondary"},"CIROH 2i2c Staging Hub"),(0,o.kt)("hr",null),(0,o.kt)("a",{href:"https://staging.ciroh.awi.2i2c.cloud/hub/login"},"https://staging.ciroh.awi.2i2c.cloud/hub/login"))),(0,o.kt)("h3",{id:"how-to-access-these-environments"},"How to access these environments?"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To get the access of above environments, please email us at ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:support@ciroh.org"},"support@ciroh.org"))," with your github User ID")))}T.isMDXComponent=!0}}]);