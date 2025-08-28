import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../screens/Auth/styles';
import { useIsFocused } from '@react-navigation/native';

const LP_PasswordInput = () => {
  const [password, setPassword] = useState('');
  const isFocused = useIsFocused();

  
  React.useEffect(() => {
    if (isFocused) {
      setPassword('');
    }
  }, [isFocused]);

  return (
    <View>
      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="#798692"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
    </View>
  );
};

export default LP_PasswordInput;
