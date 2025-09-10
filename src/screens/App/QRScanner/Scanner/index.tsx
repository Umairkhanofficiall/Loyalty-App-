import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { getImage } from '../../../../assets/Images/images';
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../../navigation/StackNavigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabParamList } from '../../../../navigation/ButtomTab';
import Flash from '../../../../assets/Images/Scanner/Flash';
import LP_LottieFullS from '../../../../Ui/LP_LottieFullS';
import styles from '../../../Auth/styles';

type ScannerNavigationProp = StackNavigationProp<RootStackParamList, 'Scanner'>;

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, 'Points'>,
    StackNavigationProp<RootStackParamList>
  >;
};

export default function Scanner({ navigation }: Props) {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [showLottie, setShowLottie] = useState(false);

  const onBarCodeRead = (e: any) => {
    if (!scannedData) {
      setScannedData(e.data);
      setShowLottie(true);

      setTimeout(() => {
        setShowLottie(false);
        setShowModal(true);
      }, 3500);
    }
  };

  const resetScanner = () => {
    setScannedData(null);
    setShowModal(false);
    setShowLottie(false);
  };

  return (
    <View style={styles.F_1}>
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
          <Flash fill={flashOn ? "#ffff00ff" : "white"} />
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
                { backgroundColor: pressed ? "#000000ff" : "transparent" }
              ]}
            >
              <Image
                source={getImage('cross')}
                style={[
                  styles.W_6XSL_H_6XSL_RM_C,
                  { tintColor: pressed ? "#000" : "#878585ff" }
                ]}
              />
            </View>
          )}
        </Pressable>
      </RNCamera>

      {showLottie && <LP_LottieFullS />}

      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.MODAL_OVERLAY}>
          <View style={styles.MODAL_BOX}>
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
            <TouchableOpacity style={styles.MODAL_BUTTON} onPress={resetScanner}>
              <View style={styles.ROW}>
                <Text style={styles.MODAL_BUTTON_TEXT}>Scan Next Item</Text>
                <Image source={getImage('qrcode')} style={styles.W_3XL_H_3XL_MT_XMS_ML_M_TINT_W} />
              </View>
            </TouchableOpacity>

            <Pressable
              style={styles.MODAL_BUTTON_TWO}
              onPress={() => navigation.navigate('Points')}
            >
              <View style={styles.ROW}>
                <Text style={styles.MODAL_BUTTON_TEXT_TWO}>Go Scan History</Text>
                <Image source={getImage('arrow')} style={styles.W_6XL_H_6XL_TOP_NXS_ML_XS_TINT_HC} />
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}


