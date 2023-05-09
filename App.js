/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Datehead from './components/Datehead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todoStorage from './storages/todoStorages';

const style = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});
const App = () => {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  const onInsert = text => {
    //새로 등록할 항목의 아이디 값을 구한다.
    //등록된 항목 중에서 가장 큰 아이디를 구하고, 그 값에 1을 더한다.
    //만약 리스트가 비어있다면 아이디를 1로 사용한다.
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  // useEffect(() => {
  //   const save = async () => {
  //     try {
  //       await AsyncStorage.setItem('todos', JSON.stringify(todos));
  //     } catch (e) {
  //       console.log('failed to save todos');
  //     }
  //   };
  //   save();
  // }, [todos]);
  // useEffect(() => {
  //   const load = async () => {
  //     try {
  //       const rawTodos = await AsyncStorage.getItem('todos');
  //       const saveTodos = JSON.parse(rawTodos);
  //       setTodos(saveTodos);
  //     } catch (e) {
  //       console.log('faild to load todos');
  //     }
  //   };
  //   load();
  // }, []);
  useEffect(() => {
    todoStorage.get().then(setTodos).catch(console.error);
  }, []);
  useEffect(() => {
    todoStorage.set(todos).catch(console.error);
  }, [todos]);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={style.block}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          behavior={Platform.select({ios: 'padding'})}
          style={style.avoid}>
          <Datehead date={today} />
          {todos.length === 0 ? (
            <Empty></Empty>
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert}></AddTodo>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
//safeareaview 의 deges={['bottom'}속성은 하단만 여백을 준다는 뜻이다.
export default App;
