import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../theme/colors'
import rfSpacing from '../theme/rfSpacing'



const LP_ContentDisc = ({ Title }: any) => {
  return (
    <Text style={styles.Title}>{Title}
    
            </Text>
  )
}

export default LP_ContentDisc
const styles = StyleSheet.create({
    Title:{
        color: colors.LP_HeadingColor,
         fontSize: rfSpacing['xxl'],
          fontWeight: "600",
           padding: rfSpacing['4xl']
    }
})