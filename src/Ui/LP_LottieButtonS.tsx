import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import rfSpacing from "../theme/rfSpacing";
import colors from "../theme/colors";


const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <View>
        <LottieView
          source={require("../assets/animations/spinner.json")}
          autoPlay
          loop
          style={{ width: rfSpacing['5xl'], height: rfSpacing['5xl'],position:"absolute",top:-rfSpacing['l'] }}
        />
       
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loaderContainer: {
    zIndex: 10,
  },
  
});

export default Loader;
