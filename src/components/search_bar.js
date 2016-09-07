import React from 'react';

// const SearchBar = () => {
// 	return <input />;
// }

// Refactor above

class SearchBar extends React.Component { // has all functionalities of the React.Component class
	// each class must have a render() method
	render() {
		// must return some jsx
		return <input />;
	}
}

export default SearchBar;
//any file that imports item from search_bar.js will get our SearchBar component. 


