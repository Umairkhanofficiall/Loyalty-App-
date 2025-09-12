import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import rfSpacing from '../theme/rfSpacing';
import colors from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { getImage } from '../assets/Images/images';
const L_P_LevelsContainer2 = () => {
    return (
        <View style={styles.W_335H_H_4_1H_BG_W_BR_4XL_L_4XXSL_T_6XL}>
            <Text style={styles.C_B_FS_XXL_FW_6_MT_4xxsl_L_4XL}>Levels</Text>
            <View style={styles.L_N_S}>
                <LinearGradient
                    colors={[colors.LP_Grayblockone, colors.LP_Grayblocktwo]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.CONTAINER_SILVER}
                >
                    <View style={styles.FD_R_MT_XL}>
                        <Image source={getImage('Silverlogo')} style={styles.H_6XSSL_W_6XSSL_ML_M_RM_C_MT_MMS} />
                        <View>
                            <Text style={styles.CL_HC_ML_4XL_FS_4XL_FW_600}>Silver</Text>
                            <Text style={styles.CL_BT_ML_4XL_FS_MLL_FW_400_PT_S}>Require No. Scans:250</Text>
                        </View>
                        <View style={styles.FD_R_GAP_XXS}>
                            <View style={styles.W_7MXL_H_3XL_ML_4XXM_BR_XSS_BG_GSB}>
                                <Text style={styles.CL_HC_FS_M_ML_MMS_MT_XXXS}>Achieved</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <LinearGradient
                    colors={[colors.LP_Goldenblockone, colors.LP_Goldenblocktwo]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.CONTAINER_GOLD}
                >
                    <View style={styles.FD_R_MT_XL}>
                        <Image source={getImage('Goldlogo')} style={styles.H_6XSSL_W_6XSSL_ML_M_RM_C_MT_MMS} />
                        <View>
                            <Text style={styles.CL_HC_ML_4XL_FS_4XL_FW_600}>Gold</Text>
                            <Text style={styles.CL_BT_ML_4XL_FS_MLL_FW_400_PT_S}>Require No. Scans:1000</Text>
                        </View>
                        <View style={styles.FD_R_GAP_XXS}>
                            <View style={styles.W_65L_H_3XL_ML_XL_BR_XSS_BG_GOLD}>
                                <View style={styles.FD_R_GAP_XXS}>
                                    <Text style={styles.CL_GOLD_FS_M_ML_MMS}>Locked</Text>
                                    <Image source={getImage('buttonlock')} style={styles.H_L_W_L_ML_XMS_MT_XXS_RM_C} />
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <LinearGradient
                    colors={[colors.LP_platinumblockone, colors.LP_Platinumblocktwo]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.CONTAINER_PLATINUM}
                >
                    <View style={styles.FD_R_MT_XL}>
                        <Image source={getImage('Platelogo')} style={styles.H_6XSSL_W_6XSSL_ML_M_RM_C_MT_MMS} />
                        <View>
                            <Text style={styles.CL_HC_ML_4XL_FS_4XL_FW_600}>Platinum</Text>
                            <Text style={styles.CL_BT_ML_4XL_FS_MLL_FW_400_PT_S}>Require No. Scans:250</Text>
                        </View>
                        <View style={styles.FD_R_GAP_XXS}>
                            <View style={styles.W_65L_H_3XL_ML_4XL_BR_XSS_BG_PLATINUM}>
                                <View style={styles.FD_R_GAP_XXS}>
                                    <Text style={styles.CL_PLATINUM_FS_M_ML_MMS}>Locked</Text>
                                    <Image source={getImage('buttonlock')} style={styles.H_L_W_L_TC_PLATINUM_ML_XMS_MT_XXS_RM_C} />
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <Text style={styles.CL_BT_PL_3XL_FS_L_PT_4XL_LS_N_5}>
                Level upgrading is depended upon the number of scans you have performed actively.
            </Text>
        </View>
    )
}

export default L_P_LevelsContainer2

const styles = StyleSheet.create({
    W_335H_H_4_1H_BG_W_BR_4XL_L_4XXSL_T_6XL: {
        width: rfSpacing['3.35H'],
        height: rfSpacing['4.5H'],
        backgroundColor: colors.LP_White,
        borderRadius: rfSpacing['4xl'],
        left: rfSpacing['4xxsl'],
        top: rfSpacing['6xl'],
    },
    C_B_FS_XXL_FW_6_MT_4xxsl_L_4XL: {
        color: colors.LP_HeadingColor,
        fontSize: rfSpacing['xxl'],
        fontWeight: "600",
        marginTop: rfSpacing['4xxsl'],
        left: rfSpacing['4xl']
    },
    L_N_S: {
        left: -rfSpacing['s'],
    },
    CONTAINER_SILVER: {
        width: rfSpacing['3.05H'],
        height: rfSpacing['10xl'],
        borderWidth: rfSpacing['xxxs'],
        borderColor: colors.LP_Silverborder,
        marginLeft: rfSpacing['4xxml'],
        marginTop: rfSpacing['xxl'],
        borderRadius: rfSpacing['xxl'],
    },
    FD_R_MT_XL: {
        flexDirection: 'row',
        marginTop: rfSpacing['xl'],
    },
    H_6XSSL_W_6XSSL_ML_M_RM_C_MT_MMS: {
        height: rfSpacing['6xssl'],
        width: rfSpacing['6xssl'],
        marginLeft: rfSpacing['m'],
        resizeMode: 'contain',
        marginTop: rfSpacing['mms'],
    },
    CL_HC_ML_4XL_FS_4XL_FW_600: {
        color: colors.LP_HeadingColor,
        marginLeft: rfSpacing['4xl'],
        fontSize: rfSpacing['4xl'],
        fontWeight: '600',
    },
    CL_BT_ML_4XL_FS_MLL_FW_400_PT_S: {
        color: colors.LP_borderText,
        marginLeft: rfSpacing['4xl'],
        fontSize: rfSpacing['mll'],
        fontWeight: '400',
        paddingTop: rfSpacing['s'],
    },
    FD_R_GAP_XXS: {
        flexDirection: 'row',
        gap: rfSpacing['xxs'],
    },
    W_7MXL_H_3XL_ML_4XXM_BR_XSS_BG_GSB: {
        width: rfSpacing['7mxl'],
        height: rfSpacing['3xl'],
        marginLeft: rfSpacing['4xxm'],
        borderRadius: rfSpacing['xss'],
        backgroundColor: colors.LP_Greensilverbox,
    },
    CL_HC_FS_M_ML_MMS_MT_XXXS: {
        color: colors.LP_HeadingColor,
        fontSize: rfSpacing['m'],
        marginLeft: rfSpacing['mms'],
        marginTop: rfSpacing['xxxs'],
    },
    CONTAINER_GOLD: {
        width: rfSpacing['3.05H'],
        height: rfSpacing['10xl'],
        borderWidth: rfSpacing['xxxs'],
        borderColor: colors.LP_Goldborder,
        marginLeft: rfSpacing['4xxml'],
        marginTop: rfSpacing['xxl'],
        borderRadius: rfSpacing['xxl'],
    },
    W_65L_H_3XL_ML_XL_BR_XSS_BG_GOLD: {
        width: rfSpacing['65l'],
        height: rfSpacing['3xl'],
        marginLeft: rfSpacing['xl'],
        borderRadius: rfSpacing['xss'],
        backgroundColor: '#FFF6CD',
    },
    CL_GOLD_FS_M_ML_MMS: {
        color: '#EAAA15',
        fontSize: rfSpacing['m'],
        marginLeft: rfSpacing['mms'],
    },
    H_L_W_L_ML_XMS_MT_XXS_RM_C: {
        height: rfSpacing['l'],
        width: rfSpacing['l'],
        marginLeft: rfSpacing['xms'],
        marginTop: rfSpacing['xxs'],
        resizeMode: 'contain',
    },
    CONTAINER_PLATINUM: {
        width: rfSpacing['3.05H'],
        height: rfSpacing['10xl'],
        borderWidth: rfSpacing['xxxs'],
        borderColor: colors.LP_Platinumborder,
        marginLeft: rfSpacing['4xxml'],
        marginTop: rfSpacing['xxl'],
        borderRadius: rfSpacing['xxl'],
    },
    W_65L_H_3XL_ML_4XL_BR_XSS_BG_PLATINUM: {
        width: rfSpacing['65l'],
        height: rfSpacing['3xl'],
        marginLeft: rfSpacing['4xl'],
        borderRadius: rfSpacing['xss'],
        backgroundColor: '#DCE6FF',
    },
    CL_PLATINUM_FS_M_ML_MMS: {
        color: '#3469ED',
        fontSize: rfSpacing['m'],
        marginLeft: rfSpacing['mms'],
    },
    H_L_W_L_TC_PLATINUM_ML_XMS_MT_XXS_RM_C: {
        height: rfSpacing['l'],
        width: rfSpacing['l'],
        tintColor: '#3469ED',
        marginLeft: rfSpacing['xms'],
        marginTop: rfSpacing['xxs'],
        resizeMode: 'contain',
    },
    CL_BT_PL_3XL_FS_L_PT_4XL_LS_N_5: {
        color: colors.LP_borderText,
        paddingLeft: rfSpacing['3xl'],
        fontSize: rfSpacing['l'],
        paddingTop: rfSpacing['4xl'],
        letterSpacing: -0.5,
    },
})