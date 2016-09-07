// Question: How does this tie to the whole application
// e.g. index.html, app.js?

// Create a new component. This component should produce some HTML

// const is an ES6 syntax; the below <div></div> is called JSX, but 
// is actually javascript behind the scenes.

// JSX: cannot be interpreted by the browser directly.
// it actually produces actual HTML, which gets rendered on the
// page; JSX gets transpiled.

// paste below lines of code into babeljs.io/repl: we'll see 
// the interpetation on the right to a React.createElement("div", null, "Hi")
// e.g.
// const App = function() {
// 	return <ol>
// 	<li>1</li>
// 	<li>2</li>
// 	</ol>
// }


const App = function() {
	return <div>Hi</div>;
}

React.render(App);
// Take this component's generated HTML and put it on the page
// (in the DOM)