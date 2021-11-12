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

const SortingNumber = () => {
  const [text, setText] = React.useState();
  const [text1, setText1] = React.useState();
  const [text2, setText2] = React.useState();
  const [text3, setText3] = React.useState();
  const [array, setArray] = React.useState([]);
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
            title="Jagad | Sorting Number"
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
            label="Masukkan Angka"
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
          />
          <TextInput
            style={{width: 300, height: 45, marginBottom: 10}}
            label="Masukkan Angka"
            value={text1}
            onChangeText={text1 => setText1(text1)}
            mode="outlined"
          />

          <TextInput
            style={{width: 300, height: 45, marginBottom: 10}}
            label="Masukkan Angka"
            value={text2}
            onChangeText={text2 => setText2(text2)}
            mode="outlined"
          />

          <TextInput
            style={{width: 300, height: 45, marginBottom: 10}}
            label="Masukkan Angka"
            value={text3}
            onChangeText={text3 => setText3(text3)}
            mode="outlined"
          />
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => {
              setArray([text, text1, text2, text3]);
              array.sort(function (a, b) {
                return a - b;
              });
              setResult(`Bilangan Terkecil adalah ${array[0]}`);
            }}>
            Bilangan Terkecil
          </Button>
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => {
              setArray([text, text1, text2, text3]);
              array.sort(function (a, b) {
                return b - a;
              });
              setResult(`Bilangan Terbesar adalah ${array[0]}`);
            }}>
            Bilangan Terbesar
          </Button>
          <Text style={{fontSize: 20, marginVertical: 20}}>{result}</Text>
        </View>
      </View>
    </Provider>
  );
};

export default SortingNumber;

const styles = StyleSheet.create({});
