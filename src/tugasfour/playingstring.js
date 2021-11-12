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

const PlayingString = () => {
  const [text, setText] = React.useState();
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);

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
            title="Jagad | Permainan String"
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
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => setVisible1(true)}>
            Penggabungan String
          </Button>
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => setVisible2(true)}>
            Hitung Karakter
          </Button>
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => setVisible3(true)}>
            Check Textbox
          </Button>
          <Button
            style={{marginTop: 20, marginHorizontal: 10}}
            mode="contained"
            onPress={() => setVisible4(true)}>
            Konversi Huruf
          </Button>
        </View>

        <Portal>
          <Dialog visible={visible1} onDismiss={() => setVisible1(false)}>
            <Dialog.Title>Penggabungan String</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{text + '\n'}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible1(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={visible2} onDismiss={() => setVisible2(false)}>
            <Dialog.Title>Jumlah Karakter yang anda masukkan</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{!text ? 'error' : text.length}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible2(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={visible3} onDismiss={() => setVisible3(false)}>
            <Dialog.Title>TextBox</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                {!text ? 'Jangan Kosongkan Textbox' : 'Textbox ada isinya'}
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible3(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={visible4} onDismiss={() => setVisible4(false)}>
            <Dialog.Title>Konversi Huruf</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                {!text ? 'error' : `Lowercase : ${text.toLowerCase()}`}
              </Paragraph>
              <Paragraph>
                {!text ? 'error' : `Uppercase : ${text.toUpperCase()}`}
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible4(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default PlayingString;

const styles = StyleSheet.create({});
