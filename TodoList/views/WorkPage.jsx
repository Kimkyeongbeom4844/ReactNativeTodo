import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { theme } from "../utils/colors";
import { listDay } from "../utils/day";
import List from "../components/List";
import { addWorkList, resetWorkList } from "../stores/workListReducer";
import { useSelector, useDispatch } from "react-redux";
import * as NavigationBar from "expo-navigation-bar";
import NavBar from "../components/NavBar";

const WorkPage = () => {
  const test = useSelector((state) => state.workListReducer);
  const dispatch = useDispatch();

  const [refresh, setRefresh] = useState(false);
  const [working, setWorking] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("overlay-swipe");
  }, []);

  const travel = () => {
    working && setInput("");
    setWorking(false);
  };
  const work = () => {
    !working && setInput("");
    setWorking(true);
  };
  const refreshAll = () => {
    setRefresh(true);
    setWorking(true);
    setInput("");
    dispatch(resetWorkList());
    setRefresh(false);
  };
  const onChangeText = (e) => {
    setInput(e);
  };
  const onSubmit = () => {
    dispatch(addWorkList([input, listDay()]));
    setInput("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.mainText,
              color: `${working ? "white" : theme.gray}`,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.mainText,
              color: `${!working ? "white" : theme.gray}`,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          blurOnSubmit={false}
          autoCapitalize="none"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          autoCorrect={false}
          placeholder={working ? "Add a To Do" : "Where do you want to go"}
          style={styles.input}
          defaultValue={input}
        />
      </View>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={refreshAll} />
        }
      >
        {test.map((v, i) => (
          <List text={v[0]} day={v[1]} key={i} index={i} />
        ))}
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 22,
  },
  mainText: {
    fontSize: 44,
    fontWeight: "600",
    color: "white",
  },
  header: {
    alignItems: "flex-end",
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 40,
    marginVertical: 20,
    fontSize: 18,
  },
});

export default WorkPage;
