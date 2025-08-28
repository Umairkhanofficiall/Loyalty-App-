import { StyleSheet, Text, View,TextInput } from 'react-native'
import rfSpacing from '../theme/rfSpacing'
import colors from '../theme/colors'
import React from 'react'
import styles from '../screens/Auth/styles'
import { useState } from 'react'
import { useIsFocused } from '@react-navigation/native';


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
        placeholderTextColor="#798692"
         style={styles.input}
         onChangeText={setEmail}
         value={Email}
          />
    </View>
  )
}

export default LP_EmailInput

