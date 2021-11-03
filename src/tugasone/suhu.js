import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {TextInput, Appbar, Button} from 'react-native-paper';

const App = () => {
  const [text, setText] = React.useState(null);
  const [reamur, setReamur] = React.useState(null);
  const [fahrenheit, setFahrenheit] = React.useState(null);
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
          title="Jagad | Cek Suhu"
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
          label="Masukkan Suhu"
          value={text}
          onChangeText={text => setText(text)}
          mode="outlined"
        />
        <View style={{flexDirection: 'row'}}>
          <Button
            style={{marginRight: 10}}
            icon="thermometer"
            mode="contained"
            onPress={() => {
              setReamur(text * 0.8);
              setFahrenheit(text * 1.8 + 32);
            }}>
            Konversikan
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setText(null);
              setReamur(null);
              setFahrenheit(null);
            }}>
            Clear
          </Button>
        </View>
        {!fahrenheit && !reamur ? (
          <Text></Text>
        ) : (
          <View style={{marginVertical: 20}}>
            <Text style={{fontSize: 18, color: '#000000'}}>
              {reamur} Reamur
            </Text>
            <Text style={{fontSize: 18, color: '#000000'}}>
              {fahrenheit} Fahrenheit
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
