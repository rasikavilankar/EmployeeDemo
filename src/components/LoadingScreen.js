import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.loading,
    };
  }

  static defaultProps = {
    indicatorColor: 'white',
    color: 'blue',
    size: 100,
  };

  render() {
    let isMessagePresent =
    this.props.message && this.props.message.length != ' ';
    return (
      <Modal
        visible={this.props.loading}
        transparent={true}
        onRequestClose={this.props.onDismiss}>
        <View style={styles.modalView}>
          <View
            style={{
              ...styles.indicatorBox,
              backgroundColor: 'white',
              height: this.props.size,
              width: this.props.size,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="cover"
              source={require('../assets/NewDesigns/loader-gif.gif')}
              style={{width: '90%', height: '90%', alignSelf: 'center'}}
            />
            {isMessagePresent ? (
              <Text
                numberOfLines={2}
                style={{
                  color: 'white',
                  fontSize: 14,
                  height: '25%',
                  width: '90%',
                  textAlign: 'center',
                }}>
                {this.props.message}
              </Text>
            ) : null}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparant',
  },
  indicatorBox: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default Loader;
