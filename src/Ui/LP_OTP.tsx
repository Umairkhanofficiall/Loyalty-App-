import { View, Text,TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import styles from '../screens/Auth/styles';
import type { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';



const LP_OTP = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef<Array<TextInput | null>>([]);
  const handleChangeText = (text: string, index: number) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text !== '' && index < 5) {
        inputs.current[index + 1]?.focus();
      }
    }
  };
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };
  return (
    <View style={styles.boxcontainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.WH_BW_BR_BC_FS_TA_C_FF}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              ref={(ref) => {
                inputs.current[index] = ref;
              }}
            />
          ))}
        </View>
  )
}

export default LP_OTP