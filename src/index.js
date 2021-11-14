import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {TextInput, Appbar, Button} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const menuname = [
  {id: 1, title: 'Tugas 1 Latihan 1', passing: 'Suhu'},
  {id: 2, title: 'Tugas 1 Latihan 2', passing: 'Random'},
  {id: 3, title: 'Tugas 1 Latihan 3', passing: 'DialogBox'},
  {id: 4, title: 'Tugas 1 Latihan 4', passing: 'Alert'},
  {id: 5, title: 'Tugas 2 Latihan 1', passing: 'Perulangan'},
  {id: 6, title: 'Tugas 2 Latihan 2', passing: 'PerulanganInput'},

  {id: 7, title: 'Tugas 3 Latihan 1', passing: 'PercabanganOne'},
  {id: 8, title: 'Tugas 3 Latihan 2', passing: 'PercabanganTwo'},
  {id: 9, title: 'Tugas 3 Latihan 3', passing: 'PercabanganThree'},

  {id: 10, title: 'Tugas 5 Latihan 1', passing: 'PlayingString'},
  {id: 11, title: 'Tugas 5 Latihan 2', passing: 'SubString'},
  {id: 12, title: 'Tugas 5 Latihan 3', passing: 'ReplaceString'},
  {id: 13, title: 'Tugas 5 Latihan 4', passing: 'ComparisonString'},
  {id: 14, title: 'Tugas 5 Latihan 5', passing: 'IndexOfString'},
  {id: 15, title: 'Tugas 5 Latihan 6', passing: 'IsIntegrerCheck'},

  {id: 16, title: 'Tugas 6 Latihan 1', passing: 'GanjilGenap'},
  {id: 17, title: 'Tugas 6 Latihan 2', passing: 'JarakPeluru'},
  {id: 18, title: 'Tugas 6 Latihan 3', passing: 'SortingNumber'},
  {id: 19, title: 'Tugas 6 Latihan 4', passing: 'RandomTugas5'},

  {id: 20, title: 'Tugas 7 Latihan 1', passing: 'TextInputTugas6'},
  {id: 21, title: 'Tugas 7 Latihan 2', passing: 'Login'},
];

const Index = ({navigation}) => {
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
          title="Home"
        />
      </Appbar.Header>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <FlatList
          style={{marginBottom: 100}}
          showsVerticalScrollIndicator={false}
          data={menuname}
          numColumns={3}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.passing)}
              style={{
                width: windowWidth * 0.275,
                height: windowHeight * 0.133,
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginBottom: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: '#000000',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
