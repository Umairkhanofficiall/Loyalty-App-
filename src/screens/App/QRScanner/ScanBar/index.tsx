import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { getImage } from '../../../../assets/Images/images'
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../theme/colors';
import styles from '../../../Auth/styles';
import LP_LinearGradient from '../../../../Ui/LP_LinearGradient';
const ScanBar = () => {
  const navigation = useNavigation();
  return (
    <LP_LinearGradient
      colors={[
        colors.LP_HeadingColor, colors.LP_HeadingColor, colors.LP_HeadingColor, colors.LP_HeadingColor, colors.LP_HeadingColor,colors.LP_Mainorange, colors.LP_HeadingColor, colors.LP_HeadingColor, colors.LP_HeadingColor,colors.LP_HeadingColor, colors.LP_HeadingColor
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.F_1}>
      <Text style={styles.TA_C_PT_4XLL_FS_4XL_CL_W}>Scan QR Code</Text>
      <View style={styles.W_5XXSL_H_5XXSL_BG_FLASH_BR_3XL_JC_C_AI_C_MT_5XXSL_ML_3_27H}>
        <Image source={getImage('flash')} style={styles.W_XL_H_3XL} />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Scanner' as never)}
        style={styles.AI_C_JC_C_MT_7XL}>
        <View>
          <Text style={styles.CL_W_MT_10XL_W_2_5H_H_4XXLL_BW_XXXS_BR_ML_BC_W_TA_C_PT_XMS}>
            Bring QR code within the scan box
          </Text>
        </View>
        <View style={styles.W_2_7H_H_2_7H_BW_XXS_BC_W_BR_M_OV_H_JC_C_AI_C_MT_ML} />
      </Pressable>
      <Pressable onPress={() => navigation.goBack()}>
        {({ pressed }) => (
          <Image
            source={getImage('cross')}
            style={[
              styles.W_7XL_H_7XL_MT_10XL_AS_C,
              { tintColor: pressed ? colors.LP_White : colors.LP_NaturalGray }
            ]}
          />
        )}
      </Pressable>
    </LP_LinearGradient>
  )
}
export default ScanBar

