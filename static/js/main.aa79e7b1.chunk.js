(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),i=n.n(l),o=(n(15),n(6)),c=n(1),u=n(2),s=n(4),m=n(3),d=n(5),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.quantity,n=e.onIncrement,a=e.onDecrement,l=e.onRemove,i=e.onEmpty;return r.a.createElement("div",null,r.a.createElement("span",{className:"badge mr-2 badge-dark"},r.a.createElement("h6",null,"Product ",t.id," :")),r.a.createElement("button",{className:"btn btn-warning btn-sm m-2",disabled:t.value<-4,onClick:function(){return a(t)}},"-"),r.a.createElement("span",{className:this.badgeStyle()},5===t.value?"Full: "+t.value:0===t.value?"Sold out":t.value<-4?"Total loss: "+t.value:t.value<0?"Loss: "+t.value:t.value),r.a.createElement("button",{className:"btn btn-success btn-sm mr-2",disabled:t.value>=5,onClick:function(){return n(t)}},"+"),r.a.createElement("button",{className:"btn btn-light btn-sm m-2",disabled:t.value<=0,onClick:function(){return i(t)}},"Sold out"),r.a.createElement("button",{className:"btn btn-danger btn-sm m-2",onClick:function(){return l(t.id)}},"Remove"))}},{key:"badgeStyle",value:function(){var e="badge m-2 badge-";return this.props.quantity.value<=0?e+"light":5===this.props.quantity.value?e+"secondary":e+"primary"}}]),t}(a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.quantity,n=e.onIncrement,a=e.onDecrement,l=e.onRemove,i=e.onEmpty;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(b,{key:e.id,quantity:e,onRemove:l,onEmpty:i,onIncrement:n,onDecrement:a})}))}}]),t}(a.Component),h=function(e){var t=e.qtdTipos,n=e.qtdTotal,a=e.onReset;return r.a.createElement("nav",{className:"navbar navbar-dark"},r.a.createElement("nav",{className:"navbar-brand"},"Sumary:",r.a.createElement("br",null),r.a.createElement("span",{className:"badge badge-pill badge-secondary"},"Products: ",t),r.a.createElement("br",null),r.a.createElement("span",{className:"badge badge-pill badge-secondary"},"Total Quantity: ",n),r.a.createElement("span",{className:"ml-4"},r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:a},"Reset"))))},y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={quantity:[{id:"A",value:1},{id:"B",value:2},{id:"C",value:3},{id:"D",value:4}]},n.handleIncrement=function(e){var t=Object(o.a)(n.state.quantity),a=t.indexOf(e);t[a].value++,n.setState({quantity:t})},n.handleDecrement=function(e){var t=Object(o.a)(n.state.quantity),a=t.indexOf(e);t[a].value--,n.setState({quantity:t})},n.handleEmpty=function(e){var t=Object(o.a)(n.state.quantity),a=t.indexOf(e);t[a].value=0,n.setState({quantity:t})},n.handleReset=function(){n.setState({quantity:[{id:"A",value:1},{id:"B",value:2},{id:"C",value:3},{id:"D",value:4}]})},n.handleRemove=function(e){var t=n.state.quantity.filter(function(t){return t.id!==e});n.setState({quantity:t})},n.handleTotal=function(){var e=0;return n.state.quantity.map(function(t){return e+=t.value}),e},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"container"},r.a.createElement(v,{quantity:this.state.quantity,onIncrement:this.handleIncrement,onEmpty:this.handleEmpty,onRemove:this.handleRemove,onDecrement:this.handleDecrement})),r.a.createElement(h,{onReset:this.handleReset,qtdTipos:this.state.quantity.filter(function(e){return e.value>0}).length,qtdTotal:this.handleTotal()}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.aa79e7b1.chunk.js.map