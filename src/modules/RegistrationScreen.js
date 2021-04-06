import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from 'react-native-multiple-select';
import axios from 'axios';

const items = [
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
  {
    id: '5',
    name: 'Hr',
  },
  {
    id: '6',
    name: 'Account',
  },
];

class RegistrationScreen extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      name: '',
      age: '',
      doj: new Date(),
      department: '',
      address: '',
      selectedSkills: [],
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#307ecc'}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{alignItems: 'center', paddingTop: 40}}>
            <Text style={{fontSize: 24}}>Registration Form</Text>
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={txt => {
                  this.setState({name: txt});
                }}
                maxLength={50}
                underlineColorAndroid="#f000"
                placeholder="Enter Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={txt => this.setState({age: txt})}
                underlineColorAndroid="#f000"
                placeholder="Enter Age"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
                maxLength={3}
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <DatePicker
                style={{width: '100%'}}
                date={this.state.doj}
                mode="date"
                placeholder="select date of joining"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    right: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: styles.inputStyle,
                }}
                onDateChange={date => {
                  this.setState({doj: date});
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <View
                style={{
                  flex: 1,
                  color: 'white',
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderWidth: 1,
                  borderRadius: 30,
                  borderColor: '#dadae8',
                  justifyContent: 'center',
                }}>
                <Picker
                  selectedValue={this.state.department}
                  style={{...styles.inputStyle, color: '#dadae8'}}
                  mode="dropdown"
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({department: itemValue});
                  }}>
                  <Picker.Item label="Select Department" value="" />
                  <Picker.Item label="HR" value="HR" />
                  <Picker.Item label="Developmet" value="Developmet" />
                  <Picker.Item label="Management" value="Management" />
                  <Picker.Item label="Account" value="Account" />
                  <Picker.Item label="Testing" value="Testing" />
                </Picker>
              </View>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                multiline={true}
                numberOfLines={4}
                maxLength={100}
                onChangeText={txt => this.setState({address: txt})}
                underlineColorAndroid="#f000"
                placeholder="Enter Address"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
            </View>
            <View style={{flex: 1, paddingHorizontal: 30, marginTop: 20}}>
              <MultiSelect
                items={items}
                uniqueKey="id"
                styleDropdownMenu={styles.inputStyle}
                styleInputGroup={{
                  backgroundColor: 'transparant',
                  ...styles.inputStyle,
                }}
                styleDropdownMenuSubsection={{backgroundColor: 'transparant'}}
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={this.state.selectedSkills}
                selectText="Select your skill set"
                searchInputPlaceholderText="Search Skills"
                onChangeInput={text => console.log(text)}
                altFontFamily="ProximaNova-Light"
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{color: '#CCC'}}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
              />
            </View>
            <View style={{paddingTop: 40}}>
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{...styles.buttonStyle, width: '38%'}}
                  activeOpacity={0.5}
                  onPress={() => {
                    this.setState({
                      name: '',
                      age: '',
                      doj: new Date(),
                      department: [],
                      address: '',
                      selectedSkills: [],
                    });
                  }}>
                  <Text style={styles.buttonTextStyle}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.buttonStyle, width: '38%', marginLeft: 0}}
                  activeOpacity={0.5}
                  onPress={this.handleSubmitButton}>
                  <Text style={styles.buttonTextStyle}>REGISTER</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                  this.props.navigation.navigate('HomeScreen');
                }}>
                <Text style={styles.buttonTextStyle}>Go Home</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }

  onSelectedItemsChange = selectedSkills => {
    console.log('selectedSkills', selectedSkills);

    this.setState({selectedSkills});
  };

  handleSubmitButton = () => {
    if (
      !this.state.name ||
      !this.state.age ||
      !this.state.address ||
      !this.state.doj ||
      !this.state.department ||
      this.state.selectedSkills.length == 0
    ) {
      alert('Please fill all the details');
      return;
    }
    let selectedData = [];
    this.state.selectedSkills.map(obj => {
      console.log(obj,items.filter(e => e.id == obj));
      let item =items.filter(e => e.id == obj)
      selectedData.push(item[0]);
    });
    console.log('dta', selectedData);
    var data = {
      name: this.state.name,
      age: this.state.age,
      department: this.state.department,
      address: this.state.address,
      doj: this.state.doj,
      skills: selectedData,
    };
    axios
      .post('https://employeedemo.free.beeceptor.com/addEmployee', data)
      .then(function (response) {
        console.log(response);
        if (response && response.status == 200) {
          alert(response.data.msg);
        } else {
          alert('Something went wrong...Please try again!');
        }
        this.setState({
          name: '',
          age: '',
          doj: new Date(),
          department: [],
          address: '',
          selectedSkills: [],
        });
      })
      .catch(function (error) {
        console.log(error);
        alert('Something went wrong...Please try again!');
      });
  };
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});

export default RegistrationScreen;
