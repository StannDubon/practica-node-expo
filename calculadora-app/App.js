import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [Textito1, setTextito1] = useState('');
  const [Textito2, setTextito2] = useState('');
  const [Resultado, setResultado] = useState('');
  const [TipoFun, setTipoFun] = useState('');


  const sumar = () => {
    let val = parseFloat(Textito1) + parseFloat(Textito2);
    setResultado(val)
    setTipoFun('+')
  }

  const restar = () => {
    let val = parseFloat(Textito1) - parseFloat(Textito2);
    setResultado(val)
    setTipoFun('-')
  }

  const multiplicar = () => {
    let val = parseFloat(Textito1) * parseFloat(Textito2);
    setResultado(val)
    setTipoFun('*')
  }

  const dividir = () => {
    let val = parseFloat(Textito1) / parseFloat(Textito2);
    setResultado(val)
    setTipoFun('/')
  }

  const reset = () => {
    setTextito1('')
    setTextito2('')
    setResultado('')
    setTipoFun('')
  }

  let xd;

  if (!isNaN(Textito1) && !isNaN(Textito2)) {
    xd = Textito1 + " " + TipoFun + " " + Textito2 + " = " + Resultado;
  } else {
    xd = "Solo números";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>Calculator</Text>
      <>
        <View>
          <TextInput
            style={styles.Input}
            value={Textito1}
            onChangeText={setTextito1}
            keyboardType="numeric"
            placeholder="Numero 1" />

          <TextInput
            style={styles.Input}
            value={Textito2}
            onChangeText={setTextito2}
            keyboardType="numeric"
            placeholder="Numero 2" />
        </View>
        <View style={styles.ButtonsContainer}>
          <TouchableOpacity style={styles.sum} onPress={sumar}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          <TouchableOpacity style={styles.rest} onPress={restar}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
          <TouchableOpacity style={styles.mult} onPress={multiplicar}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
          <TouchableOpacity style={styles.div} onPress={dividir}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.reset} onPress={reset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
        <Text style={styles.Resultado}>{xd}</Text>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 70
  },
  MainTitle: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  Input: {
    backgroundColor: 'white',
    height: 70,
    width: 200,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  ButtonsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    width: 270,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sum: {
    marginLeft: 3,
    marginRight: 3,
    width: '20%',
    backgroundColor: '#7453f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rest: {
    marginLeft: 3,
    marginRight: 3,
    width: '20%',
    backgroundColor: '#f553a9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mult: {
    marginLeft: 3,
    marginRight: 3,
    width: '20%',
    backgroundColor: '#5394f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  div: {
    marginLeft: 3,
    marginRight: 3,
    width: '20%',
    backgroundColor: '#f59c53',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Resultado: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30
  },
  reset: {
    width: 230,
    marginTop: 6,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53c7f5'
  }
});
