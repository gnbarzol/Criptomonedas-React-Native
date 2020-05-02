import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const Cotizacion = ({data}) => {
  if (Object.keys(data).length === 0) return null;
  return (
    <View style={styles.resultado}>
      <Text style={[styles.texto,{fontSize: 29}]}>
        <Text style={styles.spam}>{data.PRICE}</Text>
      </Text>
      <Text style={styles.texto}>
        Precio más alto hoy: <Text style={styles.spam}>{data.HIGHDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        Precio más bajo hoy: <Text style={styles.spam}>{data.LOWDAY}</Text>
      </Text>
      <Text style={styles.texto}>
        Variación últimas 24 horas: <Text style={styles.spam}>{data.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.texto}>
        Última actualización: <Text style={styles.spam}>{data.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#ddd',
    padding: 20,
  },
  texto: {
    fontSize: 17,
  },
  spam: {
    fontWeight: 'bold',
  },
});

export default Cotizacion;
