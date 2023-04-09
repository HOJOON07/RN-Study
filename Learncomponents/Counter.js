import React from 'react';
import {Button, View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

export default function Counter({count, onIncrease, onDecrease}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.nuberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="+ 1" onPress={onIncrease}></Button>
      <Button title="- 1" onPress={onDecrease}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  nuberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});
