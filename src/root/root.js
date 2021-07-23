import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'

const RootNavigator = createAppContainer(createStackNavigator(
  {
    Home: {screen: Home, 
      navigationOptions: {
        header: null
      }
    },
    Dashboard: {
      screen: Dashboard, navigationOptions: {
        header: null
      }
    }
  },

  {
    initialRouteName: 'Home',
  }
))

class root extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <StatusBar hidden={false} />
        <RootNavigator />
      </SafeAreaProvider>
    )
  }
}

export default root