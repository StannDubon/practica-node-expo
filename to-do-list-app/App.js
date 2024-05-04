import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, FlatList } from 'react-native';
import Card from './src/components/card'

export default function App() {

  /* CREACIÓN DE VARIABLES */
  const [Textito, setTextito] = useState('');
  const [DATA, setDATA] = useState([]);

  const add = () => {
    const objeto = { value: Textito, id: DATA.length.toString() };
    setDATA([...DATA, objeto]);
  }

  const remove = (id) => {
    const newData = DATA.filter(item => item.id !== id);
    setDATA(newData);
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.MainTitle}>To Do List</Text>
      <>
        <View style={styles.InputView}>
          <TextInput
            style={styles.Input}
            value={Textito}
            onChangeText={setTextito}
            placeholder="Escribe aquí..." />

          <TouchableOpacity style={styles.Button} onPress={add}>
            <Text style={styles.ButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Card text={item.value} removeAction={() => remove(item.id)} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </>
    </View>
  );
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'start',
  },
  MainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 70
  },
  InputView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    gap: 20
  },
  Input: {
    width: '60%',
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  Button: {
    width: '20%',
    height: 40,
    backgroundColor: '#6f76f2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
