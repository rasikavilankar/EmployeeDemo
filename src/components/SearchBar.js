import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const isInvalid = obj => obj == undefined || obj == null;
const platform = Platform.OS;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  onClearPress = () => {
    this.props.setLoading(true);
    this.textInput.clear();
    this.props.onClear();
  };

  onSearchPress = () => {
    this.props.setLoading(true);
    this.props.searchFunction();
  };

  render() {
    let showClear = this.props.searchText
      ? this.props.searchText.length >= 1
      : false;
    // console.warn('searchtext',this.props.searchText)

    return (
      <View
        style={{
          ...styles.mainSearchView,
          width: this.props.width ? this.props.width : '90%',
          paddingVertical: 5,
        }}>
        <TextInput
          enablesReturnKeyAutomatically={true}
          ref={input => {
            this.textInput = input;
            if (this.props.textRef) {
              this.props.textRef(input);
            }
          }}
          value={this.props.value ? this.props.value : null}
          style={{...styles.textInputStyle}}
          placeholder={this.props.placeholder}
          placeholderTextColor={'#999999'}
          returnKeyLabel="Done"
          onSubmitEditing={
            !isInvalid(this.props.searchFunction) ? this.onSearchPress : null
          }
          returnKeyType={
            !isInvalid(this.props.searchFunction) ? 'search' : null
          }
          onChangeText={search => this.props.onSearch(search)}
          maxLength={this.props.maxLength}
        />
        {showClear ? (
          <MaterialCommunityIcons
            style={styles.searchIcon}
            name="close-circle"
            onPress={this.onClearPress}
          />
        ) : this.props.onSearchPress ? (
          <FontAwesome
            name="search"
            adjustsFontSizeToFit={true}
            onPress={this.onSearchPress}
            style={styles.searchIcon}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainSearchView: {
    // height:platform=='ios'?HEIGHT*0.05:null,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'gray'
  },
  searchView: {
    marginTop: 3,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  mainStyles: {
    backgroundColor: 'white',
    width: '87%',
    height: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    // elevation: 5,
    alignSelf: 'flex-start',
    marginVertical: 2,
    paddingVertical: platform == 'ios' ? 0 : 2,
    borderColor: '#e8ecf8',
    borderWidth: 1,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    padding: 5,
    // backgroundColor:'red',
    fontSize: 15,
    alignSelf: 'center',
    color: '#307fe2',
  },
  textInputStyle: {
    height: 45,
    width: '100%',
    paddingHorizontal: 15,
    color: '#333333',
    fontFamily: 'OpenSans-Bold',
    // fontSize: fontSize.medium,
    borderWidth: 1,
    borderColor: '#e8ecf8',
    borderRadius: 20,
    // backgroundColor:'red'
  },
  pickerStyle: {
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 2,
    paddingHorizontal: 5,
  },
  ddContainerStyle: {
    // flex:1,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
    // backgroundColor:'green',
  },
});
