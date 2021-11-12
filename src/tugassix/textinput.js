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

const ExploreTextInput = () => {
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
            title="Jagad | Explore TextInput"
          />
        </Appbar.Header>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <TextInput
            style={{width: 300, maxHeight: 200, marginBottom: 10}}
            label="Multiline"
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
            numberOfLines={5}
            multiline={true}
          />
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => setResult(text)}>
            Proses
          </Button>
          <Text style={{fontSize: 20, marginVertical: 20}}>{result}</Text>

          <TextInput
            style={{width: 300, maxHeight: 80, marginBottom: 10}}
            label="Inputkan Text"
            value={text1}
            onChangeText={text1 => setText1(text1)}
            mode="outlined"
          />
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => setText1('')}>
            Kosongkan
          </Button>
        </View>
      </View>
    </Provider>
  );
};

export default ExploreTextInput;

const styles = StyleSheet.create({});
