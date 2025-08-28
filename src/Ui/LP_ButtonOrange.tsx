import { Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from '../screens/Auth/styles';

type Props = {
  onPress?: () => void;   
  title: string;          // <-- naya prop
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
          { backgroundColor: signInPressed ? '#de4e34ff' : '#f58d7aff' },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default LP_ButtonOrange;
