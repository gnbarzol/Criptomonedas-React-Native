import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptoMoneda] = useState('');
  const [cotizar, setCotizar] = useState(false);

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
