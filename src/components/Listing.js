import React, { Component } from 'react';
import { useState } from 'react';
import Post from './Post';
import './Post.css';
 
class Listing extends Component {
    state = { searchTerm: "" };
    
    showPosts = () => {
        const posts = this.props.posts;
        const { searchTerm } = this.state;
        if (posts.length === 0) return null;     
        return (
     
            <div className="post_list_item" style={{marginLeft: '255px' }}> 
            <br/><br/><br/>
            <div className="searchContainer">
                <input type="text" className="search" placeholder="Search..." onChange={(event) => {this.setState({ searchTerm: event.target.value }) }}/>    
                <select id="filter" className="filter">    
                    <option>Filter by author name</option>
                </select>
            </div>
            <br/>
            <React.Fragment>
                {Object.keys(posts).filter((val) => {
                    if(searchTerm == "") return val;
                    else if(val.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map(post =>(
                    <Post
                        key={post}
                        info={this.props.posts[post]}
                    />
                ) )}
            </React.Fragment></div>
        )
    }
 
    render() { 
        
        return ( 
                <div classname="post_list">
                    {this.showPosts() }
                </div>
 
 
         );
    }
}
 
export default Listing;