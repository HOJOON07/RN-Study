import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Datehead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;
  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]}></View>
      <StatusBar backgroundColor="#26a69a" barStyle="light-content"></StatusBar>
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
  statusBarPlaceholder: {
    backgroundColor: '#26a68a',
  },
});
