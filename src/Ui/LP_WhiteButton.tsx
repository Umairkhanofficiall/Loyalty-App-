import { Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from '../screens/Auth/styles';
import colors from '../theme/colors';

type Props = {
  onPress?: () => void;   
  title: string;         
};

const LP_WhiteButton = ({ onPress, title }: Props) => {
  const [signInPressed, setSignInPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setSignInPressed(true)}
      onPressOut={() => setSignInPressed(false)}
    >
      <Text
        style={[
          styles.WhiteButton,
          { backgroundColor: signInPressed ? colors.LP_White : colors.LP_White },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default LP_WhiteButton;
