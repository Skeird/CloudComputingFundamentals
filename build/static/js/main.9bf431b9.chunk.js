(this["webpackJsonpadmin-app"]=this["webpackJsonpadmin-app"]||[]).push([[0],{32:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(28),i=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(11),r=t(12),c=t(14),g=t(13),u=t(29),h=t(8),m=t(6),d=t(17),p=new d.c({UserPoolId:"us-east-1_lVRitvsHo",ClientId:"47gu5lloa7d2cbhc1ehsk5okkg"}),v=function(e){Object(c.a)(t,e);var n=Object(g.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).state={emailSignUp:"",passwordSignUp:"",emailLogIn:"",passwordLogIn:""},a.handleChangeEmailSignUp=a.handleChangeEmailSignUp.bind(Object(m.a)(a)),a.handleChangePasswordSignUp=a.handleChangePasswordSignUp.bind(Object(m.a)(a)),a.handleChangeEmailLogIn=a.handleChangeEmailLogIn.bind(Object(m.a)(a)),a.handleChangePasswordLogIn=a.handleChangePasswordLogIn.bind(Object(m.a)(a)),a.register=a.register.bind(Object(m.a)(a)),a.login=a.login.bind(Object(m.a)(a)),a.GoToHome=a.GoToHome.bind(Object(m.a)(a)),a}return Object(r.a)(t,[{key:"handleChangeEmailSignUp",value:function(e){this.setState({emailSignUp:e.target.value})}},{key:"handleChangePasswordSignUp",value:function(e){this.setState({passwordSignUp:e.target.value})}},{key:"handleChangeEmailLogIn",value:function(e){this.setState({emailLogIn:e.target.value})}},{key:"handleChangePasswordLogIn",value:function(e){this.setState({passwordLogIn:e.target.value})}},{key:"register",value:function(e){console.log(this.state.nameSignUp),p.signUp(this.state.emailSignUp,this.state.passwordSignUp,[],null,(function(e,n){e?(console.error(e),alert(e.message)):(console.log(n),alert("Account created ! check your email to validate your account, then come back and login."))})),e.preventDefault()}},{key:"GoToHome",value:function(e){console.log("access token + "+e.getAccessToken().getJwtToken()),localStorage.setItem("cloudLearningAccessToken",e.getAccessToken().getJwtToken()),this.props.history.push("/home")}},{key:"login",value:function(e){e.preventDefault();var n={Username:this.state.emailLogIn,Password:this.state.passwordLogIn},t={Username:this.state.emailLogIn,Pool:p},a=new d.a(n);new d.b(t).authenticateUser(a,{onSuccess:this.GoToHome,onFailure:function(e){console.log(e),alert(e.message)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.register},o.a.createElement("h4",null,"Sign up"),o.a.createElement("input",{type:"text",value:this.state.emailSignUp,onChange:this.handleChangeEmailSignUp}),o.a.createElement("input",{type:"password",value:this.state.passwordSignUp,onChange:this.handleChangePasswordSignUp}),o.a.createElement("button",null,"Sign up")),o.a.createElement("form",{onSubmit:this.login},o.a.createElement("h4",null,"Log In"),o.a.createElement("input",{type:"text",value:this.state.emailLogIn,onChange:this.handleChangeEmailLogIn}),o.a.createElement("input",{type:"password",value:this.state.passwordLogIn,onChange:this.handleChangePasswordLogIn}),o.a.createElement("button",null,"Log In")))}}]),t}(o.a.Component),b=function(e){Object(c.a)(t,e);var n=Object(g.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).state={},a}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(o.a.Component),w=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Error"))},E=function(e){Object(c.a)(t,e);var n=Object(g.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",component:v,exact:!0}),o.a.createElement(h.a,{path:"/home",component:b,exact:!0}),o.a.createElement(h.a,{component:w})))}}]),t}(a.Component);i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.9bf431b9.chunk.js.map