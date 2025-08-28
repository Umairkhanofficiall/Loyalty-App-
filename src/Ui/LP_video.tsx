import React from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";
import rfSpacing from "../theme/rfSpacing";

const VideoAnimation = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/animations/video.mp4")}
        resizeMode="contain"
        repeat={true}         
        muted={true}          
        playInBackground={false}
        style={styles.video}
      />
    </View>
  );
};

export default VideoAnimation;

const styles = StyleSheet.create({
  container: {
    width: rfSpacing["1.3H"],
    height: rfSpacing["1.3H"],
    alignSelf: "center",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
