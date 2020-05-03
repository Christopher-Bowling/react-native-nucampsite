import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Contact Us',
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
          <Card wrapperStyle={styles.card} title='Contact Information'>
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 98001</Text>
            <Text style={styles.mb}>U.S.A</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;

const styles = StyleSheet.create({
  card: {
    margin: 20,
  },
  mb: {
    marginBottom: 10,
  },
});
