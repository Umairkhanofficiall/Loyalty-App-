import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import ArrowModel from '../assets/Images/Order/ArrowModel';
import LP_LottieButtonS from './LP_LottieButtonS';
import ThirdModel from '../assets/Images/Order/ThirdModel';
import { getImage } from '../assets/Images/images';
import LP_OrderFModelDetail from './LP_OrderFModelDetail';
import LP_OrderSModelDetail from './LP_OrderSModelDetail';

type Props = {
  status: string;
  isModalVisible: boolean;
  setIsModalVisible: (val: boolean) => void;
  isSecondModalVisible: boolean;
  setIsSecondModalVisible: (val: boolean) => void;
  handleSwipeSuccess: () => void;
  navigation: any;
  styles: any;
};

const LP_OrderSwipeButton = ({
  status,
  isModalVisible,
  setIsModalVisible,
  isSecondModalVisible,
  setIsSecondModalVisible,
  handleSwipeSuccess,
  navigation,
  styles,
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
              height={55}
              railBackgroundColor="#E85D43"
              railBorderColor="#E85D43"
              railFillBackgroundColor="#fffcfcff"
              railFillBorderColor="#e43e3eff"
              thumbIconBackgroundColor="#fff"
              thumbIconBorderColor="#fff"
              title="Slide to Confirm Order"
              titleColor="#fff"
              titleFontSize={15}
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
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10}}>
              <Image source={getImage('rightface')} style={{width:20,height:20}} />
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