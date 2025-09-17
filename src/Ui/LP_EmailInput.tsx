import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import { useState } from 'react'
import { useIsFocused } from '@react-navigation/native';
import colors from '../theme/colors';


const LP_EmailInput = () => {
  const [Email, setEmail] = useState('');
    const isFocused = useIsFocused();
  
    
    React.useEffect(() => {
      if (isFocused) {
        setEmail('');
      }
    }, [isFocused]);
  return (
    <View>
      <TextInput
       placeholder='Enter email address'
        placeholderTextColor={colors.LP_PlacehOlderText}
         style={styles.input}
         onChangeText={setEmail}
         value={Email}
          />
    </View>
  )
}

export default LP_EmailInput

