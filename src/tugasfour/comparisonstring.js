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

const ComparisonString = () => {
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
            title="Jagad | Comparison String"
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
            label="First Text"
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
          />
          <TextInput
            style={{width: 300, height: 45, marginBottom: 10}}
            label="Second Text"
            value={text1}
            onChangeText={text1 => setText1(text1)}
            mode="outlined"
          />
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() =>
              setResult(
                text === text1
                  ? 'Text Sama'
                  : text < text1
                  ? 'Second text Lebih Besar'
                  : text > text1
                  ? 'First text lebih kecil'
                  : 'Text Tidak Sama',
              )
            }>
            Bandingkan 1
          </Button>
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() =>
              setResult(
                text.toUpperCase() === text1.toUpperCase()
                  ? 'Text Sama'
                  : text.toUpperCase() < text1.toUpperCase()
                  ? 'Second text Lebih Besar'
                  : text.toUpperCase() > text1.toUpperCase()
                  ? 'First text lebih kecil'
                  : 'Text Tidak Sama',
              )
            }>
            Bandingkan 2
          </Button>
          <Text style={{fontSize: 20, marginVertical: 20}}>{result}</Text>
        </View>
      </View>
    </Provider>
  );
};

export default ComparisonString;

const styles = StyleSheet.create({});
