import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flag from '../assets/Images/Levels/Flag';
import Starbox from '../assets/Images/Levels/Starbox';
import Qrlogo from '../assets/Images/Levels/Qrlogo';
import rfSpacing from '../theme/rfSpacing';
import colors from '../theme/colors';

const LP_LevelsContainer3 = () => {
  return (
   <View style={styles.W_335H_H_4H_BG_W_BR_4XL_L_4XXSL_T_8XL}>
          <Text style={styles.C_B_FS_XXL_FW_6_MT_4xxsl_L_4XL}>How it works</Text>
          <View style={styles.L_N_L_MT_4XL}>
            <View style={styles.CONTAINER_GRAY}>
              <View style={styles.FD_R_MT_XL}>
                <View>
                  <Text style={styles.CL_HC_ML_3XL_FS_3XL_FW_600}>Step 1</Text>
                  <Text style={styles.CL_BT_ML_3XL_FS_MLL_FW_400_PT_S}>Scan the QR code which is given on the</Text>
                  <Text style={styles.CL_BT_ML_3XL_FS_MLL_FW_400}>product box</Text>
                </View>
                <View style={styles.ML_XML_MT_MS}>
                  <Qrlogo />
                </View>
              </View>
            </View>
            <View style={styles.DASHED_LINE} />
            <View style={styles.CONTAINER_GRAY}>
              <View style={styles.FD_R_MT_XL}>
                <View>
                  <Text style={styles.CL_HC_ML_3XL_FS_3XL_FW_600}>Step 2</Text>
                  <Text style={styles.CL_BT_ML_3XL_FS_MLL_FW_400_PT_S}>Earn points via qr cde scanning from the</Text>
                  <Text style={styles.CL_BT_ML_3XL_FS_MLL_FW_400}>product box</Text>
                </View>
                <View style={styles.ML_M_MT_MS}>
                  <Starbox />
                </View>
              </View>
            </View>
            <View style={styles.DASHED_LINE} />
            <View style={styles.CONTAINER_GRAY_THIRD}>
              <View style={styles.FD_R_MT_XL}>
                <View>
                  <Text style={styles.CL_HC_ML_3XL_FS_3XL_FW_600}>Step 3</Text>
                  <Text style={styles.CL_BT_ML_3XL_FS_MLL_FW_400_PT_S}>Redeem your point into cash and enjoy!</Text>
                </View>
                <View style={styles.ML_XML_MT_MS}>
                  <Flag />
                </View>
              </View>
            </View>
          </View>
        </View>
  )
}

export default LP_LevelsContainer3

const styles = StyleSheet.create({
      W_335H_H_4H_BG_W_BR_4XL_L_4XXSL_T_8XL: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['4H'],
    backgroundColor: colors.LP_White,
    borderRadius: rfSpacing['4xl'],
    left: rfSpacing['4xxsl'],
    top: rfSpacing['8xl'],
  },
  L_N_L_MT_4XL: {
    left: -rfSpacing['l'],
    marginTop: rfSpacing['4xl'],
  },
  CONTAINER_GRAY: {
    width: rfSpacing['3.05H'],
    height: rfSpacing['1H'],
    marginLeft: rfSpacing['4xll'],
    borderRadius: rfSpacing['xxl'],
    backgroundColor: '#F1F6F9',
  },
  CL_HC_ML_3XL_FS_3XL_FW_600: {
    color: colors.LP_HeadingColor,
    marginLeft: rfSpacing['3xl'],
    fontSize: rfSpacing['3xl'],
    fontWeight: '600',
  },
  CL_BT_ML_3XL_FS_MLL_FW_400_PT_S: {
    color: colors.LP_borderText,
    marginLeft: rfSpacing['3xl'],
    fontSize: rfSpacing['mll'],
    fontWeight: '400',
    paddingTop: rfSpacing['s'],
  },
  CL_BT_ML_3XL_FS_MLL_FW_400: {
    color: colors.LP_borderText,
    marginLeft: rfSpacing['3xl'],
    fontSize: rfSpacing['mll'],
    fontWeight: '400',
  },
  ML_XML_MT_MS: {
    marginLeft: rfSpacing['xml'],
    marginTop: rfSpacing['ms'],
  },
  DASHED_LINE: {
    height: rfSpacing['xxl'],
    borderLeftWidth: rfSpacing['xxxs'],
    borderColor: 'red',
    borderStyle: 'dashed',
    marginHorizontal: rfSpacing['l'],
    left: rfSpacing['6xl'],
  },
  ML_M_MT_MS: {
    marginLeft: rfSpacing['m'],
    marginTop: rfSpacing['ms'],
  },
  CONTAINER_GRAY_THIRD: {
    width: rfSpacing['3.05H'],
    height: rfSpacing['10xl'],
    marginLeft: rfSpacing['4xll'],
    borderRadius: rfSpacing['xxl'],
    backgroundColor: '#F1F6F9',
  },
    C_B_FS_XXL_FW_6_MT_4xxsl_L_4XL: {
      color: colors.LP_HeadingColor,
      fontSize: rfSpacing['xxl'],
      fontWeight: "600",
      marginTop: rfSpacing['4xxsl'],
      left: rfSpacing['4xl']
    },
    FD_R_MT_XL: {
    flexDirection: 'row',
    marginTop: rfSpacing['xl'],
  }
})