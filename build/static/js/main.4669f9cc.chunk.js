(this.webpackJsonpxvoiceproject=this.webpackJsonpxvoiceproject||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(3),l=t.n(o),r=(t(14),t(4)),s=t(5),c=t(7),m=t(6),u=t(8),d=t(1),g=(t(15),t(16),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Portfolio")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Contact")))}),h=function(e){var n=i.a.useState(!1),t=Object(d.a)(n,2),a=t[0],o=t[1],l=e.dimensions.width<769;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"header"},l?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a?"burguer change":"burguer",onClick:function(e){console.log(e.target.parentElement),o((function(e){return!e})),console.log(a)}},i.a.createElement("div",{className:"bar1"}),i.a.createElement("div",{className:"bar2"}),i.a.createElement("div",{className:"bar3"})),i.a.createElement("ul",{className:a?"main-nav":"main-nav closed",id:"navContent"},i.a.createElement(g,null))):i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:"logo"},i.a.createElement("a",{href:"#"},"TELEXFREE")),i.a.createElement("ul",{className:"main-nav",id:"navContent"},i.a.createElement(g,null)))))},f=function(e){var n=i.a.useState(!1),t=Object(d.a)(n,2),a=(t[0],t[1],i.a.useState("")),o=Object(d.a)(a,2),l=(o[0],o[1],i.a.useState("")),r=Object(d.a)(l,2);r[0],r[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login-container"},i.a.createElement("form",{action:"",className:"form-login"},i.a.createElement("ul",{className:"login-nav"},i.a.createElement("li",{className:"login-nav__item active"},i.a.createElement("a",{href:"#"},"Sign In")),i.a.createElement("li",{className:"login-nav__item"},i.a.createElement("a",{href:"#"},"Sign Up"))),i.a.createElement("label",{for:"login-input-user",className:"login__label"},"Username"),i.a.createElement("input",{id:"login-input-user",className:"login__input",type:"text"}),i.a.createElement("label",{for:"login-input-password",className:"login__label"},"Password"),i.a.createElement("input",{id:"login-input-password",className:"login__input",type:"password"}),i.a.createElement("label",{for:"login-sign-up",className:"login__label--checkbox"},i.a.createElement("input",{id:"login-sign-up",type:"checkbox",className:"login__input--checkbox"}),"Keep me Signed in"),i.a.createElement("button",{className:"login__submit",onClick:function(){e.userPack.handleLogin()}},"Sign in")),i.a.createElement("a",{href:"#",className:"login__forgot"},"Forgot Password?")))},E=function(e){function n(e){var t;Object(r.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e))).toggleRegistration=function(e){e.target.classList.toggle("change"),document.querySelector("#navContent").classList.toggle("closed")},t.updateDimensions=function(){var e=window,n=document,a=n.documentElement,i=n.getElementsByTagName("body")[0],o=e.innerWidth||a.clientWidth||i.clientWidth,l=e.innerHeight||a.clientHeight||i.clientHeight;if(!(l-t.state.dimensions.height<60&&l-t.state.dimensions.height>0||o-t.state.dimensions.width===0))if(o<960){var r={width:o,height:l,isMobile:!1};t.setState({dimensions:r})}else{var s={width:o,height:l,isMobile:!1};t.setState({dimensions:s})}},t.handleLogin=function(){var e=!t.state.logged;t.setState({logged:e})},window.addEventListener("resize",t.updateDimensions);var a=window,i=document,o=i.documentElement,l=i.getElementsByTagName("body")[0],s=a.innerWidth||o.clientWidth||l.clientWidth,u=a.innerHeight||o.clientHeight||l.clientHeight;return t.state={logged:!1,dimensions:{width:s,height:u,isMobile:!1}},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidUpdate",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillMount",value:function(){this.updateDimensions()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e={dimensions:this.state.dimensions,logged:this.state.logged,handleLogin:this.handleLogin};return i.a.createElement(i.a.Fragment,null,this.state.logged?i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{dimensions:this.state.dimensions})):i.a.createElement(f,{userPack:e}))}}]),n}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(i.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(n,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.4669f9cc.chunk.js.map