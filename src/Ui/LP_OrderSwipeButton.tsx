import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import ArrowModel from '../assets/Images/Order/ArrowModel';
import LP_LottieButtonS from './LP_LottieButtonS';
import { getImage } from '../assets/Images/images';
import LP_OrderFModelDetail from './LP_OrderFModelDetail';
import LP_OrderSModelDetail from './LP_OrderSModelDetail';
import colors from '../theme/colors';
import styles from '../screens/Auth/styles';
import rfSpacing from '../theme/rfSpacing';


type Props = {
  status: string;
  isModalVisible: boolean;
  setIsModalVisible: (val: boolean) => void;
  isSecondModalVisible: boolean;
  setIsSecondModalVisible: (val: boolean) => void;
  handleSwipeSuccess: () => void;
  navigation: any;
  
};

const LP_OrderSwipeButton = ({
  status,
  isModalVisible,
  setIsModalVisible,
  isSecondModalVisible,
  setIsSecondModalVisible,
  handleSwipeSuccess,
  navigation,
 
}: Props) => (
  <>
    <Modal
      transparent={true}
      animationType="slide"
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
           <LP_OrderFModelDetail/>
          {status === "initial" && (
            <SwipeButton
              height={rfSpacing['7xl']}
              railBackgroundColor={colors.LP_Mainorange}
              railBorderColor={colors.LP_Mainorange}
              railFillBackgroundColor={colors.LP_White}
              railFillBorderColor={colors.LP_Mainorange}
              thumbIconBackgroundColor={colors.LP_White}
              thumbIconBorderColor={colors.LP_White}
              title="Slide to Confirm Order"
              titleColor={colors.LP_White}
              titleFontSize={rfSpacing['xl']}
              onSwipeSuccess={handleSwipeSuccess}
              thumbIconComponent={() => (
                <View style={styles.ArrowModelContainer}>
                  <ArrowModel />
                </View>
              )}
            />
          )}
          {status === "loading" && (
            <View style={styles.loadingBtn}>
              <Text style={styles.loadingText}>   Confirming...</Text>
              <LP_LottieButtonS />
            </View>
          )}
          {status === "done" && (
            <View style={styles.successBtn}>
              <Text style={styles.successText}>Woohoo, it’s done! </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => setIsModalVisible(false)}
          >
            <View style={styles.FD_R_AI_C_JC_C_G_10}>
              <Image source={getImage('rightface')} style={styles.W_3XL_H_3XL} />
              <Text style={styles.submitTextone}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    <Modal
      visible={isSecondModalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setIsSecondModalVisible(false)}
    >
     <LP_OrderSModelDetail/>
    </Modal>
  </>
);

export default LP_OrderSwipeButton;