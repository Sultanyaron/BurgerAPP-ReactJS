(this["webpackJsonpburger-project"]=this["webpackJsonpburger-project"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return O}));var r="ADD_INGREDIENTS",a="REMOVE_INGREDIENTS",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",f="FETCH_ORDERS_FAIL",m="AUTH_START",h="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(18);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},i=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.minLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";var r=n(1),a=n(22),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-burger-7e3d7.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(18);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},p=function(){return{type:r.m}},f=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(s({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},m=n(31),h=n.n(m),g=function(e,t){return{type:r.e,idToken:e,userId:t}},b=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userId"),{type:r.c}},O=function(e){return function(t){setTimeout((function(){t(b())}),1e3*e)}},E=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="),h.a.post(i+"AIzaSyDGGiJdiIOfUbiU3W8RFXbm5uk02tgla70",o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationTime",t),localStorage.setItem("userId",e.data.localId),a(g(e.data.idToken,e.data.localId)),a(O(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},v=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationTime"));if(n<=new Date)e(b());else{var r=localStorage.getItem("userId");e(g(t,r)),e(O((n.getTime()-(new Date).getTime())/1e3))}}else e(b())}};n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return b})),n.d(t,"j",(function(){return v})),n.d(t,"c",(function(){return _}))},,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__19gI3",BreadTop:"BurgerIngredient_BreadTop__1iW5e",Seeds1:"BurgerIngredient_Seeds1__3waL3",Seeds2:"BurgerIngredient_Seeds2__2qyTX",Meat:"BurgerIngredient_Meat__uio7W",Cheese:"BurgerIngredient_Cheese__3KyW_",Salad:"BurgerIngredient_Salad__ngBz-",Bacon:"BurgerIngredient_Bacon__3DJ8j"}},,function(e,t,n){"use strict";var r=n(31),a=n.n(r).a.create({baseURL:"https://react-burger-7e3d7.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2GbVf",Open:"SideDrawer_Open__2A4Cb",Closed:"SideDrawer_Closed__3qO3N",Logo:"SideDrawer_Logo__3LdtH"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3-uMa",Label:"BuildControl_Label__75EMU",Less:"BuildControl_Less__3OErp",More:"BuildControl_More__1b9K9"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},,function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(65),d=n.n(s),p=n(11),f=n(30),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(f.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__wYcYB",Logo:"Toolbar_Logo__16lcg",DesktopOnly:"Toolbar_DesktopOnly__2w06J"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(41),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__3E1AO",active:"NavigationItem_active__1wJNu"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2IMdR",OrderButton:"BuildControls_OrderButton__3ed5V",enable:"BuildControls_enable__1OY7W"}},function(e,t,n){e.exports={Button:"Button_Button__2pYqn",Success:"Button_Success__3WPOp",Danger:"Button_Danger__2GlO2"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(66),i=n.n(o);t.a=function(e){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(32),d=n(11);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(67),a=n(0),o=n.n(a),i=n(64),c=n.n(i),u=n(20),l=n.n(u),s=function(e){var t=null;switch(e.type){case"bread-bottom":t=o.a.createElement("div",{className:l.a.BreadBottom});break;case"bread-top":t=o.a.createElement("div",{className:l.a.BreadTop},o.a.createElement("div",{className:l.a.Seeds1}),o.a.createElement("div",{className:l.a.Seeds2}));break;case"meat":t=o.a.createElement("div",{className:l.a.Meat});break;case"cheese":t=o.a.createElement("div",{className:l.a.Cheese});break;case"bacon":t=o.a.createElement("div",{className:l.a.Bacon});break;case"salad":t=o.a.createElement("div",{className:l.a.Salad});break;default:t=null}return t};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(s,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Plese start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(s,{type:"bread-top"}),t,o.a.createElement(s,{type:"bread-bottom"}))}},,,function(e,t,n){e.exports={Content:"Layout_Content__PfwAP"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__ATov3"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2oI8L"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__20FP4"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1SqBe"}},function(e,t,n){e.exports={Burger:"Burger_Burger__17vVU"}},function(e,t,n){e.exports={Modal:"Modal_Modal__B-aFz"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__3huqO",load2:"Spinner_load2__1HdUk"}},,function(e,t,n){e.exports=n(96)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(28),i=n.n(o),c=n(24),u=n(15),l=n(23),s=n(56),d=n(18),p=n(1),f=n(3),m={ingredients:null,totalPrice:4,error:!1,building:!1},h={salad:.5,cheese:.4,meat:1.3,bacon:.7},g=function(e,t){var n=Object(d.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(f.b)(e.ingredients,n),totalPrice:e.totalPrice+h[t.ingredientName],building:!0};return Object(f.b)(e,r)},b=function(e,t){var n=Object(d.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(f.b)(e.ingredients,n),totalPrice:e.totalPrice-h[t.ingredientName],building:!0};return Object(f.b)(e,r)},O=function(e,t){return Object(f.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},E=function(e,t){return Object(f.b)(e,{error:!0})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.a:return g(e,t);case p.n:return b(e,t);case p.p:return O(e,t);case p.f:return E(e);default:return e}},_={orders:[],loading:!1,purchased:!1},y=function(e,t){return Object(f.b)(e,{purchased:!1})},j=function(e,t){return Object(f.b)(e,{loading:!0})},k=function(e,t){var n=Object(f.b)(t.orderData,{id:t.orderId});return Object(f.b)(e,{loading:!1,orders:e.orders.concat(n),purchased:!0})},S=function(e,t){return Object(f.b)(e,{loading:!1})},w=function(e,t){return Object(f.b)(e,{loading:!0})},C=function(e,t){return Object(f.b)(e,{orders:t.orders,loading:!1})},I=function(e,t){return Object(f.b)(e,{loading:!1})},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.m:return y(e);case p.k:return j(e);case p.l:return k(e,t);case p.j:return S(e);case p.h:return w(e);case p.i:return C(e,t);case p.g:return I(e);default:return e}},D={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},N=function(e,t){return Object(f.b)(e,{error:null,loading:!0})},T=function(e,t){return Object(f.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},A=function(e,t){return Object(f.b)(e,{error:t.error,loading:!1})},P=function(e,t){return Object(f.b)(e,{token:null,userId:null})},R=function(e,t){return Object(f.b)(e,{authRedirectPath:t.path})},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.d:return N(e);case p.e:return T(e,t);case p.b:return A(e,t);case p.c:return P(e);case p.o:return R(e,t);default:return e}},x=(n(77),n(4)),H=n(5),U=n(7),M=n(6),z=n(8),F=n(21),G=function(e){return function(t){function n(){var e,t;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(U.a)(this,(e=Object(M.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(z.a)(n,t),Object(H.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},q=n(11),W=n(57),J=n.n(W),Y=n(33),$=n.n(Y),V=n(58),K=n.n(V),X=n(59),Q=n.n(X),Z=function(e){return a.a.createElement("div",{className:Q.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:K.a,alt:"Logo"}))},ee=n(60),te=n.n(ee),ne=n(37),re=n.n(ne),ae=function(e){return a.a.createElement("li",{className:re.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:re.a.active},e.children))},oe=function(e){return a.a.createElement("ul",{className:te.a.NavigationItems},a.a.createElement(ae,{link:"/",exact:!0},"Burger Builder"),e.isAuth?a.a.createElement(ae,{link:"/orders"},"Orders"):null,e.isAuth?a.a.createElement(ae,{link:"/logout"},"Logout"):a.a.createElement(ae,{link:"/auth"},"Authenticate"))},ie=n(62),ce=n.n(ie),ue=function(e){return a.a.createElement("div",{className:ce.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},le=function(e){return a.a.createElement("header",{className:$.a.Toolbar},a.a.createElement(ue,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:$.a.Logo},a.a.createElement(Z,null)),a.a.createElement("nav",{className:$.a.DesktopOnly},a.a.createElement(oe,{isAuth:e.isAuth})))},se=n(25),de=n.n(se),pe=n(30),fe=function(e){var t=[de.a.SideDrawer,de.a.Closed];return e.open&&(t=[de.a.SideDrawer,de.a.Open]),a.a.createElement(q.a,null,a.a.createElement(pe.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:de.a.Logo},a.a.createElement(Z,null)),a.a.createElement("nav",null,a.a.createElement(oe,{isAuth:e.isAuth}))))},me=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(U.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawertoggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(z.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){return a.a.createElement(q.a,null,a.a.createElement(le,{isAuth:this.props.isAuth,drawerToggleClicked:this.sideDrawertoggleHandler}),a.a.createElement(fe,{isAuth:this.props.isAuth,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:J.a.Content},this.props.children))}}]),t}(r.Component),he=Object(u.b)((function(e){return{isAuth:null!==e.auth.token}}))(me),ge=n(22),be=n(54),Oe=n(40),Ee=n.n(Oe),ve=n(27),_e=n.n(ve),ye=function(e){return a.a.createElement("div",{className:_e.a.BuildControl},a.a.createElement("div",{className:_e.a.Label},e.label),a.a.createElement("button",{className:_e.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:_e.a.More,onClick:e.added},"More"))},je=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ke=function(e){return a.a.createElement("div",{className:Ee.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2),"$")),je.map((function(t){return a.a.createElement(ye,{key:t.label,label:t.label,type:t.type,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:Ee.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},Se=n(32),we=n(34),Ce=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return a.a.createElement(q.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(we.a,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),a.a.createElement(we.a,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},Ie=n(42),Be=n(43),De=n(16);function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Te=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(U.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1,loading:!1},n.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}))>0},n.purchaseHandler=function(){n.props.isAuth?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandeler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(z.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(Ie.a,null);return this.props.ings&&(r=a.a.createElement(q.a,null,a.a.createElement(be.a,{ingredients:this.props.ings}),a.a.createElement(ke,{ingredientAdded:this.props.onIngredientAdded,ingredientRemove:this.props.onIngredientRemoved,disabled:e,purchaseable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuth,price:this.props.price})),n=a.a.createElement(Ce,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandeler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(q.a,null,a.a.createElement(Se.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandeler},n),r)}}]),t}(r.Component),Ae=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuth:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(De.a(t))},onIngredientRemoved:function(t){return e(De.i(t))},onInitIngredients:function(){return e(De.e())},onInitPurchase:function(){return e(De.h())},onSetAuthRedirectPath:function(t){return e(De.j(t))}}}))(Object(Be.a)(Te,ge.a)),Pe=function(e){function t(){return Object(x.a)(this,t),Object(U.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(F.a,{to:"/"})}}]),t}(r.Component),Re=Object(u.b)(null,(function(e){return{onLogout:function(){return e(De.f())}}}))(Pe),Le=G((function(){return console.log("Checkout lazy loaded"),n.e(3).then(n.bind(null,104))})),xe=G((function(){return console.log("Orders lazy loaded"),n.e(5).then(n.bind(null,105))})),He=G((function(){return n.e(4).then(n.bind(null,103))})),Ue=function(e){function t(){return Object(x.a)(this,t),Object(U.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(F.d,null,a.a.createElement(F.b,{path:"/auth",component:He}),a.a.createElement(F.b,{exact:!0,path:"/",component:Ae}),a.a.createElement(F.a,{to:"/"}));return this.props.isAuth&&(e=a.a.createElement(F.d,null,a.a.createElement(F.b,{path:"/checkout",component:Le}),a.a.createElement(F.b,{path:"/orders",component:xe}),a.a.createElement(F.b,{path:"/logout",component:Re}),a.a.createElement(F.b,{path:"/auth",component:He}),a.a.createElement(F.b,{exact:!0,path:"/",component:Ae}),a.a.createElement(F.a,{to:"/"}))),a.a.createElement("div",{className:"App"},a.a.createElement(he,null,e))}}]),t}(r.Component),Me=Object(F.g)(Object(u.b)((function(e){return{isAuth:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(De.c())}}}))(Ue));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ze=l.d,Fe=Object(l.c)({burgerBuilder:v,order:B,auth:L}),Ge=Object(l.e)(Fe,ze(Object(l.a)(s.a))),qe=a.a.createElement(u.a,{store:Ge},a.a.createElement(c.a,{basename:"/BurgerAPP-ReactJS"},a.a.createElement(Me,null)));i.a.render(qe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[68,1,2]]]);
//# sourceMappingURL=main.d00b7e2a.chunk.js.map