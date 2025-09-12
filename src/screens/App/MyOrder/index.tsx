import React from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet,FlatList } from 'react-native';
import { getImage } from '../../../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import LP_MyOrdersecondRow from '../../../Ui/LP_MyOrdersecondRow';
import LP_OrderGraph from '../../../Ui/LP_OrderGraph';
import LP_OrderList from '../../../Ui/LP_OrderList';
import OrderBox from '../../../assets/Images/Order/OrderBox';
import styles from '../../Auth/styles';
const orders = [
  {
    id: '1',
    status: 'inprocess',
    orderId: 'Order #: 991264',
    date: '12-04-2025 | 1:04PM',
    title: 'Cup Cake Large - Cotton',
    icon: <OrderBox />,
  },
  {
    id: '2',
    status: 'completed',
    orderId: 'Order #:991278',
    date: '13-04-2025 | 11:20AM',
    title: 'Chocolate Pastry Small',
    icon: <OrderBox />,
  },
  {
    id: '3',
    status: 'rejected',
    orderId: 'Order #:991289',
    date: '14-04-2025 | 5:30PM',
    title: 'Blueberry Muffin',
    icon: <OrderBox />,
  },
  {
    id: '4',
    status: 'inprocess',
    orderId: 'Order #:991295',
    date: '15-04-2025 | 2:10PM',
    title: 'Strawberry Donut',
    icon: <OrderBox />,
  },
  {
    id: '5',
    status: 'completed',
    orderId: 'Order #:991301',
    date: '16-04-2025 | 4:45PM',
    title: 'Vanilla Ice Cream',
    icon: <OrderBox />,
  },
];
const Order = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.BG_F_xxxs}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LP_OrderList item={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <View style={styles.W_385H_H_2H_BG_MO_BBR_4XL_BBSR_4XL}>
              <Text style={styles.C_W_FS_4XL_TA_C_MT_4XXM}>My Order</Text>
            </View>
            <LP_OrderGraph />
            <LP_MyOrdersecondRow />
          </>
        )}
         contentContainerStyle={styles.PB_10XL}
      />
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


