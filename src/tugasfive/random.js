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

const Random = () => {
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
            title="Jagad | Random Number"
          />
        </Appbar.Header>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => {
              setArray([
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
              ]);
            }}>
            Tes Bilangan Acak
          </Button>
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => {
              setArray([
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
              ]);
            }}>
            Tes Acak
          </Button>
          <View style={{fontSize: 20, marginVertical: 20}}>
            {array.map(item => (
              <Text key={item}>{item}</Text>
            ))}
          </View>
        </View>
      </View>
    </Provider>
  );
};

export default Random;

const styles = StyleSheet.create({});
