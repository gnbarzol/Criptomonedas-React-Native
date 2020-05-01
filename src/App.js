import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <View>
        <Header />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    margin: 50,
  },
});

export default App;
