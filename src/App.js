import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptoMoneda] = useState('');
  const [cotizar, setCotizar] = useState(false);

  useEffect(() => {
    if (cotizar) {
      const cotizarEnAPI = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const response = await axios.get(url);
        console.log(response.data.DISPLAY);
        setCotizar(false);
      };
      cotizarEnAPI();
    }
  }, [cotizar]);

  return (
    <>
      <View>
        <Header />
        <Image
          style={styles.logo}
          source={require('../assets/img/cryptomonedas.png')}
        />
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            setMoneda={setMoneda}
            criptomoneda={criptomoneda}
            setCriptoMoneda={setCriptoMoneda}
            setCotizar={setCotizar}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    marginHorizontal: '2.5%',
    height: '20%',
    opacity: 0.9,
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
