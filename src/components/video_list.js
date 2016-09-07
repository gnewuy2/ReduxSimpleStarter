import React from 'react';

const VideoList = (props) =>{
	// note we've already included bootstrap in index.html file
	return (
	  <ul className = "col-md-4 list-group">
	  {props.videos.length}
	  </ul>
	);
}

export default VideoList;