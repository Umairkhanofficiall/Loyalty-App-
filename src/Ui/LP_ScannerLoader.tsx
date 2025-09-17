import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import rfSpacing from "../theme/rfSpacing"; 
import colors from "../theme/colors";       

type LoaderProps = {
  message?: string; 
};

export default function ScannerLoader({ message = "Loading app..." }: LoaderProps) {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.loaderBox}>
        <LottieView
          source={require("../assets/animations/spinner.json")} 
          autoPlay
          loop
          style={styles.W_10XL_H_10XL}
        />
        <Text style={styles.loaderText}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  W_10XL_H_10XL:
  { width: rfSpacing["10xl"], height: rfSpacing["10xl"] },
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
