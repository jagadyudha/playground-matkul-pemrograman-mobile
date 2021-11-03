import React from 'react';
import {StyleSheet, Text, View, StatusBar, TextInput} from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  Appbar,
} from 'react-native-paper';

const DialogBox = () => {
  const [text, setText] = React.useState();
  const [dialogInput, setDialogInput] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);

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
            title="Jagad | Menampilkan Dialog"
          />
        </Appbar.Header>
        <Button
          style={{marginTop: 20, marginHorizontal: 10}}
          mode="contained"
          onPress={() => setVisible1(true)}>
          Dialog Box
        </Button>
        <Button
          style={{marginTop: 20, marginHorizontal: 10}}
          mode="contained"
          onPress={() => setVisible2(true)}>
          Dialog Box Input
        </Button>
        <Button
          style={{marginTop: 20, marginHorizontal: 10}}
          mode="contained"
          onPress={() => setVisible3(true)}>
          Dialog Pilihan
        </Button>
        <Portal>
          <Dialog visible={visible1} onDismiss={() => setVisible(false)}>
            <Dialog.Title>Pesan</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Hallo nama saya jagad</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible1(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={visible2} onDismiss={() => setVisible2(false)}>
            <Dialog.Title>Masukkan Nama</Dialog.Title>
            <Dialog.Content>
              <TextInput
                style={{width: 300, height: 45, marginBottom: 10}}
                value={text}
                onChangeText={text => setText(text)}
                mode="outlined"
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  setVisible2(false);
                  setDialogInput(true);
                }}>
                OK
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={visible3} onDismiss={() => setVisible3(false)}>
            <Dialog.Title>Kotak Dialog Pilihan</Dialog.Title>
            <Dialog.Content>
              <Button
                onPress={() => {
                  setText('Ya');
                  setDialogInput(true);
                  setVisible3(false);
                }}>
                Ya
              </Button>
              <Button
                onPress={() => {
                  setText('Tidak');
                  setDialogInput(true);
                  setVisible3(false);
                }}>
                Tidak
              </Button>
              <Button onPress={() => setVisible3(false)}>Batal</Button>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  setDialogInput(true);
                  setVisible3(false);
                }}>
                OK
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={dialogInput} onDismiss={() => setDialogInput(false)}>
            <Dialog.Content>
              <Dialog.Title>{text}</Dialog.Title>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  setDialogInput(false);
                }}>
                OK
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default DialogBox;

const styles = StyleSheet.create({});
