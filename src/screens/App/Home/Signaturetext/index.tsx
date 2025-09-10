import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Signature from 'react-native-signature-canvas';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../Auth/styles';
export default function Signaturetext() {
  const navigation= useNavigation();
  const ref = useRef(null);
  const webStyle = ` .m-signature-pad--description {
    color: #E85D43 !important;
    font-size: 18px !important;
    font-weight: bold !important;
    text-align: center !important;
  }
  .m-signature-pad--footer {
    margin: 10px !important;
  }`;
  const [signature, setSignature] = useState(null);
  const handleOK = (sig) => {
    setSignature(sig);
  };
  const handleClear = () => {
    if (ref.current) {
      ref.current.clearSignature();
    }
    setSignature(null);
  };
  const handleSaveManually = () => {
   
    ref.current?.readSignature();
  };
  return (
    <SafeAreaView style={styles.F_1_BG_ICONBG_PL_XXL}>
      <Text style={styles.FS_XXL_FW_600_MB_M_CL_MO}>Sign below with finger</Text>
      <View style={styles.F_1_BW_XXXS_BC_GYLT_BR_S_OV_H_E_XXS}>
        <Signature
          ref={ref}
          onOK={handleOK}
          autoClear={false}
          descriptionText="Sign above"
          webStyle={webStyle}
        />
      </View>
      <View style={styles.FD_R_JC_SB_MT_M}>
        <TouchableOpacity style={styles.F_1_P_M_MH_XS_BG_MO_BR_S_AI_C} onPress={handleClear}>
          <Text style={styles.CL_W_FW_600}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.F_1_P_M_MH_XS_BG_MO_BR_S_AI_C} onPress={() => navigation.navigate('Home' as never)}>
          <Text style={styles.CL_W_FW_600}>Save</Text>
        </TouchableOpacity>
      </View>
      {signature && (
        <Image
          resizeMode="contain"
          style={styles.W_3_37H_H_3_7H_BW_XXXS_BC_CCC_MT_3XL_AS_C}
          source={{ uri: signature }}
        />
      )}
    </SafeAreaView>
  );
}


