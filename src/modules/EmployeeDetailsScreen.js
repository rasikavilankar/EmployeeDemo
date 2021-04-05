import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class EmployeeDetailsScreen extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name={"account-circle"}
            color={'black'}
            size={50}
            style={styles.picture}
          />
          <Text style={styles.bigText}>
            {'employee.firstName'} {'employee.lastName'}
          </Text>
          <Text style={[styles.mediumText, styles.lightText]}>
            {'employee.title'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FAFAFF',
    paddingBottom: 4,
    borderBottomColor: '#F2F2F7',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  manager: {
    paddingBottom: 10,
    alignItems: 'center',
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  smallPicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  mediumText: {
    fontSize: 16,
  },
  bigText: {
    fontSize: 20,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#AAAAAA',
  },
  list: {
    flex: 1,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightText: {
    color: '#C7C7CC',
  },
});

export default EmployeeDetailsScreen;
