import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import styles from '../screens/Auth/styles';
import rfSpacing from '../theme/rfSpacing';
import OrderBox from '../assets/Images/Order/OrderBox';
const LP_OrderList = ({ item }) => {
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'inprocess':
        return { borderColor: colors.LP_YellowBorder, textColor: colors.LP_YellowText };
      case 'completed':
        return { borderColor: colors.LP_GreenBorder, textColor: colors.LP_GreenText };
      case 'rejected':
        return { borderColor: colors.LP_RedBorder, textColor: colors.LP_Redtext };
      default:
        return { borderColor: colors.LP_HeadingColor, textColor: colors.LP_HeadingColor };
    }
  };
  const statusStyle = getStatusStyle(item.status);
  return (
    <View style={styles.cardtwo}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <View style={styles.iconInner}>
            <OrderBox />
          </View>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.orderId}>{item.orderId}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text
          style={[
            styles.status,
            { color: statusStyle.textColor, borderColor: statusStyle.borderColor },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );
};
export default LP_OrderList;

