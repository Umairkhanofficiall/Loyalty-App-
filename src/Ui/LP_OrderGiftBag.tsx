import { View, Text, Image } from 'react-native'
import React from 'react'
import { getImage } from '../assets/Images/images'
import styles from '../screens/Auth/styles'

const LP_OrderGiftBag = () => {
  return (
   <View>
         <View style={styles.FD_R}>
           <Image source={getImage('goldone')} style={styles.W_5XXL_H_5XXL_ML_1_8H_TOP_4XXLL} />
           <Image source={getImage('redone')} style={styles.W_5XXL_H_5XXL_ML_6XSL_TOP_6XSL_ROT_40} />
         </View>
         <View style={styles.FD_R}>
           <Image source={getImage('goldone')} style={styles.W_5XXML_H_5XXML_ML_S_TOP_1H_LEFT_10XL_ROT_70} />
           <View style={styles.FD_R}>
             <Image source={getImage('redone')} style={styles.W_5XXL_H_5XXL_ML_S_LEFT_10XL_TOP_6XL_ZINDEX_10_ROT_160} />
             <Image source={getImage('bag')} style={styles.W_1_89H_H_1_8H_ML_S} />
             <Image source={getImage('percent')} style={styles.W_6XSL_H_6XSL_LEFT_NEG_9XML_TOP_6XSL} />
           </View>
           <Image source={getImage('redone')} style={styles.W_3XL_H_3XL_LEFT_NEG_10XL_TOP_1_1H_ROT_110} />
         </View>
         </View>
  )
}
export default LP_OrderGiftBag