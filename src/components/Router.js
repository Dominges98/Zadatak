import React, { Component } from 'react';
 
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Header, Navigation} from './Layout/Layout';
import Posts from './Posts';
import SinglePost from './SinglePost';
import ApolloClient, { gql } from 'apollo-boost';
class Router extends Component {
    state = {  
        posts: []
    }
 
    componentDidMount() {
        this.getPost();
    }
 
    getPost = () => {
        const client = new ApolloClient({
        uri: 'https://graphqlzero.almansi.me/api'
        });
        client.query({ query: gql`
        query (
            $options: PageQueryOptions
        ) {
            posts(options: $options) {
                data {
                    id
                    title
                    body
                }
                meta {
                    totalCount
                }
            }
        }
        `}).then( res => {
            this.setState({
                posts: res.data.posts.data
            }) 
        })
    }
 
    render() { 
        return (  
            <BrowserRouter>
 
                <div className="container">
                    <Header />
                    <div className="row justify-content-center">
 
                        <Navigation />
 
                        <Switch>
                            <Route exact path="/" render={ () => {
                                return(
                                    <Posts 
                                        posts={this.state.posts}
                                        deletePost={this.deletePost}
                                    />
                                );
                            }} />
 
                            <Route exact path="/posts/:postId" render={ (props) => {
                                let idPost = props.location.pathname.replace('/posts/', '')
 
                                const posts=this.state.posts;
                        
                                return(
                                    <SinglePost 
                                        posts={posts[idPost-1]} 
                                    />
                                )
                            }} />                 
                        </Switch>
                    </div>
                </div>            
            </BrowserRouter>
        );
    }
} 
export default Router;