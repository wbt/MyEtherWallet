(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-769513ac"],{"102f":function(t,e,i){},"161f":function(t,e,i){"use strict";var n=i("8545"),a=i.n(n);a.a},1768:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"expanding-option",class:t.hidebottomborder?"hide-bottom-border":""},[i("div",{staticClass:"title-bar-container"},[i("div",{staticClass:"input-title"},[t._v(t._s(t.title))]),t.popover?i("popover",{attrs:{popcontent:t.popover}}):t._e(),""===t.buttonText||t.showEnable?t._e():i("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]),t.showEnable&&!t.expanded?i("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),t.showEnable&&t.expanded?i("div",{staticClass:"button-text"},[t._v(" "+t._s(t.$t("common.yes"))+" ")]):t._e(),i("div",{staticClass:"switch sliding-switch-white"},[i("label",{staticClass:"switch"},[i("input",{attrs:{type:"checkbox"},on:{click:t.optionExpanded}}),i("span",{staticClass:"slider round"})])])],1),i("div",{staticClass:"contnet-container",class:t.expanded?"expanded":""},[i("div",{staticClass:"content-block"},[t._t("default")],2)])])},a=[],r={props:{title:{type:String,default:""},buttonText:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1},popover:{type:String,default:""},showEnable:{type:Boolean,default:!1}},data:function(){return{expanded:!1}},methods:{optionExpanded:function(){this.expanded=!this.expanded,this.$emit("expanded",this.expanded)}}},o=r,s=(i("a158"),i("2877")),c=Object(s["a"])(o,n,a,!1,null,"0fe729f8",null),u=c.exports;i.d(e,"a",(function(){return u}))},"185f":function(t,e,i){"use strict";var n=i("7871"),a=i.n(n);a.a},"412b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-maker"},[i("dai-confirmation-modal",{ref:"daiconfirmation",attrs:{opencdp:t.openCdp,txinfo:t.txInfo,"liquidation-price":t.liquidationPrice,"collat-ratio":t.displayFixedPercent(t.collatRatio),"liquidation-penalty":t.displayPercentValue(t.liquidationPenalty),"min-ratio":t.displayPercentValue(t.liquidationRatio),"current-price":t.displayFixedValue(t.ethPrice,2),collateral:t.ethQty.toString(),generate:t.daiQty.toString()}}),t.loading?i("loading-overlay",{attrs:{loadingmessage:t.$t("dappsMaker.creating-message")}}):t._e(),i("div",{staticClass:"manage-container"},[t._v(" "+t._s(t.$t("dappsMaker.no-longer-active-notice"))+" ")])],1)},a=[],r=(i("a4d3"),i("4de4"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("e25e"),i("25f0"),i("159b"),i("ddb0"),i("96cf"),i("c964")),o=i("fc11"),s=i("2f62"),c=i("70c1"),u=i.n(c),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container"},[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal bootstrap-modal-wide padding-40-20",attrs:{title:t.$t("dappsMaker.dai-confirmation"),centered:"","hide-footer":"",static:"",lazy:""}},[n("div",{staticClass:"modal-content-container"},[n("div",{staticClass:"tx-amount"},[n("div",[n("div",{staticClass:"interface__block-title"},[t._v(" "+t._s(t.$t("dappsMaker.collateral"))+" ")]),n("div",{staticClass:"amount-block"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:i("9165")}})]),n("div",{staticClass:"amount"},[t._v(" "+t._s(t.collateral)),n("span",[t._v(t._s(t.$t("common.currency.eth")))])])])]),n("div",{staticClass:"arrow"},[n("img",{attrs:{src:i("432e")}})]),n("div",[n("div",{staticClass:"interface__block-title"},[t._v(" "+t._s(t.$t("dappsMaker.generate"))+" ")]),n("div",{staticClass:"amount-block"},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:i("9b76")}})]),n("div",{staticClass:"amount"},[t._v(" "+t._s(t.generate)),n("span",[t._v(t._s(t.$t("dappsMaker.dai")))])])])])]),n("div",{staticClass:"detail-info"},[n("expanding-option",{attrs:{title:t.$t("dappsMaker.details")}},[n("ul",[n("li",[n("p",[t._v(" "+t._s(t.$t("dappsMaker.liquid-price"))+" ("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+") ")]),n("p",{staticClass:"bold"},[t._v(" "+t._s(t.liquidationPrice)+" "+t._s(t.$t("common.currency.usd"))+" ")])]),n("li",[n("p",[t._v(" "+t._s(t.$t("dappsMaker.current-price"))+" ("+t._s(t.$t("common.currency.eth"))+"/"+t._s(t.$t("common.currency.usd"))+") ")]),n("p",[t._v(t._s(t.currentPrice)+" "+t._s(t.$t("common.currency.usd")))])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.liquidation-penalty")))]),n("p",[t._v(t._s(t.liquidationPenalty)+"%")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.collateral-ratio")))]),n("p",{staticClass:"bold"},[t._v(t._s(t.collatRatio)+" %")])]),n("li",[n("p",[t._v(t._s(t.$t("dappsMaker.minimum-ratio")))]),n("p",[t._v(t._s(t.minRatio)+"%")])])])])],1),n("div",{staticClass:"button-container"},[n("standard-button",{attrs:{options:{title:t.$t("dappsMaker.confirm-and-create"),buttonStyle:"green",helpCenter:!0},"click-function":t.confirmClicked}})],1)])])],1)},d=[],p=(i("a9e3"),i("1768")),f=i("a8f0"),h={components:{"expanding-option":p["a"],"standard-button":f["a"]},props:{opencdp:{type:Function,default:function(){}},liquidationPrice:{type:Number,default:0},collatRatio:{type:String,default:"Error"},liquidationPenalty:{type:String,default:"Error"},minRatio:{type:String,default:"Error"},currentPrice:{type:String,default:"Error"},collateral:{type:String,default:"Error"},generate:{type:String,default:"Error"}},methods:{confirmClicked:function(){this.opencdp()}}},v=h,m=(i("185f"),i("2877")),g=Object(m["a"])(v,l,d,!1,null,"50d943ce",null),y=g.exports,b=i("7a09"),_=i("c16c"),w=i("901e"),P=i.n(w),x=i("cc82"),C=i.n(x);function k(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function R(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?k(i,!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):k(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var S=function(t){return new P.a(t)},$=function(t,e,i){return S(t).times(S(e)).div(S(i))},O={components:{"dai-confirmation-modal":y,"loading-overlay":b["a"]},props:{tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:String,default:"0"},ethPrice:{type:P.a,default:S(0)},pethPrice:{type:P.a,default:S(0)},liquidationPenalty:{type:P.a,default:S(0)},stabilityFee:{type:P.a,default:S(0)},liquidationRatio:{type:P.a,default:S(0)},wethToPethRatio:{type:P.a,default:S(0)},pethMin:{type:P.a,default:S(0)},priceService:{type:Object,default:function(){return{}}},cdpService:{type:Object,default:function(){return{}}},proxyService:{type:Object,default:function(){return{}}},buildEmpty:{type:Function,default:function(){}},values:{type:Object,default:function(){return{maxPethDraw:"",maxEthDraw:"",maxUsdDraw:"",ethCollateral:"",pethCollateral:"",usdCollateral:"",debtValue:"",maxDai:"",collateralRatio:"",cdpId:"",stabilityFee:"",minEth:"",liquidationRatio:"",wethToPethRatio:"",liquidationPenalty:"",targetPrice:"",pethPrice:""}}}},data:function(){return{arrowImage:C.a,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,txInfo:{},loading:!1}},computed:R({},Object(s["b"])(["account","gasPrice","web3","network","ens"]),{validInputs:function(){return!S(this.ethQty).isNaN()&&!S(this.daiQty).isNaN()&&(!!S(this.ethQty).gt(0)&&(!S(this.ethQty).lte(this.values.minEth)&&(!S(this.maxDaiDraw).lte(S(this.daiQty))&&(!S(this.collatRatio).lte(1.501)&&S(u.a.toWei(this.ethQty,"ether").toString()).lte(this.account.balance)))))},hasEnoughEth:function(){return!S(this.ethQty).isNaN()&&S(u.a.toWei(this.ethQty,"ether").toString()).lte(this.account.balance)},atSetFloor:function(){return this.priceFloor<=0?0:$(this.ethPrice,this.liquidationRatio,this.priceFloor)},collatRatio:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcCollatRatio(this.ethQty,this.daiQty)},liquidationPrice:function(){return this.daiQty<=0||this.ethQty<=0?0:this.calcLiquidationPrice(this.ethQty,this.daiQty)},maxDaiDraw:function(){if(this.ethQty<=0)return 0;var t=this.calcDaiDraw(this.ethQty).times(.01);return S(this.calcDaiDraw(this.ethQty)).minus(t)},minEthDeposit:function(){return this.daiQty<=0?0:this.calcMinEthDeposit(this.daiQty)},risky:function(){var t=this.collatRatio;return!!S(t).gt(0)&&S(t).lte(2)},veryRisky:function(){var t=this.collatRatio;return!!S(t).gt(0)&&S(t).lte(1.75)},depositInPeth:function(){return this.ethQty<=0?0:this.toPeth(this.ethQty)},minEth:function(){return this.wethToPethRatio?S(this.pethMin).times(this.wethToPethRatio):"--"}}),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.buildEmptyInstance();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{buildEmptyInstance:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.buildEmpty();case 2:this.makerCDP=t.sent,this.$forceUpdate();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),displayPercentValue:_["e"],displayFixedValue:_["d"],displayFixedPercent:_["c"],openCdp:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,!(this.ethQty<=0)){t.next=3;break}return t.abrupt("return",0);case 3:return setTimeout((function(){e.loading=!1}),5e3),this.$eventHub.$on("showTxConfirmModal",(function(){e.$emit("cdpOpened"),e.loading&&(e.$refs.daiconfirmation.$refs.modal.hide(),e.loading=!1)})),t.next=7,this.makerCDP.openCdp(this.ethQty,this.daiQty);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),openDaiConfirmation:function(){this.$refs.daiconfirmation.$refs.modal.show()},toUSD:function(t){if(void 0===t||null===t)return S(0);var e=this.ethPrice.times(S(t));return e.lt(0)?S(0):e},toPeth:function(t){return S(t).eq(0)?S(0):S(t).div(this.wethToPethRatio)},fromPeth:function(t){return S(t).eq(0)?S(0):S(t).times(this.wethToPethRatio)},calcMinCollatRatio:function(t){return $(this.ethPrice,this.liquidationRatio,t)},calcDaiDraw:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ethPrice,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:$(e,S(t),i)},calcMinEthDeposit:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ethPrice,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.liquidationRatio;return t<=0?0:$(i,t,e)},calcCollatRatio:function(t,e){return t<=0||e<=0?0:$(this.ethPrice,t,e)},calcLiquidationPrice:function(t,e){if(t<=0||e<=0)return 0;for(var i=parseInt(this.ethPrice),n=i;n>0;n--){var a=$(n,t,e).lte(this.liquidationRatio);if(a)return n}for(var r=100;r>0;r--){var o=$(r/100,t,e).lte(this.liquidationRatio);if(o)return r/100}return 0}}},E=O,Q=(i("161f"),Object(m["a"])(E,n,a,!1,null,"7f8ae862",null)),D=Q.exports;e["default"]=D},4820:function(t,e,i){"use strict";var n=i("69b7"),a=i.n(n);a.a},"69b7":function(t,e,i){},"72ad":function(t,e,i){},7871:function(t,e,i){},"7a09":function(t,e,i){"use strict";var n=function(t,e){var i=e._c;return i("div",{staticClass:"loading-overlay"},[i(e.injections.components.LoadingSign,{tag:"component",attrs:{loadingmessage1:e.props.loadingmessage,color:"white"}})],1)},a=[],r=i("c1be"),o={inject:{components:{default:{LoadingSign:r["a"]}}},props:{loadingmessage:{type:String,default:""}}},s=o,c=(i("df84"),i("2877")),u=Object(c["a"])(s,n,a,!0,null,"466143c1",null),l=u.exports;i.d(e,"a",(function(){return l}))},8545:function(t,e,i){},a158:function(t,e,i){"use strict";var n=i("102f"),a=i.n(n);a.a},c16c:function(t,e,i){"use strict";i.d(e,"e",(function(){return s})),i.d(e,"d",(function(){return c})),i.d(e,"c",(function(){return u})),i.d(e,"f",(function(){return l})),i.d(e,"h",(function(){return d})),i.d(e,"g",(function(){return p})),i.d(e,"a",(function(){return f})),i.d(e,"b",(function(){return h}));i("b680"),i("d3b7"),i("e25e"),i("25f0");var n=i("901e"),a=i.n(n),r=function(t){return new a.a(t)},o=function(t,e,i){return r(t).times(r(e)).div(r(i))};function s(t){return a.a.isBigNumber(t)||(t=new a.a(t)),t.times(100).toString()}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.a.isBigNumber(t)||(t=new a.a(t)),!isFinite(t)||isNaN(t)?"--":i?t.toFixed(e,a.a.ROUND_DOWN).toString():t.toFixed(e).toString()}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=c(s(t),e,i);return isFinite(n)&&new a.a(n).gt(0)?n:"--"}function l(t,e,i,n){return o(r(t),r(e),r(i)).minus(r(n))}function d(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r(t).minus(o(r(e).plus(.001),r(i),r(n))).minus(r(a).times(1))}function p(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return r(t).minus(o(r(e),r(i),r(n))).minus(r(a).times(1))}function f(t,e,i){return o(r(i),t,e)}function h(t,e,i,n){for(var a=parseInt(i),s=a;s>0;s--){var c=o(s,t,e).lte(r(n));if(c)return s}for(var u=100;u>0;u--){var l=o(u/100,t,e).lte(r(n));if(l)return u/100}return 0}},c1be:function(t,e,i){"use strict";var n=function(t,e){var i=e._c;return i("div",[i("div",{class:[e.props.color,"loading-container","loading-sign"]},[e._m(0),""!=e.props.loadingmessage1?i("p",{staticClass:"loading-message1"},[e._v(" "+e._s(e.props.loadingmessage1)+" ")]):e._e(),""!=e.props.loadingmessage2?i("p",{staticClass:"loading-message2"},[e._v(" "+e._s(e.props.loadingmessage2)+" ")]):e._e()])])},a=[function(t,e){var i=e._c;return i("div",{staticClass:"lds-spinner"},[i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div"),i("div")])}],r={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},o=r,s=(i("4820"),i("2877")),c=Object(s["a"])(o,n,a,!0,null,"3944612c",null),u=c.exports;i.d(e,"a",(function(){return u}))},df84:function(t,e,i){"use strict";var n=i("72ad"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-769513ac.9330f7d7.js.map