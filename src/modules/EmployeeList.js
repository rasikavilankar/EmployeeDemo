import React, {useState, Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import SearchBar from '../components/SearchBar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },{
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

class EmployeeList extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      selectedId: null,
      searchText:''
    };
  }
  componentDidMount() {
    // const [selectedId, setSelectedId] = useState(null);
  }

  renderItem = ({item}) => {
    const backgroundColor =
      item.id === this.state.selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === this.state.selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          this.setState({selectedId: item.id});
          this.props.navigation.navigate('Details', {
            empDetails: {empName: 'Rasika'},
          });
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          width={'90%'}
          placeholder={'Search by employee name'}
          searchText={this.state.searchText}
          setLoading={() => this.setState({loading: true})}
          searchFunction={() =>
            this.setState({pageNumber: 1, driverList: null}, () => {})
          }
          onClear={() =>
            this.setState(
              {searchText: '', pageNumber: 1, driverList: null},
              () => {},
            )
          }
          onSearch={val => this.setState({searchText: val}, () => {})}
        />
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          extraData={this.state.selectedId}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingTop:20,
  },
  item: {
    padding: 5,
    marginHorizontal:20,
    marginVertical:10
  },
  title: {
    fontSize: 18,
  },
});

export default EmployeeList;
