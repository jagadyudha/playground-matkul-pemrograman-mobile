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

const Login = () => {
  const [text, setText] = React.useState();
  const [text1, setText1] = React.useState();
  const [visible, setVisible] = React.useState(false);
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
            title="Jagad | Login"
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
            label="Username"
            value={text}
            onChangeText={text => setText(text)}
            mode="outlined"
          />

          <TextInput
            style={{width: 300, height: 45, marginBottom: 10}}
            label="Password"
            value={text1}
            onChangeText={text1 => setText1(text1)}
            mode="outlined"
            secureTextEntry={true}
          />
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => setVisible(true)}>
            Login
          </Button>

          <Portal>
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
              <Dialog.Title>Pesan</Dialog.Title>
              <Dialog.Content>
                <Paragraph>
                  {text === 'a' && text1 === 'aa'
                    ? 'Login Berhasil'
                    : 'Password Salah'}
                </Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => setVisible(false)}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </View>
    </Provider>
  );
};

export default Login;

const styles = StyleSheet.create({});
