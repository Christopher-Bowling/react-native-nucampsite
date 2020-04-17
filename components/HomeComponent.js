import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

const RenderItem = ({ item }) => {
  if (item) {
    return (
      <Card
        featuredTitle={item.name}
        image={require('./images/react-lake.jpg')}
      >
        <Text style={styles.cardText}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      promotions: PROMOTIONS,
      partners: PARTNERS,
    };
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView>
        <RenderItem
          item={this.state.campsites.filter((campsite) => campsite.featured)[0]}
        />
        <RenderItem
          item={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
        />
        <RenderItem
          item={this.state.partners.filter((partner) => partner.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  cardText: {
    margin: 10,
  },
});
