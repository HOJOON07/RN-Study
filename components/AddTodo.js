import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

const style = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circeWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default function AddTodo(props) {
  const {onInsert} = props;
  const button = (
    <View style={style.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };
  const [text, setText] = useState('');
  return (
    <View style={style.block}>
      <TextInput
        placeholder="할일을 입력하세요"
        style={style.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress} //엔터를 눌렀을 때 호출되는 함수
        returnKeyType="done"
      />
      {/* {Platform.OS === 'ios' ? (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={style.buttonStyle}>
            <Image
              source={require('../assets/icons/add_white/add_white.png')}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={style.circeWrapper}>
          <TouchableNativeFeedback>
            <View style={dstyle.buttonStyle}>
              <Image
                source={require('../assets/icons/add_white/add_white.png')}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      )} */}
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={style.circeWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}
