import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import rfSpacing from "../theme/rfSpacing"; // path adjust karo
import colors from "../theme/colors";       // path adjust karo

type LoaderProps = {
  message?: string; // 👈 optional text
};

export default function ScannerLoader({ message = "Loading app..." }: LoaderProps) {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.loaderBox}>
        <LottieView
          source={require("../assets/animations/spinner.json")} // 👈 apne path ka dhyaan rakho
          autoPlay
          loop
          style={{ width: rfSpacing["10xl"], height: rfSpacing["10xl"] }}
        />
        <Text style={styles.loaderText}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  loaderBox: {
    backgroundColor: colors.LP_White,
    padding: rfSpacing["3xl"],
    borderRadius: rfSpacing["xl"],
    alignItems: "center",
  },
  loaderText: {
    marginTop: rfSpacing["m"],
    textAlign: "center",
    color: colors.LP_HeadingColor,
  },
});
