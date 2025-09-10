import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';
import styles from '../../../Auth/styles';
import LP_LoyaltyMainThree from '../../../../Ui/LP_LoyaltyMainThree';
import LP_RedeeemButtons from '../../../../Ui/LP_RedeeemButtons';
const Points = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerRedeem}>
      <ScrollView contentContainerStyle={styles.PB_10XL}>
        <LP_LoyaltyMainThree/>
        <Text style={styles.textForOptions}>Select Option to Redeem</Text>
        <LP_RedeeemButtons/>
      </ScrollView>
    </View>
  )
}
export default Points

