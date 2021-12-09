"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[20],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6196:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],s=[{value:"isArray",id:"isarray",children:[],level:3},{value:"isBoolean",id:"isboolean",children:[],level:3},{value:"isDate",id:"isdate",children:[],level:3},{value:"isError",id:"iserror",children:[],level:3},{value:"isFunction",id:"isfunction",children:[],level:3},{value:"isNot",id:"isnot",children:[],level:3},{value:"isNotNullable",id:"isnotnullable",children:[],level:3},{value:"isNull",id:"isnull",children:[],level:3},{value:"isNullable",id:"isnullable",children:[],level:3},{value:"isNumber",id:"isnumber",children:[],level:3},{value:"isObject",id:"isobject",children:[],level:3},{value:"isPromise",id:"ispromise",children:[],level:3},{value:"isString",id:"isstring",children:[],level:3},{value:"isUndefined",id:"isundefined",children:[],level:3}],u={toc:s};function o(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"isarray"},"isArray"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isArray<T>(value: T | ReadonlyArray<unknown>): value is GuardArray<T>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isArray([1, 2, 3]) // \u2192 true\npipe(['hello', 'world'], G.isArray) // \u2192 true\n")),(0,l.kt)("h3",{id:"isboolean"},"isBoolean"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isBoolean<T>(value: T | boolean): value is GuardValue<T, boolean>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isBoolean(false) // \u2192 true\npipe(true, G.isBoolean) // \u2192 true\n")),(0,l.kt)("h3",{id:"isdate"},"isDate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isDate<T>(value: T): value is Extract<T, Date>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isDate(new Date()) // \u2192 true\npipe(new Date(), G.isDate) // \u2192 true\n")),(0,l.kt)("h3",{id:"iserror"},"isError"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isError<T>(value: T | Error): value is GuardValue<T, Error>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isError(new Error('oops!')) // \u2192 true\npipe(new Error('oops!'), G.isError) // \u2192 true\n")),(0,l.kt)("h3",{id:"isfunction"},"isFunction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isFunction<T>(value: T | Function): value is GuardValue<T, Function>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isFunction(F.ignore) // \u2192 true\npipe(F.ignore, G.isFunction) // \u2192 true\n")),(0,l.kt)("h3",{id:"isnot"},"isNot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isNot<T>(value: T, predicateFn: (value: T) => boolean): boolean\nfunction isNot<T>(predicateFn: (value: T) => boolean): (value: T) => boolean\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u2b07\ufe0f const isNotString = <T>(value: T): value is Exclude<T, string> => G.isNot(value, G.isString)\nisNotString(0) // \u2192 true\n\npipe('ts-belt', G.isNot(G.isString)) // \u2192 false\n")),(0,l.kt)("h3",{id:"isnotnullable"},"isNotNullable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isNotNullable<T>(value: T): value is NonNullable<T>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isNotNullable('ts-belt') // \u2192 true\nG.isNotNullable(null) // \u2192 false\npipe(0, G.isNotNullable) // \u2192 true\npipe(undefined, G.isNotNullable) // \u2192 false\n")),(0,l.kt)("h3",{id:"isnull"},"isNull"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isNull<T>(value: T | null | undefined): value is null\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isNull(null) // \u2192 true\npipe(null, G.isNull) // \u2192 true\n")),(0,l.kt)("h3",{id:"isnullable"},"isNullable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isNullable<T>(value: T): value is Extract<T, null | undefined>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isNullable(null) // \u2192 true\npipe(undefined, G.isNullable) // \u2192 true\n")),(0,l.kt)("h3",{id:"isnumber"},"isNumber"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isNumber<T>(value: T | number): value is GuardValue<T, number>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isNumber(3) // \u2192 true\npipe(3, G.isNumber) // \u2192 true\n")),(0,l.kt)("h3",{id:"isobject"},"isObject"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isObject<T>(value: T | object): value is GuardObject<T>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isObject({}) // \u2192 true\npipe({}, G.isObject) // \u2192 true\n")),(0,l.kt)("h3",{id:"ispromise"},"isPromise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isPromise<T>(value: T | Promise<unknown>): value is GuardPromise<T>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isPromise(Promise.resolve(1)) // \u2192 true\npipe(Promise.resolve(1), G.isPromise) // \u2192 true\n")),(0,l.kt)("h3",{id:"isstring"},"isString"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isString<T>(value: T | string): value is GuardValue<T, string>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isString('ts') // \u2192 true\npipe('belt', G.isString) // \u2192 true\n")),(0,l.kt)("h3",{id:"isundefined"},"isUndefined"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function isUndefined<T>(value: T | null | undefined): value is undefined\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"G.isUndefined(undefined) // \u2192 true\npipe(undefined, G.isUndefined) // \u2192 true\n")))}o.isMDXComponent=!0;var p=["components"],c={id:"guards",title:"Guards"},d=void 0,m={unversionedId:"guards",id:"guards",isDocsHomePage:!1,title:"Guards",description:"Various TypeScript guards.",source:"@site/api/guards.mdx",sourceDirName:".",slug:"/guards",permalink:"/ts-belt/api/guards",tags:[],version:"current",frontMatter:{id:"guards",title:"Guards"},sidebar:"sidebar",previous:{title:"Function",permalink:"/ts-belt/api/function"},next:{title:"Number",permalink:"/ts-belt/api/number"}},g=s,N={toc:g};function v(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Various TypeScript guards."),(0,l.kt)(o,{mdxType:"Guards"}))}v.isMDXComponent=!0}}]);