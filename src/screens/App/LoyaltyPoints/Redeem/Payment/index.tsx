import React, { useState } from 'react';
import { View, Text, ScrollView, Modal } from 'react-native';
import ScannerLoader from '../../../../../Ui/LP_ScannerLoader';
import styles from '../../../../Auth/styles';
import LP_BuyItemsGoBack from '../../../../../Ui/LP_BuyItemsGoBack';
import LP_PaymentModel from '../../../../../Ui/LP_PaymentModel';
import LP_PaymentForm from '../../../../../Ui/LP_PaymentForm';
const Payment = () => {
  const [points, setPoints] = useState('');
  const [wallet, setWallet] = useState('');
  const [holderName, setHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showLottie, setShowLottie] = useState(false);
  const availablePoints = 12500;
  const rate = 0.54;
  const calculatedAmount = points ? (parseInt(points) * rate).toFixed(0) : '0';
  const validateForm = () => {
    if (!points || parseInt(points) <= 0) return false;
    if (!wallet) return false;
    if (wallet && (!holderName || !accountNumber)) return false;
    return true;
  };
  const handleProceed = () => {
    if (validateForm()) {
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
        setShowModal(true);
      }, 2000);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.P_3XL_BG_CONTAINER_FG_1}>
      <View style={styles.MT_3XL_ML_l}>
        <LP_BuyItemsGoBack title="Redeem to Cash" />
      </View>
      <Text style={styles.FS_3XL_FW_600_MB_XS_CL_HC_PT_M}>Ready to Redeem Cash?</Text>
      <Text style={styles.CL_NG_MB_3XL_MT_M_FS_L}>Convert your points to cash in just a couple steps.</Text>
      <View style={styles.FD_R_AI_C_MB_XML_MT_M}>
        <View style={styles.F_1_BG_W_BR_XL_P_XML_AI_C_E_XXXS_H_9XL}>
          <Text style={styles.CL_NG_FS_L_FW_400_MB_XS_LEFT_3XL}>Available Points</Text>
          <Text style={styles.CL_MO_FS_3XL_FW_600_LEFT_5XXSL}>{availablePoints}</Text>
        </View>
        <Text style={styles.MX_M_FS_XXL_TOP_NXL_FW_BOLD_CL_HC}>=</Text>
        <View style={styles.F_1_BG_W_BR_XL_P_XML_AI_C_E_XXXS_H_9XL}>
          <Text style={styles.CL_NG_FS_L_FW_400_MB_XS_LEFT_MS}>Equivalent to (PKR)</Text>
          <Text style={styles.CL_AMOUNT_FS_3XL_FW_600_LEFT_5XXSL}>{(availablePoints * rate).toFixed(0)}</Text>
        </View>
      </View>
      <LP_PaymentForm
        points={points}
        setPoints={setPoints}
        calculatedAmount={calculatedAmount}
        wallet={wallet}
        setWallet={setWallet}
        holderName={holderName}
        setHolderName={setHolderName}
        accountNumber={accountNumber}
        setAccountNumber={setAccountNumber}
        validateForm={validateForm}
        handleProceed={handleProceed}
      />
      {showLottie && <ScannerLoader />}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <LP_PaymentModel />
      </Modal>
    </ScrollView>
  );
};
export default Payment;


