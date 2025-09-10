import React from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { getImage } from '../../../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import LP_MyOrdersecondRow from '../../../Ui/LP_MyOrdersecondRow';
import LP_OrderGraph from '../../../Ui/LP_OrderGraph';
import LP_OrderList from '../../../Ui/LP_OrderList';
import styles from '../../Auth/styles';

const Order = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.BG_F_xxxs}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.W_385H_H_2H_BG_MO_BBR_4XL_BBSR_4XL}>
          <Text style={styles.C_W_FS_4XL_TA_C_MT_4XXM}>My Order</Text>
        </View>
        <LP_OrderGraph />
        <LP_MyOrdersecondRow />
        <LP_OrderList />

      </ScrollView>
      <Pressable onPress={() => navigation.navigate('PlaceOrder' as never)}>
        <Image
          source={getImage('buttoncircle')}
          style={styles.H_6XSL_W_6XSL_ML_310H_MT_135H}
        />
      </Pressable>
    </View>
  );
};

export default Order;


