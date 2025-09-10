import { View, Text, Modal,TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import styles from '../screens/Auth/styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const LP_PaymentModel = () => {
    const navigation = useNavigation();


  return (
 
                <View style={styles.F_1_BG_MODAL_JC_C_AI_C}>
                    <View style={styles.W_3_4H_H_4_9H_BG_W_P_3XL_BR_M_E_XS}>
                        <View>
                            <FastImage
                                style={styles.W_1_3H_H_1_3H_AS_C}
                                source={require("../assets/Images/Levels/giftwo.gif")}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <Text style={styles.CL_HC_FS_5XL_FW_500_TA_C_TOP_3XL}>
                            Successful!
                        </Text>
                        <Text style={styles.FS_4XXM_FW_600_CL_AMOUNT_TA_C_MT_3XL}>1890PKR</Text>
                        <View style={styles.PT_S_TOP_N3XL}>
                            <Text style={styles.CL_NG_FS_L_TA_C_MT_3XL_FF_PJS_W_3_05H_LS_06}>
                                amount request has been sent to our team. Once the request is approved, your balance will be credited into your give JazzCash account.
                            </Text>
                            <View style={styles.W_3_05H_H_8XL_BG_SOW_BR_XL_MT_XM}>
                                <Text style={styles.CL_HC_FS_XL_FW_500_TA_C_TOP_L}>jakob Rizza</Text>
                                <Text style={styles.CL_MO_FS_XL_FW_500_TA_C_TOP_3XL}>03035610661</Text>
                            </View>
                            <View style={styles.BBW_XXXS_BBC_E4EBF0_MV_M_MT_XXL} />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.PV_L_BR_6XL_MT_M_AI_C_BW_1_BC_BS_BG_W_TOP_N3XL]}
                        >
                            <Text style={styles.CL_HC_FW_600}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           
  )
}

export default LP_PaymentModel