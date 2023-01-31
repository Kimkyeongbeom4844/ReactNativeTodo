import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const NavBar = () => {
  return (
    <View style={styles.navBarWrap}>
      <TouchableOpacity>
        <EvilIcons name="navicon" size={45} color="#B9BABB" />
      </TouchableOpacity>
      <TouchableHighlight onPress={() => console.log("개발중")}>
        <View style={styles.mainBtn}>
          <AntDesign name="plus" size={30} color="black" />
        </View>
      </TouchableHighlight>
      <TouchableOpacity>
        <Entypo name="dots-three-horizontal" size={35} color="#B9BABB" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarWrap: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  mainBtn: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    position: "relative",
    bottom: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NavBar;
