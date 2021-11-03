import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {TextInput, Appbar, Button} from 'react-native-paper';

const Percabangan = () => {
  const [text1, setText1] = React.useState(null);
  const [text2, setText2] = React.useState(null);

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
          title="Jagad | Percabangan"
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
          label="Menampilkan Data"
          value={text1}
          onChangeText={text1 => setText1(text1)}
          mode="outlined"
        />
        <View style={{flexDirection: 'row'}}>
          <Button
            style={{marginRight: 10}}
            mode="contained"
            onPress={() => {
              setText1('Sukses Selalu');
            }}>
            Klik Saya
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setText1(null);
            }}>
            Clear
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Percabangan;

const styles = StyleSheet.create({});
