import React from 'react';
import {Text, Platform, StyleSheet} from 'react-native';

const Header = () => <Text style={styles.encabezado}>Criptomonedas</Text>;

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black', //Para agregar esta fuente se debe de crear el archivo react-native.config.js luego reinciar el proyecto, luego 'npx react-native link' para linkear la dependencia de la fuente y por ultimo, reiniciar el simulador.
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default Header;
