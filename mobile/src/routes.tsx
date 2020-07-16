import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import CreateSpace from './pages/CreateSpace';

const AppStack = createStackNavigator();

const Routes = () => {
  
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            background: '#f0f0f5'
          } 
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="CreateSpace" component={CreateSpace} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
} 

export default Routes;