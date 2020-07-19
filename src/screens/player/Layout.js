import React from 'react';
import {View, StyleSheet} from 'react-native';

function ScreensPlayerLayout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{props.video}</View>
      <View style={styles.overlay}>{props.loading && props.loader}</View>
      {props.controls}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#000000',
  },
  overlay: {
     position: 'absolute',
     top: 0,
     left: 0,
     bottom: 0,
     right: 0,
     alignItems: 'center',
     justifyContent: 'center',
  }
});

export default ScreensPlayerLayout;
