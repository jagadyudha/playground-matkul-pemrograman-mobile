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

const ReplaceString = () => {
  const [text, setText] = React.useState();
  const [text1, setText1] = React.useState();
  const [text2, setText2] = React.useState();
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
            title="Jagad | Replace String"
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
          <TextInput
            style={{width: 300, height: 45, marginBottom: 10}}
            label=""
            value={text1}
            onChangeText={text1 => setText1(text1)}
            mode="outlined"
          />
          <TextInput
            style={{width: 300, height: 45, marginBottom: 10}}
            label="String Pengganti"
            value={text2}
            onChangeText={text2 => setText2(text2)}
            mode="outlined"
          />
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => setResult(text.replace(text1, text2))}>
            Proses
          </Button>
          <Text style={{fontSize: 20, marginVertical: 20}}>{result}</Text>
        </View>
      </View>
    </Provider>
  );
};

export default ReplaceString;

const styles = StyleSheet.create({});
