// import React, { useRef, useEffect } from "react";
// import { View, Animated, StyleSheet } from "react-native";


// const DotLoader = () => {
//   const dot1 = useRef(new Animated.Value(0)).current;
//   const dot2 = useRef(new Animated.Value(0)).current;
//   const dot3 = useRef(new Animated.Value(0)).current;

//   const bounce = (dot) => {
//     return Animated.loop(
//       Animated.sequence([
//         Animated.timing(dot, {
//           toValue: -5,
//           duration: 300,
//           useNativeDriver: true,
//         }),
//         Animated.timing(dot, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: true,
//         }),
//       ])
//     );
//   };

//   useEffect(() => {
//     // dot1 start immediately
//     bounce(dot1).start();

//     // dot2 start after 150ms
//     setTimeout(() => {
//       bounce(dot2).start();
//     }, 150);

//     // dot3 start after 300ms
//     setTimeout(() => {
//       bounce(dot3).start();
//     }, 300);
//   }, [dot1, dot2, dot3]);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.dot, { transform: [{ translateY: dot1 }] }]} />
//       <Animated.View style={[styles.dot, { transform: [{ translateY: dot2 }] }]} />
//       <Animated.View style={[styles.dot, { transform: [{ translateY: dot3 }] }]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     marginLeft: 10,
//   },
//   dot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: "#fff", // tum yaha color change kar sakte ho
//     marginHorizontal: 3,
//   },
// });

// export default DotLoader;
