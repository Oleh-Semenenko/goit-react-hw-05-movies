"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[916],{916:function(n,e,r){r.r(e),r.d(e,{default:function(){return X}});var t,i,s,a,l,o,d,c,p,h=r(861),u=r(439),x=r(687),g=r.n(x),f=r(791),v=r(689),j=r(5),b=r(168),A=r(934),Z=r(87),C=(0,A.Z)(Z.OL)(t||(t=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),E=r(184),m=function(n){var e=n.to;return(0,E.jsx)(C,{to:e,children:"Go back"})},Q=r(458),w=A.Z.div(i||(i=(0,b.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),I=A.Z.img(s||(s=(0,b.Z)(["\n  display: block;\n  width: 500px;\n"]))),P=A.Z.div(a||(a=(0,b.Z)(["\n  flex-grow: 1;\n"]))),G=A.Z.span(l||(l=(0,b.Z)(["\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),L=A.Z.h3(o||(o=(0,b.Z)(["\n  margin-bottom: 16px;\n"]))),Y=A.Z.ul(d||(d=(0,b.Z)(["\n  padding-left: 16px;\n  border: 1px solid grey;\n  border-radius: 6px;\n  margin-top: 16px;\n"]))),k=A.Z.li(c||(c=(0,b.Z)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n"]))),V=(0,A.Z)(Z.OL)(p||(p=(0,b.Z)(["\n  color: black;\n  text-decoration: none;\n\n  :hover {\n    color: #f55138;\n  }\n"]))),X=function(){var n,e,r=(0,v.TH)(),t=(0,v.UO)().movieId,i=(0,f.useState)(),s=(0,u.Z)(i,2),a=s[0],l=s[1],o=null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,f.useEffect)((function(){function n(){return(n=(0,h.Z)(g().mark((function n(){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.Pg)(t);case 3:e=n.sent,l(e),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,E.jsxs)("main",{children:[(0,E.jsx)(m,{to:o}),a&&(0,E.jsxs)(w,{children:[(0,E.jsx)(I,{src:a.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(a.backdrop_path):Q,alt:a.title}),(0,E.jsxs)(P,{children:[(0,E.jsx)("h2",{children:a.title}),(0,E.jsxs)("p",{children:["User score: ",10*Math.round(a.vote_average),"%"]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("h3",{children:"Overview"}),(0,E.jsx)("p",{children:a.overview})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(L,{children:"Genres"}),a.genres.map((function(n){var e=n.id,r=n.name;return(0,E.jsx)(G,{children:r},e)}))]})]})]}),(0,E.jsxs)(Y,{children:[(0,E.jsx)(k,{children:(0,E.jsx)(V,{to:"cast",state:{from:o},children:"Cast"})}),(0,E.jsx)(k,{children:(0,E.jsx)(V,{to:"reviews",state:{from:o},children:"Reviews"})})]}),(0,E.jsx)(f.Suspense,{fallback:(0,E.jsx)("div",{children:"Loading subpage..."}),children:(0,E.jsx)(v.j3,{})})]})}},458:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADLCAMAAACbI8UEAAAAOVBMVEXV1dX///+1tbXW1tbS0tL7+/uysrLw8PDMzMzg4OC/v7/o6Ojj4+Pb29vn5+f09PTIyMi5ubnCwsLTzX6rAAAEuklEQVR4nO2bjbLqKgyF2wIiFlr1/R/2ZiVQq1vPnzrOteub2WMLNGQlAXrcZ3cdIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEL+HPeYT7v2Zs6HR+y/Wro77x4x7PynvXsn7rA77O8z7Paf9u6diPL9g1WOnk+790bu6HP+fDi6ez1fxR19fhiG3WGDOXfnAdL9BpUfVPl+Q8rrm4s77iB9Q+vcHQ/eWdOwG/bbWedI9alK9/tuO3u726PET9rk3LrnW2n6cJSZdFT9uudbafpOpnw4+POupn4Tyu0ku3DayjqXf7BdKx8OG1F+vBW+lbdXf6sbnLeg/J7wYXf8euV3dQ/13f3T7r2RXykfqPwr2XC17x9+97o7fdq59/KLtH5zxgkhhBBCCCGEEEL+Fu/XH8unXPjVmGXUctn5H0/WFt/ork2tjNzMdHV748T1Q4v1f1S7osSYxNwYo35dNMVYrCPG2KbPcwjzKP0pKllb64BiT/gSZxvUxUb7AspGuvpAnUtuR18NZDWdVj5N2pXVzHTlTrX9vPLc9+KA7/seenywT23vLQalN2bfjXalHuORKBep7zV0dZS43DeqchmhQ4JZdGrKR2lt3aOazi3SrWsxWvRhK41gTa9RLh+mTFWarrkK06Z5HGdMP8mlYDnvTZAqVx/jFLVJRvQ60F2EwPhktrNphILprnINXa7Ko8wsjlwphw+vUl4sjCYAM0higgYWIRixsJAu8T0vC6+GXpU7JEYSKTcBKxF+LmtRTTmz6dWglUrA7R3lGV0IFdxJ3iNua+XhNevclCdLoJZSqHNO6kupDZgMOZ9KKU05wu8LvJtqwCCrFvYyA+zoJEh+QSCi6g+jVf+tcumao4bKlKP/qtqDuPCC77DNKZSxOFT6YBnpEHSt0ayOpjnGuUDgsn6lG4WYVXmsfuNiulYOjYhS05hVr+Q/lmWjuFIuzZO1QXkQU7H7sc7j80lX5eJwEFUyU5xVWEJZz6hgU65bzaK8a8pR5OmHcn+lvEBEbKUQNBAa6lJH3SiHXIeRlx1u/rnDvUi5R4GJhyX0SStSPS3YX7xVexrnqjy3/93oawIDlI8Pq91M2WrAsGLZxD5fLF63Oddyntu+mbuiK3td7a/50xA71YI4Jj/ir3nQzqVgPsoin5ry1Q6nIUPaNT5oc7YW1jlfn3EFi6peLEflRbkaTqsu2+GiFcE7djgcwWM9fPTeqhp1ldGAbS1W5XGaprQot8MpaWZDKilY40p5XpRP9axsh7lNUPyifEw5F4ulhUr32ZL7qly6s16IC9PzWVelDqszqVDddpAYIel50l4nLus81jeZuj+hvrvm8Kx9i/Jmqh4RuZ7UKBEpWV0ki3I1LV0zuiJa29R2npsP7eJp5Un2Nj2ZJH0huM7Ji6r82A4iG6uTQ3rGbHh/mYIyqqZeP/0YVLmfbJCVpLzumnmYsw0gqLMh2CYf9H3J4TbZ6VJN5z6ojYIHrRFGYRGUevEC5X+Cx6+Af7uyMOotf5/0//yjJ/7WnBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQshz/Ae0sy6cRcRStQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=916.ac8d3b58.chunk.js.map