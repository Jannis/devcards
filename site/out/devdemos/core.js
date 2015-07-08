// Compiled by ClojureScript 0.0-3269 {}
goog.provide('devdemos.core');
goog.require('cljs.core');
goog.require('devdemos.extentions');
goog.require('cljs.test');
goog.require('reagent.core');
goog.require('om.dom');
goog.require('devdemos.errors');
goog.require('sablono.core');
goog.require('devdemos.two_zero');
goog.require('clojure.string');
goog.require('om.core');
goog.require('devdemos.testing');
goog.require('devdemos.defcard_api');
goog.require('devdemos.edn_render');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.core","devdemos.core",1128559468),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# [Devcards](https://github.com/bhauman/devcards): the hard sell\n    \n   Devcards is intended to make ClojureScript development a pure joy.\n \n   Devcards are intended to facilitate **interactive live\n   development**. Devcards can be used in conjunction with figwheel but\n   will also work with any form of live file reloading (repl, boot-reload, ...)\n\n   Devcards revolves around a multi-purpose macro called `defcard`.\n   You can think of `defcard` a powerful form of pprint that helps you\n   display code examples as an organized set of cards in the Devcards\n   interface (you are currently looking at the Devcards interface).\n\n   The Devcards you create are intended to have no impact on the size\n   of your production code. You can use devcards just as you would use\n   exectuable comments. You can also keep them seperate like a test\n   suite.\n\n   With figwheel, Devcards configuration couldn't be simpler. Just add\n   `[devcards \"0.2.0-SNAPSHOT\"]` as a dependency and `:figwheel\n   {:devcards true}` to your build config.\n\n   Let's look at an advanced Devcard:\n   \n   ```\n   (defcard bmi-calculator                        ;; optional symbol name\n     \"*Code taken from Reagent readme.*\"          ;; optional markdown doc\n     (fn [data-atom _] (bmi-component data-atom)) ;; object of focus\n     {:height 180 :weight 80}                     ;; optional initial data\n     {:inspect-data true :history true})          ;; optional devcard config options\n      \n   ```\n\n   The [defcard api](http://localhost:3449/devcards/index.html#!/devdemos.defcard_api)\n   is intended to be small and intuitive.\n\n   And you can see this devcard rendered below:"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devdemos.core.calc_bmi = (function devdemos$core$calc_bmi(bmi_data){
var map__34748 = bmi_data;
var map__34748__$1 = ((cljs.core.seq_QMARK_.call(null,map__34748))?cljs.core.apply.call(null,cljs.core.hash_map,map__34748):map__34748);
var data = map__34748__$1;
var height = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var weight = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var bmi = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / (h * h)));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * h) * h));
}
});
devdemos.core.slider = (function devdemos$core$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",{"type": "range", "value": value, "min": min, "max": max, "style": {"width": "100%"}, "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
devdemos.core.bmi_component = (function devdemos$core$bmi_component(bmi_data){
var map__34753 = devdemos.core.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__34753__$1 = ((cljs.core.seq_QMARK_.call(null,map__34753))?cljs.core.apply.call(null,cljs.core.hash_map,map__34753):map__34753);
var weight = cljs.core.get.call(null,map__34753__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__34753__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__34753__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__34754 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__34754,(0),null);
var diagnose = cljs.core.nth.call(null,vec__34754,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"BMI calculator"),React.createElement("div",null,"Height: ",sablono.interpreter.interpret.call(null,(height | (0))),"cm",sablono.interpreter.interpret.call(null,devdemos.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,"Weight: ",sablono.interpreter.interpret.call(null,(weight | (0))),"kg",sablono.interpreter.interpret.call(null,devdemos.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150)))),React.createElement("div",null,"BMI: ",sablono.interpreter.interpret.call(null,(bmi | (0)))," ",React.createElement("span",{"style": {"color": color}},sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,devdemos.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.core","devdemos.core",1128559468),new cljs.core.Keyword(null,"bmi-calculator","bmi-calculator",1180119377)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"bmi-calculator",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"*Code taken from the Reagent readme.*",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return devdemos.core.bmi_component.call(null,data_atom);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.core","devdemos.core",1128559468),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Time travel\n\n   Please interact with **the BMI calculator above**. As you change\n   the sliders you will notice that a ",[cljs.core.str("<span class='com-rigsomelight-devcards-history-control-left'></span>")].join(''),"shows up in the upper right hand corner.\n\n   That is a history control widget. This is part of the devcard and\n   can be enabled by adding `{:history true}` to the devcard options.\n   \n   Go ahead and move the sliders and play with the history control\n   widget. You can move forward with the <span class='com-rigsomelight-devcards-history-control-right'></span> control. You can continue from where you left off with the fast forward control \n   <span class='com-rigsomelight-devcards-history-control-fast-forward'>\n<span  style='margin-right: -14px' class='com-rigsomelight-devcards-history-control-small-arrow'></span>\n<span style='margin-right: -14px' class='com-rigsomelight-devcards-history-control-small-arrow'></span>\n<span class='com-rigsomelight-devcards-history-control-block'></span>\n   </span>  And you can reify the current point in history and start working with your app from there with the \n   <span class='com-rigsomelight-devcards-history-stop'></span> control or by simply interacting with the app.\n\n   ## Data display\n\n   You will also notice that the data from the main data store is\n   being displayed. This is enabled by adding `{:inspect-data true}`\n   to the devcard options.\n \n   If you interact with the calculator above you will see that the\n   integers are being stored as strings in the data atom. This is a\n   smell that you will see immediately when the data is displayed\n   front and center like this.\n\n   ## Markdown docs\n   \n   The phrase \"*Code taken from the Reagent readme.*\" is optional in\n   the example above. But allows for the easy display of contextual\n   documentation.\n\n   ## Auto-detection\n   \n   The `defcard` macro does its best to display the data given to it.\n   You can pass `defcard` a **string** (will be interpreted as\n   markdown), a **function** that takes a data-atom and an owner, a\n   **ReactElement**, a **Map**, a **Vector**, a **List**, an **Atom**,\n   an **RAtom**, an **IDeref**, anything that implements\n   **IDevcardOptions** or **IDevcard**, and I'm hoping to get various\n   cursor implementations working as well.\n\n   Implementing your own cards is easy as `defcard` will take any\n   ReactElement. If you want to create a completely custom card there are the\n   **IDevcardOptions** and **IDevcard** protocols.\n   "),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.core","devdemos.core",1128559468),new cljs.core.Keyword(null,"cljs-test-integration","cljs-test-integration",1863903871)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cljs-test-integration",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.core.t34757 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.core.t34757 = (function (meta34758){
this.meta34758 = meta34758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.core.t34757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34759,meta34758__$1){
var self__ = this;
var _34759__$1 = this;
return (new devdemos.core.t34757(meta34758__$1));
});

devdemos.core.t34757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34759){
var self__ = this;
var _34759__$1 = this;
return self__.meta34758;
});

devdemos.core.t34757.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.core.t34757.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24288__auto__,devcard_opts__24289__auto__){
var self__ = this;
var this__24288__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24289__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card_help.call(null,((function (this__24288__auto____$1){
return (function (){
return devcards.core.test_doc.call(null,"# clsj.test integration\n\n   Devcards provides a `deftest` macro that behaves very similarly to\n   the `cljs.test/deftest` macro. This makes it easy to define tests\n   that both show up in the Devcards display and can be run\n   using `(run-tests)` as well.\n  \n   The test card has controls in the upper right hand corner that not\n   only summerize testing status but also allow you to focus on passing or\n   failing tests.\n\n   Go ahead and click on the numbers in the header of this card.\n  \n   The test card will display the testing context as well as the\n   messages for the various tests that run.\n\n   For example the following tests are defined like this:\n\n   ```\n   (deftest cljs-test-integration\n     \"## Here are some example tests\"\n     (testing \"testing context 1\"\n       (is (= (+ 3 4 55555) 4) \"This is the message arg to an 'is' test\")\n       (is (= (+ 1 0 0 0) 1) \"This should work\")\n       (is (= 1 3))\n       (is false)\n       (is (throw \"errors get an extra red line on the side\")))\n      \"Top level strings are interpreted as markdown for inline documentation.\"\n     (testing \"testing context 2\"\n       (is (= (+ 1 0 0 0) 1))        \n       (is (= (+ 3 4 55555) 4))\n       (is false)\n     (testing \"nested context\"\n       (is (= (+ 1 0 0 0) 1))        \n       (is (= (+ 3 4 55555) 4))\n       (is false))))\n   ```\n\n   The `testing` and is macros are the ones from `cljs.test`\n\n   These tests are rendered below:");
});})(this__24288__auto____$1))
,((function (this__24288__auto____$1){
return (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"testing context 1");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___34782 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___34783 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34782);
if(cljs.core.truth_(result__23125__auto___34783)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34782),new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34782)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
}

}catch (e34760){var t__23162__auto___34784 = e34760;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34784,new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
}
try{var values__23124__auto___34785 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___34786 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34785);
if(cljs.core.truth_(result__23125__auto___34786)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34785),new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34785)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
}

}catch (e34761){var t__23162__auto___34787 = e34761;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34787,new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
}
try{var values__23124__auto___34788 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),(1));
var result__23125__auto___34789 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34788);
if(cljs.core.truth_(result__23125__auto___34789)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34788),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34788)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34762){var t__23162__auto___34790 = e34762;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34790,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___34791 = false;
if(value__23127__auto___34791){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___34791,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___34791,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34763){var t__23162__auto___34792 = e34763;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34792,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = (function(){throw "errors get an extra red line on the side"})();
if(cljs.core.truth_(value__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e34764){var t__23162__auto__ = e34764;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
});})(this__24288__auto____$1))
,((function (this__24288__auto____$1){
return (function (){
return devcards.core.test_doc.call(null,"Top level strings are interpreted as markdown for inline documentation.");
});})(this__24288__auto____$1))
,((function (this__24288__auto____$1){
return (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"testing context 2");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___34793 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___34794 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34793);
if(cljs.core.truth_(result__23125__auto___34794)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34793),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34793)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34765){var t__23162__auto___34795 = e34765;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34795,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___34796 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___34797 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34796);
if(cljs.core.truth_(result__23125__auto___34797)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34796),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34796)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34766){var t__23162__auto___34798 = e34766;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34798,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___34799 = false;
if(value__23127__auto___34799){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___34799,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___34799,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34767){var t__23162__auto___34800 = e34767;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34800,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"nested context");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___34801 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___34802 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34801);
if(cljs.core.truth_(result__23125__auto___34802)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34801),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34801)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34768){var t__23162__auto___34803 = e34768;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34803,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___34804 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___34805 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34804);
if(cljs.core.truth_(result__23125__auto___34805)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34804),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34804)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34769){var t__23162__auto___34806 = e34769;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34806,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = false;
if(value__23127__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e34770){var t__23162__auto__ = e34770;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
});})(this__24288__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24289__auto__))));
});

devdemos.core.t34757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34758","meta34758",373011045,null)], null);
});

devdemos.core.t34757.cljs$lang$type = true;

devdemos.core.t34757.cljs$lang$ctorStr = "devdemos.core/t34757";

devdemos.core.t34757.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.core/t34757");
});

devdemos.core.__GT_t34757 = (function devdemos$core$__GT_t34757(meta34758){
return (new devdemos.core.t34757(meta34758));
});

}

return (new devdemos.core.t34757(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

devdemos.core.cljs_test_integration = (function devdemos$core$cljs_test_integration(){
return cljs.test.test_var.call(null,devdemos$core$cljs_test_integration.cljs$lang$var);
});
devdemos.core.cljs_test_integration.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"testing context 1");

var ret__23182__auto___34807 = (function (){
try{var values__23124__auto___34808 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___34809 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34808);
if(cljs.core.truth_(result__23125__auto___34809)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34808),new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34808)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
}

}catch (e34771){var t__23162__auto___34810 = e34771;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34810,new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
}
try{var values__23124__auto___34811 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___34812 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34811);
if(cljs.core.truth_(result__23125__auto___34812)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34811),new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34811)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
}

}catch (e34772){var t__23162__auto___34813 = e34772;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34813,new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
}
try{var values__23124__auto___34814 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),(1));
var result__23125__auto___34815 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34814);
if(cljs.core.truth_(result__23125__auto___34815)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34814),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34814)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34773){var t__23162__auto___34816 = e34773;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34816,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___34817 = false;
if(value__23127__auto___34817){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___34817,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___34817,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34774){var t__23162__auto___34818 = e34774;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34818,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = (function(){throw "errors get an extra red line on the side"})();
if(cljs.core.truth_(value__23127__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e34775){var t__23162__auto__ = e34775;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);



cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"testing context 2");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___34819 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___34820 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34819);
if(cljs.core.truth_(result__23125__auto___34820)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34819),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34819)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34776){var t__23162__auto___34821 = e34776;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34821,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___34822 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___34823 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34822);
if(cljs.core.truth_(result__23125__auto___34823)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34822),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34822)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34777){var t__23162__auto___34824 = e34777;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34824,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto___34825 = false;
if(value__23127__auto___34825){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___34825,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto___34825,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34778){var t__23162__auto___34826 = e34778;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34826,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"nested context");

var ret__23182__auto__ = (function (){
try{var values__23124__auto___34827 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),((((1) + (0)) + (0)) + (0)));
var result__23125__auto___34828 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34827);
if(cljs.core.truth_(result__23125__auto___34828)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34827),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34827)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34779){var t__23162__auto___34829 = e34779;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34829,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__23124__auto___34830 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),(((3) + (4)) + (55555)));
var result__23125__auto___34831 = cljs.core.apply.call(null,cljs.core._EQ_,values__23124__auto___34830);
if(cljs.core.truth_(result__23125__auto___34831)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__23124__auto___34830),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__23124__auto___34830)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34780){var t__23162__auto___34832 = e34780;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto___34832,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__23127__auto__ = false;
if(value__23127__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__23127__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__23127__auto__;
}catch (e34781){var t__23162__auto__ = e34781;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__23162__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__23182__auto__;
});

devdemos.core.cljs_test_integration.cljs$lang$var = new cljs.core.Var(function(){return devdemos.core.cljs_test_integration;},new cljs.core.Symbol("devdemos.core","cljs-test-integration","devdemos.core/cljs-test-integration",1844322992,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"devdemos.core","devdemos.core",-1525876301,null),new cljs.core.Symbol(null,"cljs-test-integration","cljs-test-integration",-790531898,null),"example_src/devdemos/core.cljs",31,1,163,163,cljs.core.List.EMPTY,null,(cljs.core.truth_(devdemos.core.cljs_test_integration)?devdemos.core.cljs_test_integration.cljs$lang$test:null)]));
devdemos.core.om_slider = (function devdemos$core$om_slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",{"type": "range", "value": value, "min": min, "max": max, "style": {"width": "100%"}, "onChange": (function (e){
om.core.update_BANG_.call(null,bmi_data,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return om.core.update_BANG_.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})});
});
devdemos.core.om_bmi_component = (function devdemos$core$om_bmi_component(bmi_data,owner){
var map__34840 = devdemos.core.calc_bmi.call(null,bmi_data);
var map__34840__$1 = ((cljs.core.seq_QMARK_.call(null,map__34840))?cljs.core.apply.call(null,cljs.core.hash_map,map__34840):map__34840);
var weight = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__34841 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__34841,(0),null);
var diagnose = cljs.core.nth.call(null,vec__34841,(1),null);
if(typeof devdemos.core.t34842 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.core.t34842 = (function (owner,height,om_bmi_component,vec__34841,color,bmi_data,map__34840,diagnose,weight,bmi,meta34843){
this.owner = owner;
this.height = height;
this.om_bmi_component = om_bmi_component;
this.vec__34841 = vec__34841;
this.color = color;
this.bmi_data = bmi_data;
this.map__34840 = map__34840;
this.diagnose = diagnose;
this.weight = weight;
this.bmi = bmi;
this.meta34843 = meta34843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.core.t34842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose){
return (function (_34844,meta34843__$1){
var self__ = this;
var _34844__$1 = this;
return (new devdemos.core.t34842(self__.owner,self__.height,self__.om_bmi_component,self__.vec__34841,self__.color,self__.bmi_data,self__.map__34840,self__.diagnose,self__.weight,self__.bmi,meta34843__$1));
});})(map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose))
;

devdemos.core.t34842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose){
return (function (_34844){
var self__ = this;
var _34844__$1 = this;
return self__.meta34843;
});})(map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose))
;

devdemos.core.t34842.prototype.om$core$IRender$ = true;

devdemos.core.t34842.prototype.om$core$IRender$render$arity$1 = ((function (map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose){
return (function (this__24199__auto__){
var self__ = this;
var this__24199__auto____$1 = this;
return React.createElement("div",null,React.createElement("h3",null,"BMI calculator"),React.createElement("div",null,"Height: ",sablono.interpreter.interpret.call(null,(self__.height | (0))),"cm",sablono.interpreter.interpret.call(null,devdemos.core.om_slider.call(null,self__.bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,(100),(220)))),React.createElement("div",null,"Weight: ",sablono.interpreter.interpret.call(null,(self__.weight | (0))),"kg",sablono.interpreter.interpret.call(null,devdemos.core.om_slider.call(null,self__.bmi_data,new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight,(30),(150)))),React.createElement("div",null,"BMI: ",sablono.interpreter.interpret.call(null,(self__.bmi | (0)))," ",React.createElement("span",{"style": {"color": self__.color}},sablono.interpreter.interpret.call(null,self__.diagnose)),sablono.interpreter.interpret.call(null,devdemos.core.om_slider.call(null,self__.bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),self__.bmi,(10),(50)))));
});})(map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose))
;

devdemos.core.t34842.getBasis = ((function (map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"om-bmi-component","om-bmi-component",1694840839,null),new cljs.core.Symbol(null,"vec__34841","vec__34841",864603304,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"bmi-data","bmi-data",2011255058,null),new cljs.core.Symbol(null,"map__34840","map__34840",-171155213,null),new cljs.core.Symbol(null,"diagnose","diagnose",-2105527019,null),new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"bmi","bmi",-1232456133,null),new cljs.core.Symbol(null,"meta34843","meta34843",490109686,null)], null);
});})(map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose))
;

devdemos.core.t34842.cljs$lang$type = true;

devdemos.core.t34842.cljs$lang$ctorStr = "devdemos.core/t34842";

devdemos.core.t34842.cljs$lang$ctorPrWriter = ((function (map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose){
return (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.core/t34842");
});})(map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose))
;

devdemos.core.__GT_t34842 = ((function (map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose){
return (function devdemos$core$om_bmi_component_$___GT_t34842(owner__$1,height__$1,om_bmi_component__$1,vec__34841__$1,color__$1,bmi_data__$1,map__34840__$2,diagnose__$1,weight__$1,bmi__$1,meta34843){
return (new devdemos.core.t34842(owner__$1,height__$1,om_bmi_component__$1,vec__34841__$1,color__$1,bmi_data__$1,map__34840__$2,diagnose__$1,weight__$1,bmi__$1,meta34843));
});})(map__34840,map__34840__$1,weight,height,bmi,vec__34841,color,diagnose))
;

}

return (new devdemos.core.t34842(owner,height,devdemos$core$om_bmi_component,vec__34841,color,bmi_data,map__34840__$1,diagnose,weight,bmi,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.core","devdemos.core",1128559468),new cljs.core.Keyword(null,"om-support","om-support",-942873915)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"om-support",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Om support\n\n   Here is the same calculator being rendered as an Om application.\n\n   ```\n   (defcard om-support\n     (dc/om-root om-bmi-component)\n     {:height 180 :weight 80} ;; initial data\n     {:inspect-data true :history true })\n   ``` \n   ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.core.t34847 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.core.t34847 = (function (meta34848){
this.meta34848 = meta34848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.core.t34847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34849,meta34848__$1){
var self__ = this;
var _34849__$1 = this;
return (new devdemos.core.t34847(meta34848__$1));
});

devdemos.core.t34847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34849){
var self__ = this;
var _34849__$1 = this;
return self__.meta34848;
});

devdemos.core.t34847.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.core.t34847.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24288__auto__,devcard_opts__24289__auto__){
var self__ = this;
var this__24288__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24289__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__24288__auto____$1){
return (function (data_atom__24321__auto__,node__24322__auto__){
return om.core.root.call(null,devdemos.core.om_bmi_component,data_atom__24321__auto__,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node__24322__auto__], null)));
});})(this__24288__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24289__auto__))));
});

devdemos.core.t34847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34848","meta34848",1717183931,null)], null);
});

devdemos.core.t34847.cljs$lang$type = true;

devdemos.core.t34847.cljs$lang$ctorStr = "devdemos.core/t34847";

devdemos.core.t34847.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.core/t34847");
});

devdemos.core.__GT_t34847 = (function devdemos$core$__GT_t34847(meta34848){
return (new devdemos.core.t34847(meta34848));
});

}

return (new devdemos.core.t34847(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)], null));
})], null));
if(typeof devdemos.core.re_bmi_data !== 'undefined'){
} else {
devdemos.core.re_bmi_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null));
}
devdemos.core.re_slider = (function devdemos$core$re_slider(param,value,min,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,devdemos.core.re_bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,devdemos.core.re_bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})], null)], null);
});
devdemos.core.re_bmi_component = (function devdemos$core$re_bmi_component(){
var map__34852 = devdemos.core.calc_bmi.call(null,cljs.core.deref.call(null,devdemos.core.re_bmi_data));
var map__34852__$1 = ((cljs.core.seq_QMARK_.call(null,map__34852))?cljs.core.apply.call(null,cljs.core.hash_map,map__34852):map__34852);
var weight = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__34853 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__34853,(0),null);
var diagnose = cljs.core.nth.call(null,vec__34853,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [devdemos.core.re_slider,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [devdemos.core.re_slider,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [devdemos.core.re_slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.core","devdemos.core",1128559468),new cljs.core.Keyword(null,"reagent-support","reagent-support",974377056)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"reagent-support",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# There is also built-in support for Reagent \n\n  Below is the same BMI calculator in Reagent:\n  ```\n  (defcard reagent-support\n    (dc/reagent re-bmi-component)\n    re-bmi-data ;; reagent atom\n    {:inspect-data true :history true })\n  ```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof devdemos.core.t34854 !== 'undefined'){
} else {

/**
* @constructor
*/
devdemos.core.t34854 = (function (meta34855){
this.meta34855 = meta34855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devdemos.core.t34854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34856,meta34855__$1){
var self__ = this;
var _34856__$1 = this;
return (new devdemos.core.t34854(meta34855__$1));
});

devdemos.core.t34854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34856){
var self__ = this;
var _34856__$1 = this;
return self__.meta34855;
});

devdemos.core.t34854.prototype.devcards$core$IDevcardOptions$ = true;

devdemos.core.t34854.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24288__auto__,devcard_opts__24289__auto__){
var self__ = this;
var this__24288__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24289__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24313__auto__ = devdemos.core.re_bmi_component;
return React.createElement(reagent.core.reactify_component.call(null,((function (v__24313__auto__,this__24288__auto____$1){
return (function (___24307__auto__){
if(cljs.core.fn_QMARK_.call(null,v__24313__auto__)){
return ((function (v__24313__auto__,this__24288__auto____$1){
return (function (data_atom__24314__auto__,owner__24315__auto__){
v__24313__auto__.call(null,data_atom__24314__auto__,owner__24315__auto__);

return v__24313__auto__;
});
;})(v__24313__auto__,this__24288__auto____$1))
} else {
return null;
}
});})(v__24313__auto__,this__24288__auto____$1))
));
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24289__auto__))));
});

devdemos.core.t34854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34855","meta34855",611642071,null)], null);
});

devdemos.core.t34854.cljs$lang$type = true;

devdemos.core.t34854.cljs$lang$ctorStr = "devdemos.core/t34854";

devdemos.core.t34854.cljs$lang$ctorPrWriter = (function (this__16641__auto__,writer__16642__auto__,opt__16643__auto__){
return cljs.core._write.call(null,writer__16642__auto__,"devdemos.core/t34854");
});

devdemos.core.__GT_t34854 = (function devdemos$core$__GT_t34854(meta34855){
return (new devdemos.core.t34854(meta34855));
});

}

return (new devdemos.core.t34854(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),devdemos.core.re_bmi_data,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devdemos.core","devdemos.core",1128559468),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Not cool enough?\n   \n   Well there is a bunch more, but that's what the docs are for.\n\n   For quick documentation please see the source for these devcards here.\n\n   ## Quick Start\n\n   These are brief instructions for the curious these will not be\n   helpful if you do not have a lot of experience with ClojureScript.\n   \n   You can generate a new devcards project with:\n   ```\n   lein new devcards hello-world\n   ```\n\n   ## Existing project\n\n   Integrating devcards into an existing is fairly straightforward and\n   requires a seperate build, similar to how you would create a test\n   build.\n\n   Add `[devcards \"0.2.0-SNAPSHOT\"]` as a dependency.\n\n   Require the devcards macros: \n   ```\n   (ns example.core\n    (:require-macros\n     ;; Notice that I am not including the 'devcards.core namespace\n     ;; but only the macros. This helps ensure that devcards will only\n     ;; be created when the :devcards is set to true in the build config.\n     [devcards.core :as dc :refer [defcard deftest]]))\n   ```\n\n   If you are using figwheel you can create a build from your current\n   figwheel dev build and add `:devcards true` (figwheel >= 0.3.7) to\n   your `:figwheel` build config like so:\n\n   ```\n   :cljsbuild {\n     :builds [{:id :devcards\n               :source-paths [\"src\"]\n               :figwheel { :devcards true }\n               :compiler {\n                 :main \"example.core\"\n                 :asset-path \"js/out\"\n                 :output-to \"resources/public/js/example.js\"\n                 :output-dir \"resources/public/js/out\"\n               }}]}\n   ```\n \n  It's important to make sure that your application isn't launching\n  itself on load. We don't want your application to run. We want\n  devards to run. So having a seperate HTML file for the devcards is\n  the best solution.\n\n  ```\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\">\n    </head>\n    <body>\n      <script src=\"js/example.js\" type=\"text/javascript\"></script>\n    </body>\n  </html>  \n  ```\n\n  A quick way to prevent your main application from running is to make\n  it conditional on the presense of the node it's supposed to mount.\n\n  ```\n  (defn main []\n    ;; conditionally start the app based on the presence of #main-app-area\n    ;; node is on the page\n    (if-let [node (.getElementById js/document \"main-app-area\")]\n      (js/React.render (sab/html [:div \"This is main app is ruunning.\"]) node)))\n\n  (main)  \n  ```\n  \n  For now refer to the\n  [devcards-template](https://github.com/bhauman/devcards-template)\n  for a more complete picture of setting up decards.\n  \n  \n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));

//# sourceMappingURL=core.js.map?rel=1436395154078