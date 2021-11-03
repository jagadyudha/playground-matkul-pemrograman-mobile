import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';

const Perulangan = () => {
  const [text1, setText1] = React.useState(null);
  const [text2, setText2] = React.useState(null);

  const while_data = [];
  const WhileAction = (text1, text2) => {
    let i = text1 - 1;
    while (i < text2) {
      i++;
      while_data.push(i + ' ');
    }
  };

  const [whileLoopForward, setWhileLoopForward] = React.useState([]);
  const [whileLoopBackward, setWhileLoopBackward] = React.useState([]);
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
          title="Jagad | Perulangan Input"
        />
      </Appbar.Header>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <TextInput
          style={{width: 300, height: 45, marginBottom: 10}}
          label="Nilai Awal"
          value={text1}
          onChangeText={text1 => setText1(text1)}
          mode="outlined"
        />
        <TextInput
          style={{width: 300, height: 45, marginBottom: 10}}
          label="Nilai Akhir"
          value={text2}
          onChangeText={text2 => setText2(text2)}
          mode="outlined"
        />
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Button
            style={{marginRight: 10}}
            mode="contained"
            onPress={() => {
              WhileAction(text1, text2);
              setWhileLoopForward(while_data);
            }}>
            Perulangan Maju
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setWhileLoopForward([]);
            }}>
            Clear
          </Button>
        </View>
        <Text style={{fontSize: 20}}>{whileLoopForward}</Text>

        <TextInput
          style={{width: 300, height: 45, marginBottom: 10}}
          label="Nilai Awal"
          value={text2}
          onChangeText={text2 => setText1(text2)}
          mode="outlined"
        />
        <TextInput
          style={{width: 300, height: 45, marginBottom: 10}}
          label="Nilai Akhir"
          value={text1}
          onChangeText={text1 => setText1(text1)}
          mode="outlined"
        />
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Button
            style={{marginRight: 10}}
            mode="contained"
            onPress={() => {
              WhileAction(text1, text2);
              setWhileLoopBackward(while_data.reverse());
            }}>
            Perulangan Mundur
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setWhileLoopBackward([]);
            }}>
            Clear
          </Button>
        </View>
        <Text style={{fontSize: 20}}>{whileLoopBackward}</Text>
      </View>
    </View>
  );
};

export default Perulangan;
