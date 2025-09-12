import { View, Text } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import Logoauthone from '../assets/Images/SVGS/Logoauthone'
import Logoauthtwo from '../assets/Images/SVGS/Logoauthtwo'


const LP_AuthLogo = () => {
  return (
    <View style={styles.FD_R_AS_C_W_17H_H_17H_BG_BGA_BR_XXL_MT_4XL}>
          <View style={styles.logo}>
            <Logoauthone />
          </View>
          <View style={styles.SecondLogo}>
            <Logoauthtwo />
          </View>
        </View>
  )
}

export default LP_AuthLogo