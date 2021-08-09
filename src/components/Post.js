import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Post.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
 
class Post extends Component {
    render() {
        const {id, title, body} = this.props.info;
 
        return ( 
            <Paper className="post">
            <p className="post_title" cols="10">
                <b><span className='post-preview'>
                    {title.length > 25 ? `${title.substr(0, 25)}...` : title}
                </span></b>
            </p>
            <Divider light />
                <p className="post_body">
                    <span className='post-preview'>
                        {body.length > 300 ? `${body.substr(0, 300)}...` : body}
                    </span>
                </p>
                <Divider light />    
                <div className="post_button">
                    <ul className="buttons">
                        <li><Link to={`/posts/${id}`} className="btn btn-primary"> Read more &#8594;</Link></li>
                    </ul>
                </div>                   
            </Paper>
         );
    }
}
export default Post;