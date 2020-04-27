import React, { Component } from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

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
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    if (this.props.partners.isLoading) {
      return (
        <ScrollView>
          <Mission mission={this.state.mission} />
          <Card title='Community Partners'>
            <Loading />
          </Card>
        </ScrollView>
      );
    }
    if (this.props.partners.errMess) {
      return (
        <ScrollView>
          <Mission mission={this.state.mission} />
          <Card title='Community Partners'>
            <Text>{this.props.partners.errMess}</Text>
          </Card>
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        <Mission mission={this.state.mission} />
        <Card title='Community Partners'>
          <FlatList
            data={this.props.partners.partners}
            renderItem={renderPartner}
            keyExtractor={(item) => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(About);
