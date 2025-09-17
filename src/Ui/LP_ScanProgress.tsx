import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { getImage } from '../assets/Images/images'
import styles from '../screens/Auth/styles'


const LP_ScanProgress = () => {
  return (
    <View style={styles.FD_R_G_S_MT_M}>
                <Image source={getImage('red')} style={styles.W_S_H_8Xl_BR_XS} />
                <Image source={getImage('black')} style={styles.W_S_H_8Xl_BR_XS} />
                <Image source={getImage('silver')} style={styles.W_S_H_8Xl_BR_XS} />
                <Image source={getImage('silver')} style={styles.W_S_H_8Xl_BR_XS} />
              </View>
  )
}
export default LP_ScanProgress

