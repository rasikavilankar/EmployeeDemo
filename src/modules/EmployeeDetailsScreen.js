import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class EmployeeDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    let item = this.props.route.params.item;
    console.log(item);
    this.setState({item});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.description}>Name: {this.state.item.name}</Text>
            <Text style={styles.description}>Age: {this.state.item.age}</Text>
            <Text style={styles.description}>
              Address: {this.state.item.address}
            </Text>
            <Text style={styles.description}>
              Department: {this.state.item.department}
            </Text>
            <Text style={styles.description}>
              Date of Joining: {this.state.item.doj}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {this.state.item.skills &&
                this.state.item.skills.map((e, i) => {
                  return (
                    <View style={{paddingRight: 10}}>
                      <TouchableOpacity key={i} style={styles.buttonContainer}>
                        <Text>{e.name}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#00BFFF',
    height: 100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 20,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 50,
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
  body: {
    marginTop: 50,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});

export default EmployeeDetailsScreen;
