import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const style = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});

export default function Empty() {
  return (
    <View style={style.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={style.image}
        resizeMode="cover"></Image>
      <Text style={style.description}>야호! 할일이 없습니다.</Text>
    </View>
  );
}
