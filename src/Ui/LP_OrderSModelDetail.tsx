import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import ThirdModel from '../assets/Images/Order/ThirdModel'
import { getImage } from '../assets/Images/images'
import { useNavigation } from '@react-navigation/native'

const LP_OrderSModelDetail = () => {
    const navigation = useNavigation();
  return (
     <View style={styles.modalBackground}>
        <View style={styles.modalContainertwo}>
          <View style={styles.ThirdModelContainer}>
            <ThirdModel />
          </View>
          <Text style={styles.OrderConfirmedText}>
            Order Confirmed
          </Text>
          <View style={styles.ThanksForOrderContainer}>
            <Text style={styles.ThanksForOrderText}>Thanks for your order. Its in queue and will  </Text>
            <Text style={styles.ThanksForOrderText}>be delivered shortly.</Text>
          </View>
          <View style={styles.OrderNumberContainer}>
            <Text style={styles.OrderNumberText}>Order Number : 1987091575757</Text>
            <Image source={getImage('copy')} style={styles.W_XL_H_XL_ResizeContain_MarginTop_XSS_MarginLeft_XXS} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Order' as never)}
            style={styles.DoneButton}
          >
            <Text style={styles.submitTexttwo}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default LP_OrderSModelDetail