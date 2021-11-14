import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/index';
import Suhu from './src/tugasone/suhu';
import Random from './src/tugasone/random';
import DialogBox from './src/tugasone/dialogbox';
import Alert from './src/tugasone/alert';
import Perulangan from './src/tugastwo/perulangan';
import PerulanganInput from './src/tugastwo/perulanganinput';
import PercabanganOne from './src/tugasthree/percabangan';
import PercabanganTwo from './src/tugasthree/percabangan2';
import PercabanganThree from './src/tugasthree/percabangan3';

import PlayingString from './src/tugasfour/playingstring';
import SubString from './src/tugasfour/substring';
import ReplaceString from './src/tugasfour/replacestring';
import ComparisonString from './src/tugasfour/comparisonstring';
import IndexOfString from './src/tugasfour/indexofstring';
import IsIntegrerCheck from './src/tugasfour/isintegrercheck';

import GanjilGenap from './src/tugasfive/ganjilgenap';
import JarakPeluru from './src/tugasfive/jarakpeluru';
import SortingNumber from './src/tugasfive/sortingnumber';
import RandomTugas5 from './src/tugasfive/random';

import TextInputTugas6 from './src/tugassix/textinput';
import Login from './src/tugassix/login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Suhu" component={Suhu} />
        <Stack.Screen name="Random" component={Random} />
        <Stack.Screen name="DialogBox" component={DialogBox} />
        <Stack.Screen name="Alert" component={Alert} />
        <Stack.Screen name="Perulangan" component={Perulangan} />
        <Stack.Screen name="PerulanganInput" component={PerulanganInput} />
        <Stack.Screen name="PercabanganOne" component={PercabanganOne} />
        <Stack.Screen name="PercabanganTwo" component={PercabanganTwo} />
        <Stack.Screen name="PercabanganThree" component={PercabanganThree} />

        <Stack.Screen name="PlayingString" component={PlayingString} />
        <Stack.Screen name="SubString" component={SubString} />
        <Stack.Screen name="ReplaceString" component={ReplaceString} />
        <Stack.Screen name="ComparisonString" component={ComparisonString} />
        <Stack.Screen name="IndexOfString" component={IndexOfString} />
        <Stack.Screen name="IsIntegrerCheck" component={IsIntegrerCheck} />

        <Stack.Screen name="GanjilGenap" component={GanjilGenap} />
        <Stack.Screen name="JarakPeluru" component={JarakPeluru} />
        <Stack.Screen name="SortingNumber" component={SortingNumber} />
        <Stack.Screen name="RandomTugas5" component={RandomTugas5} />

        <Stack.Screen name="TextInputTugas6" component={TextInputTugas6} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
