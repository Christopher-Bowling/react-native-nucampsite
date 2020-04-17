import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: 'Directory',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home}
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
)

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Directory: { screen: DirectoryNavigator }
  },
  {
    drawerBackgroundColor: '#CEC8FF'
  }
)

class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
  },
});

export default Main;
