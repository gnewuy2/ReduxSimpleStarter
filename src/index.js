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

// ES6: access to modules separately. 
// Even though we've installed React in the package dependencies
// we have to explicitly say we want React from 'react' library
// to render them into DOM requires different library reactDom
import React from 'react'; // without this the browser on index.html will say error: React is not defined
import ReactDOM from 'react-dom' // without this we get warning: reactDom required

const App = function() {
	return <div>Hi</div>;
}

// React.render(App);
// Take this component's generated HTML and put it on the page
// (in the DOM)

// ReactDom.render(App) 
// ReactDom.render(): invalid component element. Instead of
// passing a component class, make sure to instantiate it before passing it to React.createElement
// by using <App></App> we are making an instance of the App.

ReactDOM.render(<App />, document.querySelector('.container'));
// without the document querySelector we cannot properly display the App in the DOM
// Now we can finally display what the app does on index.html between the container class tags.