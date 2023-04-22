import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomColor: '#e0e0e0',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default function Todoitem(props) {
  const {id, text, done, onToggle, onRemove} = props;
  const deleteIcon = <Icon name="delete" size={32} color="red"></Icon>;
  const remove = () => {
    Alert.alert(
      '삭제',
      '정말 삭제하시겠어요?',
      [
        {
          text: '취소',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
      //이건 바깥쪽 영역 눌렀을 때 Alert가 닫히도록(안드로이드에서만)
    );
  };
  //Alert.alert는 제목,내용,버튼 배열,옵션 객체 순서다.
  return (
    <View style={style.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[style.circle, done && style.filled]}>
          {done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[style.text, done && style.lineThrough]}>{text}</Text>
      {done ? (
        <Icon name="delete" size={32} color="red" onPress={remove} />
      ) : (
        <View style={style.removePlaceholder} />
      )}
    </View>
  );
}
