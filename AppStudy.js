/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Box from './Learncomponents/Box';
import Greeting from './Learncomponents/Greeting';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import Counter from './Learncomponents/Counter';

const App = () => {
  const [visible, setVisible] = useState(true);
  const people = ['John', 'Jake', 'Jane'];
  const onPress = () => {
    setVisible(!visible);
  };
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(prev => prev + 1);
  };
  const onDecrease = () => {
    setCount(prev => prev - 1);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.full}>
        {/* <Greeting></Greeting>
        <Button title="토글" onPress={onPress}></Button>
        {visible ? <Box rounded={true} size="large" color="blue" /> : null} */}
        <Counter
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          count={count}></Counter>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    // backgroundColor: 'cyan',
  },
});

export default App;
