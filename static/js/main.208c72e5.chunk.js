(this.webpackJsonpmy_horoscope_client=this.webpackJsonpmy_horoscope_client||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},22:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),i=a.n(r),o=(a(22),a(3)),l=a.n(o),s=a(15),m=a(4),d=a(2),u=a(16),p=a.n(u),h=(a(42),function(){var e=Object(n.useState)({signs:""}),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({day:"today"}),o=Object(d.a)(i,2),u=o[0],h=o[1],E=Object(n.useState)([]),b=Object(d.a)(E,2),y=b[0],f=b[1],v=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("https://aztro.sameerkumar.website?sign=".concat(a.signs,"&day=").concat(u.day));case 3:t=e.sent,f(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[u.day]),c.a.createElement("div",null,c.a.createElement("h1",{id:"app-name"}," Your Star ")," ",c.a.createElement("img",{style:{width:"4%",margin:"1% 0% 0% -5%"},src:"https://www.pngkey.com/png/full/182-1828465_picture-black-and-white-zodiac-from-the-box.png",alt:""}),c.a.createElement("form",{className:"days",onClick:function(e){return function(e){e.preventDefault();var t=e.target,a=t.id,n=t.value;h(Object(m.a)({},a,n))}(e)},onSubmit:v},c.a.createElement("input",{type:"submit",value:"Yesterday",id:"day"}),c.a.createElement("input",{type:"submit",value:"Today",id:"day"}),c.a.createElement("input",{type:"submit",value:"Tomorrow",id:"day"})),c.a.createElement("div",{className:"zodiac"},c.a.createElement("div",{id:"signs-image"},c.a.createElement("img",{src:"https://static.wixstatic.com/media/e6f9d7_1cf63a10d9124730b66cfb48e7683a83~mv2.png/v1/fill/w_504,h_508,al_c,q_85,usm_0.66_1.00_0.01/Zodiac%20Wheel.webp",alt:"signs"})),c.a.createElement("form",{id:"title",onChange:function(e){return function(e){r(Object(m.a)({},e.target.id,e.target.value))}(e)},onSubmit:v},c.a.createElement("input",{id:"signs",type:"text",placeholder:"ENTER YOUR SIGN",required:!0})),c.a.createElement("div",{className:"the-date"},c.a.createElement("p",{id:"the-day"}," ",u.day," "),c.a.createElement("p",{id:"date"},"  ",y.current_date," ")),c.a.createElement("div",{id:"horoscope"},c.a.createElement("h2",{id:"horoscope-head"}," Horoscope "),c.a.createElement("p",{id:"horoscope"}," ",y.description," ")),c.a.createElement("ul",{className:"info"},c.a.createElement("h3",{id:"basics"}," BASICS "),c.a.createElement("li",{id:"birthdays"}," Dates: ",y.date_range," "),c.a.createElement("li",{id:"mood"}," Mood: ",y.mood," "),c.a.createElement("li",{id:"compatibility"}," Compatibility: ",y.compatibility," "),c.a.createElement("li",{id:"color"}," Color: ",y.color," "),c.a.createElement("li",{id:"number"}," Lucky Number: ",y.lucky_number," "),c.a.createElement("li",{id:"time"}," Lucky Time: ",y.lucky_time," "))))});a(43);var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.208c72e5.chunk.js.map