import React,{useState} from 'react';
import {View ,TextInput ,Button,Text} from 'react-native';

const BlogPostForm =({onsubmit , initalValues})=>{
    const [title , setTitle] = useState(initalValues.title);
    const [content , setContent] = useState(initalValues.content);

    

    return(
        <View>
            <Text>
                Enter title: 
            </Text>
            <TextInput value={title} style={{fontSize:18, borderWidth:1 , borderColor:'black'}} onChange={(text)=>setTitle(text)} />
            <Text>
                Enter Contente :
            </Text>
            <TextInput value={content} style={{fontSize:18, borderWidth:1 , borderColor:'black'}} onChange={(con)=>setContent(con)} />
            <Button title="save " onPress={()=>onsubmit(title,content)}  />
        </View>
    );
};

BlogPostForm.defaultProps={
    initalValues:{
        title:'',
        content:'',
    }
};


export default BlogPostForm;