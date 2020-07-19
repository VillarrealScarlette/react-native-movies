import React from 'react';
import {View, StyleSheet} from 'react-native';

function SuggestionSeparator(props) {
  return (
    <View
      style={[
        styles.container,
        {borderTopColor: props.borderColor ? props.borderColor : '#eaeaea'},
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
  },
});

export default SuggestionSeparator;
