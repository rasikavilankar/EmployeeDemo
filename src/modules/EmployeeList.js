import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import axios from 'axios';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[styles.title]}>{item.name}</Text>
    <Text style={[styles.title]}>{item.department}</Text>
  </TouchableOpacity>
);

const data = [
  {
    name: 'Rasika Vilankar',
    age: '25',
    doj: '22/04/2021',
    address: 'mumbai',
    department: 'Development',
    skills: [
      {
        id: '1',
        name: 'Java',
      },
      {
        id: '2',
        name: 'Python',
      },
      {
        id: '3',
        name: 'React-Native',
      },
      {
        id: '4',
        name: 'React Js',
      },
    ],
  },
  {
    name: 'Neha',
    age: '25',
    doj: '22/04/2021',
    address: 'mumbai',
    department: 'Development',
    skills: [
      {
        id: '1',
        name: 'Java',
      },
      {
        id: '2',
        name: 'Python',
      },
      {
        id: '3',
        name: 'React-Native',
      },
      {
        id: '4',
        name: 'React Js',
      },
    ],
  },
  {
    name: 'Aman',
    age: '25',
    doj: '22/04/2021',
    address: 'mumbai',
    department: 'Development',
    skills: [
      {
        id: '1',
        name: 'Java',
      },
      {
        id: '2',
        name: 'Python',
      },
      {
        id: '3',
        name: 'React-Native',
      },
      {
        id: '4',
        name: 'React Js',
      },
    ],
  },
  {
    name: 'Priya',
    age: '25',
    doj: '22/04/2021',
    address: 'mumbai',
    department: 'Hr',
    skills: [
      {
        id: '1',
        name: 'Java',
      },
      {
        id: '2',
        name: 'Python',
      },
      {
        id: '3',
        name: 'React-Native',
      },
      {
        id: '4',
        name: 'React Js',
      },
    ],
  },
  {
    name: 'Nayan',
    age: '25',
    doj: '22/04/2021',
    address: 'mumbai',
    department: 'Account',
    skills: [
      {
        id: '1',
        name: 'Java',
      },
      {
        id: '2',
        name: 'Python',
      },
      {
        id: '3',
        name: 'React-Native',
      },
      {
        id: '4',
        name: 'React Js',
      },
    ],
  },
];
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      searchText: '',
      employeeData: data,
      refresh: false,
    };
  }
  componentDidMount() {
    // this.getEmployeeList();
  }

  getEmployeeList = () => {
    let data = {
      searchText: this.state.searchText,
    };
    axios
      .post('https://employeedemo.free.beeceptor.com/getEmp', data)
      .then(function (response) {
        if (response && response.status == 200) {
          alert(response.data);
        } else {
          alert('Something went wrong...Please try again!');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => {
          this.props.navigation.navigate('Details', {
            item: item,
          });
        }}
      />
    );
  };
  render() {
    var employee = data;
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          width={'90%'}
          placeholder={'Search by employee name'}
          searchText={this.state.searchText}
          setLoading={() => this.setState({loading: true})}
          searchFunction={() =>
            this.setState({pageNumber: 1, driverList: null}, () => {
              let employee = data.filter(e => e.name && e.name.includes(val));
              this.setState({employeeData: employee});
              console.log(employee);
            })
          }
          onClear={() =>
            this.setState(
              {searchText: '', pageNumber: 1, driverList: null},
              () => {
                this.setState({employeeData: data});
              },
            )
          }
          onSearch={val =>
            this.setState({searchText: val}, () => {
              let employee = data.filter(e => e.name && e.name.includes(val));
              this.setState({employeeData: employee});
              console.log(employee);
            })
          }
        />
        <FlatList
          data={this.state.employeeData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          refreshing={this.state.refresh}
          onEndReachedThreshold={1}
          ListEmptyComponent={() => (
            <View
              style={{
                marginTop: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                No data found
              </Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  item: {
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#dadae8',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor:'#dadae8'
  },
  title: {
    fontSize: 16,
    color: 'gray',
  },
});

export default EmployeeList;
