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

const JarakPeluru = () => {
  const [text, setText] = React.useState();
  const [text1, setText1] = React.useState();
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
            title="Jagad | Menghitung Jarak Peluru"
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
            label="Kecepatan"
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
          />

          <TextInput
            style={{width: 300, height: 45, marginBottom: 10}}
            label="Sudut"
            value={text1}
            onChangeText={text1 => setText1(text1)}
            mode="outlined"
          />
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() =>
              setResult(
                (2 *
                  text *
                  text *
                  Math.sin((text1 * 3.14) / 180) *
                  Math.cos((text1 * 3.14) / 180)) /
                  9.80665,
              )
            }>
            Hitung
          </Button>
          <Text style={{fontSize: 20, marginVertical: 20}}>{result}</Text>
        </View>
      </View>
    </Provider>
  );
};

export default JarakPeluru;

const styles = StyleSheet.create({});
