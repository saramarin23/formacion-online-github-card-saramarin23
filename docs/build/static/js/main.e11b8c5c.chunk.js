(this.webpackJsonpcard=this.webpackJsonpcard||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/spidertocat.48dd8e7d.png"},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(3),r=a.n(l),c=(a(15),a(4)),i=a(5),o=a(8),u=a(6),m=a(1),d=a(9),p=function(){return fetch("https://api.github.com/orgs/adalab/members").then((function(e){return e.json()}))},E=(a(16),a(7)),v=a.n(E),f=(a(17),function(e){var t=e.detailedUser;return void 0===t?s.a.createElement("div",null,s.a.createElement("img",{src:v.a,alt:"Logo de GitHub"})):s.a.createElement("div",{className:"user_container"},s.a.createElement("img",{className:"user_photo",src:t.avatar_url,alt:t.login}),s.a.createElement("div",{className:"name_container"},s.a.createElement("span",{className:"user_nickname"},"@",t.login),s.a.createElement("p",{className:"user_name"},t.name),s.a.createElement("p",null,"\ud83d\udccd",t.location)),s.a.createElement("div",{className:"followers_container"},s.a.createElement("p",{className:"text"},s.a.createElement("span",{className:"number"},t.public_repos)," Repos"),s.a.createElement("p",{className:"text"},s.a.createElement("span",{className:"number"},t.followers)," Followers"),s.a.createElement("p",{className:"text"},s.a.createElement("span",{className:"number"},t.following)," Following")))}),g=(a(18),function(e){var t=e.students,a=e.selectUser,n=e.isLoading;return s.a.createElement("div",null,s.a.createElement("select",{className:"select_input",onChange:a},s.a.createElement("option",null,"Selecciona una usuaria"),t.map((function(e){return s.a.createElement("option",{key:e.login},e.login)}))),n?s.a.createElement("div",{class:"lds-roller"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)):null)}),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={students:[],selectedUser:"",isLoading:!1},a.selectUser=a.selectUser.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getUsersFromAdalab()}},{key:"getUsersFromAdalab",value:function(){var e=this;p().then((function(t){return e.setState({students:t})}))}},{key:"selectUser",value:function(e){var t=this,a=e.currentTarget.value;this.setState({selectedUser:a,isLoading:!0});var n="https://api.github.com/users/".concat(a);fetch(n).then((function(e){return e.json()})).then((function(e){return t.setState({detailedUser:e,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.students,a=e.selectedUser,n=e.detailedUser,l=e.isLoading;return s.a.createElement("div",{className:"App"},s.a.createElement(g,{students:t,selectUser:this.selectUser,isLoading:l}),s.a.createElement(f,{students:t,selectedUser:a,detailedUser:n}))}}]),t}(s.a.Component);r.a.render(s.a.createElement(h,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.e11b8c5c.chunk.js.map