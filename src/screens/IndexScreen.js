import React,{useContext, useEffect} from 'react';

import {View ,Text,StyleSheet,FlatList , Button, TouchableOpacity} from 'react-native';
import { Context } from '../constext/Context';
import {Feather} from '@expo/vector-icons';




const IndexScreen=({navigation})=>{

    const {state , deleteBlogPost , getBlogPost}=useContext(Context);
    
    // useEffect(()=>{
    //     getBlogPost();
    // },[]);


    return(
        <View>
            <Text>
              created posts 
            </Text>
          
            <FlatList 
            data={state}
            keyExtractor={(post)=>post.title}
            renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                          <View style={styles.row}>
                                <Text style={{fontSize:18}}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity  onPress={()=>deleteBlogPost(item.id)}>
                                    <Feather name='trash' style={{fontSize:24}}/>
                                </TouchableOpacity>
                          
                          </View>
                        </TouchableOpacity>
                  
                    );
            }}
            
            
            />
            
        </View>
    );
};



IndexScreen.navigationOptions=({navigation})=>{
    return{
        headerRight:<TouchableOpacity onPress={()=>navigation.navigate('Create')}>
            
            <Feather  name='plus' size={30}/>
            </TouchableOpacity>
    };
}



const styles= StyleSheet.create({

    row:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray',

    }

});
export default IndexScreen;