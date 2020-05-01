import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <View>
        <Header />
        <Image
          style={styles.logo}
          source={require('../assets/img/cryptomonedas.png')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    marginHorizontal: '2.5%',
    height: 150,
    opacity: 0.9,
  },
});

export default App;
