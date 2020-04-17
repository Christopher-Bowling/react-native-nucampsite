import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

const RenderCampsite = ({ campsite }) => {
  if (campsite) {
    return (
      <Card
        featuredTitle={campsite.name}
        image={require('./images/react-lake.jpg')}
      >
        <Text style={styles.cardText}>{campsite.description}</Text>
      </Card>
    );
  }
  return <View />;
};

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  static navigationOptions = {
    title: 'Campsite Information',
  };

  render() {
    const campsiteId = this.props.navigation.getParam('campsiteId');
    const campsite = this.state.campsites.filter(
      (campsite) => campsite.id === campsiteId
    )[0];

    return <RenderCampsite campsite={campsite} />;
  }
}

export default CampsiteInfo;

const styles = StyleSheet.create({
  cardText: {
    margin: 10,
  },
});
