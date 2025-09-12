import { View, Text,TouchableOpacity,Pressable } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import { useState } from 'react'
import colors from '../theme/colors'


const LP_LoginRememberButton = () => {
     const [rememberMe, setRememberMe] = useState(false);
  const [forgotPressed, setForgotPressed] = useState(false);
  return (
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
                { backgroundColor: forgotPressed ? colors.LP_ForgotButtonTouch : colors.LP_White }
              ]}
            >
              <Text style={[styles.forgot]}>
                Forgot password?
              </Text>
            </Pressable>
          </View>
  )
}

export default LP_LoginRememberButton