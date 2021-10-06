(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var s=i(6),c=i.n(s),n=i(10),a=i(7),l=i(8),o=i(11),r=i(9),d=i(1),j=(i(16),i(17),i(18),i(0)),m=function(e){var t=e.movie;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(j.jsxs)("div",{className:"content",children:[t.Plot,Object(j.jsx)("br",{})]})]})]})},b=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(m,{movie:e},e.imdbID)}))})},v=i(4),u=(i(20),function(e){var t=e.onMovieAdd,i=Object(d.useState)(""),s=Object(v.a)(i,2),c=s[0],n=s[1],a=Object(d.useState)(!1),l=Object(v.a)(a,2),o=l[0],r=l[1],b=Object(d.useState)({Poster:"",Title:"",Plot:"",imdbID:""}),u=Object(v.a)(b,2),h=u[0],O=u[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"find-movie",onSubmit:function(e){null===e||void 0===e||e.preventDefault(),h.Title.length>0&&t(h),O({Poster:"",Title:"",Plot:"",imdbID:""}),n("")},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("input",{type:"text",id:"movie-title",value:c,placeholder:"Enter a title to search",className:"input is-danger",onChange:function(e){n(e.target.value),r(!1)}})})]}),o&&Object(j.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"button",className:"button is-light",onClick:function(){return e=c,O({Poster:"",Title:"",Plot:"",imdbID:""}),void fetch("https://www.omdbapi.com/?apikey=e45c8c40&t=".concat(e)).then((function(e){return e.json()})).then((function(e){"False"!==e.Response?O(e):r(!0)}));var e},children:"Find a movie"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"title",children:"Preview"}),h.Title.length>0&&Object(j.jsx)(m,{movie:h})]})]})}),h=function(e){Object(o.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(a.a)(this,i);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={movies:[]},e.addMovie=function(t){e.state.movies.find((function(e){return t.imdbID===e.imdbID}))||e.setState((function(e){return{movies:[].concat(Object(n.a)(e.movies),[t])}}))},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(b,{movies:e})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(u,{onMovieAdd:this.addMovie})})]})}}]),i}(d.Component);c.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.74e940c2.chunk.js.map