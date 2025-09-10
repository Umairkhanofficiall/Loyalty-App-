import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../theme/colors'
import rfSpacing from '../theme/rfSpacing'
import styles from '../screens/Auth/styles'
import LP_LinearGradient from './LP_LinearGradient'

const LP_YourLevel = () => {
  return (
   <LP_LinearGradient
                   colors={[colors.LP_Gradientyoulevel, colors.LP_Gradientyouleveltwo]}
                   start={{ x: 0, y: 0 }}
                   end={{ x: 0, y: 1 }}
                   style={styles.H_W_BR_ML_MT}
                 >
                   <Text style={styles.FS_TA_C_PT}>Your Level</Text>
                 </LP_LinearGradient>
  )
}

export default LP_YourLevel