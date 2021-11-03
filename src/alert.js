import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {Appbar, Button, Snackbar} from 'react-native-paper';

const Alert = () => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Appbar.Header
        style={{borderBottomColor: '#D1D5DB', borderBottomWidth: 2}}>
        <StatusBar backgroundColor="#6200EE" />
        <Appbar.Content
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          title="Jagad | Alert"
        />
      </Appbar.Header>
      <View>
        <Button
          mode="contained"
          style={{marginHorizontal: 10}}
          onPress={() => {
            setVisible1(!visible1);
          }}>
          Klik Disini
        </Button>
        <Button
          mode="contained"
          style={{marginVertical: 10, marginHorizontal: 10}}
          onPress={() => {
            setVisible2(!visible2);
          }}>
          Klik Disini 2
        </Button>
      </View>
      <View>
        <Snackbar
          visible={visible1}
          onDismiss={() => setVisible1(false)}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}>
          Ada Kesalahan.
        </Snackbar>
        <Snackbar
          visible={visible2}
          onDismiss={() => setVisible2(false)}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}>
          <ActivityIndicator size="large" color="#ffffff" />
        </Snackbar>
      </View>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({});
