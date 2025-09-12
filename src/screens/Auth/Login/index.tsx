import {View} from 'react-native';
import LP_Title from '../../../Ui/LP_Title';
import styles from '../styles';
import LP_Description from '../../../Ui/LP_Description';
import LP_EmailInput from '../../../Ui/LP_EmailInput';
import LP_PasswordInput from '../../../Ui/LP_PasswordInput';
import LP_ButtonOrange from '../../../Ui/LP_ButtonOrange';
import colors from '../../../theme/colors';
import LP_LinearGradient from '../../../Ui/LP_LinearGradient';
import LP_LoginRememberButton from '../../../Ui/LP_LoginRememberButton';
import { StatusBar } from 'react-native';

type Props = {
  navigation: any;
};
export default function App({ navigation }: Props) {
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <LP_LinearGradient
        colors={[colors.LP_LoginGradientone, colors.LP_LoginGradientTwo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.F1_JC_C_AI_C}
      >
        <View style={styles.SubContainer}>
          <LP_Title
            Title={'Login'}
          />
          <View style={styles.W_28H_AS_C}>
          <LP_Description
            Title={'Please enter your email address and password below.'} /></View>
          <LP_EmailInput />
          <LP_PasswordInput />
          <LP_LoginRememberButton/>
          <LP_ButtonOrange 
           title="Sign in"
          onPress={() => navigation.navigate('FAuth')} />
        </View>
      </LP_LinearGradient>
    </> 
  );
}


