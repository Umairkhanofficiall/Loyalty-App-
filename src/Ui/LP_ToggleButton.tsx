import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../theme/colors";
import rfSpacing from "../theme/rfSpacing";
const tabs = ["History", "Levels", "Redeem"];
const TabBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const activeTab = tabs.includes(route.name) ? route.name : "History";
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <Pressable
            key={tab}
            onPress={() => navigation.navigate(tab as never)}
            style={[styles.button, isActive && styles.activeButton]}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.text,
                  isActive && styles.activeText,
                  pressed && styles.hoverText,
                ]}
              >
                {tab}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};
export default TabBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.LP_TabColor,
    borderRadius: rfSpacing["7xl"],
    padding: rfSpacing["xs"],
    alignSelf: "center",
    marginTop: rfSpacing["1.42H"],
  },
  button: {
    paddingVertical: rfSpacing["s"],
    paddingHorizontal: rfSpacing["4xxll"],
    borderRadius: rfSpacing["7xl"],
  },
  activeButton: {
    backgroundColor: colors.LP_White,
  },
  text: {
    color: colors.LP_Tabtext,
    fontSize: rfSpacing["xml"],
  },
  activeText: {
    color: colors.LP_Mainorange,
  },
  hoverText: {
    color: "black",
  },
});
