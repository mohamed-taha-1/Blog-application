import React,{useContext} from 'react';

import {View, Text } from 'react-native';
import {Context} from '../constext/Context';
import BlogPostForm from '../components/blogPostForm';

const EditScreen=({navigation})=>{
   
    const id=navigation.getParam('id');
    const {state , editBlogPost} = useContext(Context);
    const blogpost=state.find((post)=>post.id === id);
    return(
        <View>
            <Text>
                 edit this post  - {navigation.getParam('id')} 
            </Text>
            <BlogPostForm 
            initalValues={{title:blogpost.title , content:blogpost.content}}
            onsubmit={(title , content )=>editBlogPost(title,content,id , ()=>navigation.pop())}
            /> 
        </View>
    );
};


export default EditScreen;