import React, { Component } from 'react';
 
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import renderHTML from 'react-render-html';
 
class SinglePost extends Component {
 
    showPost = (props) => {
        if (!props.posts) return null;
 
        const {title, body, id} = this.props.posts;
 
        return (
            <React.Fragment>
 
                <Paper className="single_post"> 
                    <h4>Title: {title}</h4>
                    <Divider light />
                    <p><b>Body:</b> {body}</p>
                    <div style={{ width: '60%' }}>{renderHTML(body)}</div>
                </Paper>
            </React.Fragment>
        )
 
    }
    render() {
        return (
            <div className=" col-md-10">
                {this.showPost(this.props)} 
            </div>
        );
    }
}
 
 
export default SinglePost;