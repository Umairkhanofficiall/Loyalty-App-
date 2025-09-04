import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import rfSpacing from '../../../theme/rfSpacing';
import Spacing from '../../../theme/Spacing';
import colors from '../../../theme/colors';
import { StatusBar } from "react-native";
import LP_Title from '../../../Ui/LP_Title';
import styles from '../styles';
import LP_Description from '../../../Ui/LP_Description';
import LP_EmailInput from '../../../Ui/LP_EmailInput';
import LP_PasswordInput from '../../../Ui/LP_PasswordInput';
import LP_ButtonOrange from '../../../Ui/LP_ButtonOrange';


type Props = {
  navigation: any;
};


export default function App({ navigation }: Props) {

  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPressed, setForgotPressed] = useState(false);
  

  return (
    // <>
    //   <StatusBar
    //     translucent={true}
    //     backgroundColor="white"
    //     barStyle="dark-content"
    //   />

      <LinearGradient
        colors={['#ECECEC', '#FCD7CD']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.F1_JC_C_AI_C}
      >
        <View style={styles.SubContainer}>
          <LP_Title
            Title={'Login'}
          />
          <View style={{width:rfSpacing['2.8H'], alignSelf:"center"}}>
          <LP_Description
            Title={'Please enter your email address and password below.'} /></View>


          <LP_EmailInput />
          <LP_PasswordInput />

          <View style={styles.rememberRow}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={[
                styles.checkbox,
                rememberMe && styles.checkboxChecked
              ]}
            >
              {rememberMe && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember me</Text>
            <Pressable
              onPressIn={() => setForgotPressed(true)}
              onPressOut={() => setForgotPressed(false)}
              style={[
                styles.forgotContainer,
                { backgroundColor: forgotPressed ? '#eaedeeff' : '#fff' }
              ]}
            >
              <Text style={[styles.forgot]}>
                Forgot password?
              </Text>
            </Pressable>
          </View>

          <LP_ButtonOrange 
           title="Sign in"
          onPress={() => navigation.navigate('FAuth')} />
        </View>
      </LinearGradient>
    // </> 
  );
}


