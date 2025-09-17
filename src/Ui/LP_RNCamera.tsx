import { View, Text, Pressable,Image } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import { RNCamera } from 'react-native-camera';
import colors from '../theme/colors';
import { getImage } from '../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Flash from '../assets/Images/Scanner/Flash';

const LP_RNCamera = () => {
    const navigation=useNavigation()
    const [scannedData, setScannedData] = useState<string | null>(null);
      const [flashOn, setFlashOn] = useState(false);
      const onBarCodeRead = (e: any) => {
          if (!scannedData) {
            setScannedData(e.data);}
        };
  return (
    <View>
    <RNCamera
        style={styles.F_1}
        type={RNCamera.Constants.Type.back}
        flashMode={
          flashOn
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}
      >
        <Text style={styles.TA_C_PT_4XLL_FS_4XL_CL_W}>Scan QR Code</Text>

        <Pressable
          style={styles.W_5XXSL_H_5XXSL_BG_FLASH_BR_3XL_JC_C_AI_C_MT_5XXSL_ML_3_27H}
          onPress={() => setFlashOn(!flashOn)}
        >
          <Flash fill={flashOn ? colors.LP_FlashColor : colors.LP_White} />
        </Pressable>

        <View style={styles.AI_C_JC_C_MT_7XL}>
          <Text style={styles.CL_W_MT_10XL_W_2_5H_H_4XXLL_BW_XXXS_BR_ML_BC_W_TA_C_PT_XMS}>
            Bring QR code within the scan box
          </Text>
          <View style={styles.W_2_7H_H_2_7H_BW_XXS_BC_W_BR_M_OV_H_JC_C_AI_C_MT_ML} />
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.CROSS_PRESSABLE}
        >
          {({ pressed }) => (
            <View
              style={[
                styles.CROSS_WRAPPER,
                { backgroundColor: pressed ? colors.LP_HeadingColor : "transparent" }
              ]}
            >
              <Image
                source={getImage('cross')}
                style={[
                  styles.W_6XSL_H_6XSL_RM_C,
                  { tintColor: pressed ? colors.LP_HeadingColor : colors.LP_ImagetintColor }
                ]}
              />
            </View>
          )}
        </Pressable>
      </RNCamera>
    </View>
  )
}

export default LP_RNCamera