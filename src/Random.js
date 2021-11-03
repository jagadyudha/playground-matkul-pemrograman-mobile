import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {TextInput, Appbar, Button} from 'react-native-paper';

const Random = () => {
  const [acak, setAcak] = React.useState(null);

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
          title="Jagad | Bilangan Acak"
        />
      </Appbar.Header>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Button
            style={{marginRight: 10}}
            mode="contained"
            onPress={() => {
              setAcak(Math.floor(Math.random() * 100));
            }}>
            Acak
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setAcak(null);
            }}>
            Clear
          </Button>
        </View>
        {!acak ? (
          <Text></Text>
        ) : (
          <View style={{marginVertical: 20}}>
            <Text style={{fontSize: 18, color: '#000000', textAlign: 'center'}}>
              Nilai Bilangan Acak : {acak}
            </Text>
            <Text style={{fontSize: 18, color: '#000000', textAlign: 'center'}}>
              Dinaikkan dua : {acak + 2}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Random;
