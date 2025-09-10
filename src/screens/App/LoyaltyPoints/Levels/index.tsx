import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react';
import TabBar from '../../../../Ui/LP_ToggleButton';
import L_P_LevelsContainer2 from '../../../../Ui/LP_LevelsContainer2';
import LP_MainPointsCard from '../../../../Ui/LP_MainPointsCard';
import LP_LevelsContainer3 from '../../../../Ui/LP_LevelsContainer3';
import styles from '../../../Auth/styles';
import LP_LoyaltyMainThree from '../../../../Ui/LP_LoyaltyMainThree';

const Points = () => {
  return (
    <View style={styles.BG_F_1}>
      <ScrollView contentContainerStyle={styles.PB_1_6H}>
        <LP_LoyaltyMainThree/>
        <L_P_LevelsContainer2 />
        <View>
          <LP_LevelsContainer3 />
        </View>
      </ScrollView>
    </View>
  )
}
export default Points













