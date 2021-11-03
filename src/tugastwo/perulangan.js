import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

const Perulangan = () => {
  const while_data = [];
  let i = 0;
  while (i < 10) {
    i++;
    while_data.push(i + ' ');
  }
  const for_data = [];
  for (let i = 1; i <= 10; i++) {
    for_data.push(i + ' ');
  }
  const [whileLoop, setWhileLoop] = React.useState([]);
  const [forLoop, setForLoop] = React.useState([]);
  return (
    <View>
      <Appbar.Header
        style={{borderBottomColor: '#D1D5DB', borderBottomWidth: 2}}>
        <StatusBar backgroundColor="#6200EE" />
        <Appbar.Content
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          title="Jagad | Perulangan"
        />
      </Appbar.Header>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Button
            style={{marginRight: 10}}
            mode="contained"
            onPress={() => {
              setWhileLoop(while_data);
            }}>
            Perulangan While
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setWhileLoop([]);
            }}>
            Clear
          </Button>
        </View>
        <Text style={{fontSize: 20}}>{whileLoop}</Text>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Button
            style={{marginRight: 10}}
            mode="contained"
            onPress={() => {
              setForLoop(for_data);
            }}>
            Perulangan for
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setForLoop([]);
            }}>
            Clear
          </Button>
        </View>
        <Text style={{fontSize: 20}}>{forLoop}</Text>
      </View>
    </View>
  );
};

export default Perulangan;
