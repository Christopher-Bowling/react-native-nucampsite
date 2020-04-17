import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

const CampsiteInfo = (props) => {
  return <RenderCampsite campsite={props.campsite} />;
};

export default CampsiteInfo;

const styles = StyleSheet.create({
  cardText: {
    margin: 10,
  },
});
