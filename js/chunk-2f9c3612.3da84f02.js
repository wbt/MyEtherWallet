(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f9c3612"],{"0546":function(e,t,r){"use strict";r.r(t);var s,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"swap-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.bityExitToFiat,expression:"!bityExitToFiat"}]},[r("swap-confirmation-modal",{ref:"swapConfirmation",attrs:{"selected-provider":e.selectedProvider,"swap-details":e.swapDetails,"current-address":e.currentAddress},on:{swapStarted:e.resetSwapState}}),r("swap-send-to-modal",{ref:"swapSendTo",attrs:{"selected-provider":e.selectedProvider,"swap-details":e.swapDetails,"current-address":e.currentAddress},on:{swapStarted:e.resetSwapState}}),r("div",{staticClass:"title-block"},[r("interface-container-title",{attrs:{title:e.$t("common.swap")}})],1),r("div",{staticClass:"form-content-container"},[r("div",{staticClass:"send-form"},[r("div",{staticClass:"form-block amount-to-address"},[r("div",{staticClass:"amount"},[r("div",{staticClass:"title title-and-copy"},[r("h4",[e._v(e._s(e.$t("swap.from")))]),e.tokenBalances[e.fromCurrency]>0?r("p",{staticClass:"all-button prevent-user-select",on:{click:e.swapAll}},[e._v(" "+e._s(e.$t("common.balance.total"))+" ")]):e._e()]),r("swap-currency-picker",{attrs:{currencies:e.fromArray,"override-currency":e.overrideFrom,"from-source":!0,page:"SwapContainerFrom"},on:{selectedCurrency:e.setFromCurrency}}),r("div",{staticClass:"the-form amount-number"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fromValue,expression:"fromValue"}],attrs:{placeholder:e.$t("swap.deposit-amount"),type:"number",name:"",value:"",step:"any"},domProps:{value:e.fromValue},on:{input:[function(t){t.target.composing||(e.fromValue=t.target.value)},function(t){return e.amountChanged("from")}]}})]),r("div",{staticClass:"error-message-container"},[e.fromBelowMinAllowed?r("p",[e._v(e._s(e.fromBelowMinAllowed))]):e._e(),e.hasEnough||e.fromBelowMinAllowed?e._e():r("p",[e._v(" "+e._s(e.$t("swap.warning.not-enough-funds"))+" ")]),e.fromAboveMaxAllowed?r("p",[e._v(e._s(e.fromAboveMaxAllowed))]):e._e()])],1),r("div",{staticClass:"exchange-icon",on:{click:e.flipCurrencies}},[r("img",{attrs:{src:e.images.swap,alt:""}})]),r("div",{staticClass:"amount"},[r("div",{staticClass:"title"},[r("h4",[e._v(e._s(e.$t("swap.to")))])]),r("swap-currency-picker",{attrs:{currencies:e.toArray,"override-currency":e.overrideTo,"from-source":!1,page:"SwapContainerTo"},on:{selectedCurrency:e.setToCurrency}}),r("div",{staticClass:"the-form amount-number"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.toValue,expression:"toValue"}],attrs:{placeholder:e.$t("swap.recieve-amount"),type:"number",name:"",value:"",step:"any"},domProps:{value:e.toValue},on:{input:[function(t){t.target.composing||(e.toValue=t.target.value)},function(t){return e.amountChanged("to")}]}})]),r("div",{staticClass:"error-message-container"},[e.toBelowMinAllowed?r("p",[e._v(e._s(e.toBelowMinAllowed))]):e._e(),e.toAboveMaxAllowed?r("p",[e._v(e._s(e.toAboveMaxAllowed))]):e._e()])],1)])]),e.isExitToFiat?e._e():r("div",{staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("swap-address-selector",{attrs:{currency:e.toCurrency,"current-address":e.currentAddress,copybutton:!0,title:e.$t("sendTx.to-addr"),"clear-address":e.overrideAddress},on:{toAddress:e.setToAddress,validAddress:function(t){e.validAddress=t},unableToValidate:function(t){e.unableToValidate=t}}})],1)]),e.isExitToFiat&&e.fromCurrency!==e.baseCurrency?r("div",{staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("swap-address-selector",{attrs:{currency:e.fromCurrency,"current-address":e.currentAddress,copybutton:!0,"clear-address":e.overrideAddress,title:e.$t("sendTx.from-addr")},on:{toAddress:e.setExitFromAddress,validAddress:function(t){e.validExitAddress=t},unableToValidate:function(t){e.unableToValidateExit=t}}})],1)]):e._e(),e.showRefundAddress?r("div",{staticClass:"send-form"},[r("div",{staticClass:"the-form gas-amount"},[r("swap-address-selector",{attrs:{currency:e.fromCurrency,"current-address":e.currentAddress,copybutton:!0,"clear-address":e.overrideAddress,title:e.$t("swap.refund",{currency:e.fromCurrency})},on:{toAddress:e.setRefundAddress,validAddress:function(t){e.validRefundAddress=t},unableToValidate:function(t){e.unableToValidateRefund=t}}})],1)]):e._e(),r("div",{staticClass:"send-form"},[r("div",{staticClass:"title-container"},[r("div",{staticClass:"title title-and-copy"},[r("h4",[e._v(e._s(e.$tc("swap.providers.string",2)))])])]),r("providers-radio-selector",{attrs:{"loading-provider-error":e.loadingError,"loading-provider-rates":!e.haveProviderRates,"provider-data":e.providerList,"from-value":+e.fromValue,"to-value":+e.toValue,"no-providers-pair":e.noProvidersPair,"loading-data":e.loadingData,"providers-found":e.providersFound,"provider-selected":e.selectedProvider,"switch-currency-order":e.switchCurrencyOrder,"all-supported-providers":e.supportedProviders,"provider-selected-name":e.providerSelectedName},on:{selectedProvider:e.setSelectedProvider}})],1),r("div",{staticClass:"submit-button-container"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.finalizingSwap,expression:"finalizingSwap"}],staticClass:"disabled submit-button large-round-button-green-filled clickable"},[r("i",{staticClass:"fa fa-spinner fa-spin"}),e._v(" "+e._s(e.$t("swap.button-loading"))+" ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.finalizingSwap,expression:"!finalizingSwap"}],class:[e.validSwap?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:e.swapConfirmationModalOpen}},[e._v(" "+e._s(e.$t("common.continue"))+" "),r("i",{staticClass:"fa fa-long-arrow-right",attrs:{"aria-hidden":"true"}})]),r("div",{staticClass:"clear-all-btn",on:{click:function(t){return e.reset()}}},[e._v(" "+e._s(e.$t("common.clear-all"))+" ")])])])],1),e.bityExitToFiat?r("swap-exit-to-fiat",{attrs:{"swap-details":e.swapDetails,"exit-from-address":e.exitSourceAddress,"exit-to-fiat-callback":e.exitToFiatCallback},on:{backButtonClick:e.exitToFiatAbort}}):e._e()],1)},a=[],o=(r("a4d3"),r("99af"),r("4de4"),r("7db0"),r("caad"),r("d81d"),r("b0c0"),r("b680"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("25f0"),r("2532"),r("3ca3"),r("159b"),r("ddb0"),r("96cf"),r("c964")),n=r("d0ff"),d=r("fc11"),c=r("901e"),u=r.n(c),l=r("34eb"),h=r.n(l),m=r("2f62"),p=r("ce96"),f=r("16c6"),v=r("12fd"),w=r("55c1"),y=r("37d0"),b=r.n(y),C=r("6822"),A=r.n(C),x=r("458a"),V=r.n(x),g=r("b8b3"),k=r.n(g),T=r("ba84"),F=r("3d8e"),E=r("5766"),P=r("aeba"),R=r("b643");function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach((function(t){Object(d["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=h()("v5:swapContainer"),D={components:{"interface-container-title":w["a"],"swap-currency-picker":T["a"],"swap-address-selector":v["a"],"providers-radio-selector":f["a"],"swap-confirmation-modal":F["a"],"swap-exit-to-fiat":E["a"],"swap-send-to-modal":P["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}}},data:function(){return{baseCurrency:R["a"],providerSelectedName:"",toAddress:"",currentAddress:"",refundAddress:"",exitFromAddress:"",fromCurrency:"ETH",toCurrency:"ETH",displayToValue:1,displayFromValue:1,fromValue:1,toValue:1,invalidFrom:"none",lastBestRate:0,selectedProvider:{},swapDetails:{},currencyDetails:{},swap:new R["e"](R["m"],{network:this.$store.state.network.type.name,web3:this.$store.state.web3,getRateForUnit:!1},{tokensWithBalance:this.tokensWithBalance}),images:{kybernetowrk:A.a,bity:V.a,visaMaster:k.a,swap:b.a},toArray:[],fromArray:[],providerData:[],tokenBalances:{},providerRatesRecieved:[],noProvidersPair:{},providersFound:[],tempStatuses:[],overrideFrom:{},overrideTo:{},providerNames:R["l"],supportedProviders:R["o"],fiatCurrenciesArray:R["h"].map((function(e){return e.symbol})),finalizingSwap:!1,validAddress:!0,validRefundAddress:!0,validExitAddress:!0,ratesRetrived:!1,issueRecievingRates:!1,loadingData:!0,haveProviderRates:!1,loadingError:!1,switchCurrencyOrder:!1,bityExitToFiat:!1,exitToFiatCallback:function(){},debounceUpdateEstimate:{},debounceDoThing:{},unableToValidate:!1,unableToValidateExit:!1,unableToValidateRefund:!1,overrideAddress:!1}},computed:O({},Object(m["b"])(["account","ens","gasPrice","web3","network","online"]),{bestRate:function(){var e=this;try{return this.providerData.length>0?this.selectedProvider.provider?this.providerList.find((function(t){return t.provider===e.selectedProvider.provider})).rate:Object(R["g"])(Object(n["a"])(this.providerList),this.fromValue):this.lastBestRate}catch(t){_(t)}return null},fromBelowMinAllowed:function(){return new u.a(R["d"]).gt(new u.a(this.fromValue))?"".concat(this.$t("swap.value-below-min")," ").concat(R["d"]):!!new u.a(this.selectedProvider.minValue).gt(new u.a(this.fromValue))&&this.$t("swap.value-below-min",{value:this.selectedProvider.maxValue,currency:this.fromCurrency})},fromAboveMaxAllowed:function(){return this.selectedProvider.provider===this.providerNames.bity?!!this.checkBityMax&&this.$t("swap.value-above-max",{value:this.selectedProvider.maxValue,currency:this.fromCurrency}):!(!new u.a(this.fromValue).gt(new u.a(this.selectedProvider.maxValue))||!new u.a(this.selectedProvider.maxValue).gt(new u.a(0)))&&this.$t("swap.value-above-max",{value:this.selectedProvider.maxValue,currency:this.fromCurrency})},toBelowMinAllowed:function(){return!!new u.a(0).gte(new u.a(this.toValue))&&this.$t("swap.below-min-swap")},toAboveMaxAllowed:function(){return!!this.checkBityMax&&this.$t("swap.above-max-swap")},providerList:function(){return this.providerData.length>0?Object(R["f"])(Object(n["a"])(this.providerData),this.fromValue):[]},isExitToFiat:function(){return this.fiatCurrenciesArray.includes(this.toCurrency)},validSwap:function(){var e=!this.isExitToFiat||this.fromCurrency===this.baseCurrency||""!==this.exitFromAddress;return this.hasEnough&&(""!==this.toAddress||e)&&this.allAddressesValid&&this.selectedProvider.minValue<=+this.fromValue&&(+this.fromValue<=this.selectedProvider.maxValue||0===this.selectedProvider.maxValue)},checkBityMax:function(){return!!this.swap.isProvider(this.providerNames.bity)&&(!this.swap.getProvider(this.providerNames.bity).maxCheck(this.fromCurrency,this.fromValue,this.toCurrency,this.toValue)&&this.selectedProvider.provider===this.providerNames.bity)},showRefundAddress:function(){return!R["e"].isToken(this.fromCurrency)&&this.selectedProvider.provider===this.providerNames.changelly},allAddressesValid:function(){var e=""!==this.toAddress&&this.validAddress;if(this.isExitToFiat)return this.fromCurrency===this.baseCurrency||""!==this.exitFromAddress&&this.validExitAddress;if(this.showRefundAddress){if(this.fromCurrency===this.baseCurrency||R["e"].isToken(this.fromCurrency)){var t=""===this.refundAddress&&this.validRefundAddress;return e&&t}return R["e"].checkAddress(this.refundAddress,this.fromCurrency)}return e},hasEnough:function(){return this.swap.hasEnough(this.fromCurrency,this.fromValue,this.baseCurrency,this.tokenBalances,this.account.balance)},exitSourceAddress:function(){return this.isExitToFiat&&this.fromCurrency===this.baseCurrency?this.currentAddress:this.exitFromAddress}}),watch:(s={},Object(d["a"])(s,"this.network.type.name",(function(){this.swap.updateNetwork(this.network.type.name,this.web3)})),Object(d["a"])(s,"swap.updateProviderRates",(function(){var e=this.swap.initialCurrencyLists,t=e.toArray,r=e.fromArray;this.toArray=t,this.fromArray=r})),Object(d["a"])(s,"swap.haveProviderRates",(function(){this.haveProviderRates=this.swap.ratesRetrieved;var e=this.swap.buildInitialCurrencyArrays(),t=e.toArray,r=e.fromArray;this.toArray=t,this.fromArray=r,this.lastBestRate=Object(R["g"])(Object(n["a"])(this.providerList),this.fromValue),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,"from")})),Object(d["a"])(s,"network",(function(e){this.providerData=[],this.haveProviderRates=!1,this.loadingData=!1,this.swap=new R["e"](R["m"],{network:e.type.name,web3:this.web3})})),s),mounted:function(){var e=this.swap.initialCurrencyLists,t=e.toArray,r=e.fromArray;this.toArray=t,this.fromArray=r,this.currentAddress=this.account.address,this.debounceUpdateEstimate=this.web3.utils._.debounce(this.updateEstimate,300),this.debounceReviseRateEstimate=this.web3.utils._.debounce(this.updateRateEstimate,2e3)},methods:{reset:function(){this.fromCurrency="ETH",this.toCurrency="BTC",this.overrideFrom={name:"Ether",symbol:"ETH"},this.overrideTo={name:"Bitcoin",symbol:"BTC"},this.fromValue=1,this.overrideAddress=!this.overrideAddress,this.providerSelectedName="",this.toAddress="",this.refundAddress="",this.exitFromAddress="",this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,"from"),this.finalizingSwap=!1,this.validAddress=!0,this.issueRecievingRates=!1,this.loadingError=!1,this.switchCurrencyOrder=!1,this.bityExitToFiat=!1},flipCurrencies:function(){this.providerSelectedName="",this.switchCurrencyOrder=!0;var e=this.toValue;this.fromCurrency=this.currencyDetails.to.symbol,this.toCurrency=this.currencyDetails.from.symbol,this.overrideFrom=this.currencyDetails.to,this.overrideTo=this.currencyDetails.from,this.updateRateEstimate(this.fromCurrency,this.toCurrency,e,"from"),this.switchCurrencyOrder=!1},setSelectedProvider:function(e){this.selectedProvider=this.providerList.find((function(t){return t.provider===e})),this.providerSelectedName=this.selectedProvider.provider,this.updateEstimate("from")},setToAddress:function(e){this.toAddress=e},setRefundAddress:function(e){this.refundAddress=e},setExitFromAddress:function(e){this.exitFromAddress=e},swapAll:function(){this.fromValue=this.swap.convertToTokenBase(this.fromCurrency,this.tokenBalances[this.fromCurrency]),this.amountChanged("from")},setFromCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"from";this.providerSelectedName="",this.currencyDetails.from=e,this.fromCurrency=e.symbol,this.getBalance(this.fromCurrency),this.toArray=this.swap.setToCurrencyBuilder(e),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,t)},setToCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"to";this.providerSelectedName="",this.currencyDetails.to=e,this.toCurrency=e.symbol,this.fromArray=this.swap.setFromCurrencyBuilder(e),this.updateRateEstimate(this.fromCurrency,this.toCurrency,this.fromValue,t)},getBalance:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!R["e"].isToken(t)||t===this.baseCurrency){e.next=5;break}return e.next=3,new this.web3.eth.Contract(R["b"],this.swap.getTokenAddress(t)).methods.balanceOf(this.currentAddress).call();case 3:r=e.sent,this.$set(this.tokenBalances,t,r);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),amountChanged:function(e){if(Object(R["j"])(this.fromValue)&&"from"===e||Object(R["j"])(this.toValue)&&"to"===e)if(this.swap.getProvider(this.providerNames.simplex).currencies.fiat[this.fromCurrency])this.debounceUpdateEstimate(this.providerNames.simplex+e);else{this.debounceUpdateEstimate(e);var t=this.fromCurrency,r=this.toCurrency,s=this.fromValue;this.debounceReviseRateEstimate(t,r,s,e)}},updateEstimate:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,s,i,a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.simplexUpdate){e.next=3;break}return this.simplexUpdate=!1,e.abrupt("return");case 3:e.t0=t,e.next="to"===e.t0?6:"from"===e.t0?8:e.t0==="".concat(this.providerNames.simplex,"to")?10:e.t0==="".concat(this.providerNames.simplex,"from")?26:42;break;case 6:return this.fromValue=this.swap.calculateFromValue(this.toValue,this.bestRate,this.fromCurrency),e.abrupt("break",47);case 8:return this.toValue=this.swap.calculateToValue(this.fromValue,this.bestRate,this.toCurrency),e.abrupt("break",47);case 10:if(this.simplexUpdate=!0,i=this.swap.getProvider(this.providerNames.simplex),!i.canQuote(this.fromValue,this.toValue)){e.next=20;break}return e.next=15,i.updateDigital(this.fromCurrency,this.toCurrency,this.toValue);case 15:a=e.sent,this.fromValue=a.fromValue,this.toValue=a.toValue,e.next=25;break;case 20:return e.next=22,i.updateFiat(this.fromCurrency,this.toCurrency,51);case 22:a=e.sent,o=new u.a(a.toValue).div(a.fromValue).toString(10),this.fromValue=this.swap.calculateFromValue(this.toValue,o,this.fromCurrency);case 25:return e.abrupt("break",47);case 26:if(this.simplexUpdate=!0,i=this.swap.getProvider(this.providerNames.simplex),!i.canQuote(this.fromValue,this.toValue)){e.next=36;break}return e.next=31,i.updateFiat(this.fromCurrency,this.toCurrency,this.fromValue);case 31:a=e.sent,this.fromValue=a.fromValue,this.toValue=a.toValue,e.next=41;break;case 36:return e.next=38,i.updateFiat(this.fromCurrency,this.toCurrency,51);case 38:a=e.sent,n=new u.a(a.toValue).div(a.fromValue).toString(10),this.toValue=this.swap.calculateToValue(this.fromValue,n);case 41:return e.abrupt("break",47);case 42:return s=this.swap.calculateToValue(this.fromValue,this.bestRate),r=this.swap.calculateFromValue(this.toValue,this.bestRate),this.toValue=s,this.fromValue=r,e.abrupt("break",47);case 47:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),updateRateEstimate:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r,s,i){var a,o,n,d,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.haveProviderRates){e.next=16;break}return this.loadingData=!0,this.noProvidersPair={fromCurrency:t,toCurrency:r},this.selectedProvider={},this.providerData=[],e.next=7,this.swap.updateRateEstimate(t,r,s,this.toValue);case 7:return a=e.sent,o=a.providersFound,n=a.callsToMake,this.providersFound=o,e.next=13,Promise.all(n.map((function(e){return e(t,r,s,c.toValue)})));case 13:d=e.sent,this.loadingData=!1,d.every((function(e){return e.fromCurrency===c.fromCurrency&&e.toCurrency===c.toCurrency}))&&(this.providerData=Object(R["f"])(d.map((function(e){if(+e.rate>0)return{provider:e.provider,fromCurrency:t,fromValue:c.fromValue,toCurrency:r,rate:+e.rate,minValue:e.minValue||0,maxValue:e.maxValue||0,computeConversion:function(e){return new u.a(e).times(this.rate).toFixed(6).toString(10)},additional:e.additional||{}};e.provider===c.providerNames.changelly?p["e"].responseHandler("Failed to retrieve Changelly rate from ".concat(t," to ").concat(r),3):e.provider===c.providerNames.bity?p["e"].responseHandler("Failed to retrieve Bity rate from ".concat(t," to ").concat(r),3):e.provider===c.providerNames.kyber?p["e"].responseHandler("Failed to retrieve Kyber Network rate from ".concat(t," to ").concat(r),3):e.provider===c.providerNames.simplex&&p["e"].responseHandler("Failed to retrieve Simplex rate from ".concat(t," to ").concat(r),3)})),s),this.updateEstimate(i));case 16:case"end":return e.stop()}}),e,this)})));function t(t,r,s,i){return e.apply(this,arguments)}return t}(),swapConfirmationModalOpen:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.validSwap){e.next=10;break}return this.finalizingSwap=!0,t=this.providerList.find((function(e){return e.provider===s.selectedProvider.provider})),r={providerDetails:t,fromValue:this.fromValue,toValue:this.toValue,toAddress:this.toAddress||this.currentAddress,fromAddress:this.currentAddress,refundAddress:R["e"].isToken(t.fromCurrency)?this.currentAddress:this.refundAddress,exitFromAddress:this.isExitToFiat&&this.fromCurrency===this.baseCurrency?this.currentAddress:this.exitFromAddress},e.next=7,this.swap.startSwap(r);case 7:this.swapDetails=e.sent,this.finalizingSwap=!1,this.swapDetails.isExitToFiat?(this.bityExitToFiat=!0,this.exitToFiatCallback=function(e){s.bityExitToFiat=!1,s.swapDetails=e,s.openConfirmModal(s.swapDetails)}):this.openConfirmModal(this.swapDetails);case 10:e.next=22;break;case 12:if(e.prev=12,e.t0=e["catch"](0),"abort"!==e.t0.message){e.next=17;break}return this.finalizingSwap=!1,e.abrupt("return");case 17:this.$refs.swapConfirmation.$refs.swapconfirmation.hide(),this.$refs.swapSendTo.$refs.swapconfirmation.hide(),this.finalizingSwap=!1,_(e.t0),p["e"].responseHandler(e.t0,!1);case 22:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(){return e.apply(this,arguments)}return t}(),openConfirmModal:function(e){if(e.dataForInitialization&&e.maybeToken)this.$refs.swapConfirmation.$refs.swapconfirmation.show();else{if(!e.dataForInitialization||e.maybeToken)throw Error("Error while requesting finalized details from provider");this.$refs.swapSendTo.$refs.swapconfirmation.show()}},exitToFiatAbort:function(){this.bityExitToFiat=!this.bityExitToFiat},resetSwapState:function(){this.reset()}}},$=D,j=(r("f1c0"),r("2877")),B=Object(j["a"])($,i,a,!1,null,"6131e81a",null),N=B.exports;r.d(t,"default",(function(){return N}))},"0712":function(e,t,r){},f1c0:function(e,t,r){"use strict";var s=r("0712"),i=r.n(s);i.a}}]);
//# sourceMappingURL=chunk-2f9c3612.3da84f02.js.map