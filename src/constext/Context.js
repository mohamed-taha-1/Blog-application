// import React,{useReducer} from 'react';

import createDataContext from './createDataContext';


import jsonServer from '../api/jsonServer';



const blogReducer=(state, action)=>{
     switch(action.type){
         case 'get_blogPosts':
             return action.payload;

         case 'edit_blogPost':
             return(state.map((post)=>{
                 return post.id === action.payload.id   ? action.payload : post ;
             }));

         case 'delete_blogPost':
             return state.filter((post)=>post.id !== action.payload)
         
         case 'Add_blogPost':
             return [...state,
                {id:Math.floor(Math.random()*9999),
                 title:action.payload.title,
                 content:action.payload.content
                }];
       
                default:
            return state;
     }
     
};



const getBlogPost=(dispatch)=>{
    return async ()=>{
       const response=  await jsonServer.get('/blogposts');
    //     response.data ====[{},{},{}]
    dispatch({type:'get_blogPosts',payload:response.data});
    };
};


const addBlogPost=(dispatch)=>{
    return (title , content , callback)=>{
        dispatch({type:'Add_blogPost' , payload:{title:title, content:content}});
        if(callback){
            callback();
        }
    };
   
};


const deleteBlogPost=(dispatch)=>{
    return(id)=>{
        dispatch({type:'delete_blogPost', payload:id});
    }

};

const editBlogPost=(dispatch)=>{

    return(title, content,id ,callback)=>{
        dispatch({
            type:'edit_blogPost',
            payload:{title:title, content:content, id:id},
            
        });
        if(callback){
        callback();
        }
    }
};


export const {Context , Provider} = createDataContext(blogReducer,
     {addBlogPost,editBlogPost, deleteBlogPost, getBlogPost},
    []);
