import React from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';

function PlayerPlayPause(props) {
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
      {props.paused ? (
        <Image
          source={require('../../../assets/play.png')}
          style={styles.button}
        />
      ) : (
        <Image
          style={styles.button}
          source={require('../../../assets/pause.png')}
        />
      )}
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

export default PlayerPlayPause;
