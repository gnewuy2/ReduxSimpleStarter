// import React from 'react';
// refactor above:

import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />;
// }

// Refactor above

class SearchBar extends Component { // has all functionalities of the React.Component class
	// initialize the state of a class
	// constructor method is common to all js classes and is called
	// whenever a class is instantiated.
	constructor(props){
		super(props); // Component is a class that has its own constructor method
		this.state = {term: 'Starting Value'};
	}


	// each class must have a render() method
	render() {
		// must return some jsx
		// return <input onChange = {this.onInputChange} />;
		// // reference to the event handler by this. whenever Change event happens
		// // so whenever input is changed, the handler executes.

		// refactored to enclose event handler
		// return <input onChange = {(newInput) => console.log(newInput.target.value)} />

		// set the state:
		// return <input onChange = {(newInput) => this.setState({term: newInput.target.value})}/>;
		// must not have any ; inside the curly braces otherwise console will throw error saying some module not found

		// show the state alongside setting the state:
		// use () for multiline body

		// value = {this.state.term} for controlled component
		// updated each time the below handler is triggered.
		return (
			<div className = 'search-bar'>
				<input 
				value = {this.state.term} 
				// onChange = {(newInput) => this.setState({term: newInput.target.value})} />; 
				onChange = {(newInput) => this.onInputChange(newInput.target.value)} />; 
				Value of the input: {this.state.term}
			</div>

			)

	}

	onInputChange (term) {
		this.setState({term});
		this.props.onSearchTermChange(term);

	}


	// event handler

	// onInputChange(newInput) {
	// 	console.log(newInput.target.value);
	// }
}

export default SearchBar;
//any file that imports item from search_bar.js will get our SearchBar component. 


