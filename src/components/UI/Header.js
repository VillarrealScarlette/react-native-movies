import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain', //Adapta la imagen al espacio disponible
  },
  right: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'flex-end',
  },
});

export default Header;
