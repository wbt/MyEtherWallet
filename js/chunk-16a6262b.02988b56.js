(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16a6262b"],{"10b7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"initial-state-ens"},[a("form",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[e._v(" "+e._s(e.$t("ens.title"))+" ")]),a("p",[e._v(e._s(e.$t("ens.search-domain-desc")))])])]),a("div",{staticClass:"the-form domain-name"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.localDomainName,expression:"localDomainName"}],class:[e.domainNameErr?"errored":""],attrs:{placeholder:e.$t("ens.ph.three-char"),type:"text",name:""},domProps:{value:e.localDomainName},on:{input:function(t){t.target.composing||(e.localDomainName=t.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.multiTld,expression:"!multiTld"}]},[e._v("."+e._s(e.tld))])]),a("div",{staticClass:"error-message-container"},[a("p",{directives:[{name:"show",rawName:"v-show",value:!1===e.contractInitiated,expression:"contractInitiated === false"}],staticClass:"contract-loading-warning"},[e._v(" "+e._s(e.$t("ens.warning.contract-not-ready"))+" ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.domainNameErr,expression:"domainNameErr"}],staticClass:"erroredMsg"},[e.isValidLength||""===e.localDomainName?a("span",[e._v(" "+e._s(e.$t("ens.warning.invalid-symbol"))+" ")]):a("span",[e._v(" "+e._s(e.$t("ens.warning.not-enough-char"))+" ")])])]),a("div",{staticClass:"submit-button-container"},[a("button",{class:[e.domainNameErr||""===e.localDomainName?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:function(t){return t.preventDefault(),e.checkDomain(t)}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(" "+e._s(e.$t("ens.check-domain"))+" ")]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),a("interface-bottom-text",{attrs:{"link-text":e.$t("common.help-center"),question:e.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],o=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("ac1f"),a("5319"),a("159b"),a("fc11")),s=a("539d"),r=a("2f62");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={components:{"interface-bottom-text":s["a"]},props:{checkDomain:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},contractInitiated:{type:Boolean,default:!1},hostName:{type:String,default:""},tld:{type:String,default:""},domainNameErr:{type:Boolean,default:!1},multiTld:{type:Boolean,default:!1}},data:function(){return{localDomainName:this.hostName}},computed:l({},Object(r["b"])(["network"]),{isValidLength:function(){return this.localDomainName.replace("."+this.network.type.ens.registrarTLD,"").length>=3}}),watch:{localDomainName:function(e){this.$emit("domainNameChange",e)},domainName:function(e){this.localDomainName=e}},methods:{expendDomainCheckForm:function(){this.$refs["checkForm"].classList.toggle("hidden"),this.$refs["domainList"].classList.add("hidden")},domainAvailabilityCheck:function(){this.$refs["domainList"].classList.add("hidden")}}},d=m,u=(a("3f8b"),a("2877")),p=Object(u["a"])(d,n,i,!1,null,"770cc1f2",null),f=p.exports;a.d(t,"default",(function(){return f}))},"3f8b":function(e,t,a){"use strict";var n=a("57d5"),i=a.n(n);i.a},"57d5":function(e,t,a){}}]);
//# sourceMappingURL=chunk-16a6262b.02988b56.js.map