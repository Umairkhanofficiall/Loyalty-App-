import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import { getImage } from '../assets/Images/images'

const LP_ScannerModelFirstRow = () => {
  return (
    <View>
    <Image source={getImage('Text')} style={styles.W_2H_H_10XL_MT_XML_ML_3XL} />
                <Text style={styles.MODAL_POINTS}>You have earned</Text>
                <View style={styles.ROW_W_2_25H_H_8XL_BG_GRADIENT_BR_XXL_MT_XL}>
                  <Image source={getImage('tick')} style={styles.W_5XL_H_5XL_MT_XXL_ML_3XL_RM_C} />
                  <Text style={styles.POINTS_VALUE}>125 Points</Text>
                </View>
                <View style={styles.ROW_MT_XL}>
                  <Text style={styles.TOTAL_POINTS}>Your Total Points:</Text>
                  <Text style={styles.POINTS}>12,500</Text>
                </View>
                </View>
  )
}

export default LP_ScannerModelFirstRow