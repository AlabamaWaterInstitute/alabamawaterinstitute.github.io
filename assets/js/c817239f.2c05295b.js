"use strict";(self.webpackChunkciroh_docusite=self.webpackChunkciroh_docusite||[]).push([[605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},s="AWS - IAM - Creating User Groups and Adding Permissions:",o={unversionedId:"services/aws-iam-config",id:"services/aws-iam-config",title:"AWS - IAM - Creating User Groups and Adding Permissions:",description:"To create a new user group with specific permissions, follow these steps:",source:"@site/docs/services/aws-iam-config.md",sourceDirName:"services",slug:"/services/aws-iam-config",permalink:"/docs/services/aws-iam-config",draft:!1,editUrl:"https://github.com/AlabamaWaterInstitute/alabamawaterinstitute_website/edit/main/docs/services/aws-iam-config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CIROH 2i2c Portal",permalink:"/docs/services/2i2c-intro"},next:{title:"Run ngen manually",permalink:"/docs/services/ngen_manual_run"}},l={},c=[{value:"To create a new user group with specific permissions, follow these steps:",id:"to-create-a-new-user-group-with-specific-permissions-follow-these-steps",level:2},{value:"To add a new user to the &quot;Users&quot; group with console access and a temporary password, follow these steps:",id:"to-add-a-new-user-to-the-users-group-with-console-access-and-a-temporary-password-follow-these-steps",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws---iam---creating-user-groups-and-adding-permissions"},"AWS - IAM - Creating User Groups and Adding Permissions:"),(0,a.kt)("h2",{id:"to-create-a-new-user-group-with-specific-permissions-follow-these-steps"},"To create a new user group with specific permissions, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"AWS Identity and Access Management (IAM)")," console."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"User groups")," in the left sidebar, then click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Group.")),(0,a.kt)("li",{parentName:"ul"},"Name the group ",(0,a.kt)("inlineCode",{parentName:"li"},"Users")," and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Group.")),(0,a.kt)("li",{parentName:"ul"},"Click on the the Users group and go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Permissions")," tab, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Permissions")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Attach Policies")," and search for the following policies and add permissions.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"IAMUserSSHKeys\nIAMReadOnlyAccess\nAmazonS3ReadOnlyAccess\nAmazonEC2FullAccess\nAmazonS3FullAccess\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To create a custom policy, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Policy")," and go to JSON tab and replace the existing code with the following under JSON tab and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Next"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "AllowManageOwnAccessKeys",\n            "Effect": "Allow",\n            "Action": [\n                "iam:CreateAccessKey",\n                "iam:DeleteAccessKey",\n                "iam:ListAccessKeys",\n                "iam:UpdateAccessKey"\n            ],\n            "Resource": "arn:aws:iam::*:user/${aws:username}"\n        }\n    ]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add tag :\nKey: policy\nValue: custom")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next: Review")," name the policy as ",(0,a.kt)("strong",{parentName:"p"},"AllowManageOwnAccessKeys")," and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Policy.")))),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"adding-a-new-user"},"Adding a New User:"),(0,a.kt)("h2",{id:"to-add-a-new-user-to-the-users-group-with-console-access-and-a-temporary-password-follow-these-steps"},'To add a new user to the "Users" group with console access and a temporary password, follow these steps:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"AWS Identity and Access Management (IAM)")," console."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Users")," in the left sidebar, then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add User.")),(0,a.kt)("li",{parentName:"ul"},"Enter a username for the new user (email address of the user) and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Next"),"."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Add user to group")," and click on the User group checkbox to select desired group. Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Next"),"."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Autogenerated password")," and uncheck ",(0,a.kt)("inlineCode",{parentName:"li"},"Require password reset.")),(0,a.kt)("li",{parentName:"ul"},"Under Review and create section; add tag:\nKey: User\nValue: joe (for example)"),(0,a.kt)("li",{parentName:"ul"},'Click "Create user"'),(0,a.kt)("li",{parentName:"ul"},'"User created successfully" popup will show.'),(0,a.kt)("li",{parentName:"ul"},"The user will be created and the console sign-in URL and temporary password will be provided.")))}u.isMDXComponent=!0}}]);