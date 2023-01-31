import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import { theme } from "../utils/colors";
import { removeWorkList } from "../stores/workListReducer";
import { useDispatch } from "react-redux";

const List = ({ text, day, index }) => {
  const dispatch = useDispatch();
  const onLongPress = () => {
    Alert.alert("메시지", "해당 메시지를 삭제하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "확인",
        onPress: () => dispatch(removeWorkList(index)),
      },
    ]);
  };
  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={"none"}
      onLongPress={onLongPress}
    >
      <View style={styles.list}>
        <Text style={{ color: "white", fontSize: 18 }}>{text}</Text>
        <Text style={{ color: theme.day }}>{day}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: theme.list,
    borderRadius: 7,
    padding: 15,
    marginVertical: 5,
  },
});

export default List;
