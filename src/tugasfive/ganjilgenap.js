import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  Appbar,
  TextInput,
} from 'react-native-paper';

const GanjilGenap = () => {
  const [text, setText] = React.useState();
  const [result, setResult] = React.useState();
  return (
    <Provider>
      <View>
        <Appbar.Header
          style={{borderBottomColor: '#D1D5DB', borderBottomWidth: 2}}>
          <StatusBar backgroundColor="#6200EE" />
          <Appbar.Content
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            title="Jagad | Ganjil Genap"
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
            label="Masukkan Teks"
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
          />
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => {
              if (text % 2 === 0) {
                setResult(`${text} adalah bilangan genap`);
              } else {
                setResult(`${text} adalah bilangan ganjil`);
              }
            }}>
            Cek Bilangan
          </Button>
          <Text style={{fontSize: 20, marginVertical: 20}}>{result}</Text>
        </View>
      </View>
    </Provider>
  );
};

export default GanjilGenap;

const styles = StyleSheet.create({});
