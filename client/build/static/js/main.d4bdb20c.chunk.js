(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,a,t){},27:function(e,a,t){e.exports=t(59)},32:function(e,a,t){},38:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(25),s=t.n(l),r=t(10),c=t(1);t(32);var i=function(){const e=["\u2032Classic\u2032 \u2013 a book which people praise and don\u2019t read. ~ Mark Twain","so many books, so little time. ~ Frank Zappa","there is no friend as loyal as a book. ~ Ernest Hemingway","that's the thing about books. They let you travel without moving your feet. ~Jhumpa Lahiri","if you have a garden and a library, you have everything you need. ~ Cicero","One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time. ~ Carl Sagan","but for my own part, if a book is well written, I always find it too short. ~ Jane Austen","knowing someone who belongs to another species can enlarge your soul in surprising ways. ~ Sy Montgomery","Fill your house with stacks of books, in all the crannies and all the nooks. ~ Dr Seuss"];let a=e[Math.floor(Math.random()*e.length)];return o.a.createElement("nav",{className:"navbar",role:"navigation",aria:!0,label:"main navigation"},o.a.createElement("div",{className:"booksoulhug"},o.a.createElement("p",{className:"booksoul"}," ",a," ")," ")," ",o.a.createElement("div",{className:"links"},o.a.createElement("h6",null," ",o.a.createElement(r.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search for a Book ")),o.a.createElement("h6",null," ",o.a.createElement(r.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Your Saved Books "))," ")," ")};t(38);var m=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))},h=t(8),u=t.n(h),d=e=>u.a.get("https://www.googleapis.com/books/v1/volumes?q="+e),v=()=>u.a.get("/api/books"),p=e=>u.a.post("/api/books",e),k=e=>u.a.delete("/api/books/"+e);t(56);var E=function(e){return o.a.createElement("div",null,o.a.createElement("form",{className:"form"},o.a.createElement("div",null,o.a.createElement("input",{onChange:e.handleChange,value:e.search,name:"search",type:"text",className:"input",placeholder:"search for a book, author...",id:"search"}),o.a.createElement("button",{onClick:e.handleSearch,className:"search-button"},"Search"))))};t(57);var b=e=>o.a.createElement("div",null,e.books.map(a=>o.a.createElement("div",{key:a.id},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-image"},o.a.createElement("img",{src:a.image,alt:a.title})),o.a.createElement("p",null,a.title),o.a.createElement("p",null,"by: ",a.authors),o.a.createElement("div",{className:"content"},a.description),o.a.createElement("div",null,o.a.createElement("button",{type:"button",className:"resultsbutton",id:a.id,onClick:a=>e.saveBooks(a)},"Save"),o.a.createElement("a",{href:a.link,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("button",{type:"button",className:"resultsbutton"},"More info")),o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank"},o.a.createElement("button",{type:"button",className:"resultsbutton"},"I've read this book!")))))));t(24);class g extends n.Component{constructor(...e){super(...e),this.state={query:"",books:[]},this.handleChange=e=>{const a=e.target.value;this.setState({query:a})},this.saveBooks=e=>{e.preventDefault();let a=this.state.books.filter(a=>a.id===e.target.id);a=a[0],p(a).then(alert("Your book has been saved!")).catch(e=>console.log(e))},this.readBooks=e=>{e.preventDefault();let a=this.state.books.filter(a=>a.id===e.target.id);a=a[0],p(a).then(alert("You've read this book! It has been saved to the search page. You can delete it at any time")).catch(e=>console.log(e))},this.handleSearch=e=>{e.preventDefault(),d(this.state.query).then(e=>{let a=e.data.items;a=a.map(e=>e={id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,link:e.volumeInfo.infoLink,image:e.volumeInfo.imageLinks.thumbnail}),this.setState({books:a})}).catch(e=>console.log(e))}}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{handleChange:this.handleChange,handleSearch:this.handleSearch}),this.state.books.length?o.a.createElement("div",null,o.a.createElement("h3",{className:"searchsave"},"Your Search Results"),o.a.createElement(b,{books:this.state.books,saveBooks:this.saveBooks})):o.a.createElement("h3",{className:"searchsave"},"no books have been searched yet!"))}}var f=g;t(58);var y=e=>o.a.createElement("div",null,e.data.map(a=>o.a.createElement("div",{key:a._id},o.a.createElement("div",null,o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-image"},o.a.createElement("img",{src:a.image,alt:a.title})),o.a.createElement("p",null,a.title),o.a.createElement("p",null,"by: ",a.authors),o.a.createElement("div",{className:"description"},a.description),o.a.createElement("div",null,o.a.createElement("button",{type:"button",className:"buttons",id:a.id,onClick:()=>e.deleteBook(a._id)}," Delete")),o.a.createElement("div",null,o.a.createElement("a",{href:a.link,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("button",{type:"button",className:"buttons"},"Google Book"))))))));class N extends n.Component{constructor(...e){super(...e),this.state={data:[]},this.loadBooks=()=>{v().then(e=>this.setState({data:e.data})).catch(e=>console.log(e))},this.deleteBook=e=>{k(e).then(e=>this.loadBooks({data:e.data})).catch(e=>console.log(e))}}componentDidMount(){this.loadBooks()}render(){return o.a.createElement(m,null,this.state.data.length?o.a.createElement("div",null,o.a.createElement("h1",{className:"searchsave"}," Saved Books ")," ",o.a.createElement(y,{data:this.state.data,deleteBook:this.deleteBook})," "):o.a.createElement("h2",{className:"searchsave"}," No Saved Books Yet! ")," ")}}var w=N;var B=function(){return o.a.createElement(r.a,null,o.a.createElement("div",null,o.a.createElement(i,null),o.a.createElement(m,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:f}),o.a.createElement(c.a,{exact:!0,path:"/saved",component:w}),o.a.createElement(c.a,{exact:!0,path:"/saved:id",component:w}),o.a.createElement(c.a,{exact:!0,path:"/search",component:f})))))};s.a.render(o.a.createElement(B,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d4bdb20c.chunk.js.map