(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,a){},18:function(e){e.exports=JSON.parse('[{"id":10,"title":"Cup of Sugar","description":"An app for neighbors to offer and request goods and services.","tech":"Cup of Sugar utilizes MVC architecture, Node, Express, MySQL, Sequelize, Handlebars, jQuery, JavaScript, Bcrypt and CSS.","image1":"https://litabeach.github.io/Portfolio/02-CSS-Bootstrap/Assets/Images2/cupofsugar.png","alt1":"a screenshot of the home page of the cup of sugar app","image2":"https://litabeach.github.io/Portfolio/02-CSS-Bootstrap/Assets/Images2/cupofsugar2.png","alt2":"a screenshot of the search page of the cup of sugar app","githublink":"https://github.com/Litabeach/Cup-of-Sugar","deployedlink":"https://cup-of-sugar-application.herokuapp.com/"},{"id":20,"title":"Travel Today","description":" A travel app that does the hard work for you!","tech":" Travel Today utilizes Google Places API, Google Maps API, jQuery, JavaScript, Bootstrap and CSS.","image1":"https://github.com/Litabeach/Travel-Today/raw/main/Assets/screenshot.png","alt1":"travel today homepage","image2":"https://github.com/Litabeach/Portfolio/blob/main/02-CSS-Bootstrap/Assets/Images2/traveltoday2.png?raw=true","alt2":"screenshot of travel today app search","githublink":"https://github.com/Litabeach/Travel-Today","deployedlink":"https://litabeach.github.io/Travel-Today/"},{"id":40,"title":"Workout Tracker","description":"An app to view, create, and track daily workouts. Statistics for the last 7 workouts workouts are available on the stats page. ","tech":"Built with MongoDB, Mongoose, Node and Express","image1":"https://github.com/Litabeach/Workout-Tracker/raw/main/public/images/homepage.png","alt1":"a screenshot of the home page of the workout app","image2":"https://github.com/Litabeach/Workout-Tracker/raw/main/public/images/stats.png","alt2":"a screenshot of the stats page of the workout app","githublink":"https://github.com/Litabeach/Workout-Tracker","deployedlink":"https://shielded-dusk-73422.herokuapp.com/"},{"id":50,"title":"Work-E-Pedia","description":"View a directory of employees. Sort and search the directory by name.","tech":"Built with React","image1":"https://github.com/Litabeach/React-Employee-Directory/raw/main/public/screenshot.png","alt1":"a screenshot of home page of Work-E-Pedia","image2":"https://github.com/Litabeach/React-Employee-Directory/raw/main/public/screenshot2.png","alt2":"a screenshot of the a search on Work-E-Pedia","githublink":"https://github.com/Litabeach/React-Employee-Directory//","deployedlink":"https://litabeach.github.io/React-Employee-Directory/"},{"id":60,"title":"Budget Anywhere","description":"An app for users to add expenses and deposits to their budget. Users are able to enter transactions offline. The transactions entered offline will automatically be populated to the database when the user regains internet connection..","tech":"Built with IndexDB, Mongoose, Mongo, MongoDB Atlas, Javascript, Express, and Node.js.","image1":"https://github.com/Litabeach/Budget-Anywhere/raw/main/public/images/budget.png","alt1":"a screenshot of the budget anywhere app online","image2":"https://github.com/Litabeach/Budget-Anywhere/raw/main/public/images/screenshot2.png","alt2":"a screenshot of the budget anywhere app offline","githublink":"https://github.com/Litabeach/Budget-Anywhere","deployedlink":"https://budget-anywhere.herokuapp.com/"},{"id":30,"title":"Employee Roster Generator","description":"Generate an employee roster for any team that includes a manager, engineers and interns. Inputs are tailored to job position.","tech":"Employee Roster Generator was built with Node, Inquirer, and Javascript. Tested with Jest.","image1":"https://github.com/Litabeach/Employee-Roster-Generator/raw/main/Assets/output.png","alt1":"screenshot of employee roster app","image2":"https://github.com/Litabeach/Employee-Roster-Generator/raw/main/Assets/runit.png","alt2":"screenshot of employee roster results","githublink":"https://github.com/Litabeach/Employee-Roster-Generator","deployedlink":"https://youtu.be/RPyup1ef7xA"}]')},27:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a(15),c=a.n(s),n=a(7),o=a(2),r=a.p+"static/media/email.817b1334.jpg",l=a.p+"static/media/phone.ceb8b6cd.jpg",A="data:image/png;base64,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",h=a.p+"static/media/linkedinicon.9837d50f.jpg",b=(a(14),a(0));var g=function(){return Object(b.jsx)("main",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-3 headshot",children:Object(b.jsx)("img",{className:"img img thumbnail headshot",src:"data:image/jpeg;base64,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",alt:"headshot of a woman smiling."})}),Object(b.jsxs)("div",{className:"col-lg-9 contact-info text",id:"aboutMe",children:[Object(b.jsx)("p",{children:"Enthusiastic entry level web developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including Javascript, Node, mySQL, Sequelize, Express, APIs, Handlebars, HTML5, CSS, and Bootstrap.  Able to effectively self-manage during independent projects, as well as collaborate in a team setting."}),Object(b.jsx)("p",{children:"Her educational background is in full stack web development at the University of Minnesota Web Development Bootcamp. At the end of the program, she will have the tools to design and create professional, easy to use websites."}),Object(b.jsx)("p",{children:"On her days off she enjoys gardening, playing bass guitar, listening to audiobooks, and cuddling with her two cats."}),Object(b.jsxs)("p",{id:"media-links",children:[" Connect with Lita: ",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"tel:612-558-4804",children:Object(b.jsx)("img",{className:"img img thumbnail icon",src:l,alt:"phone icon"})}),Object(b.jsx)("a",{href:"mailto:litabeach123@gmail.com",children:Object(b.jsx)("img",{className:"img img thumbnail icon",src:r,alt:"email icon"})}),Object(b.jsx)("a",{href:"https://github.com/Litabeach",children:Object(b.jsx)("img",{className:"img img thumbnail icon",src:A,alt:"github icon"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/lita-beach",children:Object(b.jsx)("img",{className:"img img thumbnail icon",src:h,alt:"linkedin icon"})}),Object(b.jsx)("a",{href:"https://www.facebook.com/lita.beach/",children:Object(b.jsx)("img",{className:"img img thumbnail icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAA+Pj7i4uLIyMhwcHBKSkrr6+vz8/Pc3NxBQUFYWFibm5vExMSNjY3MzMy0tLT39/dPT085OTl/f3+Hh4e8vLyurq4fHx9HR0cwMDCVlZWoqKi/v79lZWXR0dEjIyMVFRVsbGwrRFa/AAADG0lEQVR4nO3dbXvSMBSAYQUmCJSXbcDe5/b/f6SiXmqTHEiy0OQcn/sz7XiubpSlafPpEwAAAAAAAAAAAAAANnWrxXxU13yx6i6VN919bsVueonAx9pZPcvygde1mxyL0oE3tYs887KBrR3Bo6JHcVm7JuipXOC0dotgVqzwtnaKYFWssHaJqFTgc+0Q0bpQYTvfZVylzvstnip+eSlUOKodIrq/SOFkXNOk915GFykcF9prnjGFWSgcEoV5KBwShXkoHBKFeSgckurC7fR1f1geHTabzb6bvI5ns63zIr2Fz7fCmPNdv1FpYfcSrvupP2SosvBwd6LPQOH628k+/YXnB5t1F24jBrlUF85O/wXqL9y+RQSqLoy76qq4MPKKlt7CdVyg4sJz50H1hU+RgXoLYwPVFu7NF95bL5xFB2otPJgvPPUvr43CN7no6mmz/vqP/oZaCsVJVg+TM1tqKexfjf/r/GQ8LYXCB83D+S21FK7ChRFTnLQUXgUD7yK21FL4Hiy8ithSd2HMjFgtheHf0n3ElroLz50LjyjMQ2E6CmUU5qEwHYUyCvNQmI5CGYV5hip8jdiyycLZzRfHdXiGgve6H26c+9KbLPzYHajOzuwVvpkvdMeI7RW642/2Ct27RO0VbswXuudIe4XuY1rsFaqYyf6RQu9ijblC72Ztc4W37s7MFT66OzNX6F2OMlfo/ctortB7apm5Qm9n1gr9uQvWCv0ZRNYK372dNVm47SaO9SLYs3Rf1/k/q8nCgPBoYsxTn3QX2h8RpvCIwjwUpqNQRmEeCtNRKKMwD4XpKJRRmIfCdBTKKMxDYToKZRTmoTAdhTIK81CYjkIZhXkoTEehjMI8FKajUEZhHgrTUSijMM//NnOvwNp50/CDITfV1s6bB99PC0qtehye79qCUoseC88AbIB3S02mrnaIKObTN0rtEFGpwGaXy90VK7S/Lrf9tdXbXPS41Knit7jVNoZU6mz/R2tHsfARPHqs3dRTas3xnmnksikD2Hl3XpbSrRbzUV3zxarYNxkAAAAAAAAAAAAAABrzHeQ/Q3j4Vk6bAAAAAElFTkSuQmCC",alt:"facebook icon"})})]})]})]})})};var j=function(){return Object(b.jsxs)("div",{className:"contact-info",children:[Object(b.jsx)("h3",{children:"Contact Lita:"}),Object(b.jsx)("h5",{children:"Email:"}),Object(b.jsxs)("a",{href:"mailto:litabeach123@gmail.com",className:"links",children:[Object(b.jsx)("img",{className:"img img thumbnail icon",src:r,alt:"email icon"}),"litabeach123@gmail.com "]}),Object(b.jsx)("h5",{children:"Phone:"}),Object(b.jsxs)("a",{href:"tel:612-558-4804",className:"links",children:[Object(b.jsx)("img",{className:"img img thumbnail icon",src:l,alt:"phone icon"}),"612-558-4804"]}),Object(b.jsx)("h5",{children:"Github:"}),Object(b.jsxs)("a",{href:"https://github.com/Litabeach",className:"links",children:[Object(b.jsx)("img",{className:"img img thumbnail icon",src:A,alt:"github icon"}),"https://github.com/Litabeach "]}),Object(b.jsx)("h5",{children:"LinkedIn:"}),Object(b.jsxs)("a",{href:"https://www.linkedin.com/in/lita-beach",className:"links",children:[Object(b.jsx)("img",{className:"img img thumbnail icon",src:h,alt:"LinkedIn icon"}),"https://www.linkedin.com/in/lita-beach "]})]})},m=a(16),d=a(17),p=a(21),u=a(20);a(27);var f=function(e){return Object(b.jsx)("main",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-lg-12  portfolio",children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsxs)("h5",{children:[e.description," "]}),Object(b.jsxs)("p",{children:[" ",e.tech]}),Object(b.jsxs)("p",{children:[Object(b.jsxs)("a",{href:e.deployedlink,className:"links",children:["Visit ",e.title]})," ",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:e.githublink,className:"links",children:"Github Repo "})]}),Object(b.jsxs)("a",{href:e.githublink,className:"hover-img",children:[Object(b.jsx)("img",{src:e.image1,className:"img-fluid port-image",alt:e.alt1}),Object(b.jsx)("img",{src:e.image2,className:"img-fluid port-image",alt:e.alt2})]})]})})})},w=a(18),O=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={projects:w},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:this.state.projects.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)(f,{id:e.id,title:e.title,description:e.description,tech:e.tech,deployedlink:e.deployedlink,githublink:e.githublink,image1:e.image1,image2:e.image2,alt1:e.alt1,alt2:e.alt2}),Object(b.jsx)("br",{})]},e.id)}))})}}]),a}(i.Component),B=(a(28),a.p+"static/media/LitaBeachResume.8c9ce875.pdf");var x=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-dark navbar-expand-md justify-content-center",children:[Object(b.jsx)(n.b,{className:"navbar-brand d-flex w-50 mr-auto",to:"/",children:"Lita Beach"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsingNavbar3",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"navbar-collapse collapse w-100",id:"collapsingNavbar3",children:Object(b.jsxs)("ul",{className:"nav navbar-nav ml-auto w-100 justify-content-end",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(n.b,{to:"/",className:"nav-link",activeClassName:"nav-link active",children:"About"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(n.b,{to:"/contact",className:"nav-link",activeClassName:"nav-link active",children:"Contact"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(n.b,{to:"/portfolio",className:"nav-link",activeClassName:"nav-link active",children:"Portfolio"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",activeClassName:"nav-link active",href:B,children:"Resume"})})]})})]})};a(37);var N=function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("p",{children:"\xa9 2021 Lita Beach"})})};a(38);var Q=function(){return Object(b.jsx)(n.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:["/","/home"],children:Object(b.jsx)(g,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/contact",children:Object(b.jsx)(j,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/portfolio",children:Object(b.jsx)(O,{})})]}),Object(b.jsx)(N,{})]})})};a(39);c.a.render(Object(b.jsx)(Q,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.02142dd0.chunk.js.map