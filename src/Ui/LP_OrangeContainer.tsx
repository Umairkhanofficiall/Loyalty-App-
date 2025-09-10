import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import rfSpacing from '../theme/rfSpacing';
import colors from '../theme/colors';


const LP_OrangeContainer = () => {
  return (
    <View 
      style={styles.W_385H_H_2H_BG_MO_BBR_4XL_BBSR_4XL}>
    </View>
  )
}

export default LP_OrangeContainer

const styles = StyleSheet.create({
    W_385H_H_2H_BG_MO_BBR_4XL_BBSR_4XL:{
         width: rfSpacing['3.85H'],
            height: rfSpacing['2H'],
            backgroundColor: colors.LP_Mainorange,
            borderBottomEndRadius: rfSpacing['4xl'],
            borderBottomStartRadius: rfSpacing['4xl'],
    }
})