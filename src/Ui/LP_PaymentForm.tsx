import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../screens/Auth/styles';
type Props = {
  points: string;
  setPoints: (val: string) => void;
  calculatedAmount: string;
  wallet: string;
  setWallet: (val: string) => void;
  holderName: string;
  setHolderName: (val: string) => void;
  accountNumber: string;
  setAccountNumber: (val: string) => void;
  validateForm: () => boolean;
  handleProceed: () => void;
};
const LP_PaymentForm = ({
  points,
  setPoints,
  calculatedAmount,
  wallet,
  setWallet,
  holderName,
  setHolderName,
  accountNumber,
  setAccountNumber,
  validateForm,
  handleProceed,
}: Props) => {
  return (
    <View>
      <View style={styles.FD_R_GAP_1_2H}>
        <Text style={styles.FS_L_CL_HC}>Your Points</Text>
        <Text style={styles.FS_L_CL_HC}>Your Amount (PKR)</Text>
      </View>
      <View style={styles.FD_R_AI_C_MB_XML_MT_M}>
        <TextInput
          placeholder="Enter Points"
          placeholderTextColor="#999"
          keyboardType="numeric"
          style={styles.F_1_BG_W_BR_M_P_L_FS_L_CL_HC_E_XXXS}
          value={points}
          onChangeText={setPoints}
        />
        <Text style={styles.MX_M_FS_XXL_TOP_NXL_FW_BOLD_CL_HC}>=</Text>
        <TextInput
          placeholder="0"
          placeholderTextColor="#999"
          style={styles.F_1_BG_W_BR_M_P_L_FS_L_CL_HC_E_XXXS}
          editable={false}
          value={calculatedAmount}
        />
      </View>
      <Text style={styles.CL_HC_FS_XL_FW_600_MB_XS_MT_4XL}>Select Wallet</Text>
      <TouchableOpacity
        style={[styles.BG_W_BR_M_P_XML_MT_M, wallet === 'JazzCash' && styles.BC_MO_BW_1_5]}
        onPress={() => setWallet('JazzCash')}
      >
        <Text style={styles.FS_L_FW_600_CL_HC}>JazzCash</Text>
      </TouchableOpacity>
      {wallet === 'JazzCash' && (
        <View style={styles.MT_M}>
          <TextInput
            placeholder="Wallet Holder Name"
            placeholderTextColor="#999"
            style={styles.BG_W_BR_M_P_M_MB_M_CL_HC}
            value={holderName}
            onChangeText={setHolderName}
          />
          <TextInput
            placeholder="Wallet / Account Number"
            placeholderTextColor="#9b9999ff"
            keyboardType="numeric"
            style={styles.BG_W_BR_M_P_M_MB_M_CL_HC}
            value={accountNumber}
            onChangeText={setAccountNumber}
          />
        </View>
      )}
      <TouchableOpacity
        style={[styles.BG_W_BR_M_P_XML_MT_M, wallet === 'EasyPaisa' && styles.BC_MO_BW_1_5]}
        onPress={() => setWallet('EasyPaisa')}
      >
        <Text style={styles.FS_L_FW_600_CL_HC}>EasyPaisa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.BG_MO_PV_L_BR_5XL_MT_5XL_AI_C, { opacity: validateForm() ? 1 : 0.4 }]}
        onPress={handleProceed}
        disabled={!validateForm()}
      >
        <Text style={styles.CL_W_FW_BOLD}>Proceed </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LP_PaymentForm;


