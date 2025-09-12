import { Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from '../screens/Auth/styles';
import colors from '../theme/colors';

type Props = {
  onPress?: () => void;   
  title: string; 
};

const LP_ButtonOrange = ({ onPress, title }: Props) => {
  const [signInPressed, setSignInPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setSignInPressed(true)}
      onPressOut={() => setSignInPressed(false)}
    >
      <Text
        style={[
          styles.signin,
          { backgroundColor: signInPressed ? colors.LP_Mainorange : colors.LP_ActiveOrange },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default LP_ButtonOrange;
