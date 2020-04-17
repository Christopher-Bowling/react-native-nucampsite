import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { createStackNavigator } from 'react-navigation';

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

class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <DirectoryNavigator />
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
