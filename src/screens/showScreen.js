import React,{useContext} from 'react';
import {View ,Text ,StyleSheet ,TouchableOpacity}  from 'react-native';
import {Context} from '../constext/Context';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen=({navigation})=>{


    //
    const {state} =useContext(Context);

    const posts=state.find((post)=>post.id=== navigation.getParam('id'));

    return(
        <View>
            <Text>
                {posts.title}
            </Text>
            <Text>
                {posts.content}
            </Text>
        </View>
    );
};


ShowScreen.navigationOptions=({navigation})=>{
    return{
        headerRight:<TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
            
            <EvilIcons  name='pencil' size={30}/>
            </TouchableOpacity>
    };
}


const styles=StyleSheet.create({});

export default ShowScreen;