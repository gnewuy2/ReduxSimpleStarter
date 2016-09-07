import React from 'react';
import VideoListItem from './video_list_item';

// note that we have to make (props) on the left hand side in order to access its values
// what happens on the line of return <VideoListItem video = {video} /> depends on what is specified on video_list_item.js file.
// added key to VideoListItem by looking up Network tab for the search? file and locating each video is uniquely identified by etag
const VideoList = (props) =>{
	const videoItems = props.videos.map((video) =>{
		return <VideoListItem 
		onVideoSelect = {props.onVideoSelect}
		key = {video.etag} 
		video = {video} />
		}
	)

	// note we've already included bootstrap in index.html file
	return (
	  <ul className = "col-md-4 list-group">
	 	{videoItems}
	  </ul>
	);
};

// if modifying the VideoList from a functional component to a class component, we'll have to change it a bit:
// {this.props.videos.length} instead of just {props.videos.length}

export default VideoList;