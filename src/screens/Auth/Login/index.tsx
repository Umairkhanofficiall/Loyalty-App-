import {View, Alert} from 'react-native';
import LP_Title from '../../../Ui/LP_Title';
import styles from '../styles';
import LP_Description from '../../../Ui/LP_Description';
import LP_EmailInput from '../../../Ui/LP_EmailInput';
import LP_PasswordInput from '../../../Ui/LP_PasswordInput';
import LP_ButtonOrange from '../../../Ui/LP_ButtonOrange';
import colors from '../../../theme/colors';
import LP_LinearGradient from '../../../Ui/LP_LinearGradient';
import LP_LoginRememberButton from '../../../Ui/LP_LoginRememberButton';
import LP_Statusbar from '../../../Ui/LP_Statusbar';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";

type Props = {
  navigation: any;
  setIsLoggedIn?: (val: boolean) => void;
};
export default function App({ navigation, setIsLoggedIn }: Props) {
  const [email, setEmail] = useState(""); // 👈 username field (DummyJSON username use karta hai)
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: email, // 👈 DummyJSON me email nahi, "username"
        password: password,
      });

      if (res.data?.token) {
        await AsyncStorage.setItem("token", res.data.token);

        // Agar navigation state se login check kar rahe ho
        if (setIsLoggedIn) {
          setIsLoggedIn(true);
        } else {
          navigation.replace("ButtomTab"); // 👈 direct app ke andar bhej do
        }
      } else {
        Alert.alert("Login Failed", "Token not received");
      }
    } catch (err: any) {
      Alert.alert("Error", err?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <>
    <LP_Statusbar/>
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
          <LP_EmailInput value={email} onChangeText={setEmail} />
          <LP_PasswordInput value={password} onChangeText={setPassword} />
          <LP_LoginRememberButton/>
          <LP_ButtonOrange 
           title="Sign in"
          onPress={() => navigation.navigate('FAuth')} />
        </View>
      </LP_LinearGradient>
      </>
      
    
  );
}


