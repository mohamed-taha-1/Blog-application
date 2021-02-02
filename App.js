import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/constext/Context'; 
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/createScreen';
import EditScreen from './src/screens/editScreen';

const navigator =createStackNavigator({
  Index:IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit:EditScreen
},
{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Blog'
  }
});

const App= createAppContainer(navigator);
export default ()=>{
  return (
  <Provider>
      <App />
  </Provider> 
  
  ) ;
};