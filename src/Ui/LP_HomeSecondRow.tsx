import { View, Text,Pressable,Image } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import LP_MainGIf from './LP_MainGIf'
import { getImage } from '../assets/Images/images'
import { useNavigation } from '@react-navigation/native'


const LP_HomeSecondRow = () => {
    const navigation = useNavigation();
  return (
   <View>
        <Text style={styles.text}>Total Points Earned </Text>
        <View style={styles.FD_R_AS_C}>
          <View style={styles.MT_M}>
          <LP_MainGIf/>
          </View>
          <Text style={styles.C_FS_TA_FW}>12,500</Text>
          <Pressable onPress={() => navigation.navigate('OrderReceive' as never)}>
            <Image source={getImage('signature')} style={styles.icon} />
          </Pressable>
          </View>
        </View>
  )
}

export default LP_HomeSecondRow