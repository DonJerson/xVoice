(this.webpackJsonpxvoiceproject=this.webpackJsonpxvoiceproject||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n,o=a(0),s=a.n(o),i=a(12),r=a.n(i),l=(a(23),a(13)),c=a(14),m=a(16),u=a(15),d=a(17),g=a(2),h=(a(24),a(25),window.location);n=h.host.includes(":")?h.host.substring(0,h.host.length-5):h.host;var p=h.protocol+"//"+n+":8181/",w=a(26);w.defaults.xsrfCookieName="csrftoken",w.defaults.xsrfHeaderName="X-CSRFToken",w.defaults.withCredentials=!1;var f={id:1,apiUsageHistory:[],recargasHistory:[],usageHistory:Array(2),0:{id:1,method:"INVITE",from_tag:"182c4d3c",to_tag:"as20b73407",callid:"cEkRV392kx6FSq3oqmdIZA..",sip_code:"200",sip_reason:"OK",time:"2020-02-18T02:58:05Z",src_user:"4776200196",src_domain:"3.81.8.219",src_ip:"201.229.162.40",dst_ouser:"15612402968",dst_user:"15612402968",dst_domain:"64.2.142.93",consumer:1},1:{id:2,method:"BYE",from_tag:"182c4d3c",to_tag:"as20b73407",callid:"cEkRV392kx6FSq3oqmdIZA..",sip_code:"200",sip_reason:"OK",time:"2020-02-18T02:58:12Z",src_user:"4776200196",src_domain:"3.81.8.219",src_ip:"201.229.162.40",dst_ouser:"15612402968",dst_user:"15612402968",dst_domain:"66.241.97.51",consumer:1},length:2,__proto__:Array(0),subscribers:[{id:2,username:"4776200196",password:"Pri3to"}],password:"pbkdf2_sha256$180000$ssnEgRIWpT23$zXiLCGZD+tQDLSBkzSfuQog2+fKp5F6KvbGu4s92nnE=",last_login:"2020-02-18T02:43:12.790044Z",is_superuser:!0,username:"prieto",first_name:"",last_name:"",email:"prieto@admin.com",is_staff:!0,is_active:!0,date_joined:"2020-02-18T02:28:36.782698Z",name:null,balance:"-0.001",phoneNumber:null,groups:[],user_permissions:[]},v=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"About")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Portfolio")),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},"Contact")),s.a.createElement("li",null,s.a.createElement("a",{onClick:function(){e.userPack.handleLogout()},href:"#"},"Logout")))},E=function(e){var t=s.a.useState(!1),a=Object(g.a)(t,2),n=a[0],o=a[1],i=e.dimensions.width<769;return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"header"},i?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:n?"burguer change":"burguer",style:{position:"relative",left:"10px"},onClick:function(e){console.log(e.target.parentElement),o((function(e){return!e})),console.log(n)}},s.a.createElement("div",{className:"bar1"}),s.a.createElement("div",{className:"bar2"}),s.a.createElement("div",{className:"bar3"})),s.a.createElement("ul",{className:n?"main-nav":"main-nav closed",id:"navContent"},s.a.createElement(v,{userPack:e.userPack}))):s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"logo"},s.a.createElement("a",{href:"#"},"TELEXFREE")),s.a.createElement("ul",{className:"main-nav",id:"navContent"},s.a.createElement(v,{userPack:e.userPack})))))},b=function(e){var t=s.a.useState(!1),a=Object(g.a)(t,2),n=a[0],o=a[1],i=window.localStorage.getItem("username"),r=window.localStorage.getItem("password");i||(i=e.userPack.email,r=e.userPack.password);var l=s.a.useState(!0),c=Object(g.a)(l,2),m=c[0],u=c[1],d=s.a.useState(!1),h=Object(g.a)(d,2),p=h[0],w=h[1],f=s.a.useState(""),v=Object(g.a)(f,2),E=v[0],b=v[1],_=s.a.useState(""),k=Object(g.a)(_,2),S=k[0],N=k[1],y=n?"active":"",C=n?"":"active";return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"login-container",style:{marginBottom:"62px"}},s.a.createElement("div",{className:"form-login"},s.a.createElement("ul",{className:"login-nav"},s.a.createElement("li",{className:"login-nav__item "+C},s.a.createElement("a",{onClick:function(){o(!1)}},"Sign In")),s.a.createElement("li",{className:"login-nav__item "+y},s.a.createElement("a",{onClick:function(){o(!0)}},"Sign Up"))),s.a.createElement("label",{htmlFor:"login-input-user",className:"login__label"},"Email, Username or Phonenumber"),s.a.createElement("input",{id:"login-input-user",value:i,onChange:function(t){e.userPack.handleUpdate("email",t.target.value)},className:"login__input",type:"text"}),s.a.createElement("label",{htmlFor:"login-input-password",className:"login__label"},"Password"),s.a.createElement("input",{id:"login-input-password",value:r,onKeyPress:function(t){"Enter"===t.key&&e.userPack.handleLogin("","",m)},onChange:function(t){e.userPack.handleUpdate("password",t.target.value)},className:"login__input",type:"password"}),n?s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"login-input-user",className:"login__label"},"Nombre"),s.a.createElement("input",{id:"login-input-user",value:E,onChange:function(e){b(e.target.value)},className:"login__input",type:"text"}),s.a.createElement("label",{htmlFor:"login-input-user",className:"login__label"},"Celular"),s.a.createElement("input",{id:"login-input-user",value:S,onChange:function(e){var t=e.target.value;""===t&&N(t);try{var a=parseInt(t);if(isNaN(a))return}catch(n){return void console.log("error",n)}N(t.replace(/[^\d]+/g,""))},className:"login__input",type:"text"}),s.a.createElement("label",{htmlFor:"login-sign-up",className:"login__label--checkbox"},s.a.createElement("input",{id:"login-sign-up",type:"checkbox",checked:p,onChange:function(){w((function(e){return!e}))},className:"login__input--checkbox"}),"Estoy de acuerdo con las condiciones"),s.a.createElement("button",{className:"login__submit",onClick:function(){e.userPack.handleRegister(i,r,E,S)}},"Registrarme")):s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:"login-sign-up",className:"login__label--checkbox"},s.a.createElement("input",{id:"login-sign-up",type:"checkbox",checked:m,onChange:function(){u((function(e){return!e}))},className:"login__input--checkbox"}),"Mantenme logueado"),s.a.createElement("button",{className:"login__submit",onClick:function(){e.userPack.handleLogin(i,r,m)}},"Entrar"))),s.a.createElement("a",{href:"#",className:"login__forgot"},"Forgot Password?")))},_=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggleRegistration=function(e){e.target.classList.toggle("change"),document.querySelector("#navContent").classList.toggle("closed")},a.updateDimensions=function(){var e=window,t=document,n=t.documentElement,o=t.getElementsByTagName("body")[0],s=e.innerWidth||n.clientWidth||o.clientWidth,i=e.innerHeight||n.clientHeight||o.clientHeight;if(!(i-a.state.dimensions.height<60&&i-a.state.dimensions.height>0||s-a.state.dimensions.width===0))if(s<763){var r={width:s,height:i,isMobile:!0};a.setState({dimensions:r})}else{var l={width:s,height:i,isMobile:!1};a.setState({dimensions:l})}},a.getUser=function(){var e=window.localStorage.getItem("token");w.defaults.headers.get.Authorization="JWT "+e,w.get(p+"getSub/").then((function(e){a.setState({customer:e.data}),a.setState({loading:!1}),a.setState({logged:!0})})).catch((function(e){console.log("error",e),a.setState({loading:!1})}))},a.handleUpdate=function(e,t){switch(window.localStorage.removeItem("username"),window.localStorage.removeItem("password"),e){case"email":a.setState({email:t});break;case"password":a.setState({password:t})}},a.handleLogin=function(e,t,n){a.setState({loading:!0});var o=a.state.email,s=a.state.password;n&&(window.localStorage.setItem("username",o),window.localStorage.setItem("password",s)),w.post(p+"token-auth/",{username:o,password:s}).then((function(e){window.localStorage.setItem("token",e.data.token),a.setState({customer:e.data.user});var t=!a.state.logged;a.setState({logged:t}),a.setState({loading:!1})})).catch((function(e){console.log("error",e),a.setState({loading:!1})}))},a.handleRegister=function(e,t,n,o){a.setState({loading:!0});var s=a.state.email,i=a.state.password;w.post(p+"newCustomer/",{email:s,password:i,name:n,phoneNumber:o}).then((function(e){e.data.id&&a.setState({customer:e.data});var t=!a.state.logged;a.setState({logged:t}),a.setState({loading:!1}),w.post(p+"token-auth/",{username:s,password:i}).then((function(e){window.localStorage.setItem("token",e.data.token)})).catch((function(e){console.log("error",e),a.setState({loading:!1})}))})).catch((function(e){console.log("error",e),a.setState({loading:!1})}))},a.handleLogout=function(){window.localStorage.removeItem("token"),window.localStorage.removeItem("userId"),window.localStorage.removeItem("username"),window.localStorage.removeItem("password"),a.setState({logged:!1})},window.addEventListener("resize",a.updateDimensions);var n=window,o=document,s=o.documentElement,i=o.getElementsByTagName("body")[0],r=n.innerWidth||s.clientWidth||i.clientWidth,c=n.innerHeight||s.clientHeight||i.clientHeight,d=!1,g=window.localStorage.getItem("token"),v=!1;console.log(h.host.substring(0,3)),"127"===h.host.substring(0,3)&&(v=!0),g&&!v&&(d=!0,a.getUser());var E=window.localStorage.getItem("username"),b=window.localStorage.getItem("password");return E||(E="",b=""),a.state={logged:v,dimensions:{width:r,height:c,isMobile:!1},loading:d,email:E,password:b,customer:f},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillMount",value:function(){this.updateDimensions()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this.state.dimensions.isMobile?"15px":"50px",t={dimensions:this.state.dimensions,customer:this.state.customer,email:this.email,password:this.password,logged:this.state.logged,handleLogin:this.handleLogin,handleRegister:this.handleRegister,handleUpdate:this.handleUpdate,handleLogout:this.handleLogout};return s.a.createElement(s.a.Fragment,null,this.state.loading?s.a.createElement("div",{className:"row",style:{justifyContent:"center"}},s.a.createElement("div",{className:"lds-hourglass",style:{marginTop:"220px"}})):s.a.createElement(s.a.Fragment,null,this.state.logged?s.a.createElement(s.a.Fragment,null,s.a.createElement(E,{dimensions:this.state.dimensions,userPack:t}),s.a.createElement("div",{id:"mainBody",style:{marginLeft:e,marginRight:e,marginTop:"18px"}},s.a.createElement("div",{classname:"row"},s.a.createElement("h1",{className:"mainGrayTitle"},"Welcome ",this.state.customer.name)),s.a.createElement("div",{classname:"row"},s.a.createElement("h1",{className:"mainGrayTitle"},"Mis dispositivos")),this.state.customer.subscribers.map((function(e,t){return s.a.createElement("div",{classname:"row",style:{backgroundColor:"#5e5c5b"}},s.a.createElement("p",{style:{color:"white"}},"Username: ",e.username," Password: ",e.password," "))})))):s.a.createElement(b,{userPack:t})))}}]),t}(o.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(s.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.62825c5d.chunk.js.map