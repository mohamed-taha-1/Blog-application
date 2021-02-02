import React,{useContext   } from 'react';
import {StyleSheet }  from 'react-native';
import {Context} from '../constext/Context';
import BlogPostForm from '../components/blogPostForm';
const CreateScreen=({navigation})=>{
    const {addBlogPost}=useContext(Context);
    return(
        <BlogPostForm onsubmit={(title,content)=>{
            addBlogPost(title, content, ()=>navigation.navigate('Index'))
        }}/>
    );
    
};

const styles=StyleSheet.create({});

export default CreateScreen;