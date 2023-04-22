import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Todoitem from './Todoitem';

const style = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
export default function TodoList(props) {
  const {todos, onToggle, onRemove} = props;
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={style.seperator}></View>}
      style={style.list}
      data={todos}
      renderItem={({item}) => (
        <Todoitem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}
