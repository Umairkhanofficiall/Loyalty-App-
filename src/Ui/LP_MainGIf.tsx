import { View, Text } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import styles from '../screens/Auth/styles';

const LP_MainGIf = () => {
  return (
    <FastImage
            style={styles.gif}
            source={require("../assets/Images/gif.gif")}
            resizeMode={FastImage.resizeMode.contain}
          />
  )
}

export default LP_MainGIf