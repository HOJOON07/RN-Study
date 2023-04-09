/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';
import Datehead from './components/Datehead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const App = () => {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Datehead date={today}></Datehead>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
