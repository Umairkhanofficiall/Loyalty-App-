import React, {  useState } from 'react';
import { View, Text} from 'react-native';
import colors from '../../../theme/colors';
import LP_Title from '../../../Ui/LP_Title';
import LP_Description from '../../../Ui/LP_Description';
import LP_ButtonOrange from '../../../Ui/LP_ButtonOrange';
import styles from '../styles';
import LP_LottieFullS from '../../../Ui/LP_LottieFullS';
import LP_LinearGradient from '../../../Ui/LP_LinearGradient';
import LP_AuthLogo from '../../../Ui/LP_AuthLogo';
import LP_OTP from '../../../Ui/LP_OTP';
type Props = {
  navigation: any;
};
export default function App({ navigation }: Props) {
  const [loading, setLoading] = useState(false);
  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ButtomTab');
    }, 2000);
  };
  return (
    <LP_LinearGradient
      colors={[colors.LP_LoginGradientone, colors.LP_LoginGradientTwo]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.F1_JC_C_AI_C} >
      {loading && <LP_LottieFullS />}
      <View style={styles.card}>
       <LP_AuthLogo/>
        <LP_Title Title={'Authentication'} />
        <View style={styles.MH_XML_AS_C}>
          <LP_Description Title={'Enter the 6 digit code that has been sent on your email.'} />
        </View>
       <LP_OTP/>
        <LP_ButtonOrange
          title="Verify Account"
          onPress={handleVerify} />
        <View style={styles.FD_R_AI_C_AS_C}>
          <Text style={styles.C_FS_FW_MT}>Didn't get code?</Text>
          <Text style={styles.Resendtext}>  Resend Code </Text>
        </View>
      </View>
    </LP_LinearGradient>
  );
}