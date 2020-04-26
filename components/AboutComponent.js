import React, { Component } from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

const Mission = (props) => {
  return (
    <Card title='Our Mission'>
      <Text>{props.mission}</Text>
    </Card>
  );
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: PARTNERS,
      mission:
        'We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.',
    };
  }

  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
          leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
        />
      );
    };

    return (
      <ScrollView>
        <Mission mission={this.state.mission} />
        <Card title='Community Partners'>
          <FlatList
            data={this.state.partners}
            renderItem={renderPartner}
            keyExtractor={(item) => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default About;
