(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63ea5ff2"],{"0a2c":function(t,e,n){},"102f":function(t,e,n){},1768:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expanding-option",class:t.hidebottomborder?"hide-bottom-border":""},[n("div",{staticClass:"title-bar-container"},[n("div",{staticClass:"input-title"},[t._v(t._s(t.title))]),t.popover?n("popover",{attrs:{popcontent:t.popover}}):t._e(),""===t.buttonText||t.showEnable?t._e():n("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]),t.showEnable&&!t.expanded?n("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),t.showEnable&&t.expanded?n("div",{staticClass:"button-text"},[t._v(" "+t._s(t.$t("common.yes"))+" ")]):t._e(),n("div",{staticClass:"switch sliding-switch-white"},[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},on:{click:t.optionExpanded}}),n("span",{staticClass:"slider round"})])])],1),n("div",{staticClass:"contnet-container",class:t.expanded?"expanded":""},[n("div",{staticClass:"content-block"},[t._t("default")],2)])])},s=[],i={props:{title:{type:String,default:""},buttonText:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1},popover:{type:String,default:""},showEnable:{type:Boolean,default:!1}},data:function(){return{expanded:!1}},methods:{optionExpanded:function(){this.expanded=!this.expanded,this.$emit("expanded",this.expanded)}}},o=i,r=(n("a158"),n("2877")),c=Object(r["a"])(o,a,s,!1,null,"0fe729f8",null),l=c.exports;n.d(e,"a",(function(){return l}))},"1b0c":function(t,e,n){"use strict";var a=function(t,e){var n=e._c;return n("div",{staticClass:"title-text-contents"},[e.props.options.title?n("div",{staticClass:"title-block"},[n("div",{staticClass:"title"},[e.props.options.titleIcon?n("img",{attrs:{src:e.props.options.titleIcon,alt:""}}):e._e(),n("span",[e._v(e._s(e.props.options.title))])])]):e._e(),e.props.options.boldSubTitle?n("div",{staticClass:"bold-sub-title"},[e._v(" "+e._s(e.props.options.boldSubTitle)+" ")]):e._e(),e.props.options.textContent?n("div",{staticClass:"text-content"},e._l(e.props.options.textContent,(function(t){return n("p",{key:t.key},[e._v(" "+e._s(t)+" ")])})),0):e._e()])},s=[],i={props:{options:{type:Object,default:function(){return{}}}}},o=i,r=(n("9a5c"),n("2877")),c=Object(r["a"])(o,a,s,!0,null,"7c937913",null),l=c.exports;n.d(e,"a",(function(){return l}))},8859:function(t,e,n){"use strict";var a=n("0a2c"),s=n.n(a);s.a},"9a5c":function(t,e,n){"use strict";var a=n("da89"),s=n.n(a);s.a},"9f16":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"send-offline-helper"},[n("div",{staticClass:"page-container"},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"page-title"},[n("page-title",{attrs:{options:{title:t.$t("withoutWallet.offline-helper"),boldSubTitle:"",textContent:[]}}})],1),n("div",{staticClass:"page-content-container"},[n("div",{staticClass:"collapse-container"},[n("accordion-menu",{attrs:{greytitle:!1,isopen:t.stage1,title:t.$t("withoutWallet.select-network"),"right-text":t.networkTitle,number:"1"},on:{titleClicked:function(e){t.stage1=!t.stage1}}},[n("ul",{staticClass:"networks"},t._l(Object.keys(t.reorderNetworkList),(function(e,a){return n("li",{key:t.$router.path+e+a},[n("div",{staticClass:"network-title"},[n("div",{staticClass:"network-icon"},["Custom Networks"!==e&&t.Networks[e][0].type.icon?n("img",{attrs:{src:t.Networks[e][0].type.icon,alt:""}}):t._e(),"Custom Networks"===e||t.Networks[e][0].type.icon?t._e():n("div",{staticClass:"no-icon"},[n("p",[t._v(t._s(t.$t("common.no-icon")))])])]),n("p",[t._v(t._s(e))])]),n("div",{staticClass:"network-content"},t._l(t.reorderNetworkList[e],(function(e){return n("p",{key:e.service,class:e.service===t.selectedNetwork.service&&e.type&&e.type.name===t.selectedNetwork.type.name?"current-network":"",on:{click:function(n){return t.switchNetwork(e)}}},[t._v(" "+t._s(e.service)+" ")])})),0)])})),0)])],1),n("accordion-menu",{staticClass:"address-selector",attrs:{greytitle:!1,editbutton:!0,isopen:t.stage2,title:t.$t("withoutWallet.generate-info"),number:"2"},on:{titleClicked:function(e){t.stage2=!t.stage2}}},[n("dropdown-address-selector",{attrs:{title:t.$t("sendTx.from-addr")},on:{toAddress:function(e){return t.generateInformation(e)}}}),t.informationGenerated?n("div",[n("ul",[n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.sender"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.address))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.nonce"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.nonce))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.chain-id"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.chainID)+" ("+t._s(t.genInfo.networkName)+")")])]),n("li",{staticClass:"detail-container with-divider"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.gas.current-gas"))+":")]),n("span",{staticClass:"detail-text"},[t._v(" "+t._s(t.toGwei(t.genInfo.gasPrice))+" "+t._s(t.$t("common.gas.gwei"))+" ")])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.retrieved"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.dateTimeDisplay(t.genInfo.timestamp)))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.at-block"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.blockNumber))])])])]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.informationGenerated,expression:"informationGenerated"}],staticClass:"button-container"},[n("a",{ref:"generatedDownloadLink",attrs:{href:t.generatedJson,download:t.exportFileName,rel:"noopener noreferrer"}},[n("standard-button",{attrs:{options:{title:t.$t("withoutWallet.export-json"),buttonStyle:"green-border",noWalletTerms:!0,noMinWidth:!0}}})],1),n("standard-button",{attrs:{options:{title:t.$t("common.continue"),buttonStyle:"green",noWalletTerms:!0,rightArrow:!0},"click-function":t.stage2Btn}})],1)],1),n("accordion-menu",{attrs:{greytitle:!1,isopen:t.stage3,title:t.$t("withoutWallet.signed-tx"),number:"3"},on:{titleClicked:function(e){t.stage3=!t.stage3}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawSigned,expression:"rawSigned"}],staticClass:"no-margin raw-tx-input",domProps:{value:t.rawSigned},on:{input:function(e){e.target.composing||(t.rawSigned=e.target.value)}}}),t._v(" "),t.invalidSignature?n("p",[t._v(t._s(t.$t("sendTx.invalid-signature")))]):t._e(),t.wrongNetwork&&""===t.correctNetwork?n("i18n",{attrs:{tag:"p",path:"sendTx.signed-chain-id"}}):t._e(),t.wrongNetwork&&""!==t.correctNetwork?n("i18n",{attrs:{tag:"p",path:"sendTx.signed-chain-id"}},[n("span",{attrs:{slot:"network"},slot:"network"},[t._v("("+t._s(t.correctNetwork)+")")])]):t._e(),n("expanding-option",{attrs:{title:t.$t("sendTx.raw-tx")}},[n("textarea",{staticClass:"no-margin raw-tx-input",attrs:{disabled:""},domProps:{value:JSON.stringify(t.rawTx)}})]),n("div",{staticClass:"button-container"},[n("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),n("standard-button",{attrs:{options:{title:t.$t("withoutWallet.upload-json"),buttonStyle:"green-border",noWalletTerms:!0,noMinWidth:!0},"click-function":t.uploadClick}}),n("standard-button",{attrs:{options:{title:t.$t("common.continue"),buttonStyle:"green",noWalletTerms:!0},"click-function":t.stage3Btn}})],1)],1),n("accordion-menu",{attrs:{greytitle:!1,editbutton:!1,isopen:t.stage4,title:t.$t("withoutWallet.tx-details"),number:"4"},on:{titleClicked:function(e){t.stage4=!t.stage4}}},[n("ul",[n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.sender"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.from))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.receiver"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.to))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.nonce"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.nonce))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.value"))+":")]),n("span",{staticClass:"detail-text"},[t._v(" "+t._s(t.toEth(t.value))+" "+t._s(t.selectedNetwork.type.currencyName)+" ")])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.data"))+":")]),"0x"!==t.data?n("span",{staticClass:"detail-text"},[t._v(" "+t._s(t.truncateData(t.data))+" "),n("span",{staticClass:"show-all-btn",on:{click:function(e){t.showAllData=!t.showAllData}}},[t._v(t._s(t.$t("common.show-all")))])]):n("span",{staticClass:"data-all"},[t._v(t._s(t.data))]),t.showAllData?n("span",{staticClass:"data-all"},[t._v(t._s(t.data))]):t._e()]),n("li",{staticClass:"detail-container with-divider"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.chain-id"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.chainID)+" ("+t._s(t.selectedNetwork.type.name_long)+")")])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.gas.limit"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.gasLimit))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.gas.price"))+":")]),n("span",{staticClass:"detail-text"},[t._v(t._s(t.toGwei(t.gasPrice))+" "+t._s(t.$t("common.gas.gwei")))])]),n("li",{staticClass:"detail-container"},[n("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.gas.fee"))+":")]),n("span",{staticClass:"detail-text"},[t._v(" "+t._s(t.toEth(t.fee))+" "+t._s(t.selectedNetwork.type.currencyName)+" ($ "+t._s(t.calculateCost(t.fee))+") ")])])]),n("div",{staticClass:"button-container"},[n("standard-button",{attrs:{options:{title:t.$t("common.send"),buttonStyle:"green",noWalletTerms:!0,rightArrow:!0},"click-function":t.stage4Btn}})],1)]),n("accordion-menu",{attrs:{greytitle:!1,editbutton:!1,isopen:t.stage5,title:t.$t("withoutWallet.tx-status"),number:"5"},on:{titleClicked:function(e){t.stage5=!t.stage5}}},[""===t.error?n("ul",[n("li",{staticClass:"tx-hash-container"},[n("p",[t._v(t._s(t.$t("sendTx.tx-hash"))+":")]),n("a",{staticClass:"detail-text",attrs:{href:t.replaceUrl("",t.txHash),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.txHash))])]),n("li",{staticClass:"tx-receipt-container"},[n("p",[t._v(t._s(t.$t("sendTx.transaction-receipt"))+":")]),Object.keys(t.txReceipt).length>0?n("div",{staticClass:"tx-receipt-items"},t._l(Object.keys(t.txReceipt),(function(e,a){return n("div",{key:e+a},[n("span",[t._v(t._s(t.getTranslatedItem(e)))]),"transactionHash"===e?n("a",{staticClass:"right-side",attrs:{href:t.replaceUrl("",t.txReceipt[e]),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.txReceipt[e]))]):"contractAddress"===e?n("a",{staticClass:"right-side",attrs:{href:t.replaceUrl("address",t.txReceipt[e]),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.txReceipt[e]))]):n("span",{staticClass:"right-side"},[t._v(t._s(t.txReceipt[e]))])])})),0):n("div",{staticClass:"loading"},[t._v(t._s(t.$t("common.loading"))+"....")])])]):n("div",[t._v(t._s(t.error))])])],1)])]),n("confirmation-modal",{ref:"offlineConfirm",attrs:{"raw-tx":t.rawTx,"signed-tx":t.rawSigned,"env-details":t.envDetails}})],1)},s=[],i=(n("a4d3"),n("99af"),n("4de4"),n("fb6a"),n("b0c0"),n("b680"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("07ac"),n("ac1f"),n("25f0"),n("3ca3"),n("5319"),n("159b"),n("ddb0"),n("2b3d"),n("bf19"),n("0122")),o=(n("96cf"),n("c964")),r=n("fc11"),c=n("8d23"),l=n("2f62"),d=n("a731"),u=n("901e"),p=n.n(u),h=n("1131"),f=n.n(h),g=n("8761"),w=n("8ded"),m=n.n(w),v=n("1b0c"),_=n("4234"),x=n("94b2"),b=n("a8f0"),C=n("1768"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"send-offline-confirmation-modal"},[n("b-modal",{ref:"sendOfflineConfirmation",staticClass:"bootstrap-modal-wide nopadding",attrs:{title:t.$t("sendTx.confirmation.title"),"hide-footer":"",centered:"",static:"",lazy:""}},[n("div",{staticClass:"modal-contents"},[n("div",{staticClass:"tx-info-container"},[n("ul",[n("li",[t._v(t._s(t.$t("sendTx.from-addr")))]),n("li",[t._v(t._s(t.rawTx.from))])]),n("ul",[n("li",[t._v(t._s(t.$t("sendTx.to-addr")))]),n("li",[t._v(t._s(t.rawTx.to))])]),n("ul",[n("li",[t._v(t._s(t.$t("sendTx.nonce")))]),n("li",[t._v(t._s(t.rawTx.nonce))])]),n("ul",[n("li",[t._v(t._s(t.$t("common.value"))+"/li>")]),n("li",[t._v(t._s(t.rawTx.value))])]),n("ul",[n("li",[t._v(t._s(t.$t("sendTx.data")))]),n("li",{staticClass:"data"},[t._v(t._s(t.rawTx.data))])]),n("ul",[n("li",[t._v(t._s(t.$t("common.chain-id")))]),n("li",[t._v(t._s(t.rawTx.chainID))])]),n("ul",[n("li",[t._v(t._s(t.$t("common.gas.limit"))+"t")]),n("li",[t._v(t._s(t.rawTx.gasLimit))])]),n("ul",[n("li",[t._v(t._s(t.$t("common.gas.price")))]),n("li",[t._v(t._s(t.rawTx.gasPrice))])])]),n("expanding-option",{attrs:{hidebottomborder:!0,title:t.$t("sendTx.signed.tx")}},[n("div",{staticClass:"raw-signed"},[t._v(t._s(t.signedTx))])]),n("expanding-option",{attrs:{title:t.$t("sendTx.raw-tx")}},[t._v(t._s(t.rawTx))]),n("div",{staticClass:"button-block-container"},[n("standard-button",{attrs:{options:t.buttonConfirmAndSend}})],1)],1)])],1)},y=[],T={name:"SendOfflineConfirmation",components:{"standard-button":b["a"],"expanding-option":C["a"]},props:{envDetails:{type:Object,default:function(){return{}}},rawTx:{type:Object,default:function(){return{}}},signedTx:{type:String,default:""}},data:function(){return{modalDetailInformation:!1,inputRawTx:{isTextarea:!0,buttonClear:!0,buttonCopy:!0},buttonConfirmAndSend:{title:"Confirm & Send",buttonStyle:"green",helpCenter:!0}}},beforeDestroy:function(){},methods:{}},$=T,N=(n("8859"),n("2877")),I=Object(N["a"])($,k,y,!1,null,"3c183fc0",null),S=I.exports;function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j={components:{"page-title":v["a"],"accordion-menu":_["a"],"dropdown-address-selector":x["a"],"standard-button":b["a"],"expanding-option":C["a"],"confirmation-modal":S},data:function(){return{networkTypes:Object.values(g),selectedNetwork:this.$store.state.network,stage1:!1,stage2:!0,stage3:!1,stage4:!1,stage5:!1,showAllData:!1,informationGenerated:!1,downloadable:!1,from:"0x",rawSigned:"",minAccountBalance:0,fee:0,nonce:0,gasPrice:0,gasLimit:0,to:"0x",value:0,data:"0x",chainID:0,ethPrice:0,genInfo:{address:"0x",gasPrice:0,nonce:0,chainID:this.$store.state.network.type.chainID,networkName:this.$store.state.network.type.name_long},generatedJson:{},file:"",exportFileName:"Generated Information",invalidSignature:!1,wrongNetwork:!1,correctNetwork:"",txHash:"",txReceipt:{},error:""}},computed:O({},Object(l["b"])(["network","Networks","customPaths","path","web3","wallet","online"]),{reorderNetworkList:function(){var t=void 0!==m.a.get("customNetworks")?m.a.get("customNetworks"):[],e=d["a"].reorderNetworks(),n=Object.assign({},e,{"Custom Networks":t});return 0===t.length&&delete n["Custom Networks"],n},networkTitle:function(){return"".concat(this.selectedNetwork.type.name," - ").concat(this.selectedNetwork.service," ")},rawTx:function(){return{from:this.from,nonce:this.nonce,gasPrice:this.toGwei(this.gasPrice),gasLimit:this.gasLimit,to:this.to,value:this.toEth(this.value),data:this.data,chainID:this.chainID}},envDetails:function(){return{network:this.selectedNetwork,ethPrice:this.ethPrice}}}),watch:{rawSigned:function(t){this.getTransactionDetails(t)}},mounted:function(){this.switchNetwork(this.$store.state.network),this.online&&this.fetchBalanceData()},methods:{getTranslatedItem:function(t){var e=t.replace(/([A-Z])/g,"-$1").toLowerCase();return this.$t("withoutWallet."+e)},replaceUrl:function(t,e){return"address"===t?this.network.type.blockExplorerAddr.replace("[[address]]",e):this.network.type.blockExplorerTX.replace("[[txHash]]",e)},stage1Btn:function(){this.stage1=!1,this.stage2=!0},stage2Btn:function(){this.stage2=!1,this.stage3=!0},stage3Btn:function(){this.stage3=!1,this.stage4=!0},stage4Btn:function(){var t=this;this.stage4=!1,this.stage5=!0,""!==this.rawSigned&&(this.error=this.txHash="",this.txReceipt={},this.web3.eth.sendSignedTransaction(this.rawSigned).once("transactionHash",(function(e){t.txHash=e})).then((function(e){t.txReceipt=e})).catch((function(e){t.error=e})))},switchNetwork:function(t){var e=this;this.$store.dispatch("switchNetwork",t).then((function(){e.selectedNetwork=t,e.$store.dispatch("setWeb3Instance"),e.stage1Btn(),e.getTransactionDetails()}))},truncateData:function(t){return t?"".concat(t.slice(0,20),"...").concat(t.slice(-10)):""},getTransactionDetails:function(t){var e=this,n={nonce:0,gasPrice:1,gasLimit:2,to:3,value:4,data:5,v:6,r:7,s:8};if(t&&(this.rawSigned=t),""!==this.rawSigned){var a=d["a"].sanitizeHex(this.rawSigned),s=new c["Transaction"](a,{chain:this.genInfo["chainID"]});if(this.invalidSignature=!s.verifySignature(),this.chainID=s.getChainId(),this.wrongNetwork=!new p.a(this.selectedNetwork.type.chainID).eq(new p.a(this.chainID)),this.chainID=s.getChainId(),this.wrongNetwork){var i=this.networkTypes.filter((function(t){return t.chainID===e.chainID}));i&&(this.correctNetwork=i[0].name_long)}this.from=d["a"].sanitizeHex(s.getSenderAddress().toString("hex"));var o=s.toJSON();this.to=o[n.to],this.gasLimit=new p.a(o[n.gasLimit]).toFixed(),this.nonce=new p.a(o[n.nonce]).toFixed(),this.value=new p.a(o[n.value]).toFixed(),this.data=o[n.data],this.minAccountBalance=s.getUpfrontCost().toString(),this.gasPrice=new p.a(d["a"].sanitizeHex(s.gasPrice.toString("hex"))).toFixed(),this.fee=new p.a(this.toGwei(this.gasPrice)).times(this.gasLimit).toFixed()}},fetchBalanceData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="https://cryptorates.mewapi.io/ticker",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:if(a=t.sent,s=a.data,s["ETH"]){t.next=10;break}return t.abrupt("return",0);case 10:this.ethPrice=new p.a(s["ETH"].quotes.USD.price);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),toEth:function(t){return!t||isNaN(t)?0:f.a.fromWei(new p.a(t).toFixed(),"ether")},toWei:function(t){return t?f.a.toWei(new p.a(t).toFixed(),"gwei"):0},toGwei:function(t){return t?f.a.fromWei(new p.a(t).toFixed(),"gwei"):0},dateTimeDisplay:function(t){return new Date(t).toString()},calculateCost:function(t){var e=this.toWei(t);return new p.a(this.ethPrice).times(this.toEth(e)).precision(2,p.a.ROUND_UP).toNumber()},generateInformation:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.address){t.next=2;break}return t.abrupt("return");case 2:return this.genInfo["address"]=e.address,t.next=5,this.web3.eth.getGasPrice();case 5:return this.genInfo["gasPrice"]=t.sent,t.next=8,this.web3.eth.getTransactionCount(e.address);case 8:return this.genInfo["nonce"]=t.sent,t.next=11,this.web3.eth.getBlockNumber();case 11:this.genInfo["blockNumber"]=t.sent,this.genInfo["chainID"]=this.selectedNetwork.type.chainID,this.genInfo["timestamp"]=Date.now(),this.exportGeneratedInfo(),this.informationGenerated=!0;case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),exportGeneratedInfo:function(){var t=this,e=function(e,n){var a="object"===Object(i["a"])(e)?JSON.stringify(e):e;if(null===a)return"";var s=new Blob([a],{type:n});return t.downloadable=!0,window.URL.createObjectURL(s)};this.generatedJson=e(this.genInfo,"mime"),this.exportFileName="generated-offline-tx-".concat(Date.now(),".json")},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,n=new FileReader;n.onloadend=function(t){e.file=JSON.parse(t.target.result),e.getTransactionDetails(e.file.rawTransaction)},n.readAsBinaryString(t.target.files[0])}}},P=j,W=(n("fb1d"),Object(N["a"])(P,a,s,!1,null,"38ae59c0",null)),E=W.exports;n.d(e,"default",(function(){return E}))},a158:function(t,e,n){"use strict";var a=n("102f"),s=n.n(a);s.a},cfeb:function(t,e,n){},da89:function(t,e,n){},fb1d:function(t,e,n){"use strict";var a=n("cfeb"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-63ea5ff2.4f4f3d22.js.map