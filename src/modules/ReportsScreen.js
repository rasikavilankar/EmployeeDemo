import React, {Component} from 'react';
import {PieChart} from 'react-native-svg-charts';
import {Text} from 'react-native-svg';
import {BarChart, Grid} from 'react-native-svg-charts';
import {View, Text as T,ScrollView} from 'react-native';
import axios from 'axios';

class ReportsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentData: [
        {
          key: 1,
          name:'none',
          count: 100,
          svg: {
            fill: 'gray',
          },
          color: 'gray',
        },
      ],
      skillsData: [100],
      skills:[{name:'none',}]
    };
  }

  componentDidMount() {
    // this.getDepartmentStatistics();
    // this.getSkillsStatistics();
  }

  getDepartmentStatistics = () => {
    let data = {
      searchText: '',
    };
    axios
      .post('https://empdemo.free.beeceptor.com/getDepartmentStatistics', data)
      .then(response => {
        console.log(response);
        if (response && response.status == 200) {
          console.log(response.data.data);
          let res = response.data.data;
          let newData = [];
          res.map((e, i) => {
            let color = (
              '#' +
              ((Math.random() * 0xffffff) << 0).toString(16) +
              '000000'
            ).slice(0, 7);
            newData.push({
              ...e,
              key: i,
              svg: {
                fill: color,
              },
              color,
            });
          });
          this.setState({departmentData: newData});
        } else {
          alert('Something went wrong...Please try again!');
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('Something went wrong...Please try again!');
      });
  };

  getSkillsStatistics = () => {
    let data = {
      searchText: '',
    };
    axios
      .post('https://empdemo.free.beeceptor.com/getSkillsStatistics', data)
      .then(response => {
        console.log(response);
        if (response && response.status == 200) {
          console.log(response.data.data);
          let res = response.data.data;
          let newData = [];
          res.map((e, i) => {
            newData.push(e.count);
          });
          this.setState({skillsData: newData,skills: response.data.data});
        } else {
          alert('Something went wrong...Please try again!');
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('Something went wrong...Please try again!');
      });
  };
  render() {
    const Labels = ({slices, height, width}) => {
      return slices.map((slice, index) => {
        const {labelCentroid, pieCentroid, data} = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={24}
            stroke={'black'}
            strokeWidth={0.2}>
            {data.count}
          </Text>
        );
      });
    };

    const CUT_OFF = 20;
    const Labels1 = ({x, y, bandwidth, data}) =>
      data.map((value, index) => (
        <Text
          key={index}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={14}
          fill={value >= CUT_OFF ? 'white' : 'black'}
          alignmentBaseline={'middle'}
          textAnchor={'middle'}>
          {value}
        </Text>
      ));
    const data = [10, 5, 25, 15, 20];
    return (
      <ScrollView style={{paddingTop: 30,marginBottom:50, paddingHorizontal: 20}}>
        <T style={{fontSize: 20,}}>{'Number of people by department:'}</T>
        <View>
          {this.state.departmentData.map((e, i) => {
            return (
              <View key={i} style={{flexDirection: 'row',paddingVertical:10,justifyContent:'flex-start'}}>
                <View
                  style={{
                    backgroundColor: e.color,
                    width: 20,
                    height: 10,
                    marginRight: 20,
                  }}
                />
                <T>{e.name}</T>
              </View>
            );
          })}
        </View>
        <View>
          <PieChart
            style={{height: 200}}
            valueAccessor={({item}) => item.count}
            data={this.state.departmentData}
            spacing={0}
            outerRadius={'95%'}>
            <Labels />
          </PieChart>
        </View>
        <T style={{
    paddingVertical: 10,
    fontSize: 20,}}>Number of people in a given skillset:</T>
        <View>
          {this.state.skills && this.state.skills.map((e, i) => {
            return (
              <View key={i} style={{flexDirection: 'row',paddingVertical:10,justifyContent:'flex-start'}}>
                <T style={{marginRight:20}}>{i+1}</T>
                <T>{e.name}</T>
              </View>
            );
          })}
        </View>
        <View style={{flexDirection: 'row', height: 200, padding: 16}}>
          <BarChart
            style={{flex: 1}}
            data={this.state.skillsData}
            svg={{fill: 'rgba(134, 65, 244, 0.8)'}}
            contentInset={{top: 10, bottom: 10}}
            spacing={0.2}
            gridMin={0}>
            <Grid direction={Grid.Direction.HORIZONTAL} />
            <Labels1 />
          </BarChart>
        </View>
      </ScrollView>
    );
  }
}

export default ReportsScreen;
