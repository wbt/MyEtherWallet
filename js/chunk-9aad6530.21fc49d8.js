(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9aad6530"],{"35d2":function(e,t,n){e.exports=n.p+"img/download-keystore-grey.2cd87b2a.svg"},"51b0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container-block"},[a("div",{staticClass:"view-wallet-info-layout-container"},[a("interface-balance-modal",{ref:"balance",attrs:{balance:e.balance}}),a("view-private-key-modal",{ref:"viewPriv"}),a("print-modal",{ref:"printModal",attrs:{address:e.account.address}}),a("div",{staticClass:"page-title-block"},[a("h2",[e._v(e._s(e.$t("footer.view-wallet-info")))]),a("p",[e._v(" "+e._s(e.$t("accessWallet.wallet-options"))+" ")])]),a("div",{staticClass:"page-content-block flex--row--align-stretch"},[a("div",{staticClass:"wallet-info"},[a("div",{staticClass:"wallet-info-header"},[a("h3",[e._v(e._s(e.$t("accessWallet.wallet-info")))]),a("router-link",{attrs:{to:"/interface"}},[e._v(e._s(e.$t("common.wallet.access")))])],1),a("div",{staticClass:"balance-container"},[a("div",{staticClass:"balance-main-container"},[a("h4",[e._v(e._s(e.$t("common.balance.string")))]),a("div",{staticClass:"balance-and-buttons"},[a("p",[a("b",{directives:[{name:"show",rawName:"v-show",value:!e.fetchingBalance,expression:"!fetchingBalance"}]},[e._v(e._s(e.balance))]),a("i",{directives:[{name:"show",rawName:"v-show",value:e.fetchingBalance,expression:"fetchingBalance"}],staticClass:"fa fa-spinner fa-lg fa-spin"}),e._v(" "+e._s(e.network.type.currencyName)+" ")]),a("div",{staticClass:"balance-button-container"},[a("i",{staticClass:"fa fa-refresh fa-lg",on:{click:e.fetchBalance}}),a("img",{attrs:{src:n("951b")},on:{click:e.openBalance}})])])])]),a("div",{staticClass:"account-details"},[a("div",{staticClass:"blockie-container"},[a("blockie",{attrs:{address:e.account.address,width:"80px",height:"80px"}}),a("i18n",{attrs:{tag:"h3",path:"common.wallet.own"}},[a("span",{attrs:{slot:"nickname"},slot:"nickname"},[e._v(e._s(e.account.nickname))])]),a("div",{staticClass:"address-copy-container"},[a("input",{ref:"copyAddress",domProps:{value:e.account.address}}),a("p",[e._v(e._s(e._f("concatAddr")(e.account.address)))]),a("img",{attrs:{src:n("a428")},on:{click:e.copy}})])],1),a("div",{staticClass:"other-options"},[e._l(e.otherOptions,(function(t){return a("div",{key:t.key,class:[e.disableItem(t.key)?"item-disabled":"","option-item"],on:{click:t.func}},[a("img",{attrs:{src:e.disableItem(t.key)?t.iconDisabled:t.icon}}),a("p",[e._v(e._s(t.name))])])})),a("a",{ref:"downloadFile",attrs:{href:e.walletJson,download:e.filename,target:"_blank",rel:"noopener noreferrer"}})],2)])]),a("div",{staticClass:"wallet-tokens"},[a("interface-tokens",{attrs:{tokens:e.tokens,"get-token-balance":e.getTokenBalance,"received-tokens":!e.loading,"reset-token-selection":e.setTokensWithBalance,"fetch-tokens":e.fetchTokens,ads:!1,address:e.account.address}})],1)])],1)])},r=[],s=(n("a4d3"),n("99af"),n("4de4"),n("d81d"),n("4e82"),n("b0c0"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("5319"),n("159b"),n("ddb0"),n("96cf"),n("c964")),i=n("fc11"),c=n("2f62"),o=n("ce96"),l=n("8ded"),d=n.n(l),u=n("3578"),f=n.n(u),p=n("8f2d"),h=n("0598"),b=n("2480"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{ref:"viewPriv",staticClass:"bootstrap-modal",attrs:{title:e.$t("accessWallet.private-key.string"),"hide-footer":"",centered:"","no-padding":""}},[n("div",{staticClass:"modal-contents"},[n("qrcode",{attrs:{value:e.privKey,options:{size:200}}}),n("p",{staticClass:"priv-key"},[e._v(" "+e._s(e.privKey)+" ")]),n("div",{staticClass:"copy-button",on:{click:e.copy}},[e._v(" "+e._s(e.$t("common.copy"))+" "),n("input",{ref:"privKey",domProps:{value:e.privKey}})]),n("i18n",{staticClass:"red-warning",attrs:{path:"accessWallet.private-key.do-not-share",tag:"p"}},[n("b",{attrs:{slot:"do-not"},slot:"do-not"},[e._v(e._s(e.$t("common.do-not")))])])],1)])],1)},m=[];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={computed:k({},Object(c["b"])(["wallet"]),{privKey:function(){return this.wallet.getPrivateKeyString()}}),methods:{copy:function(){this.$refs.privKey.select(),document.execCommand("copy"),o["e"].responseHandler(this.$t("interface.addr.copied-private-key"),o["e"].SUCCESS)}}},g=y,O=(n("b9ca"),n("2877")),x=Object(O["a"])(g,v,m,!1,null,"62d8b046",null),_=x.exports,j=n("901e"),P=n("cb38"),C=n("c8e5"),B=n("e22c"),$=n.n(B),R=n("e615"),S=n.n(R),D=n("f688"),K=n.n(D),N=n("fd4d"),T=n.n(N),W=n("c088"),H=n.n(W),E=n("35d2"),J=n.n(E),A=n("86f3"),I=n("1131"),F=n.n(I);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U={components:{"interface-tokens":b["a"],blockie:C["a"],"print-modal":p["a"],"view-private-key-modal":_,"interface-balance-modal":h["a"]},data:function(){var e=this;return{tokens:[],loading:!1,fetchingBalance:!1,balance:"0",otherOptions:[{name:"Private Key",key:"privKey",icon:T.a,iconDisabled:K.a,func:function(){e.openViewPriv()}},{name:"Txn History",key:"txnHis",icon:S.a,iconDisabled:S.a,func:function(){e.openTxHistory()}},{name:"Keystore File",key:"keyStor",icon:H.a,iconDisabled:J.a,func:function(){e.downloadKeystore()}},{name:"Print Wallet",key:"printWal",icon:$.a,iconDisabled:$.a,func:function(){e.printWallet()}}],walletJson:"",filename:"",build:"web"}},computed:L({},Object(c["b"])(["account","network","web3"]),{hasNickname:function(){return""!==this.account.nickname}}),mounted:function(){this.fetchTokens(),this.fetchBalance(),this.account.isHardware||"undefined"===typeof this.account.keystore||(this.walletJson=Object(A["a"])(JSON.parse(this.account.keystore).file,"mime"),this.filename=JSON.parse(this.account.keystore).name)},destroyed:function(){this.tokens=[],this.loading=!1,this.balance="0",this.walletJson="",this.filename="",this.build="web"},methods:{disableItem:function(e){return"privKey"===e?!!this.account.isHardware:"keyStor"===e&&!o["d"].isMewCx()},printWallet:function(){this.$refs.printModal.$refs.print.show()},openBalance:function(){this.$refs.balance.$refs.balance.show()},downloadKeystore:function(){o["d"].isMewCx()?window.chrome.downloads.download({filename:this.filename,url:this.walletJson}):this.$refs.downloadFile.click()},openViewPriv:function(){this.$refs.viewPriv.$refs.viewPriv.show()},openTxHistory:function(){window.open("".concat(this.network.type.blockExplorerAddr.replace("[[address]]","")+this.account.address),"_blank")},fetchBalance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.fetchingBalance=!0,e.next=3,this.web3.eth.getBalance(this.account.address);case 3:t=e.sent,this.balance=F.a.fromWei(t,"ether"),this.fetchingBalance=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),copy:function(){this.$refs.copyAddress.select(),document.execCommand("copy"),o["e"].responseHandler(this.$t("common.copied"),o["e"].INFO)},getTokenBalance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=[{name:"balanceOf",type:"function",constant:!0,inputs:[{name:"address",type:"address"}],outputs:[{name:"out",type:"uint256"}]}],a=new this.web3.eth.Contract(n),r=a.methods.balanceOf(this.account.address).encodeABI(),e.next=6,this.web3.eth.call({to:t.address,data:r}).then((function(e){var n;if(0===Number(e)||"0x"===e)n=0;else{var a=new j["BigNumber"](10).pow(t.decimals);n=new j["BigNumber"](e).div(a).toString()}return n})).catch((function(e){o["e"].responseHandler(e,!1)}));case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e["catch"](0),o["e"].responseHandler(e.t0,o["e"].ERROR);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchTokens:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,t=new f.a(this.web3.currentProvider),e.prev=2,e.next=5,t.getBalance(this.account.address);case 5:this.tokens=e.sent,this.tokens=this.tokens.map((function(e){var t=new j["BigNumber"](10).pow(e.decimals),n=new j["BigNumber"](e.balance).div(t).toString();return e.address=e.addr,e.balance=n,delete e.addr,e})),this.tokens=this.tokens.sort(P["a"]),this.loading=!1,e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](2),this.tokens=this.network.type.tokens.map((function(e){return e.balance="Load",e})),this.tokens=this.tokens.sort(P["a"]),this.loading=!1;case 16:case"end":return e.stop()}}),e,this,[[2,11]])})));function t(){return e.apply(this,arguments)}return t}(),setTokensWithBalance:function(){var e=this,t=d.a.get("customTokens");void 0!==t&&void 0!==t[this.network.type.name]&&t[this.network.type.name].length>0?new Promise((function(n){var a=t[e.network.type.name].map(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getTokenBalance(n);case 2:return n.balance=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());Promise.all(a).then((function(a){t[e.network.type.name]=a,d.a.set("customTokens",t),n(a)}))})).then((function(t){var n=e.tokens.filter((function(e){return e.balance>0})).concat(t.filter((function(e){return e.balance>0})));e.tokensWithBalance=n,e.loading=!0})).catch((function(e){o["e"].responseHandler(e,o["e"].ERROR)})):(this.loading=!0,this.tokensWithBalance=this.tokens.filter((function(e){return e.balance>0})))}}},V=U,q=(n("a006"),Object(O["a"])(V,a,r,!1,null,"faf696be",null)),z=q.exports;n.d(t,"default",(function(){return z}))},5251:function(e,t,n){},"86f3":function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");var a=n("0122");t["a"]=function(e,t){var n="object"===Object(a["a"])(e)?JSON.stringify(e):e;if(null===n)return"";var r=new Blob([n],{type:t});return window.URL.createObjectURL(r)}},"951b":function(e,t,n){e.exports=n.p+"img/more-black.b67ac29f.svg"},a006:function(e,t,n){"use strict";var a=n("5251"),r=n.n(a);r.a},a428:function(e,t,n){e.exports=n.p+"img/copy-colored.d0f5333f.svg"},b9ca:function(e,t,n){"use strict";var a=n("c72e"),r=n.n(a);r.a},c088:function(e,t,n){e.exports=n.p+"img/download-keystore.f8ac3c2c.svg"},c72e:function(e,t,n){},e22c:function(e,t,n){e.exports=n.p+"img/printer.7bd71512.svg"},e615:function(e,t,n){e.exports=n.p+"img/tx-history-spinner.6078e266.svg"},f688:function(e,t,n){e.exports=n.p+"img/private-key-grey.f8cb5fc5.svg"},fd4d:function(e,t,n){e.exports=n.p+"img/private-key.87cdb72a.svg"}}]);
//# sourceMappingURL=chunk-9aad6530.21fc49d8.js.map