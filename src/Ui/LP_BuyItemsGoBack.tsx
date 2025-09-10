import { View, Text,Pressable,Image } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import { getImage } from '../assets/Images/images'
import { useNavigation } from '@react-navigation/native'
type LP_BuyItemsGoBackProps = {
  title: string;
};
const LP_BuyItemsGoBack = ({ title }: LP_BuyItemsGoBackProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.P_M_FD_R_GAP_M_MT_XXL}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={getImage('rightface')} style={styles.W_5XL_H_5XL} />
      </Pressable>
      <Text style={styles.FS_4XL_FW_700_CL_222}>{title}</Text>
    </View>
  );
};

export default LP_BuyItemsGoBack