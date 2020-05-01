import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';

const Formulario = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptoMoneda] = useState('');
  const [dataCripto, setDataCripto] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const URL =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const respuesta = await axios.get(URL);
      setDataCripto(respuesta.data.Data);
      console.log(dataCripto);
    };
    consultarAPI();
  }, []);

  return (
    <>
      <View>
        <Text style={styles.label}>Moneda: {moneda}</Text>
        <Picker
          selectedValue={moneda}
          onValueChange={(itemValue, itemIndex) => setMoneda(itemValue)}>
          <Picker.Item label="- Seleccione -" value="" />
          <Picker.Item label="Dolar USA" value="USD" />
          <Picker.Item label="Peso Mx" value="MXN" />
          <Picker.Item label="Libra" value="GBP" />
          <Picker.Item label="Euro" value="EUR" />
        </Picker>
        <Text style={styles.label}>Criptomoneda</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    marginVertical: 20,
    fontSize: 22,
    textTransform: 'uppercase',
  },
});

export default Formulario;
