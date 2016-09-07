import React from 'react';

// recall that props arrives at the component available for reference
// const VideoListItem = (props) =>{
// 	const video = props.video;
// 	return (
// 			<li>Video </li>
// 	)
// }

// the ({video}) is equivalent to using (props) and then defining const video = props.video.
// which is ES6 syntax: ({video}) is saying that argument has a property called video
// {} is important when referencing variables in JSX

const VideoListItem = ({video}) =>{
	console.log({video})
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
			<li className = "list-group-item">
			  <div className = "video-list media">
			    <div className = "media-left">
			      <img className = "media-object" src = {imageUrl} />
			    </div>

			    <div className = "media-body">
			      <div className = "media-heading">{video.snippet.title}</div>
			    </div>
			  </div>
			</li>
		)
}

export default VideoListItem; // without the export statement it will have trouble createElement from the main page.