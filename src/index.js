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
import React, {Component} from 'react'; // without this the browser on index.html will say error: React is not defined
import ReactDOM from 'react-dom' // without this we get warning: reactDom required
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar' // used relative path; omit .js as long as it is .js file
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDA7unbgIu_GEI6RHL9Q08c2RWItAj5PLg';


// const App = function() {
// 	//return <div>Hi</div>;
// 	return (
// 		<div>
// 		  <SearchBar /> 
// 		</div> // removed an extra ) which is throwing an error saying that ./src/index.js module could not be found
// 	);
// }

//Change const App to a class
// each class needs a render method
class App extends Component {
	constructor(props){ // pay attention: don't want misspellings
		super(props);
		this.state = {videos: [],
				selectedVideo: null
			};
		// YTSearch({key: API_KEY, term: 'surfboards'}, data =>{ // the importance of using data instead of function (data)
		// 	this.setState({ videos: data });
		// });
		// when search is complete the state is reset.
		// does same thing as above with ES6
		YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
			this.setState({videos: videos,
							selectedVideo: videos[0]}); // or do this.setState({videos:videos}); the second 'videos' omittable b/c of ES6 and name identity
		})
	}

	// pass data from App's videos to VideoList: this is called a prop.
	// note the necessity of {} without which error is thrown saying that ./src/index.js module could not be found
	render() {
		// this.props; // 'this' is necessary if we wanted to access props from within a class component.
		// note the render runs regardless of whether the YTSearch has completed. so it may start with undefined. 
		// so video_detail needs to check if YTSearch has generated results
		return (
			<div>
			  <SearchBar />
			  <VideoDetail video = {this.state.selectedVideo}/>
			  <VideoList videos = {this.state.videos} /> 
			</div>
			);
	}
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

