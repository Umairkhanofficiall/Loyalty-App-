import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useState } from 'react';
import React from 'react'
import FilterModal from '../Ui/LP_Calender';
import rfSpacing from '../theme/rfSpacing';
import colors from '../theme/colors';
import { getImage } from '../assets/Images/images';

const LP_FilterButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleApply = (filter: string, date?: string) => {
    console.log("Filter applied:", filter, date);
  };

  return (
    <Pressable onPress={() => setModalVisible(true)}>
      <FilterModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onApply={handleApply}
      />
      <View style={styles.W_1_05H_H_5XL_BC_TMB_BW_XXXS_BG_W_BR_S_ML_1_5H_MT_4XL}>
        <View style={styles.FD_R}>
          <Text style={styles.FS_ML_FW_400_CL_HC_TA_C_PT_XS_ML_XS}>This month</Text>
          <Image source={getImage('arrowdown')} style={styles.H_4XLL_W_4XLL_MT_XS} />
        </View>
      </View>
    </Pressable>
  )
}

export default LP_FilterButton

const styles = StyleSheet.create({
  W_1_05H_H_5XL_BC_TMB_BW_XXXS_BG_W_BR_S_ML_1_5H_MT_4XL: {
    width: rfSpacing['1.05H'],
    height: rfSpacing['5xl'],
    borderColor: colors.LP_Thismonthborder,
    borderWidth: rfSpacing['xxxs'],
    backgroundColor: colors.LP_White,
    borderRadius: rfSpacing['s'],
    marginLeft: rfSpacing['1.5H'],
    marginTop: rfSpacing['4xl'],
  },
  FD_R: {
    flexDirection: "row",
  },
  FS_ML_FW_400_CL_HC_TA_C_PT_XS_ML_XS: {
    fontSize: rfSpacing['ml'],
    fontWeight: "400",
    color: colors.LP_HeadingColor,
    textAlign: "center",
    paddingTop: rfSpacing['xs'],
    marginLeft: rfSpacing['xs'],
  },
  H_4XLL_W_4XLL_MT_XS: {
    height: rfSpacing['4xll'],
    width: rfSpacing['4xll'],
    marginTop: rfSpacing['xs'],
  },
});