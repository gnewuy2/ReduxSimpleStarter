// import React from 'react';
// refactor above:

import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />;
// }

// Refactor above

class SearchBar extends Component { // has all functionalities of the React.Component class
	// each class must have a render() method
	render() {
		// must return some jsx
		return <input onChange = {this.onInputChange} />;
		// reference to the event handler by this. whenever Change event happens
		// so whenever input is changed, the handler executes.
	}

	// event handler

	onInputChange(newInput) {
		console.log(newInput.target.value);
	}
}

export default SearchBar;
//any file that imports item from search_bar.js will get our SearchBar component. 


