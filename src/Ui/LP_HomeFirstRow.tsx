import { View, Text } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import Search from '../assets/Images/SVGS/Search'
import Bell from '../assets/Images/SVGS/Bell'
const LP_HomeFirstRow = () => {
  return (
    <View style={styles.FD_R_AI_C}>
          <View style={styles.F_1}>
            <Text style={styles.C_B_FS_FW_PL_PT}>
              Hey, Jackob
            </Text>
            <Text style={styles.C_PF}>its amazing day to scan and earn more</Text>
            <Text style={styles.C_PF}>points</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Search />
          </View>
          <View style={styles.iconWrapper}>
            <Bell />
          </View>
        </View>
  )
}

export default LP_HomeFirstRow