(this.webpackJsonpxvoice=this.webpackJsonpxvoice||[]).push([[0],{257:function(e,t,a){e.exports=a(602)},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},265:function(e,t,a){},523:function(e,t){},602:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(253),r=a.n(s),o=(a(262),a(263),a(256)),i=a(57),c=a(42),m=a(43),d=a(45),u=a(44),g=a(46),h=a(32),p=(a(264),a(265),a(82),a(531)),v={uri:"1060@dialerprieto.xyz",ws_servers:"wss://dialerprieto.xyz:8089/ws",authorizationUser:"1060",password:"W3lcome77@@"},E=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={};return a.state={calls:[]},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=new p.UA(v);e.invite("1061",{sessionDescriptionHandlerOptions:{constraints:{audio:!0,video:!1}}}),this.setState({userAgent:e})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Qloq"),this.state.calls.map((function(e){return l.a.createElement("p",null,e)})))}}]),t}(n.Component);var f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"calendar"},l.a.createElement("div",null,l.a.createElement("h2",null,"18, Sunday"),l.a.createElement("div",{className:"row center-xs"},l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("h3",null,"November")))),l.a.createElement("div",{className:"calendar__date"},l.a.createElement("div",{className:"calendar__day"},"S"),l.a.createElement("div",{className:"calendar__day"},"M"),l.a.createElement("div",{className:"calendar__day"},"T"),l.a.createElement("div",{className:"calendar__day"},"W"),l.a.createElement("div",{className:"calendar__day"},"T"),l.a.createElement("div",{className:"calendar__day"},"F"),l.a.createElement("div",{className:"calendar__day"},"S"),l.a.createElement("div",{className:"calendar__number"}),l.a.createElement("div",{className:"calendar__number"}),l.a.createElement("div",{className:"calendar__number"}),l.a.createElement("div",{className:"calendar__number"},"1"),l.a.createElement("div",{className:"calendar__number"},"2"),l.a.createElement("div",{className:"calendar__number"},"3"),l.a.createElement("div",{className:"calendar__number"},"4"),l.a.createElement("div",{className:"calendar__number"},"5"),l.a.createElement("div",{className:"calendar__number"},"6"),l.a.createElement("div",{className:"calendar__number"},"7"),l.a.createElement("div",{className:"calendar__number"},"8"),l.a.createElement("div",{className:"calendar__number"},"9"),l.a.createElement("div",{className:"calendar__number"},"10"),l.a.createElement("div",{className:"calendar__number"},"11"),l.a.createElement("div",{className:"calendar__number"},"12"),l.a.createElement("div",{className:"calendar__number"},"13"),l.a.createElement("div",{className:"calendar__number"},"14"),l.a.createElement("div",{className:"calendar__number"},"15"),l.a.createElement("div",{className:"calendar__number"},"16"),l.a.createElement("div",{className:"calendar__number"},"17"),l.a.createElement("div",{className:"calendar__number calendar__number--current"},"18"),l.a.createElement("div",{className:"calendar__number"},"19"),l.a.createElement("div",{className:"calendar__number"},"20"),l.a.createElement("div",{className:"calendar__number"},"21"),l.a.createElement("div",{className:"calendar__number"},"22"),l.a.createElement("div",{className:"calendar__number"},"23"),l.a.createElement("div",{className:"calendar__number"},"24"),l.a.createElement("div",{className:"calendar__number"},"25"),l.a.createElement("div",{className:"calendar__number"},"26"),l.a.createElement("div",{className:"calendar__number"},"27"),l.a.createElement("div",{className:"calendar__number"},"28"),l.a.createElement("div",{className:"calendar__number"},"29"),l.a.createElement("div",{className:"calendar__number"},"30"))))},w=window.location;w.host.includes(":")?w.host.substring(0,w.host.length-5):w.host;var N=a(243);N.defaults.xsrfCookieName="csrftoken",N.defaults.xsrfHeaderName="X-CSRFToken",N.defaults.withCredentials=!1;var b=a(596);function x(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var y,k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,e.username),l.a.createElement("td",null,e.password),l.a.createElement("td",null,l.a.createElement("a",{onClick:e.userPack.methods.deleteUser,href:"/",style:{position:"relative",bottom:"28px"}},l.a.createElement("img",{style:{width:"30px",height:"30px"},src:"svg/delete.svg",alt:"Kiwi standing on oval",className:"deleteIcon"})),"-")))},_=function(e){var t=!1;return e.selectedUsers.forEach((function(a){a===e.username&&(t=!0)})),l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{href:"#",style:{backgroundColor:t?"rgb(0, 112, 186)":"",color:t?"white":""},onClick:function(t){t.preventDefault(),e.handleSelect(e.username)}},e.username),l.a.createElement("hr",{className:"solid"}))},S=function(e){var t=b(new Date(e.line.date),"dd/mm/yy @ HH:MM");return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,parseFloat(e.line.amount).toFixed(2))))},C=function(e){console.log(new Date(e.line.startTime));var t=b(new Date(e.line.startTime),"dd/mm/yy @ HH:MM:ss - ")+b(new Date(e.line.endTime),"HH:MM:ss");return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,e.line.src_user),l.a.createElement("td",null,e.line.dst_user),l.a.createElement("td",null,t),l.a.createElement("td",null,e.line.duration),l.a.createElement("td",null,parseFloat(.0144*e.line.duration/60).toFixed(7))))},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={customer:!1},y=e.userId,a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(e){var t=this;console.log(e),y&&N.post("https://icrb106qik.execute-api.us-east-2.amazonaws.com/dev/getSubscriberAdmin/",{userId:y}).then((function(e){e.data.id&&(console.log("success set",e.data.id),t.props.userPack.virtualUpdate(e.data))})).catch((function(e){console.log("error nuevo",e)}))}},{key:"render",value:function(){var e,t,a,n=this,s=this.props.userPack.dimensions.width<768,r=this.props.userPack.dimensions.isMobile?"15px":"50px",o=this.props.userPack.recargasHistory;return console.log(o,"recargasHistory"),this.props.userPack.filteredResults&&(this.props.userPack.filteredResults.length>0||this.props.userPack.selectedUsers.length>0)?(t=this.props.userPack.filteredResults,e=this.props.userPack.filteredResults.length):(t=this.props.userPack.history,e=this.props.userPack.amountCalls),a=this.state&&this.state.customer?this.state.customer:this.props.userPack.customer,console.log("hishis",this.props.userPack.history),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"mainBody",style:{marginLeft:r,marginRight:r,marginTop:"18px",marginBottom:"200px"}},l.a.createElement("div",{className:"row"},l.a.createElement("h1",{className:"mainTitle",style:{marginLeft:"10px",fontSize:"40px"}},"Welcome ",a.name)),l.a.createElement("div",{className:"row",style:{paddingTop:"10px",marginLeft:s?"0.3rem":"0px",marginRight:s?"0.3rem":"0px"}},l.a.createElement("div",{className:"col-xs-12 col-sm-4 caja",style:{maxHeight:"140px",paddingTop:"10px"}},l.a.createElement("div",{className:"row center"},l.a.createElement("h1",{className:"balance"},"US$",parseFloat(a.balance).toFixed(2))),l.a.createElement("div",{className:"row center",style:{marginTop:"5px"}},l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("button",{onClick:this.props.userPack.methods.recargar,style:{marginTop:"8px",width:"150px",position:"relative",bottom:"6px"},className:"pure-material-button-contained green"},"Recargar"))),l.a.createElement("div",{className:"row center",style:{marginTop:"5px"}},l.a.createElement("p",null," (ICQ 742481225)"))),l.a.createElement("div",{className:"col-xs-12 col-sm-7 caja",style:{marginRight:"0px",marginLeft:s?"0.0px":.065*this.props.userPack.dimensions.width+"px",marginTop:s?"25px":"0px",paddingTop:"10px",paddingBottom:"10px"}},l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("h1",{className:"secondTitle",style:{marginBottom:"5px",fontSize:s?"28px":"30px"}},"Mis dispositivos"),l.a.createElement("button",{onClick:this.props.userPack.methods.addDevice,style:{marginLeft:"35px",width:"100px",position:"relative",bottom:"6px"},className:"pure-material-button-contained"},"Agregar"))),l.a.createElement("div",{className:"row center"},l.a.createElement("table",{id:"customers"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"USUARIO"),l.a.createElement("th",null,"CONTRASE\xd1A"),l.a.createElement("th",null,"IP"))),l.a.createElement("tbody",null,this.props.userPack.loadingComponent?null:l.a.createElement(l.a.Fragment,null,a.subscribers.map((function(e,t){return l.a.createElement(k,{userPack:n.props.userPack,deleteUser:n.deleteUser,key:e.id,username:e.username,password:e.password})}))))),this.props.userPack.loadingComponent?l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("div",{className:"lds-hourglass"}))):null))),l.a.createElement("div",{className:"row",style:{marginTop:"30px"}},l.a.createElement("div",{className:"col-xs-auto",style:{marginLeft:"10px"}},l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"dropbtn"},"Usuarios"),l.a.createElement("div",{className:"dropdown-content"},a.subscribers.map((function(e,t){return l.a.createElement(_,{userPack:n.props.userPack,selectedUsers:n.props.userPack.selectedUsers,handleSelect:n.props.userPack.methods.handleSelect,key:e.id,username:e.username,password:e.password})}))))),l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("div",{className:"dropdown",style:{marginLeft:"15px"}},l.a.createElement("button",{className:"dropbtn"},"Inicio"),l.a.createElement("div",{className:"dropdown-content left"},l.a.createElement(f,null)))),l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("div",{className:"dropdown",style:{marginLeft:"15px"}},l.a.createElement("button",{className:"dropbtn"},"Final"),l.a.createElement("div",{className:"dropdown-content right"},l.a.createElement(f,null))))),l.a.createElement("div",{className:"row",style:{marginLeft:"8px",marginTop:"16px"}},l.a.createElement("input",{type:"search",value:this.props.userPack.filterNumber,placeholder:"Buscar por n\xfamero",onChange:this.props.userPack.methods.filterNumber})),l.a.createElement("div",{className:"col-xs-12 caja",style:{marginTop:"25px",marginBottom:"80px",overflowX:"visible"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("h1",{className:"secondTitle",style:{marginTop:"10px",padding:"8px",fontSize:s?"24px":"34px"}},"Historial de llamadas               ")),l.a.createElement("div",{className:"col-xs-12 col-md-6"},this.props.userPack.dimensions.width<1024?l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("p",{style:{paddingTop:"8px",paddingBottom:"8px"}},"Mostrando ",x(e)," de ",x(this.props.userPack.totalCalls)," llamadas ",l.a.createElement("a",{href:"#",onClick:this.props.userPack.methods.fetchMore},"ver m\xe1s "))):l.a.createElement("div",{className:"col-xs-auto",style:{position:"absolute",right:"70px"}},l.a.createElement("p",{style:{paddingTop:"5px"}},"Mostrando ",x(e)," de ",x(this.props.userPack.totalCalls)," llamadas ",l.a.createElement("a",{href:"#",onClick:this.props.userPack.methods.fetchMore},"ver m\xe1s "))))),l.a.createElement("div",{className:"row center"},l.a.createElement("table",{id:"customers",style:{overflowX:"scroll !important"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Desde"),l.a.createElement("th",null,"Hacia"),l.a.createElement("th",null,"Fecha"),l.a.createElement("th",null,"Duraci\xf3n (segundos)"),l.a.createElement("th",null,"Costo (US$)"))),l.a.createElement("tbody",null,this.props.userPack.loadingHistorial?null:t.map((function(e,t){return l.a.createElement(C,{line:e,key:t})})))),this.props.userPack.loadingHistorial?l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("div",{className:"lds-hourglass"}))):null)),l.a.createElement("div",{className:"col-xs-12 caja",style:{marginTop:"25px",marginBottom:"80px",overflowX:"visible"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("h1",{className:"secondTitle",style:{marginTop:"10px",padding:"8px",fontSize:s?"24px":"34px"}},"Historial de recargas               ")),l.a.createElement("div",{className:"col-xs-12 col-md-6"},this.props.userPack.dimensions.width<1024?l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("p",{style:{paddingTop:"8px",paddingBottom:"8px"}},"Mostrando ",x(o.length)," de ",x(o.length)," recargas")):l.a.createElement("div",{className:"col-xs-auto",style:{position:"absolute",right:"70px"}},l.a.createElement("p",{style:{paddingTop:"5px"}},"Mostrando ",x(o.length)," de ",x(o.length)," recargas")))),l.a.createElement("div",{className:"row center"},l.a.createElement("table",{id:"customers",style:{overflowX:"scroll !important"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Fecha"),l.a.createElement("th",null,"Monto (US$)"))),l.a.createElement("tbody",null,this.props.userPack.loadingHistorial?null:o.reverse().map((function(e,t){return l.a.createElement(S,{line:e,key:t})})))),this.props.userPack.loadingHistorial?l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-xs-auto"},l.a.createElement("div",{className:"lds-hourglass"}))):null))))}}]),t}(n.Component),H=a(255),T=(a(2),window.location);T.host.includes(":")?T.host.substring(0,T.host.length-5):T.host;var U="https://icrb106qik.execute-api.us-east-2.amazonaws.com/dev/",I=a(243);I.defaults.xsrfCookieName="csrftoken",I.defaults.xsrfHeaderName="X-CSRFToken",I.defaults.withCredentials=!1;Array(2),Array(0);var F=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement("a",{className:"navTitle",onClick:function(){e.userPack.handleLogout()},href:"#"},"Logout")))},j=function(e){var t=e.userPack.dimensions.width<800?"26px":"50px",a=e.userPack.dimensions.width<800?"60px":"130px",n=e.userPack.dimensions.width<800?"60px":"130px",s=e.userPack.dimensions.width<800?"18px":"30px",r=e.userPack.dimensions.width<800?"310px":"600px";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"overlay",onClick:function(e){document.getElementById("overlay").style.display="none"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"text"},l.a.createElement("h1",{style:{minWidth:r,marginBottom:"8px",fontSize:t}},"Elija su m\xe9todo de pago:"),l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-xs-auto glowingTarjeta",style:{width:a,height:n,marginRight:"40px"}},l.a.createElement("div",{className:"row center",style:{zIndex:"15",borderWidth:"10px !important",borderColor:"black !important"}},l.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/finance-223/64/x-03-512.png",style:{width:a,height:n}}),l.a.createElement("div",{className:"col-xs-auto",style:{width:a,height:n}},l.a.createElement("div",{id:"text",style:{position:"relative",top:"30px",fontSize:s}},"Dep\xf3sito"))),l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-xs-auto",style:{width:a,height:n}}))),l.a.createElement("div",{className:"col-xs-auto glowingTarjeta",style:{width:a,height:n,marginRight:"40px"}},l.a.createElement("div",{className:"row center",style:{borderWidth:"10px !important",borderColor:"black !important"}},l.a.createElement("img",{src:"https://r5y5g3p7.rocketcdn.me/wp-content/uploads/2019/07/Bitcoin-dark-web-drug-dealer-caught.jpg",style:{width:a,height:n}}),l.a.createElement("div",{className:"col-xs-auto",style:{width:a,height:n}},l.a.createElement("div",{id:"text",style:{position:"relative",top:"30px",right:"15px",fontSize:s}},"Bitcoin"))),l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-xs-auto",style:{width:a,height:n}}))),l.a.createElement("div",{className:"col-xs-auto glowingTarjeta",style:{width:a,height:n,marginRight:"20px"}},l.a.createElement("div",{className:"row center",style:{borderWidth:"10px !important",borderColor:"black !important"}},l.a.createElement("img",{src:"/svg/credit-card.svg",style:{width:a,height:n}}),l.a.createElement("div",{className:"col-xs-auto",style:{width:a,height:n}},l.a.createElement("div",{id:"text",style:{position:"relative",top:"30px",fontSize:s}},"Tarjeta"))),l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"col-xs-auto",style:{width:a,height:n}}))),l.a.createElement("div",{className:"row center",style:{position:"relative",top:"60px"}},l.a.createElement("h1",{style:{minWidth:r,marginBottom:"8px",fontSize:t}},"Soporte ICQ: 742481225")))))))},D=function(e){var t=l.a.useState(!1),a=Object(h.a)(t,2),n=a[0],s=a[1],r=e.dimensions.width<768;return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{userPack:e.userPack}),l.a.createElement("header",{className:"header"},r?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:n?"burguer change":"burguer",style:{position:"relative",left:"10px"},onClick:function(e){s((function(e){return!e}))}},l.a.createElement("div",{className:"bar1"}),l.a.createElement("div",{className:"bar2"}),l.a.createElement("div",{className:"bar3"})),l.a.createElement("ul",{className:n?"main-nav":"main-nav closed",id:"navContent"},l.a.createElement(F,{userPack:e.userPack}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"logo"},l.a.createElement("a",{className:"navTitle",href:"#"},"XVOICE")),l.a.createElement("ul",{className:"main-nav",id:"navContent"},l.a.createElement(F,{userPack:e.userPack})))))},O=function(e){var t=l.a.useState(!1),a=Object(h.a)(t,2),n=a[0],s=a[1],r=window.localStorage.getItem("username"),o=window.localStorage.getItem("password");r||(r=e.userPack.email,o=e.userPack.password);var i=l.a.useState(!0),c=Object(h.a)(i,2),m=c[0],d=c[1],u=l.a.useState(!1),g=Object(h.a)(u,2),p=g[0],v=g[1],E=l.a.useState(""),f=Object(h.a)(E,2),w=f[0],N=f[1],b=l.a.useState(""),x=Object(h.a)(b,2),y=x[0],k=x[1],_=l.a.useState(null),S=Object(h.a)(_,2),C=(S[0],S[1],n?"active":""),P=n?"":"active",H=e.userPack.dimensions.width<522;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"login-container",style:{minHeight:H?e.userPack.dimensions.height+"px":e.userPack.dimensions.height-60+"px",marginTop:H?"0px":"62px",padding:"4rem 4rem 0 4rem",margin:H?"":"30px auto 30px"}},l.a.createElement("div",{className:"form-login"},l.a.createElement("ul",{className:"login-nav"},l.a.createElement("li",{className:"login-nav__item "+P},l.a.createElement("a",{onClick:function(){s(!1)}},"Sign In")),l.a.createElement("li",{className:"login-nav__item "+C},l.a.createElement("a",{onClick:function(){s(!0)}},"Sign Up"))),l.a.createElement("label",{htmlFor:"login-input-user",className:"login__label"},"Email, Username or Phonenumber"),l.a.createElement("input",{id:"login-input-user",value:r,onChange:function(t){e.userPack.handleUpdate("email",t.target.value)},className:"login__input",type:"text"}),l.a.createElement("label",{htmlFor:"login-input-password",className:"login__label"},"Password"),l.a.createElement("input",{id:"login-input-password",value:o,onKeyPress:function(t){"Enter"===t.key&&e.userPack.handleLogin("","",m)},onChange:function(t){e.userPack.handleUpdate("password",t.target.value)},className:"login__input",type:"password"}),n?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"login-input-user",className:"login__label"},"Nombre"),l.a.createElement("input",{id:"login-input-user",value:w,onChange:function(e){N(e.target.value)},className:"login__input",type:"text"}),l.a.createElement("label",{htmlFor:"login-input-user",className:"login__label"},"Celular"),l.a.createElement("input",{id:"login-input-user",value:y,onChange:function(e){var t=e.target.value;""===t&&k(t);try{var a=parseInt(t);if(isNaN(a))return}catch(n){return void console.log("error",n)}k(t.replace(/[^\d]+/g,""))},className:"login__input",type:"text"}),l.a.createElement("label",{htmlFor:"login-sign-up",className:"login__label--checkbox"},l.a.createElement("input",{id:"login-sign-up",type:"checkbox",checked:p,onChange:function(){v((function(e){return!e}))},className:"login__input--checkbox"}),"Estoy de acuerdo con las condiciones"),l.a.createElement("button",{className:"login__submit",onClick:function(){e.userPack.handleRegister(r,o,w,y)}},"Registrarme")):l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"login-sign-up",className:"login__label--checkbox"},l.a.createElement("input",{id:"login-sign-up",type:"checkbox",checked:m,onChange:function(){d((function(e){return!e}))},className:"login__input--checkbox"}),"Mantenme logueado"),l.a.createElement("button",{className:"login__submit",onClick:function(){e.userPack.handleLogin(r,o,m)}},"Entrar"))),l.a.createElement("a",{href:"#",className:"login__forgot"},"Forgot Password?")))},z=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).toggleRegistration=function(e){e.target.classList.toggle("change"),document.querySelector("#navContent").classList.toggle("closed")},a.recargar=function(){document.getElementById("overlay").style.display="block",console.log("working")},a.updateDimensions=function(){var e=window,t=document,n=t.documentElement,l=t.getElementsByTagName("body")[0],s=e.innerWidth||n.clientWidth||l.clientWidth,r=e.innerHeight||n.clientHeight||l.clientHeight;if(!(r-a.state.dimensions.height<60&&r-a.state.dimensions.height>0||s-a.state.dimensions.width===0))if(s<763){var o={width:s,height:r,isMobile:!0};a.setState({dimensions:o})}else{var i={width:s,height:r,isMobile:!1};a.setState({dimensions:i})}},a.filterNumber=function(e){var t,n;if(e.target?(t=e.target.value.replace(/\D/g,""),a.setState({filterNumber:t}),n=Object(i.a)(a.state.selectedUsers)):(t=a.state.filterNumber,n=Object(i.a)(e)),t.length>0&&n.push(t),n.length>0){var l=window.localStorage.getItem("token");I.defaults.headers.post.Authorization="JWT "+l,a.setState({loadingHistorial:!0}),console.log("sending",n),I.post(U+"filterNumber/",{numbers:n,id:a.state.customer.id}).then((function(e){var t=e.data;a.setState({filteredResults:t}),a.setState({loadingHistorial:!1})})).catch((function(e){console.log("error",e),a.setState({loadingHistorial:!1})}))}},a.virtualUpdate=function(e){a.setState({customer:e}),a.fetchHistory(50,{id:e.id},!0)},a.fetchHistory=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{id:null},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=[],s=window.localStorage.getItem("token");I.defaults.headers.post.Authorization="JWT "+s,a.setState({loadingHistorial:!0}),console.log("changed?",n,e);var r=I.post(n?U+"getHistoryAdmin/":U+"getHistory/",{amount:e,userId:t.id}),o=I.post(U+"getRecargasHistory/",{userId:t.id});console.log("recargas historyyy"),Promise.all([r,o]).then((function(t){var n;console.log("results",t[0].data),l=t[0].data.history,console.log("hishis",e),n="all"===e?l.length:e;var s=t[0].data.totalCalls;n>s&&(n=s);var r=t[1].data.history;console.log("recargas history",r),a.setState({recargasHistory:r,history:l,totalCalls:s,amountCalls:n,loading:!1}),a.setState({loadingHistorial:!1})})).catch((function(e){console.log("errorrr",e),a.setState({loading:!1,loadingHistorial:!1})}))},a.getUser=function(){var e=window.localStorage.getItem("token");I.defaults.headers.get.Authorization="JWT "+e,a.setState({loading:!0}),I.get(U+"getSub/").then((function(e){a.setState({customer:e.data},(function(){a.setState({loading:!1,logged:!0})}))})).catch((function(e){console.log("error",e),a.setState({loading:!1})})),a.fetchHistory(15)},a.handleSelect=function(e){var t=!1,n=Object(i.a)(a.state.selectedUsers);n.forEach((function(l){if(l===e)return n=n.filter((function(t){return t!=e})),a.setState({selectedUsers:n}),a.filterNumber(n),void(t=!0)})),t||(n.push(e),a.setState({selectedUsers:n}),a.filterNumber(n))},a.deleteUser=function(e){var t=window.localStorage.getItem("token");I.defaults.headers.post.Authorization="JWT "+t,a.setState({loadingComponent:!0}),I.post(U+"deleteSubscriber/",{subscriber:e}).then((function(e){a.setState({customer:e.data}),a.setState({loadingComponent:!1})})).catch((function(e){console.log("error",e),a.setState({loadingComponent:!1})}))},a.filterUser=function(e){var t=Object(i.a)(a.state.selectedUsers);return t.filter((function(t){return t!=e})),t},a.switchLoadingComponent=function(){var e=!a.state.loadingComponent;a.setState({loadingComponent:e})},a.handleUpdate=function(e,t){switch(window.localStorage.removeItem("username"),window.localStorage.removeItem("password"),e){case"email":a.setState({email:t});break;case"password":a.setState({password:t})}},a.handleLogin=function(e,t,n){var l=window.localStorage.getItem("token");I.defaults.headers.get.Authorization="JWT "+l,a.setState({loading:!0});var s=a.state.email,r=a.state.password;n&&(window.localStorage.setItem("username",s),window.localStorage.setItem("password",r)),I.post(U+"token-auth/",{username:s,password:r}).then((function(e){window.localStorage.setItem("token",e.data.token),a.setState({customer:e.data.user}),console.log("resultado",e.data.user);a.state.logged;a.fetchHistory(15),a.setState({logged:!0}),a.setState({loading:!1})})).catch((function(e){console.log("error",e),a.setState({loading:!1})}))},a.addDevice=function(){if(!(a.state.customer.subscribers.length>4)){var e=window.localStorage.getItem("token");I.defaults.headers.get.Authorization="JWT "+e,a.setState({loadingComponent:!0}),I.get(U+"addDevice/").then((function(e){a.setState({customer:e.data}),a.setState({loadingComponent:!1})}))}},a.deleteDevice=function(e){var t=window.localStorage.getItem("token");I.defaults.headers.get.Authorization="JWT "+t,a.setState({loadingComponent:!0}),I.post(U+"addDevice",{id:e}).then((function(e){a.setState({customer:e.data}),a.setState({loadingComponent:!1})}))},a.fetchMore=function(e){e.preventDefault(),a.fetchHistory(3*a.state.amountCalls,{id:Object(o.a)({},a.state.customer).id},!0)},a.fetchAll=function(e){e.preventDefault(),a.fetchHistory("all")},a.handleRegister=function(e,t,n,l){var s=window.localStorage.getItem("token");I.defaults.headers.get.Authorization="JWT "+s,a.setState({loading:!0});var r=a.state.email,o=a.state.password;I.post(U+"newCustomer/",{email:r,password:o,name:n,phoneNumber:l}).then((function(e){e.data.id&&a.setState({customer:e.data});var t=!a.state.logged;a.setState({logged:t}),a.setState({loading:!1}),I.post(U+"token-auth/",{username:r,password:o}).then((function(e){window.localStorage.setItem("token",e.data.token)})).catch((function(e){console.log("error",e),a.setState({loading:!1})}))})).catch((function(e){console.log("error",e),a.setState({loading:!1})}))},a.handleLogout=function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("userId"),window.localStorage.removeItem("username"),window.localStorage.removeItem("password"),a.setState({logged:!1})},window.addEventListener("resize",a.updateDimensions);var n,l,s,r=window,m=document,g=m.documentElement,h=m.getElementsByTagName("body")[0],p=r.innerWidth||g.clientWidth||h.clientWidth,v=r.innerHeight||g.clientHeight||h.clientHeight,E=sessionStorage.getItem("superToken");console.log("producto superToken",E),n=p<763,window.localStorage.getItem("token")?(l=!1,s=!0,console.log("true")):(l=!1,s=!1,console.log("false"));var f=window.localStorage.getItem("username"),w=window.localStorage.getItem("password");return f||(f="",w=""),a.state={selectedUsers:[],filteredResults:[],loadingFiltered:!1,filterNumber:"",history:[],totalCalls:0,amountCalls:0,recargasHistory:[],logged:l,dimensions:{width:p,height:v,isMobile:n},loading:s,loadingHistorial:!1,email:f,password:w,customer:null,loadingComponent:!1},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){this.updateDimensions()}},{key:"componentDidMount",value:function(){window.localStorage.getItem("token")&&this.getUser()}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e={virtualUpdate:this.virtualUpdate,recargasHistory:this.state.recargasHistory,dimensions:this.state.dimensions,customer:this.state.customer,email:this.email,password:this.password,history:this.state.history,totalCalls:this.state.totalCalls,amountCalls:this.state.amountCalls,filteredResults:this.state.filteredResults,loadingFiltered:this.state.loadingFiltered,selectedUsers:this.state.selectedUsers,filterNumber:this.state.filterNumber,loadingHistorial:this.state.loadingHistorial,logged:this.state.logged,handleLogin:this.handleLogin,handleRegister:this.handleRegister,handleUpdate:this.handleUpdate,handleLogout:this.handleLogout,addDevice:this.addDevice,deleteDevice:this.deleteDevice,loadingComponent:this.state.loadingComponent,methods:{handleLogout:this.handleLogout,handleRegister:this.handleRegister,addDevice:this.addDevice,deleteDevice:this.deleteDevice,filterNumber:this.filterNumber,filterUser:this.filterUser,deleteUser:this.deleteUser,fetchHistory:this.fetchHistory,fetchMore:this.fetchMore,fetchAll:this.fetchAll,handleUpdate:this.handleUpdate,recargar:this.recargar,handleSelect:this.handleSelect}};return l.a.createElement(l.a.Fragment,null,this.state.loading?l.a.createElement("div",{className:"row",style:{justifyContent:"center"}},l.a.createElement("div",{className:"lds-hourglass",style:{marginTop:"220px"}})):l.a.createElement(l.a.Fragment,null,this.state.logged?l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{dimensions:this.state.dimensions,userPack:e}),l.a.createElement(H.a,null,l.a.createElement(P,{path:"/",userPack:e}),l.a.createElement(P,{path:"user/:userId",userPack:e}),l.a.createElement(E,{path:"/dialer",userPack:e}))):l.a.createElement(O,{userPack:e})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[257,1,2]]]);
//# sourceMappingURL=main.090529d5.chunk.js.map