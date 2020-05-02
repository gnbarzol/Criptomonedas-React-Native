import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';

const Formulario = props => {
  const {moneda, setMoneda, criptomoneda, setCriptoMoneda, setCotizar} = props;
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

  const cotizarPrecio = () => {
    if (moneda === '' || criptomoneda === '') {
      mostrarAlerta();
      return;
    }
    setCotizar(true);
  };

  const mostrarAlerta = () => {
    Alert.alert('Aviso', 'Selecciona al menos una moneda y una criptomoneda', [
      {text: 'OK'},
    ]);
  };

  return (
    <>
      <View>
        <Text style={styles.label}>Moneda: {moneda}</Text>
        <Picker
          selectedValue={moneda}
          onValueChange={(itemValue, itemIndex) => setMoneda(itemValue)}
          itemStyle={{height: 110}}>
          <Picker.Item label="- Seleccione -" value="" />
          <Picker.Item label="Dolar USA" value="USD" />
          <Picker.Item label="Peso Mx" value="MXN" />
          <Picker.Item label="Libra" value="GBP" />
          <Picker.Item label="Euro" value="EUR" />
        </Picker>
        <Text style={styles.label}>Criptomoneda: {criptomoneda}</Text>
        <Picker
          selectedValue={criptomoneda}
          onValueChange={itemValue => setCriptoMoneda(itemValue)}
          itemStyle={{height: 110}}>
          <Picker.Item label="- Seleccione -" value="" />
          {dataCripto.map(data => (
            <Picker.Item
              label={data.CoinInfo.FullName}
              value={data.CoinInfo.Name}
              key={data.CoinInfo.Id}
            />
          ))}
        </Picker>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#dae1e7"
          onPress={() => cotizarPrecio()}>
          <Text style={styles.txtBtn}>Cotizar</Text>
        </TouchableHighlight>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#27496d',
    padding: 10,
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 20,
  },
  txtBtn: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Lato-Black',
  },
});

export default Formulario;
