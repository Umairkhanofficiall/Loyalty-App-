import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../theme/colors'
import rfSpacing from '../theme/rfSpacing'
import LP_FilterButton from './LP_FilterButton'

const LP_MyOrdersecondRow = () => {
  return (
    <View style={styles.FD_R_MT_XML}>
      <Text
        style={styles.C_H_FS_XXL_FW_600_CL_H}>
        Order History
      </Text>
      <View >
        <LP_FilterButton />
      </View>
    </View>
  )
}

export default LP_MyOrdersecondRow
const styles = StyleSheet.create({
  FD_R_MT_XML:
  {
    flexDirection: 'row',
    marginTop: -rfSpacing['8xl']
  },
  C_H_FS_XXL_FW_600_CL_H:{
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: '600',
    marginTop: rfSpacing['4xxsl'],
    left: rfSpacing['4xl'],
  }
})