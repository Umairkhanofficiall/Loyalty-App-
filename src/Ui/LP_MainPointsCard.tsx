import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../theme/colors'
import rfSpacing from '../theme/rfSpacing'
import { getImage } from '../assets/Images/images'
import LP_MainGIf from './LP_MainGIf'
import LP_YourLevel from './LP_YourLevel'
import LP_ScanProgress from './LP_ScanProgress'
import LP_LinearGradient from './LP_LinearGradient'

const LP_MainPointsCard = () => {
  return (
    <View style={styles.CONTAINER3}>
      <LP_LinearGradient
        colors={[
          colors.LP_Gradientfour,
          colors.LP_Gradientfour,
          colors.LP_Gradientfive,
          colors.LP_Gradientfour,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.SUBCONTAINER}
      >
        <View>
          <View style={styles.FD_R}>
            <Text style={styles.CL_5C6670_FS_L_FW_400_PT_XL_PL_XL}>
              Total Points Earned
            </Text>
            <Image
              source={getImage('starone')}
              style={styles.H_6XSSL_W_6XSSL_TOP_XXXS_ML_7MXL_RM_C}
            />
          </View>
          <View style={styles.FD_R}>
            <View style={styles.ML_NL}>
              <LP_MainGIf />
            </View>
            <Text style={styles.FS_5XL_CL_HC_FF_FW_600_PL_XS}>
              12,500
            </Text>
            <Image
              source={getImage('starthree')}
              style={styles.H_1_1H_W_1_1H_POS_ABS_TOP_N7XL_ML_1_89H_RM_C}
            />
            <Image
              source={getImage('startwo')}
              style={styles.H_4XLL_W_4XLL_MT_5XL_POS_ABS_RIGHT_L_RM_C}
            />
          </View>
        </View>
      </LP_LinearGradient>
      <View style={styles.ML_3XL}>
        <View style={styles.FD_R_ML_NXXL_MT_S}>
          <LP_YourLevel />
          <View style={styles.FD_R_GAP_XXS}>
            <Image source={getImage('rank')} style={styles.SILVER} />
            <Text style={styles.CL_HC_FS_XXL_FW_600_PL_XSS_PT_XL}>
              Silver
            </Text>
          </View>
        </View>
        <View style={styles.FD_R_GAP_XXS}>
          <Text style={styles.CL_NG_MT_XS_FS_L_FW_400}>
            scans progress:
          </Text>
          <Text style={styles.CL_HC_MT_XS_ML_1_45H_FS_L_FW_400}>
            360/1000
          </Text>
        </View>
        <View style={styles.MH_N3}>
          <LP_ScanProgress />
        </View>
      </View>
    </View>
  )
}

export default LP_MainPointsCard

const styles = StyleSheet.create({
  CONTAINER3: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['2.25H'],
    backgroundColor: "white",
    elevation: rfSpacing['xxs'],
    marginTop: rfSpacing['6xssml'],
    alignSelf: "center",
    borderRadius: rfSpacing['4xl'],
  },
  SUBCONTAINER: {
    height: rfSpacing['1.1H'],
    width: rfSpacing['3.05H'],
    backgroundColor: "#FFCDC4",
    alignSelf: "center",
    marginTop: rfSpacing['xl'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_White,
    borderRadius: rfSpacing['4xl'],
  },
  FD_R: {
    flexDirection: "row",
  },
  CL_5C6670_FS_L_FW_400_PT_XL_PL_XL: {
    color: "#5C6670",
    fontSize: rfSpacing['l'],
    fontWeight: "400",
    paddingTop: rfSpacing['xl'],
    paddingLeft: rfSpacing['xl'],
  },
  H_6XSSL_W_6XSSL_TOP_XXXS_ML_7MXL_RM_C: {
    height: rfSpacing['6xssl'],
    width: rfSpacing['6xssl'],
    top: rfSpacing['xxxs'],
    marginLeft: rfSpacing['7mxl'],
    resizeMode: "contain",
  },
  ML_NL: {
    marginLeft: -rfSpacing['l'],
  },
  FS_5XL_CL_HC_FF_FW_600_PL_XS: {
    fontSize: rfSpacing['5xl'],
    color: colors.LP_HeadingColor,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "600",
    paddingLeft: rfSpacing['xs'],
  },
  H_1_1H_W_1_1H_POS_ABS_TOP_N7XL_ML_1_89H_RM_C: {
    height: rfSpacing['1.1H'],
    width: rfSpacing['1.1H'],
    position: "absolute",
    top: -rfSpacing['7xl'],
    marginLeft: rfSpacing['1.89H'],
    resizeMode: "contain",
  },
  H_4XLL_W_4XLL_MT_5XL_POS_ABS_RIGHT_L_RM_C: {
    height: rfSpacing['4xll'],
    width: rfSpacing['4xll'],
    marginTop: rfSpacing['5xl'],
    position: "absolute",
    right: rfSpacing['l'],
    resizeMode: "contain",
  },
  ML_3XL: {
    marginLeft: rfSpacing['3xl'],
  },
  FD_R_ML_NXXL_MT_S: {
    flexDirection: "row",
    marginLeft: -rfSpacing['xxl'],
    marginTop: rfSpacing['s'],
  },
  FD_R_GAP_XXS: {
    flexDirection: "row",
    gap: rfSpacing['xxs'],
  },
  SILVER: {
    width: rfSpacing['4xl'],
    height: rfSpacing['4xl'],
    marginLeft: rfSpacing['1.8H'],
    marginTop: rfSpacing['xl'],
    resizeMode: "contain",
  },
  CL_HC_FS_XXL_FW_600_PL_XSS_PT_XL: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
    paddingLeft: rfSpacing['xss'],
    paddingTop: rfSpacing['xl'],
  },
  CL_NG_MT_XS_FS_L_FW_400: {
    color: colors.LP_NaturalGray,
    marginTop: rfSpacing['xs'],
    fontSize: rfSpacing['l'],
    fontWeight: "400",
  },
  CL_HC_MT_XS_ML_1_45H_FS_L_FW_400: {
    color: colors.LP_HeadingColor,
    marginTop: rfSpacing['xs'],
    marginLeft: rfSpacing['1.45H'],
    fontSize: rfSpacing['l'],
    fontWeight: "400",
  },
  MH_N3: {
    marginHorizontal: -3,
  },
});