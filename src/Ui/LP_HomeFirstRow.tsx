import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import Search from '../assets/Images/SVGS/Search'
import Bell from '../assets/Images/SVGS/Bell'
import { useNavigation } from '@react-navigation/native'

const LP_HomeFirstRow = ({ onSearchPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.FD_R_AI_C}>
      <View style={styles.F_1}>
        <Text style={styles.C_B_FS_FW_PL_PT}>
          Hey, Jackob
        </Text>
        <Text style={styles.C_PF}>its amazing day to scan and earn more</Text>
        <Text style={styles.C_PF}>points</Text>
      </View>
      <Pressable onPress={onSearchPress}>
        <View style={styles.iconWrapper}>
          <Search />
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Notification' as never)}>
        <View style={styles.iconWrapper}>
          <Bell />
        </View>
      </Pressable>
    </View>
  )
}

export default LP_HomeFirstRow