"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[47],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),u=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=u(e.components);return l.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,f=d["".concat(i,".").concat(c)]||d[c]||s[c]||o;return t?l.createElement(f,r(r({ref:n},m),{},{components:t})):l.createElement(f,r({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var u=2;u<o;u++)r[u]=t[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6624:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var l=t(3117),a=t(102),o=(t(7294),t(3905)),r=["components"],p=[{value:"filter",id:"filter",children:[],level:3},{value:"flatMap",id:"flatmap",children:[],level:3},{value:"fromFalsy",id:"fromfalsy",children:[],level:3},{value:"fromNullable",id:"fromnullable",children:[],level:3},{value:"fromPredicate",id:"frompredicate",children:[],level:3},{value:"getExn",id:"getexn",children:[],level:3},{value:"getWithDefault",id:"getwithdefault",children:[],level:3},{value:"isNone",id:"isnone",children:[],level:3},{value:"isSome",id:"issome",children:[],level:3},{value:"map",id:"map",children:[],level:3},{value:"mapNullable",id:"mapnullable",children:[],level:3},{value:"mapWithDefault",id:"mapwithdefault",children:[],level:3},{value:"match",id:"match",children:[],level:3},{value:"tap",id:"tap",children:[],level:3},{value:"toNullable",id:"tonullable",children:[],level:3},{value:"toResult",id:"toresult",children:[],level:3},{value:"toUndefined",id:"toundefined",children:[],level:3}],i={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,l.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"filter"},"filter"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)")," and the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"predicateFn")," is truthy, otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function filter<T>(option: Option<T>, predicateFn: (value: T) => boolean): Option<T>\nfunction filter<T>(predicateFn: (value: T) => boolean): (option: Option<T>) => Option<T>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable([3, 6, 9]),\n  O.flatMap(A.get(0)),\n  O.filter(value => value === 3),\n) // \u2192 Some(3)\n\npipe(\n  O.fromNullable([3, 6, 9]),\n  O.flatMap(A.get(0)),\n  O.filter(value => value === 0),\n) // \u2192 None\n")),(0,o.kt)("h3",{id:"flatmap"},"flatMap"),(0,o.kt)("p",null,"Returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"mapFn")," (it must have a return type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Option"),") if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function flatMap<T, R>(option: Option<T>, mapFn: (value: T) => Option<R>): Option<R>\nfunction flatMap<T, R>(mapFn: (value: T) => Option<R>): (option: Option<T>) => Option<R>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable('hello'),\n  O.flatMap(value => {\n    return value.endsWith('lo') ? O.Some(`${value} world!`) : O.None\n  }),\n) // \u2192 Some('hello world!')\n")),(0,o.kt)("h3",{id:"fromfalsy"},"fromFalsy"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)")," if the provided value is not falsy, otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function fromFalsy<T>(value: T): Option<ExtractValue<T>>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"O.fromFalsy(1) // \u2192 Some(1)\nO.fromFalsy('hello world') // \u2192 Some('hello world')\nO.fromFalsy([]) // \u2192 Some([])\nO.fromFalsy(0) // \u2192 None\nO.fromFalsy('') // \u2192 None\n")),(0,o.kt)("h3",{id:"fromnullable"},"fromNullable"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)")," if the provided value is non-nullable, otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function fromNullable<T>(value: T): Option<ExtractValue<T>>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"O.fromNullable(1) // \u2192 Some(1)\nO.fromNullable('hello world') // \u2192 Some('hello world')\nO.fromNullable([]) // \u2192 Some([])\nO.fromNullable(false) // \u2192 Some(false)\nO.fromNullable(null) // \u2192 None\nO.fromNullable(undefined) // \u2192 None\n")),(0,o.kt)("h3",{id:"frompredicate"},"fromPredicate"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)")," if the given predicate function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function fromPredicate<T>(value: T, predicateFn: (value: T) => boolean): Option<ExtractValue<T>>\nfunction fromPredicate<T>(predicateFn: (value: T) => boolean): (value: T) => Option<ExtractValue<T>>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"O.fromPredicate(\n  [1, 2, 3],\n  A.some(x => x === 2),\n) // \u2192 Some([1, 2, 3])\n\nO.fromPredicate(\n  [1, 2, 3],\n  A.some(x => x === 4),\n) // \u2192 None\n")),(0,o.kt)("h3",{id:"getexn"},"getExn"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, throws an exception."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function getExn<T>(option: Option<T>): T | never\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable('hello'),\n  O.map(value => `${value} world!`),\n  O.getExn,\n) // \u2192 'hello world!'\n")),(0,o.kt)("h3",{id:"getwithdefault"},"getWithDefault"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns a default value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function getWithDefault<T>(option: Option<T>, defaultValue: NonNullable<T>): T\nfunction getWithDefault<T>(defaultValue: NonNullable<T>): (option: Option<T>) => T\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable('hello'),\n  O.map(value => `${value} world!`),\n  O.getWithDefault('error'),\n) // \u2192 'hello world!'\n\npipe(\n  O.fromNullable(null),\n  O.map(value => `${value} world!`),\n  O.getWithDefault('error'),\n) // \u2192 'error'\n")),(0,o.kt)("h3",{id:"isnone"},"isNone"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function isNone<T>(option: Option<T>): option is Option<never>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"O.isNone(O.None) // \u2192 true\npipe(O.fromNullable(null), O.isNone) // \u2192 true\nO.isNone(O.Some('hello world!')) // \u2192 false\npipe(O.fromNullable('hello world!'), O.isNone) // \u2192 false\n")),(0,o.kt)("h3",{id:"issome"},"isSome"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function isSome<T>(option: Option<T>): option is Option<T>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"O.isSome(O.Some('hello world!')) // \u2192 true\npipe(O.fromNullable('hello world!'), O.isSome) // \u2192 true\nO.isSome(O.None) // \u2192 false\npipe(O.fromNullable(null), O.isSome) // \u2192 false\n")),(0,o.kt)("h3",{id:"map"},"map"),(0,o.kt)("p",null,"Returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"mapFn")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mapFn")," is not called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function map<T, R>(option: Option<T>, mapFn: (value: T) => NonNullable<R>): Option<R>\nfunction map<T, R>(mapFn: (value: T) => NonNullable<R>): (option: Option<T>) => Option<R>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable([1, 2, 3]),\n  O.flatMap(A.get(0)),\n  O.map(n => `${n}. hello world!`),\n) // \u2192 Some('1. hello world!')\n\npipe(\n  O.fromNullable([]),\n  O.flatMap(A.get(0)),\n  O.map(n => `${n}. hello world!`),\n) // \u2192 None\n")),(0,o.kt)("h3",{id:"mapnullable"},"mapNullable"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)")," if the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"mapFn")," is non-nullable, otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function mapNullable<T, R>(option: Option<T>, mapFn: (value: T) => R | null | undefined): Option<ExtractValue<R>>\nfunction mapNullable<T, R>(mapFn: (value: T) => R | null | undefined): (option: Option<T>) => Option<ExtractValue<R>>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable([1, 2, 3]),\n  O.mapNullable(value => value[0]),\n) // \u2192 Some(1)\n\npipe(\n  O.fromNullable([undefined, 2, 3]),\n  O.mapNullable(value => value[0]),\n) // \u2192 None\n")),(0,o.kt)("h3",{id:"mapwithdefault"},"mapWithDefault"),(0,o.kt)("p",null,"Returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"mapFn")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns a default value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function mapWithDefault<T, R>(option: Option<T>, defaultValue: NonNullable<R>, mapFn: (value: T) => R): R\nfunction mapWithDefault<T, R>(defaultValue: NonNullable<R>, mapFn: (value: T) => R): (option: Option<T>) => R\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable(['hello']),\n  O.flatMap(A.get(0)),\n  O.mapWithDefault('default value', value => `${value} world!`),\n) // \u2192 'hello world!'\n\npipe(\n  O.fromNullable([]),\n  O.flatMap(A.get(0)),\n  O.mapWithDefault('default value', value => `${value} world!`),\n) // \u2192 'default value'\n")),(0,o.kt)("h3",{id:"match"},"match"),(0,o.kt)("p",null,"Returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"someFn")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"noneFn"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function match<T, R>(option: Option<T>, someFn: (value: T) => R, noneFn: () => R): R\nfunction match<T, R>(someFn: (value: T) => R, noneFn: () => R): (option: Option<T>) => R\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable(['hello', 'world', 'lorem', 'ipsum']),\n  O.flatMap(A.takeExactly(2)),\n  O.map(A.join(' ')),\n  O.match(\n    str => `${str}!`,\n    () => 'oops!',\n  ),\n) // \u2192 'hello world!'\n\npipe(\n  O.fromNullable([]),\n  O.flatMap(A.takeExactly(2)),\n  O.map(A.join(' ')),\n  O.match(\n    str => `${str}!`,\n    () => 'oops!',\n  ),\n) // \u2192 'oops!'\n")),(0,o.kt)("h3",{id:"tap"},"tap"),(0,o.kt)("p",null,"Applies a side-effect function to the value in ",(0,o.kt)("inlineCode",{parentName:"p"},"Some"),", and returns the original ",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function tap<T>(option: Option<T>, someFn: (value: T) => void): Option<T>\nfunction tap<T>(someFn: (value: T) => void): (option: Option<T>) => Option<T>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable(['hello', 'world']),\n  O.flatMap(A.get(1)),\n  O.tap(str => {\n    console.log(str) // \u2b05\ufe0f 'world'\n  }),\n  O.getWithDefault(''),\n) // \u2192 'world'\n")),(0,o.kt)("h3",{id:"tonullable"},"toNullable"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function toNullable<T>(option: Option<T>): T | null\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable(['hello', 'world']),\n  O.flatMap(A.takeExactly(2)),\n  O.toNullable,\n) // \u2192 ['hello', 'world']\n\npipe(O.fromNullable([]), O.flatMap(A.takeExactly(2)), O.toNullable) // \u2192 null\n")),(0,o.kt)("h3",{id:"toresult"},"toResult"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Ok(value)")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Error(errorValue)"),", both ",(0,o.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," come from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Result")," type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function toResult<A, B>(option: Option<A>, errorValue: NonNullable<B>): Result<A, B>\nfunction toResult<A, B>(errorValue: NonNullable<B>): (option: Option<A>) => Result<A, B>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable(['hello', 'world']),\n  O.flatMap(A.takeExactly(2)),\n  O.toResult('oops!'),\n) // \u2192 R.Ok(['hello', 'world'])\n\npipe(\n  O.fromNullable([]),\n  O.flatMap(A.takeExactly(2)),\n  O.toResult('oops!'),\n) // \u2192 R.Error('oops!')\n")),(0,o.kt)("h3",{id:"toundefined"},"toUndefined"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", otherwise, returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function toUndefined<T>(option: Option<T>): T | undefined\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  O.fromNullable(['hello', 'world']),\n  O.flatMap(A.takeExactly(2)),\n  O.toUndefined,\n) // \u2192 ['hello', 'world']\n\npipe(O.fromNullable([]), O.flatMap(A.takeExactly(2)), O.toUndefined) // \u2192 undefined\n")))}u.isMDXComponent=!0;var m=["components"],s={id:"option",title:"Option"},d=void 0,c={unversionedId:"option",id:"option",title:"Option",description:"Belt (ReScript) represents the existence and nonexistence of a value by wrapping it with the Option type. TS Belt does the same and provides utility-functions for convenient work with the Option type.",source:"@site/api/option.mdx",sourceDirName:".",slug:"/option",permalink:"/ts-belt/api/option",tags:[],version:"current",frontMatter:{id:"option",title:"Option"},sidebar:"sidebar",previous:{title:"Object (Dict)",permalink:"/ts-belt/api/object"},next:{title:"Result",permalink:"/ts-belt/api/result"}},f=p,N={toc:f};function k(e){var n=e.components,t=(0,a.Z)(e,m);return(0,o.kt)("wrapper",(0,l.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Belt (ReScript) represents the existence and nonexistence of a value by wrapping it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," type. TS Belt does the same and provides utility-functions for convenient work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Option<A> = Some<A> | None\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function() {\n  // \u2b07\ufe0f remove all elements in the array below in order to see the default value\n  const xs = ['hello', 'world', 'ts', 'belt']\n  const value = pipe(\n    O.fromNullable(xs), // \u2192 Some(['hello', 'world', 'ts', 'belt'])\n    O.flatMap(A.dropExactly(2)), // \u2192 Some(['ts', 'belt'])\n    O.map(A.join('-')), // \u2192 Some('ts-belt')\n    O.getWithDefault('default value'), // returns `default value` if `None`\n  )\n\n  return value\n}\n")),(0,o.kt)(u,{mdxType:"Option"}))}k.isMDXComponent=!0}}]);