import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

class ReportsScreen extends Component {
  constructor(props, context) {
    super(props);
  }
  render() {
    const data = [50, 10, 40, 95, -53, 24, 50, -20, -80];

    const randomColor = () =>
      ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
        0,
        7,
      );

    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }));

    return (
      <View style={styles.container}>
        <PieChart style={{height: 200}} data={pieData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default ReportsScreen;
