import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
import OrderBox from '../assets/Images/Order/OrderBox';

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

const statusMap = {
  inprocess: { borderColor: '#EAAA15', textColor: '#FFCB00', minWidth: rfSpacing['8xl'] },
  completed: { borderColor: '#2AC87C', textColor: '#2AC87C', minWidth: rfSpacing['8xl'] },
  rejected: { borderColor: '#EA3454', textColor: '#EA3454', minWidth: rfSpacing['7xl'] },
};

const LP_OrderList = () => (
  <FlatList
    data={orders}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.PB_10XL}
    renderItem={({ item }) => {
      const normalizedStatus = item.status.trim().toLowerCase();
      const statusStyle = statusMap[normalizedStatus] || {
        borderColor: '#000000ff',
        textColor: colors.LP_HeadingColor,
        minWidth: rfSpacing['8xl'],
      };

      return (
        <View style={styles.W_3_35H_H_95L_BG_W_BW_XXXS_BC_DBD9D9FF_AS_C_MT_XL_BR_XL}>
          <View style={styles.FD_R_P_L_AI_C}>
            <View style={styles.H_5XL_W_5XL_BG_BORDER_BR_XXL_MT_NEG_4XL_JC_C_AS_C}>
              <View style={styles.F_1_JC_C_AS_C}>
                {item.icon}
              </View>
            </View>
            <View style={styles.F_1_ML_L}>
              <Text style={styles.FS_L_FW_600_CL_HC_MT_XMS}>
                {item.orderId}
              </Text>
              <Text style={styles.FS_L_CL_NG}>
                {item.date}
              </Text>
              <Text style={styles.FS_L_FW_600_CL_HC_MT_MMS}>
                {item.title}
              </Text>
            </View>
            <Text
              style={[
                styles.STATUS_TEXT,
                {
                  color: statusStyle.textColor,
                  borderColor: statusStyle.borderColor,
                  minWidth: statusStyle.minWidth,
                },
              ]}
            >
              {item.status}
            </Text>
          </View>
        </View>
      );
    }}
  />
);

export default LP_OrderList;

const styles = StyleSheet.create({
  PB_10XL: {
    paddingBottom: rfSpacing['10xl'],
  },
  W_3_35H_H_95L_BG_W_BW_XXXS_BC_DBD9D9FF_AS_C_MT_XL_BR_XL: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['95l'],
    backgroundColor: colors.LP_White,
    borderWidth: rfSpacing['xxxs'],
    borderColor: '#dbd9d9ff',
    alignSelf: "center",
    marginTop: rfSpacing['xl'],
    borderRadius: rfSpacing['xl'],
  },
  FD_R_P_L_AI_C: {
    flexDirection: 'row',
    padding: rfSpacing['l'],
    alignItems: 'center',
  },
  H_5XL_W_5XL_BG_BORDER_BR_XXL_MT_NEG_4XL_JC_C_AS_C: {
    height: rfSpacing['5xl'],
    width: rfSpacing['5xl'],
    backgroundColor: colors.LP_BorderBG,
    borderRadius: rfSpacing['xxl'],
    marginTop: -rfSpacing['4xl'],
    justifyContent: 'center',
    alignSelf: "center",
  },
  F_1_JC_C_AS_C: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: "center",
  },
  F_1_ML_L: {
    flex: 1,
    marginLeft: rfSpacing['l'],
  },
  FS_L_FW_600_CL_HC_MT_XMS: {
    fontSize: rfSpacing['l'],
    fontWeight: '600',
    color: colors.LP_HeadingColor,
    marginTop: rfSpacing['xms'],
  },
  FS_L_CL_NG: {
    fontSize: rfSpacing['l'],
    color: colors.LP_NaturalGray,
  },
  FS_L_FW_600_CL_HC_MT_MMS: {
    fontSize: rfSpacing['l'],
    fontWeight: '600',
    color: colors.LP_HeadingColor,
    marginTop: rfSpacing['mms'],
  },
  STATUS_TEXT: {
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: rfSpacing['xms'],
    marginRight: rfSpacing['xss'],
    marginTop: -rfSpacing['6xl'],
    fontSize: rfSpacing['m'],
  },
});