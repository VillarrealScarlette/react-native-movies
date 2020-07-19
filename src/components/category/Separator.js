import React from 'react';
import {View, StyleSheet} from 'react-native';

function CategorySeparator(props) {
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
    flex: 1,
    marginHorizontal: 5,
  },
});

export default CategorySeparator;
