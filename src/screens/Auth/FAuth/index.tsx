import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import rfSpacing from '../../../theme/rfSpacing';
import colors from '../../../theme/colors';
import Logoauthone from '../../../assets/Images/SVGS/Logoauthone'
import Logoauthtwo from '../../../assets/Images/SVGS/Logoauthtwo';
import LP_Title from '../../../Ui/LP_Title';
import LP_Description from '../../../Ui/LP_Description';
import LP_ButtonOrange from '../../../Ui/LP_ButtonOrange';
import styles from '../styles';
import LP_LottieFullS from '../../../Ui/LP_LottieFullS';
type Props = {
  navigation: any;
};
export default function App({ navigation }: Props) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendPressed, setResendPressed] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleVerify = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ButtomTab');
    }, 2000);
  };
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
    <LinearGradient
      colors={['#ECECEC', '#FCD7CD']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.F1_JC_C_AI_C}
    >
      {loading && <LP_LottieFullS />}
      <View style={styles.card}>
        <View style={{
          flexDirection: "row", alignSelf: "center",
          width: rfSpacing['1.7H'], height: rfSpacing['1.7H'],
          backgroundColor: colors.LP_logobgauth,
          borderRadius: rfSpacing['xxl'], marginTop: rfSpacing['4xl']
        }}>
          <View style={styles.logo}>
            <Logoauthone />
          </View>
          <View style={styles.SecondLogo}>
            <Logoauthtwo />
          </View>
        </View>
        <LP_Title Title={'Authentication'} />
        <View style={{ width: rfSpacing['3.35H'], alignSelf: "center" }}>
          <LP_Description Title={'Enter the 6 digit code that has been sent on your email.'} />
        </View>
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
        <LP_ButtonOrange
          title="Verify Account"
          onPress={handleVerify} />
        <View style={styles.FD_R_AI_C_AS_C}>
          <Text style={styles.C_FS_FW_MT}>Didn't get code?</Text>
          <Text style={styles.Resendtext}>  Resend Code </Text>
        </View>
      </View>
    </LinearGradient>
  );
}


