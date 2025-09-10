import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { getImage } from '../assets/Images/images'
import styles from '../screens/Auth/styles'


const LP_ScanProgress = () => {
  return (
    <View style={{ flexDirection: "row", gap: 8 , marginTop: 10 }}>
                <Image source={getImage('red')} style={styles.W_H} />
                <Image source={getImage('black')} style={styles.W_H} />
                <Image source={getImage('silver')} style={styles.W_H} />
                <Image source={getImage('silver')} style={styles.W_H} />
              </View>
  )
}

export default LP_ScanProgress

