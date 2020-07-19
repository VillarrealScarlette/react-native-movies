import React from 'react';
import {
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';

function PlayerFullScreen(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="blue"
      hitSlop={{
        left: 5,
        bottom: 5,
        right: 5,
        top: 5,
      }}>
      <Image
        source={require('../../../assets/fullscreen.png')}
        style={styles.button}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffffff',
    backgroundColor: 'gray',
  },
  button: {
    height: 20,
    resizeMode: 'contain',
  },
});

export default PlayerFullScreen;
