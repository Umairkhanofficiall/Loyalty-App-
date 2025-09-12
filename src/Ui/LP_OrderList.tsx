import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
import OrderBox from '../assets/Images/Order/OrderBox';

const statusMap = {
  inprocess: { borderColor: colors.LP_YellowBorder, textColor: colors.LP_YellowText, minWidth: rfSpacing['8xl'] },
  completed: { borderColor: colors.LP_GreenBorder, textColor: colors.LP_GreenText, minWidth: rfSpacing['8xl'] },
  rejected: { borderColor: colors.LP_RedBorder, textColor: colors.LP_Redtext, minWidth: rfSpacing['7xl'] },
};

const LP_OrderList = ({ item }) => {
  const normalizedStatus = item.status.trim().toLowerCase();
  const statusStyle = statusMap[normalizedStatus] || {
    borderColor: colors.LP_HeadingColor,
    textColor: colors.LP_HeadingColor,
    minWidth: rfSpacing['8xl'],
  };

  return (
    <View style={styles.W_3_35H_H_95L_BG_W_BW_XXXS_BC_DBD9D9FF_AS_C_MT_XL_BR_XL}>
      <View style={styles.FD_R_P_L_AI_C}>
        <View style={styles.H_5XL_W_5XL_BG_BORDER_BR_XXL_MT_NEG_4XL_JC_C_AS_C}>
          <View style={styles.F_1_JC_C_AS_C}>
            <OrderBox />
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
};

export default LP_OrderList;

const styles = StyleSheet.create({
  W_3_35H_H_95L_BG_W_BW_XXXS_BC_DBD9D9FF_AS_C_MT_XL_BR_XL: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['95l'],
    backgroundColor: colors.LP_White,
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_ProfileGrayborder,
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
