import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import LP_MainPointsCard from './LP_MainPointsCard'
import TabBar from './LP_ToggleButton'

const LP_LoyaltyMainThree = () => {
  return (
    <View>
    <View style={styles.W_385H_H_2H_BG_MO_BBR_4XL_BBSR_4XL}>
          <Text style={styles.C_W_FS_4XL_TA_C_MT_4XXM}>Loyalty Points</Text>
          <LP_MainPointsCard />
        </View>
        <TabBar />
        </View>
  )
}

export default LP_LoyaltyMainThree

