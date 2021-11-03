import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {TextInput, Appbar, Button} from 'react-native-paper';

const Percabangan = () => {
  const [text1, setText1] = React.useState(null);
  const [switchButton, SetSwitchButton] = React.useState('OFF');
  const [result, setResult] = React.useState(null);

  return (
    <View backgroundColor={switchButton === 'ON' ? '#FF0000' : '#FBFF00'}>
      <Appbar.Header
        style={{borderBottomColor: '#D1D5DB', borderBottomWidth: 2}}>
        <StatusBar backgroundColor="#6200EE" />
        <Appbar.Content
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          title="Jagad | Percabangan 2"
        />
      </Appbar.Header>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <Button
          mode="contained"
          onPress={() => {
            switchButton === 'ON'
              ? SetSwitchButton('OFF')
              : SetSwitchButton('ON');
          }}>
          {switchButton}
        </Button>
        <TextInput
          style={{width: 300, height: 45, marginBottom: 10}}
          label="Masukkan Angka"
          value={text1}
          onChangeText={text1 => setText1(text1)}
          mode="outlined"
        />
        <View style={{flexDirection: 'row'}}>
          <Button
            style={{marginRight: 10}}
            mode="contained"
            onPress={() => {
              if (text1 === '0') {
                setResult('Nol');
              } else if (text1 === '1') {
                setResult('Satu');
              } else if (text1 === '2') {
                setResult('Dua');
              } else {
                setResult('Hanya bisa membaca 0,1,2');
              }
            }}>
            Klik Saya
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setResult(null);
            }}>
            Clear
          </Button>
        </View>
        <Text style={{fontSize: 20, marginVertical: 10}}>{result}</Text>
      </View>
    </View>
  );
};

export default Percabangan;

const styles = StyleSheet.create({});
