(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57fa8fdc"],{4493:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"layout-nav-tabs-wrapper"},[t("a-tabs",{staticClass:"layout-nav-tabs",class:"capsule"===a.layout.navTabsShap?"capsule":"",attrs:{type:"capsule"===a.layout.navTabsShap?"card":a.layout.navTabsShap,animated:"",activeKey:a.activeKey},on:{change:a.handleNavTab}},a._l(a.panes,function(e){return t("a-tab-pane",{key:e.path},[t("span",{attrs:{slot:"tab"},slot:"tab"},[e.meta.icon?t("a-iconfont",{attrs:{type:e.meta.icon}}):a._e(),a._v("\n        "+a._s(e.meta.title)+"\n        "),1!=a.panes.length?t("a-icon",{staticClass:"nav-tabs-close-icon",attrs:{type:"close-circle"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),a.del(e)}}}):a._e()],1)])}),1),t("div",{staticClass:"layout-nav-tabs-actions"},[t("a-dropdown",[t("a-menu",{attrs:{slot:"overlay"},on:{click:a.handleMenuClick},slot:"overlay"},[t("a-menu-item",{key:"refresh-curr"},[t("v-icon",{attrs:{name:"icon-refresh"}}),a._v("刷新当前标签\n        ")],1),t("a-menu-item",{key:"refresh-all"},[t("v-icon",{attrs:{name:"icon-refresh"}}),a._v("刷新全部标签\n        ")],1),t("a-menu-item",{key:"close-curr",attrs:{disabled:1==a.panes.length}},[t("v-icon",{attrs:{name:"icon-delete"}}),a._v("关闭当前标签\n        ")],1),t("a-menu-item",{key:"close-other",attrs:{disabled:1==a.panes.length}},[t("v-icon",{attrs:{name:"icon-delete"}}),a._v("关闭其他标签\n        ")],1),t("a-menu-item",{key:"close-all",attrs:{disabled:1==a.panes.length}},[t("v-icon",{attrs:{name:"icon-delete"}}),a._v("关闭所有标签\n        ")],1),t("a-menu-divider"),t("a-menu-item",{key:"line"},[t("v-icon",{attrs:{name:"icon-keyboard"}}),a._v("内联模式\n        ")],1),t("a-menu-item",{key:"card"},[t("v-icon",{attrs:{name:"icon-label"}}),a._v("卡片模式\n        ")],1),t("a-menu-item",{key:"capsule"},[t("v-icon",{attrs:{name:"icon-label"}}),a._v("胶囊模式\n        ")],1)],1),t("div",{staticClass:"layout-nav-tabs-actions-inner"},[t("a-icon",{attrs:{type:"down-square"}})],1)],1)],1)],1)},s=[],r=(t("20d6"),t("dfa9")),c=t("680a"),l={data:function(){return{layout:c["layout"],panes:r["navTabs"].navTabs,type:"card",capsule:!1}},computed:{activeKey:function(){return this.$route.path}},methods:{del:function(a){if(1!==r["navTabs"].navTabs.length){var e=function(e){return e.path===a.path},t=r["navTabs"].navTabs.findIndex(e);-1!==t&&r["navTabs"].navTabs.splice(t,1);var n=this.$route.path,s=r["navTabs"].navTabs.length;a.path===n&&(t===s?this.$router.push({path:r["navTabs"].navTabs[s-1].path}):this.$router.push({path:r["navTabs"].navTabs[t].path}))}},handleNavTab:function(a){this.$router.push({path:a})},handleMenuClick:function(a){switch(a.key){case"line":c["layout"].navTabsShap="line";break;case"card":c["layout"].navTabsShap="card";break;case"capsule":c["layout"].navTabsShap="capsule";break;case"close-curr":this.closeCurr();break;case"close-all":this.closeAll();break;case"close-other":this.closeOther();break;case"refresh-curr":this.refreshCurr();break;case"refresh-all":this.refreshAll()}},closeCurr:function(){var a=this.getCurrTab(),e=a.currItem;this.del(e)},getCurrTab:function(){var a=this.$route.path,e=function(e){return e.path===a},t=r["navTabs"].navTabs.findIndex(e),n=r["navTabs"].navTabs[t];return{currPathIndex:t,currItem:n}},closeOther:function(){var a=this.getCurrTab(),e=a.currItem;r["navTabs"].navTabs.splice(0),r["navTabs"].navTabs.splice(0,0,e),this.$router.push(e.path)},closeAll:function(){r["navTabs"].navTabs.splice(1),this.$router.push(r["navTabs"].navTabs[0].path)},refreshCurr:function(){c["layout"].homeReload=!1,this.$nextTick(function(){c["layout"].homeReload=!0})},refreshAll:function(){c["layout"].appReload=!1,this.$nextTick(function(){c["layout"].appReload=!0})}}},o=l,i=(t("7f52"),t("2877")),u=Object(i["a"])(o,n,s,!1,null,null,null);e["default"]=u.exports},"7d5a":function(a,e,t){},"7f52":function(a,e,t){"use strict";var n=t("7d5a"),s=t.n(n);s.a}}]);
//# sourceMappingURL=chunk-57fa8fdc.6be29dbd.js.map