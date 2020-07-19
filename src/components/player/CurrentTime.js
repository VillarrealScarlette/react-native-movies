import React from 'react';
import {Text, StyleSheet} from 'react-native';

function PlayerCurrentTime(props) {
  return <Text style={styles.text}>{props.time}</Text>;
}

const styles = StyleSheet.create({
  text: {
     fontSize: 10,
     color: '#ffffff'
  },
});

export default PlayerCurrentTime;
