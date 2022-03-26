import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigations/NavigationsContainer';
import {
 
  StatusBar,
} from 'react-native';


import { Provider } from 'react-redux'
import { store } from './src/Store/Store';

export default function App() {
  return (
  <>
  
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />
      <Provider store={store}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </Provider>
    
      </>
  );
}
