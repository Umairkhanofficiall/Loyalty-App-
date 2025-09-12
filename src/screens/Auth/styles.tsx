import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import colors from '../../theme/colors';
import rfSpacing from '../../theme/rfSpacing';
const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export default StyleSheet.create({
  //LOGIN SCREEN
  F1_JC_C_AI_C: {
    flex: rfSpacing['xxxs'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  W_28H_AS_C: {
    width: rfSpacing['2.8H'],
    alignSelf: "center"
  },

  SubContainer: {
    width: rfSpacing['3.5H'],
    height: rfSpacing['3.95H'],
    backgroundColor: colors.LP_signin,
    borderRadius: rfSpacing['4xl']
  },
  input: {
    width: rfSpacing['3.1H'],
    height: rfSpacing["6xml"],
    borderWidth: rfSpacing['xxxs'],
    alignSelf: "center",
    marginTop: rfSpacing['4xl'],
    borderRadius: rfSpacing['m'],
    paddingLeft: rfSpacing['xl'],
    color: colors.LP_borderText,
    borderColor: colors.LP_inputborder,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rfSpacing['3xl'],
    justifyContent: 'flex-start',
    paddingHorizontal: rfSpacing['xxl'],
    gap: rfSpacing['xxs'],
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: rfSpacing['5xl'],
  },
  checkboxChecked: {
    backgroundColor: colors.LP_maincolor,
  },
  checkbox: {
    width: rfSpacing['3xl'],
    height: rfSpacing['3xl'],
    borderRadius: rfSpacing['ms'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_inputborder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: colors.LP_White,
    fontSize: rfSpacing['m'],
    fontWeight: "bold",
    lineHeight: rfSpacing['m'],
  },
  rememberText: {
    marginLeft: rfSpacing['xxxs'],
    fontSize: rfSpacing['xml'],
    color: colors.LP_rememberhaed,
    fontFamily: "Plus Jakarta Sans",

  },
  forgot: {
    fontSize: rfSpacing['xl'],
    color: colors.LP_forgotbutton,
    fontWeight: "600",
    textAlign: "center",

  },
  forgotContainer: {
    marginLeft: 'auto',
    width: rfSpacing['1.4H'],
    height: rfSpacing['4xxm'],
    borderRadius: rfSpacing['xl'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  signin: {
    width: rfSpacing['3.1H'],
    height: rfSpacing['6xml'],
    backgroundColor: colors.LP_maincolor,
    borderRadius: rfSpacing['4xxm'],
    alignSelf: "center",
    marginTop: rfSpacing['3xl'],
    textAlign: "center",
    color: colors.LP_signin,
    verticalAlign: "middle",
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
    fontFamily: "Font/Plus Jakarta Sans"
  },
  WhiteButton: {
    width: rfSpacing['3.4H'],
    height: rfSpacing['6xml'],
    borderRadius: rfSpacing['4xxm'],
    alignSelf: "center",
    marginTop: rfSpacing['3xl'],
    textAlign: "center",
    color: colors.LP_HeadingColor,
    verticalAlign: "middle",
    fontSize: rfSpacing['xl'],
    fontWeight: "bold",
    fontFamily: "Font/Plus Jakarta Sans",
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_ProfileGrayborder
  },
  ButtonForModel: {
    width: rfSpacing['3.5H'],
    height: rfSpacing['6xml'],
    borderRadius: rfSpacing['4xxm'],
    alignSelf: "center",
    marginTop: rfSpacing['3xl'],
    textAlign: "center",
    color: colors.LP_White,
    verticalAlign: "middle",
    fontSize: rfSpacing['xl'],
    fontWeight: "bold",
    fontFamily: "Font/Plus Jakarta Sans",
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_ProfileGrayborder
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: rfSpacing['xxl']
  },
  card: {
    width: rfSpacing['3.5H'],
    height: rfSpacing['5.1H'],
    backgroundColor: colors.LP_signin,
    borderRadius: rfSpacing['4xl']
  },
  FD_R_AS_C_W_17H_H_17H_BG_BGA_BR_XXL_MT_4XL:
  {
    flexDirection: "row", alignSelf: "center",
    width: rfSpacing['1.7H'], height: rfSpacing['1.7H'],
    backgroundColor: colors.LP_logobgauth,
    borderRadius: rfSpacing['xxl'], marginTop: rfSpacing['4xl']
  },
  MH_XML_AS_C:
  {
    marginHorizontal: rfSpacing['xml'],
    alignSelf: "center"
  },

  logo: {
    marginLeft: rfSpacing['5xxsl'],
    marginTop: rfSpacing['5xxsl'],
  },
  Text: {
    textAlign: "center",
    fontSize: rfSpacing['4xxm'],
    color: colors.LP_HeadingColor, fontWeight: "600",
    marginTop: rfSpacing['4xl'],
    fontFamily: 'Plus Jakarta Sans'
  },
  subText: {
    textAlign: "center",
    color: colors.LP_rememberhaed,
    marginTop: rfSpacing['4xl'],
    fontSize: rfSpacing['xxl']
  },
  subTexttwo: {
    textAlign: "center",
    color: colors.LP_rememberhaed,
    fontSize: rfSpacing['xxl']
  },
  boxcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: rfSpacing['4xl'],
    marginTop: rfSpacing['5xl'],

  },
  WH_BW_BR_BC_FS_TA_C_FF: {
    width: rfSpacing['6xsl'],
    height: rfSpacing['7xl'],
    borderWidth: rfSpacing['xxxs'],
    borderRadius: rfSpacing['ms'],
    borderColor: colors.LP_smallcontainer,
    fontSize: rfSpacing['xxl'],
    textAlign: "center",
    color: colors.LP_HeadingColor,
    fontFamily: "Font/Plus Jakarta Sans"

  },

  FD_R_AI_C_AS_C: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  C_FS_FW_MT: {
    color: colors.LP_rememberhaed,
    fontSize: rfSpacing['xl'],
    fontWeight: '400',
    marginTop: rfSpacing['4xxsl'],
  },
  resendContainer: {
    width: rfSpacing['1H'],
    height: rfSpacing['4xxm'],
    borderRadius: rfSpacing['xl'],
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rfSpacing['4xxm'],
  },
  resend: {
    fontSize: rfSpacing['l'],
    color: colors.LP_HeadingColor,
    fontWeight: '600',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 10,
  },
  loaderBox: {
    backgroundColor: colors.LP_White,
    padding: rfSpacing['3xl'],
    borderRadius: rfSpacing['xl'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  SecondLogo: {
    marginTop: rfSpacing['5xxsl'],
    left: -rfSpacing['6xl']
  },
  Resendtext: {
    fontSize: rfSpacing['xl'],
    fontWeight: '600',
    marginTop: rfSpacing['4xxsl'],
    color: colors.LP_HeadingColor,
  },
  //home
  PB_9XML: {
    paddingBottom: rfSpacing['9xml']
  },
  F_1: {
    flex: 1
  },
  MT_M: {
    marginTop: rfSpacing['m']
  },
  FD_R: {
    flexDirection: "row"
  },
  AS_C: {
    alignSelf: "center"
  },
  FD_R_AI_C: {
    flexDirection: "row",
    alignItems: "center"
  },
  FD_R_AS_C: {
    flexDirection: "row",
    alignSelf: "center"
  },
  C_B_FS_FW_PL_PT: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['4xl'],
    fontWeight: "600",
    paddingLeft: rfSpacing['3xl'],
    paddingTop: rfSpacing['5xxml']
  },
  C_PF: {
    color: colors.LP_NaturalGray,
    paddingLeft: rfSpacing['3xl']
  },
  C_FS_TA_FW: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['6xssml'],
    textAlign: "center",
    fontWeight: "600"
  },
  H_W_BR_ML_MT: {
    height: rfSpacing['xmml'],
    width: rfSpacing['7xmml'],
    borderRadius: rfSpacing['xs'],
    marginLeft: rfSpacing['3xl'],
    marginTop: rfSpacing['xl']
  },
  FS_TA_C_PT: {
    fontSize: rfSpacing['s'],
    textAlign: "center",
    color: colors.LP_HeadingColor,
    paddingTop: rfSpacing['xxs']
  },
  C_FS_FW_PL_PT: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['4xxml'],
    fontWeight: "600",
    paddingLeft: rfSpacing['3xl'],
    paddingTop: rfSpacing['m']
  },
  C_ML_MT_FS_FW: {
    color: colors.LP_NaturalGray,
    marginLeft: rfSpacing['3xl'],
    marginTop: rfSpacing['l'],
    fontSize: rfSpacing['l'],
    fontWeight: "400"
  },
  C_MT_ML_FS_FW: {
    color: colors.LP_HeadingColor,
    marginTop: rfSpacing['xml'],
    marginLeft: rfSpacing['1.5H'],
    fontSize: rfSpacing['l'],
    fontWeight: "400"
  },
  W_H: {
    height: rfSpacing['s'],
    width: rfSpacing['8xl']
  },
  TA_C_FS_FW_MT: {
    textAlign: "center",
    color: colors.LP_NaturalGray,
    fontSize: rfSpacing['mll'],
    fontWeight: "400",
    marginTop: rfSpacing['xl']
  },
  C_PT_PL_FS: {
    color:colors.LP_NaturalGray,
    paddingTop: rfSpacing['xl'],
    paddingLeft:  rfSpacing['l'],
    fontSize:  rfSpacing['xl']
  },
  C_PT_PL_FS_FW: {
    color: colors.LP_HeadingColor,
    paddingTop:  rfSpacing['xs'],
    paddingLeft:  rfSpacing['xl'],
    fontSize:  rfSpacing['3xl'],
    fontWeight: "600"
  },
  H_W_ML_MT: {
    height: rfSpacing['5xxml'],
    width: rfSpacing['5xxml'],
    marginLeft: rfSpacing['1.6H'],
    marginTop: rfSpacing['3xl']
  },
  FD_R_MT_MR: {
    flexDirection: "row",
    marginTop: rfSpacing['4xxml'],
    marginLeft: rfSpacing['1.6H'],
  },
  H_W_ML_S_MT_XXS: {
    height: rfSpacing['4xxml'],
    width: rfSpacing['4xxml'],
    marginLeft: -rfSpacing['s'],
    marginTop: -rfSpacing['xxs']
  },

  //Order Receive

  F_1_BG_ICONBG: {
    flex: 1,
    backgroundColor: colors.LP_IconBG,
  },
  PB_XXXS_BG_ICONBG:
  {
    paddingBottom: rfSpacing['xxxs'],
    backgroundColor: colors.LP_IconBG
  },
  W_3_H_9_BG_W_BW_XXXS_BC_LO_MT_XXL_BR_XXL_AS_C: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['95l'],
    backgroundColor: colors.LP_White,
    borderWidth: rfSpacing['xxxs'],
    borderColor:colors.LP_OrderReciveBorderColor,
    marginTop: rfSpacing['xxl'],
    borderRadius: rfSpacing['xxl'],
    alignSelf: "center"
  },
  FS_3XL_FW_MB_3XL_ML_S_C_H: {
    fontSize: rfSpacing['3xl'],
    fontWeight: '600',
    marginBottom: rfSpacing['3xl'],
    marginLeft: rfSpacing['s'],
    color: colors.LP_HeadingColor
  },
  FD_R_MT_3XL: {
    flexDirection: "row",
    marginTop: rfSpacing['3xl']
  },
  W_5XL_H_5XL_ML_3XL: {
    width: rfSpacing['5xl'],
    height: rfSpacing['5xl'],
    marginLeft: rfSpacing['3xl']
  },
  FD_R_MT_4xxll: {
    flexDirection: "row",
    marginTop: rfSpacing["4xxll"]
  },
  H_5XXML_W_5XXML_ML_S: {
    height: rfSpacing["5xxml"],
    width: rfSpacing["5xxml"],
    marginLeft: rfSpacing["s"],
  },
  CL_NG_ML_3XL_TOP_NXS: {
    color: colors.LP_NaturalGray,
    marginLeft: rfSpacing["3xl"],
    top: -rfSpacing["xs"],
  },
  CL_HC_ML_3XL_FS_XML_FW_600_MT_XXXS: {
    color: colors.LP_HeadingColor,
    marginLeft: rfSpacing["3xl"],
    fontSize: rfSpacing["xml"],
    fontWeight: "600",
    marginTop: rfSpacing["xxxs"],
  },
  ML_7XMML_GAP_XXS: {
    marginLeft: rfSpacing["7xmml"],
    gap: rfSpacing["xxs"],
  },
  CL_HC_FS_XML_MT_XS_ML_NXL: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing["xml"],
    marginTop: rfSpacing["xs"],
    marginLeft: -rfSpacing['xl'],
  },
  //Signature

  F_1_BG_ICONBG_PL_XXL: {
    flex: 1,
    backgroundColor: colors.LP_IconBG,
    padding: rfSpacing['xxl'],
  },
  FS_XXL_FW_600_MB_M_CL_MO: {
    fontSize: rfSpacing['xxl'],
    fontWeight: '600',
    marginBottom: rfSpacing['m'],
    color: colors.LP_Mainorange,
  },
  F_1_BW_XXXS_BC_GYLT_BR_S_OV_H_E_XXS: {
    flex: 1,
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_Gradientyouleveltwo,
    borderRadius: rfSpacing['s'],
    overflow: 'hidden',
    elevation: rfSpacing['xxs'],
  },
  FD_R_JC_SB_MT_M: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rfSpacing['m'],
  },
  F_1_P_M_MH_XS_BG_MO_BR_S_AI_C: {
    flex: 1,
    padding: rfSpacing['m'],
    marginHorizontal: rfSpacing['xs'],
    backgroundColor: colors.LP_Mainorange,
    borderRadius: rfSpacing['s'],
    alignItems: 'center',
  },
  CL_W_FW_600: {
    color: colors.LP_White,
    fontWeight: '600',
  },
  W_3_37H_H_3_7H_BW_XXXS_BC_CCC_MT_3XL_AS_C: {
    width: rfSpacing['3.37H'],
    height: rfSpacing['3.7H'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_SignatureImageBorder,
    marginTop: rfSpacing['3xl'],
    alignSelf: "center",
  },

  //points
  W_385H_H_2H_BG_MO_BBR_4XL_BBSR_4XL: {
    width: rfSpacing['3.85H'],
    height: rfSpacing['2H'],
    backgroundColor: colors.LP_Mainorange,
    borderBottomEndRadius: rfSpacing['4xl'],
    borderBottomStartRadius: rfSpacing['4xl'],
  },
  C_W_FS_4XL_TA_C_MT_4XXM: {
    color: colors.LP_White,
    fontSize: rfSpacing['4xl'],
    textAlign: "center",
    marginTop: rfSpacing['4xxm']
  },

  iconWrapper: {
    height: rfSpacing['5xxml'],
    width: rfSpacing['5xxml'],
    borderRadius: rfSpacing['3xl'],
    backgroundColor: colors.LP_HomeIconWrapper,
    justifyContent: "center",
    alignItems: "center",
    marginTop: rfSpacing['m'],
    marginRight: rfSpacing['m'],
    elevation: rfSpacing['xms']

  },
  icon: {
    height: rfSpacing['4xxll'],
    width: rfSpacing['4xxll'],
    top: -rfSpacing['4xxll'],
    left: -rfSpacing['3xl'],
    position: "static"
  },
  text: {
    color: colors.LP_NaturalGray,
    textAlign: "center",
    paddingTop: rfSpacing['7xmml']
  },
  container2: {
    width:rfSpacing['3.4H'],
    height:rfSpacing['2.6H'],
    margin: rfSpacing['3xl'],
    borderRadius: rfSpacing['3xl'],
    backgroundColor: colors.LP_White,
    elevation: rfSpacing['xms'],
  },
  silver: {
    width: rfSpacing['7xxmmll'],
    height: rfSpacing['7xxmmll'],
    marginLeft: rfSpacing['1.85H'],
    marginTop: rfSpacing['xl'],
    resizeMode: "contain"
  },
  subcontainer: {
    height: rfSpacing['9xl'],
    width: rfSpacing['3.10H'],
    backgroundColor: colors.LP_HomeContainer,
    marginLeft: rfSpacing['3xl'],
    marginTop: rfSpacing['l'],
    borderRadius: rfSpacing['xl']
  },
  container3: {
    width: "100%",
    height: rfSpacing['3.5H'],
    backgroundColor:colors.LP_White,
    borderRadius: rfSpacing['4xxml']
  },
  buttonText: {
    fontSize: rfSpacing['l'],
    fontWeight: "600",
    color:colors.LP_HeadingColor,

  },
  button: {
    width: rfSpacing['6xsl'],
    height: rfSpacing['3xl'],
  },
  gif: {
    height: rfSpacing['6xssml'],
    width: rfSpacing['6xssml'],
    backgroundColor: colors.LP_Mainlightorange,
    borderRadius: rfSpacing['5xl'],
    alignItems: "center",
    justifyContent: "center",
    marginLeft: rfSpacing['4xxll'],

  },
  subcontainer3: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['8xl'],
    backgroundColor: colors.LP_White,
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_inputborder,
    marginLeft: rfSpacing['4xxsl'],
    marginTop: rfSpacing['xl'],
    borderRadius: rfSpacing['xl']

  },
  iconWrapper3: {
    height: rfSpacing['4xxsl'],
    width: rfSpacing['4xxsl'],
    borderRadius: rfSpacing['4xl'],
    backgroundColor: colors.LP_Starwrap,
    justifyContent: "center",
    alignItems: "center",
    marginTop: rfSpacing['m'],
  },

  // POints Screen
  BG_F_1: {
    backgroundColor: colors.LP_Pointsbgcolor,
    flex: 1,
  },
  PB_1_6H: {
    paddingBottom: rfSpacing['1.6H'],
  },

  containerHistory: {
    backgroundColor: colors.LP_Pointsbgcolor,
  },



  //REdeem Screen

  containerRedeem: {
    backgroundColor: colors.LP_Pointsbgcolor,
    flex: 1,
  },
  PB_10XL: {
    paddingBottom: rfSpacing['10xl']
  },

  Buyitems: {
    height: rfSpacing['1H'],
    width: rfSpacing['3.35H'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_BorderBG,
    backgroundColor: colors.LP_White,
    alignSelf: "center",
    borderRadius: rfSpacing['xl'],
    marginTop: rfSpacing['xl'],
    justifyContent: "space-evenly",
  },
  textForOptions: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
    textAlign: "center",
    marginTop: rfSpacing['6xl'],
  },
  subTextbutton: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xml'],
    fontWeight: "600",
    marginLeft: rfSpacing['m']
  },
  subDesc: {
    color: colors.LP_NaturalGray,
    fontSize: rfSpacing['mll'],
    fontWeight: "400",
    marginTop: rfSpacing['s'],
    width: rfSpacing['2.30H'],
    marginLeft: rfSpacing['m']
  },
  IconBG: {
    width: rfSpacing['7xl'],
    height: rfSpacing['7xl'],
    backgroundColor: colors.LP_Gradienttwo,
    borderRadius: rfSpacing['5xl'],
    marginLeft: rfSpacing['xl']
  },
  IconItem: {
    alignSelf: "center",
    marginTop: rfSpacing['l'],
  },
  RedeemButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  ImageRedeem: {
    height: rfSpacing['6xl'],
    width: rfSpacing['6xl'],
    left: -rfSpacing['xml']
  },
  //BuyItems screen 

  F_1_BG_F6F6F6: { flex: 1, backgroundColor: colors.LP_BuyItemBG },
  P_M_FD_R_GAP_M_MT_XXL: {
    padding: rfSpacing.m,
    flexDirection: "row",
    gap: rfSpacing.m,
    marginTop: rfSpacing.xxl,
  },
  W_5XL_H_5XL: {
    width: rfSpacing["5xl"],
    height: rfSpacing["5xl"],
  },
  FS_4XL_FW_700_CL_222: {
    fontSize: rfSpacing["4xl"],
    fontWeight: "700",
    color: colors.LP_BuyItemcolor,
  },
  W_94P_H_7XL_M_XL_AS_C_FD_R_AI_C_BW_1_BC_CCC_BR_8_BG_W: {
    width: "94%",
    height: rfSpacing["7xl"],
    margin: rfSpacing.xl,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.LP_SignatureImageBorder,
    borderRadius: 8,
    backgroundColor: colors.LP_White,
  },
  PH_16: { paddingHorizontal: 16 },
  ML_25H: { marginLeft: rfSpacing["2.5H"] },
  FD_R_JC_SA_MB_4XL: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: rfSpacing["4xl"],
  },
  PY_M_PX_L_BR_4XL: {
    paddingVertical: rfSpacing.m,
    paddingHorizontal: rfSpacing.l,
    borderRadius: rfSpacing["4xl"],
  },
  BG_FF: { backgroundColor: colors.LP_White },
  FS_L_CL_NG: {
    fontSize: rfSpacing.l,
    color: colors.LP_NaturalGray,
  },
  CL_MO_FW_600: {
    color: colors.LP_Mainorange,
    fontWeight: "600",
  },
  JC_SA_GAP_XS: {
    justifyContent: "space-around",
    gap: rfSpacing.xs,
  },
  P_L: { padding: rfSpacing.l },
  CARD_BG_W_BR_M_P_M_MB_M_F_047_E_2: {
    backgroundColor: colors.LP_White,
    borderRadius: rfSpacing.m,
    padding: rfSpacing.m,
    marginBottom: rfSpacing.m,
    flex: 0.47,
    elevation: 2,
  },
  W_100P_H_1H_BR_S: {
    width: "100%",
    height: rfSpacing["1H"],
    borderRadius: rfSpacing.s,
  },
  MT_XL_FS_XM_CL_333: {
    marginTop: rfSpacing.xl,
    fontSize: rfSpacing.xm,
    color: colors.LP_BuyItemGray,
  },
  FD_R_MT_XL_BG_W_BW_1_BC_DDD_BR_S_PV_S_AI_C_PL_4XML: {
    flexDirection: "row",
    marginTop: rfSpacing.xl,
    backgroundColor: colors.LP_White,
    borderWidth: 1,
    borderColor: colors.LP_BuyItemList,
    borderRadius: rfSpacing.s,
    paddingVertical: rfSpacing.s,
    alignItems: "center",
    paddingLeft: rfSpacing["4xml"],
  },
  FS_XL_CL_333_MT_NXXS: {
    fontSize: rfSpacing.xl,
    color: colors.LP_BuyItemGray,
    marginTop: -rfSpacing.xxs,
  },
  H_4XXSL_W_4XXSL_BR_4XL_BG_STARWRAP: {
    height: rfSpacing["4xxsl"],
    width: rfSpacing["4xxsl"],
    borderRadius: rfSpacing["4xl"],
    backgroundColor: colors.LP_Starwrap,
  },
  H_XL_W_XL_RM_C_F_09_JC_C_AS_C: {
    height: rfSpacing.xl,
    width: rfSpacing.xl,
    resizeMode: "contain",
    flex: 0.9,
    justifyContent: "center",
    alignSelf: "center",
  },
  F_1_BG_MODAL_JC_FE: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  BG_W_BTLR_L_BTRR_L_P_L: {
    backgroundColor: colors.LP_White,
    borderTopLeftRadius: rfSpacing.l,
    borderTopRightRadius: rfSpacing.l,
    padding: rfSpacing.l,
  },
  FD_R_GAP_21_MV_XL: {
    flexDirection: "row",
    gap: rfSpacing["2.1"],
    marginVertical: rfSpacing.xl,
  },
  CL_HC_FS_XXL_FW_600: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing.xxl,
    fontWeight: "600",
  },
  W_100P_H_25H_BR_S_MB_M: {
    width: "100%",
    height: rfSpacing["2.5H"],
    borderRadius: rfSpacing.s,
    marginBottom: rfSpacing.m,
  },
  FS_XXL_FW_600_CL_222_MB_S: {
    fontSize: rfSpacing.xxl,
    fontWeight: "600",
    color: colors.LP_BuyItemcolor,
    marginBottom: rfSpacing.s,
  },
  FS_XL_FW_BOLD_MT_S_MB_XS_CL_HC: {
    fontSize: rfSpacing.xl,
    fontWeight: "bold",
    marginTop: rfSpacing.s,
    marginBottom: rfSpacing.xs,
    color: colors.LP_HeadingColor,
  },
  FS_XL_CL_555_MB_L: {
    fontSize: rfSpacing.xl,
    color: colors.LP_Buyitemsbg,
    marginBottom: rfSpacing.l,
  },
  W_35H_H_6XML_BW_XXXS_BR_XL_FD_R_BC_BORDER_PT_L: {
    width: rfSpacing["3.5H"],
    height: rfSpacing["6xml"],
    borderWidth: rfSpacing.xxxs,
    borderRadius: rfSpacing.xl,
    flexDirection: "row",
    borderColor: colors.LP_BorderColor,
    paddingTop: rfSpacing.l,
  },
  FS_XL_FW_500_CL_HC_PL_XL: {
    fontSize: rfSpacing.xl,
    fontWeight: "500",
    color: colors.LP_HeadingColor,
    paddingLeft: rfSpacing.xl,
  },
  FS_XL_FW_600_CL_HC_PL_XS: {
    fontSize: rfSpacing.xl,
    fontWeight: "600",
    color: colors.LP_HeadingColor,
    paddingLeft: rfSpacing.xs,
  },
  ML_230H: { marginLeft: rfSpacing["2.30H"] },

  //Payment Screen 

  MT_3XL_ML_l: {
    marginTop: -rfSpacing['3xl'],
    marginLeft: -rfSpacing['l']
  },

  P_3XL_BG_CONTAINER_FG_1: {
    padding: rfSpacing['3xl'],
    backgroundColor: colors.LP_Containerbg,
    flexGrow: 1,
  },
  FD_R_AI_C_MB_4XL_ML_NS: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rfSpacing['4xl'],
    marginLeft: -rfSpacing['s'],
  },

  FS_4XL_CL_HC_FW_700_MB_M_MT_M_PL_M: {
    fontSize: rfSpacing['4xl'],
    color: colors.LP_HeadingColor,
    fontWeight: '700',
    marginBottom: rfSpacing['m'],
    marginTop: rfSpacing['m'],
    paddingLeft: rfSpacing['m'],
  },
  FS_3XL_FW_600_MB_XS_CL_HC_PT_M: {
    fontSize: rfSpacing['3xl'],
    fontWeight: '600',
    marginBottom: rfSpacing['xs'],
    color: colors.LP_HeadingColor,
    paddingTop: rfSpacing['m'],
  },
  CL_NG_MB_3XL_MT_M_FS_L: {
    color: colors.LP_NaturalGray,
    marginBottom: rfSpacing['3xl'],
    marginTop: rfSpacing['m'],
    fontSize: rfSpacing['l'],
  },
  FD_R_AI_C_MB_XML_MT_M: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rfSpacing['xml'],
    marginTop: rfSpacing['m'],
  },
  F_1_BG_W_BR_XL_P_XML_AI_C_E_XXXS_H_9XL: {
    flex: 1,
    backgroundColor: colors.LP_White,
    borderRadius: rfSpacing['xl'],
    padding: rfSpacing['xml'],
    alignItems: 'center',
    elevation: rfSpacing['xxxs'],
    height: rfSpacing['9xl'],
  },
  CL_NG_FS_L_FW_400_MB_XS_LEFT_3XL: {
    color: colors.LP_NaturalGray,
    fontSize: rfSpacing['l'],
    fontWeight: "400",
    marginBottom: rfSpacing['xs'],
    left: -rfSpacing['3xl'],
  },
  CL_NG_FS_L_FW_400_MB_XS_LEFT_MS: {
    color: colors.LP_NaturalGray,
    fontSize: rfSpacing['l'],
    fontWeight: "400",
    marginBottom: rfSpacing['xs'],
    left: -rfSpacing['ms'],
  },
  CL_MO_FS_3XL_FW_600_LEFT_5XXSL: {
    color: colors.LP_Mainorange,
    fontSize: rfSpacing['3xl'],
    fontWeight: "600",
    left: -rfSpacing['5xxsl'],
  },
  CL_AMOUNT_FS_3XL_FW_600_LEFT_5XXSL: {
    color: colors.LP_amountcolor,
    fontSize: rfSpacing['3xl'],
    fontWeight: "600",
    left: -rfSpacing['5xxsl'],
  },
  MX_M_FS_XXL_TOP_NXL_FW_BOLD_CL_HC: {
    marginHorizontal: rfSpacing['m'],
    fontSize: rfSpacing['xxl'],
    top: -rfSpacing['xl'],
    fontWeight: 'bold',
    color: colors.LP_HeadingColor,
  },
  FD_R_GAP_1_2H: {
    flexDirection: "row",
    gap: rfSpacing['1.2H'],
  },
  FS_L_CL_HC: {
    fontSize: rfSpacing['l'],
    color: colors.LP_HeadingColor,
  },
  F_1_BG_W_BR_M_P_L_FS_L_CL_HC_E_XXXS: {
    flex: 1,
    backgroundColor: colors.LP_White,
    borderRadius: rfSpacing['m'],
    padding: rfSpacing['l'],
    fontSize: rfSpacing['l'],
    color: colors.LP_HeadingColor,
    elevation: rfSpacing['xxxs'],
  },
  CL_HC_FS_XL_FW_600_MB_XS_MT_4XL: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xl'],
    fontWeight: "600",
    marginBottom: rfSpacing['xs'],
    marginTop: rfSpacing['4xl'],
  },
  BG_W_BR_M_P_XML_MT_M: {
    backgroundColor: colors.LP_White,
    borderRadius: rfSpacing['m'],
    padding: rfSpacing['xml'],
    marginTop: rfSpacing['m'],
  },
  BC_MO_BW_1_5: {
    borderColor: colors.LP_Mainorange,
    borderWidth: 1.5,
  },
  FS_L_FW_600_CL_HC: {
    fontSize: rfSpacing['l'],
    fontWeight: '600',
    color: colors.LP_HeadingColor,
  },
  BG_W_BR_M_P_M_MB_M_CL_HC: {
    backgroundColor: colors.LP_White,
    borderRadius: rfSpacing['m'],
    padding: rfSpacing['m'],
    marginBottom: rfSpacing['m'],
    color: colors.LP_HeadingColor,
  },
  BG_MO_PV_L_BR_5XL_MT_5XL_AI_C: {
    backgroundColor: colors.LP_Mainorange,
    paddingVertical: rfSpacing['l'],
    borderRadius: rfSpacing['5xl'],
    marginTop: rfSpacing['5xl'],
    alignItems: 'center',
  },
  CL_W_FW_BOLD: {
    color: colors.LP_White,
    fontWeight: 'bold',
  },
  F_1_BG_MODAL_JC_C_AI_C: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  W_3_4H_H_4_9H_BG_W_P_3XL_BR_M_E_XS: {
    width: rfSpacing['3.4H'],
    height: rfSpacing['4.9H'],
    backgroundColor: colors.LP_White,
    padding: rfSpacing['3xl'],
    borderRadius: rfSpacing['m'],
    elevation: rfSpacing['xs'],
  },
  W_1_3H_H_1_3H_AS_C: {
    width: rfSpacing['1.3H'],
    height: rfSpacing['1.3H'],
    alignSelf: "center",
  },
  CL_HC_FS_5XL_FW_500_TA_C_TOP_3XL: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['5xl'],
    fontWeight: '500',
    textAlign: "center",
    top: rfSpacing['3xl'],
  },
  FS_4XXM_FW_600_CL_AMOUNT_TA_C_MT_3XL: {
    fontSize: rfSpacing['4xxm'],
    fontWeight: "600",
    color: colors.LP_amountcolor,
    textAlign: "center",
    marginTop: rfSpacing['3xl'],
  },
  PT_S_TOP_N3XL: {
    paddingTop: rfSpacing['s'],
    top: -rfSpacing['3xl'],
  },
  CL_NG_FS_L_TA_C_MT_3XL_FF_PJS_W_3_05H_LS_06: {
    color: colors.LP_NaturalGray,
    fontSize: rfSpacing['l'],
    textAlign: "center",
    marginTop: rfSpacing['3xl'],
    fontFamily: "Plus Jakarta Sans",
    width: rfSpacing['3.05H'],
    letterSpacing: 0.6,
  },
  W_3_05H_H_8XL_BG_SOW_BR_XL_MT_XM: {
    width: rfSpacing['3.05H'],
    height: rfSpacing['8xl'],
    backgroundColor: colors.LP_Shadeofwhite,
    borderRadius: rfSpacing['xl'],
    marginTop: rfSpacing['xm'],
  },
  CL_HC_FS_XL_FW_500_TA_C_TOP_L: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xl'],
    fontWeight: "500",
    textAlign: "center",
    top: rfSpacing['l'],
  },
  CL_MO_FS_XL_FW_500_TA_C_TOP_3XL: {
    color: colors.LP_Mainorange,
    fontSize: rfSpacing['xl'],
    fontWeight: "500",
    textAlign: "center",
    top: rfSpacing['3xl'],
  },
  BBW_XXXS_BBC_E4EBF0_MV_M_MT_XXL: {
    borderBottomWidth: rfSpacing['xxxs'],
    borderBottomColor: colors.LP_Searchcolor,
    marginVertical: rfSpacing['m'],
    marginTop: rfSpacing['xxl'],
  },
  PV_L_BR_6XL_MT_M_AI_C_BW_1_BC_BS_BG_W_TOP_N3XL: {
    paddingVertical: rfSpacing['l'],
    borderRadius: rfSpacing['6xl'],
    marginTop: rfSpacing['m'],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.LP_bordersubmit,
    backgroundColor: colors.LP_White,
    top: -rfSpacing['3xl'],
  },
  CL_HC_FW_600: {
    color: colors.LP_HeadingColor,
    fontWeight: '600',
  },

  //Scanbar 

  TA_C_PT_4XLL_FS_4XL_CL_W: {
    textAlign: "center",
    paddingTop: rfSpacing['4xll'],
    fontSize: rfSpacing['4xl'],
    color: colors.LP_White,
  },
  W_5XXSL_H_5XXSL_BG_FLASH_BR_3XL_JC_C_AI_C_MT_5XXSL_ML_3_27H: {
    width: rfSpacing['5xxsl'],
    height: rfSpacing['5xxsl'],
    backgroundColor: colors.LP_Scannerflashbg,
    borderRadius: rfSpacing['3xl'],
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rfSpacing['5xxsl'],
    marginLeft: rfSpacing['3.27H']
  },
  W_XL_H_3XL: {
    width: rfSpacing['xl'],
    height: rfSpacing['3xl'],
  },
  AI_C_JC_C_MT_7XL: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rfSpacing['7xl']
  },
  CL_W_MT_10XL_W_2_5H_H_4XXLL_BW_XXXS_BR_ML_BC_W_TA_C_PT_XMS: {
    color: colors.LP_White,
    marginTop: rfSpacing['10xl'],
    width: rfSpacing['2.5H'],
    height: rfSpacing['4xxll'],
    borderWidth: rfSpacing['xxxs'],
    borderRadius: rfSpacing['ml'],
    borderColor: colors.LP_White,
    textAlign: "center",
    paddingTop: rfSpacing['xms']
  },
  W_2_7H_H_2_7H_BW_XXS_BC_W_BR_M_OV_H_JC_C_AI_C_MT_ML: {
    width: rfSpacing['2.7H'],
    height: rfSpacing['2.7H'],
    borderWidth: rfSpacing['xxs'],
    borderColor: colors.LP_White,
    borderRadius: rfSpacing['m'],
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rfSpacing['ml']
  },
  W_7XL_H_7XL_MT_10XL_AS_C: {
    width: rfSpacing['7xl'],
    height: rfSpacing['7xl'],
    marginTop: rfSpacing['10xl'],
    alignSelf: "center",
  },

  //Scanner Screen

  CROSS_PRESSABLE: {
    alignSelf: "center",
    marginTop: rfSpacing['10xl'],
    width: rfSpacing['6xsl'],
    height: rfSpacing['6xsl'],
    borderRadius: rfSpacing['6xsl'],
  },
  CROSS_WRAPPER: {
    flex: 1,
    borderRadius: rfSpacing['10xl'],
    justifyContent: "center",
    alignItems: "center",
  },
  W_6XSL_H_6XSL_RM_C: {
    width: rfSpacing['6xsl'],
    height: rfSpacing['6xsl'],
    resizeMode: "contain",
  },
  MODAL_OVERLAY: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  MODAL_BOX: {
    width: rfSpacing['3.4H'],
    height: rfSpacing['4.5H'],
    backgroundColor: colors.LP_White,
    borderRadius: rfSpacing['3xl'],
    padding: rfSpacing['3xl'],
    alignItems: 'center'
  },
  W_2H_H_10XL_MT_XML_ML_3XL: {
    width: rfSpacing['2H'],
    height: rfSpacing['10xl'],
    marginTop: rfSpacing['xml'],
    marginLeft: rfSpacing['3xl']
  },
  MODAL_POINTS: {
    fontSize: rfSpacing['xl'],
    color: colors.LP_NaturalGray,
    marginTop: rfSpacing['3xl']
  },
  ROW_W_2_25H_H_8XL_BG_GRADIENT_BR_XXL_MT_XL: {
    flexDirection: "row",
    width: rfSpacing['2.25H'],
    height: rfSpacing['8xl'],
    backgroundColor: colors.LP_Gradienttwo,
    borderRadius: rfSpacing['xxl'],
    marginTop: rfSpacing['xl']
  },
  W_5XL_H_5XL_MT_XXL_ML_3XL_RM_C: {
    width: rfSpacing['5xl'],
    height: rfSpacing['5xl'],
    marginTop: rfSpacing['xxl'],
    marginLeft: rfSpacing['3xl'],
    resizeMode: "contain"
  },
  POINTS_VALUE: {
    fontSize: rfSpacing['4xll'],
    fontWeight: 'bold',
    color: colors.LP_HeadingColor,
    textAlign: "center",
    marginTop: rfSpacing['xl'],
    marginLeft: rfSpacing['m']
  },
  ROW_MT_XL: {
    flexDirection: "row",
    marginTop: rfSpacing['xl']
  },
  TOTAL_POINTS: {
    fontSize: rfSpacing['xxl'],
    color: colors.LP_HeadingColor,
    marginBottom: rfSpacing['3xl'],
    fontWeight: "600"
  },
  POINTS: {
    color: colors.LP_Mainorange,
    fontSize: rfSpacing['xxl'],
    fontWeight: '600',
    paddingLeft: rfSpacing['1.1H']
  },
  MODAL_BUTTON: {
    backgroundColor: colors.LP_Mainorange,
    padding: rfSpacing['l'],
    borderRadius: rfSpacing['7xl'],
    width: rfSpacing['3.05H'],
    height: rfSpacing['7xl'],
    alignItems: 'center',
    marginVertical: rfSpacing['xs']
  },
  ROW: {
    flexDirection: "row"
  },
  MODAL_BUTTON_TEXT: {
    color: colors.LP_White,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600"
  },
  W_3XL_H_3XL_MT_XMS_ML_M_TINT_W: {
    width: rfSpacing['3xl'],
    height: rfSpacing['3xl'],
    marginTop: rfSpacing['xms'],
    marginLeft: rfSpacing['m'],
    tintColor: colors.LP_White
  },
  MODAL_BUTTON_TWO: {
    padding: rfSpacing['l'],
    borderRadius: rfSpacing['7xl'],
    width: rfSpacing['3.27H'],
    height: rfSpacing['7xl'],
    alignItems: 'center',
    marginVertical: rfSpacing['xs']
  },
  MODAL_BUTTON_TEXT_TWO: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
    paddingLeft: rfSpacing['3xl']
  },
  W_6XL_H_6XL_TOP_NXS_ML_XS_TINT_HC: {
    width: rfSpacing['6xl'],
    height: rfSpacing['6xl'],
    top: -rfSpacing['xs'],
    marginLeft: rfSpacing['xs'],
    tintColor: colors.LP_HeadingColor
  },


  // Profile Screen

  F_1_BG_W: { flex: 1, backgroundColor: colors.LP_White
   },
  H_8XL: { height: rfSpacing['1.93H'] },
  CL_B_FS_3XL_FW_600_PL_3XL_PT_5XXML: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['3xl'],
    fontWeight: "600",
    paddingLeft: rfSpacing['3xl'],
    paddingTop: rfSpacing['5xxml'],
  },
  CL_NG_PL_3XL: {
    color: colors.LP_NaturalGray,
    paddingLeft: rfSpacing['3xl'],
  },
  iconWrapperProfile: {
    height: rfSpacing['5xxml'],
    width: rfSpacing['5xxml'],
    borderRadius: rfSpacing['3xl'],
    backgroundColor: colors.LP_HomeIconWrapper,
    justifyContent: "center",
    alignItems: "center",
    marginTop: rfSpacing['m'],
    marginRight: rfSpacing['m'],
    elevation: rfSpacing['xxs']
  },
  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  containerProfile: {
    flex: 1,
    backgroundColor: colors.LP_White,
    borderTopLeftRadius: rfSpacing['4xl'],
    borderTopRightRadius: rfSpacing['4xl'],
    marginTop: -rfSpacing['4xl'],
    padding: rfSpacing['3xl'],
  },
  FD_R_JC_SB: { flexDirection: "row", justifyContent: "space-between" },
  FS_XXL_CL_HC_FW_600: {
    fontSize: rfSpacing['xxl'],
    color: colors.LP_HeadingColor,
    fontWeight: "600",
  },
  Closeicon: {
    paddingTop: rfSpacing['ms']
  },
  FD_R_MT_5XL: { flexDirection: "row", marginTop: rfSpacing['5xl'] },
  ML_S: { marginLeft: rfSpacing['s'] },



  NameText: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
  },
  VerifyIcon: {
    marginTop: rfSpacing['xs'],
    marginLeft: rfSpacing['xs']
  },
  Emailtext: {
    color: colors.LP_NaturalGray
  },
  UL_Firm: {
    height: rfSpacing['xxl'],
    width: rfSpacing['8xl'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_Mainorange,
    borderRadius: rfSpacing['xms'],
    marginTop: rfSpacing['xss']
  },
  Firm: {
    color: colors.LP_Mainorange,
    textAlign: "center",
    marginTop: -rfSpacing['xxs'],
    fontSize: rfSpacing['mll']
  },
  ML_95L_MT_XXL: {
    marginLeft: rfSpacing['95l'],
    marginTop: rfSpacing['xxl'],
  },
  Arrowicon: {
    height: rfSpacing['5xxsl'],
    width: rfSpacing['5xxsl'],
  },
  DIVIDER: {
    borderBottomWidth: rfSpacing['xxxs'],
    borderBottomColor: colors.LP_Searchcolor,
    marginVertical: rfSpacing['s'],
    paddingTop: rfSpacing['xs'],
  },
  SubHeading: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
    paddingTop: rfSpacing['s']
  },
  FD_R_GAP_XXL: { flexDirection: "row", gap: rfSpacing['xxl'] },
  Boxes: {
    width: rfSpacing['1.75H'],
    height: rfSpacing['8xl'],
    backgroundColor: colors.LP_ProfileGrayBox,
    borderRadius: rfSpacing['m'],
    marginTop: rfSpacing['xl'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_ProfileGrayborder
  },
  FD_R_M_M_GAP_L: {
    flexDirection: "row",
    margin: rfSpacing['m'],
    gap: rfSpacing['l'],
  },
  FD_R_M_M_GAP_6XL: {
    flexDirection: "row",
    margin: rfSpacing['m'],
    gap: rfSpacing['6xl'],
  },
  FD_R_M_L_GAP_7MXL: {
    flexDirection: "row",
    margin: rfSpacing['l'],
    gap: rfSpacing['7mxl'],
  },
  FD_R_M_M_GAP_XXL: {
    flexDirection: "row",
    margin: rfSpacing['m'],
    gap: rfSpacing['xxl'],
  },
  BoxText: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['l'],
    fontWeight: "600",
    paddingTop: rfSpacing['m']
  },
  ArrowiconBoxes: {
    height: rfSpacing['5xxsl'],
    width: rfSpacing['5xxsl'],
    marginLeft: rfSpacing['m'],
    marginTop: rfSpacing['xss']
  },
  Boxes2: {
    width: rfSpacing['1.75H'],
    height: rfSpacing['8xl'],
    borderRadius: rfSpacing['m'],
    marginTop: rfSpacing['xl'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_ProfileGrayborder
  },
  FD_R_M_M_GAP_4XXLL: {
    flexDirection: "row",
    margin: rfSpacing['m'],
    gap: rfSpacing['4xxll'],
  },
  FD_R_M_L: {
    flexDirection: "row",
    margin: rfSpacing['l'],
  },
  LastTextProfile1: {
    color: colors.LP_NaturalGray,
    fontSize: rfSpacing['m'],
    textAlign: "center",
    paddingTop: rfSpacing['l']
  },
  LastTextProfile2: {
    color: colors.LP_Mainorange,
    fontSize: rfSpacing['m'],
    textAlign: "center",
    paddingTop: rfSpacing['l']
  },
  //place order 
  P_3XL_BG_ICONBG_F_1: {
    padding: rfSpacing['3xl'],
    backgroundColor: colors.LP_IconBG,
    flex: 1,
  },
  Arrowdownicon: {
    width:rfSpacing['4xxll'],
    height: rfSpacing['4xxll'],
    resizeMode: "contain",
    top: -rfSpacing['4xxsl'],
    left: rfSpacing['2.95H']
  },
  updownicon: {
    width: rfSpacing['3xl'],
    height: rfSpacing['3xl'],
    resizeMode: "contain"
  },


  FS_3XL_FW_600_MB_3XL_ML_S_CL_HC: {
    fontSize: rfSpacing['3xl'],
    fontWeight: '600',
    marginBottom: rfSpacing['3xl'],
    marginLeft: rfSpacing['s'],
    color: colors.LP_HeadingColor,
  },
  W_5XXL_H_5XXL_ML_1_8H_TOP_4XXLL: {
    width: rfSpacing['5xxl'],
    height: rfSpacing['5xxl'],
    marginLeft: rfSpacing['1.8H'],
    top: rfSpacing['4xxll'],
  },
  W_5XXL_H_5XXL_ML_6XSL_TOP_6XSL_ROT_40: {
    width: rfSpacing['5xxl'],
    height: rfSpacing['5xxl'],
    marginLeft: rfSpacing['6xsl'],
    top: rfSpacing['6xsl'],
    transform: [{ rotate: '40deg' }],
  },
  W_5XXML_H_5XXML_ML_S_TOP_1H_LEFT_10XL_ROT_70: {
    width: rfSpacing['5xxml'],
    height: rfSpacing['5xxml'],
    marginLeft: rfSpacing['s'],
    top: rfSpacing['1H'],
    left: rfSpacing['10xl'],
    transform: [{ rotate: '70deg' }],
  },
  W_5XXL_H_5XXL_ML_S_LEFT_10XL_TOP_6XL_ZINDEX_10_ROT_160: {
    width: rfSpacing['5xxl'],
    height: rfSpacing['5xxl'],
    marginLeft: rfSpacing['s'],
    left: rfSpacing['10xl'],
    top: rfSpacing['6xl'],
    zIndex: 10,
    transform: [{ rotate: '160deg' }],
  },
  W_1_89H_H_1_8H_ML_S: {
    width: rfSpacing['1.89H'],
    height: rfSpacing['1.8H'],
    marginLeft: rfSpacing['s'],
  },
  W_6XSL_H_6XSL_LEFT_NEG_9XML_TOP_6XSL: {
    width: rfSpacing['6xsl'],
    height: rfSpacing['6xsl'],
    left: -rfSpacing['9xml'],
    top: rfSpacing['6xsl'],
  },
  W_3XL_H_3XL_LEFT_NEG_10XL_TOP_1_1H_ROT_110: {
    width: rfSpacing['3xl'],
    height: rfSpacing['3xl'],
    left: -rfSpacing['10xl'],
    top: rfSpacing['1.1H'],
    transform: [{ rotate: '110deg' }],
  },
  NewOrderText: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
    marginTop: rfSpacing['s'],
  },
  label: {
    marginTop: rfSpacing['s'],
    fontSize: rfSpacing['l'],
    color: colors.LP_NaturalGray,
  },
  dropdown: {
    height: rfSpacing['6xsl'],
    padding: rfSpacing['l'],
    borderColor: colors.LP_OrderBC,
    elevation: rfSpacing['xxxs'],
    borderRadius: rfSpacing['xss'],
    marginTop: rfSpacing['xss'],
    backgroundColor: colors.LP_White,
  },
  dropdownText: {
    color:colors.LP_PlaceOrderDropdown,
    marginTop: rfSpacing['xxs'],
  },
  dropdownList: {
    borderColor: colors.LP_SignatureImageBorder,
    elevation: rfSpacing['xxs'],
    borderRadius: rfSpacing['xss'],
    maxHeight: rfSpacing['1.42H'],
  },
  dropdownItem: {
    padding: rfSpacing['m'],
    borderBottomWidth: rfSpacing['xxxs'],
    borderBottomColor: colors.LP_placeorderDropdownItems,
  },
  dropdownItemText: {
    color: colors.LP_HeadingColor,
  },
  cartonInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: rfSpacing['xxxs'],
    borderColor: colors.LP_OrderBC,
    borderRadius: rfSpacing['xss'],
    paddingHorizontal: rfSpacing['m'],
    paddingVertical: rfSpacing['s'],
    marginTop: rfSpacing['xss'],
    justifyContent: 'space-between',
    backgroundColor: colors.LP_White,
    height: rfSpacing['6xsl'],
  },
  cartonInputText: {
    fontSize: rfSpacing['xl'],
    color: colors.LP_HeadingColor,
    marginRight: rfSpacing['s'],
  },
  iconStyle: {
    width: rfSpacing['3xl'],
    height: rfSpacing['3xl'],
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: rfSpacing['s'],
  },
  radioButton: {
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_OrderBC,
    paddingVertical: rfSpacing['s'],
    paddingHorizontal: rfSpacing['xl'],
    borderRadius: rfSpacing['xss'],
  },
  radioButtonSelected: {
    backgroundColor: colors.LP_placeorderDropdownItems,
    borderColor: colors.LP_Mainorange,
  },
  radioText: {
    color: colors.LP_NaturalGray,
  },
  radioTextSelected: {
    fontWeight: 'bold',
    color: colors.LP_Mainorange,
  },
  radioGroupVertical: {
    marginTop: rfSpacing['xss'],
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rfSpacing['xss'],
    backgroundColor: colors.LP_White,
    height: rfSpacing['6xsl'],
    borderRadius: rfSpacing['xss'],
    paddingHorizontal: rfSpacing['xl'],
    elevation: rfSpacing['xxxs'],
  },
  radioCircle: {
    height: rfSpacing['xl'],
    width: rfSpacing['xl'],
    borderRadius: rfSpacing['s'],
    borderWidth: rfSpacing['xxs'],
    borderColor:colors.LP_RadioCircle,
    marginRight: rfSpacing['s'],
  },
  radioSelected: {
    borderColor: colors.LP_Mainorange,
    backgroundColor: colors.LP_Mainorange,
  },
  radioRowText: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['l'],
  },
  submitButton: {
    paddingVertical: rfSpacing['l'],
    borderRadius: rfSpacing['6xl'],
    marginTop: rfSpacing['s'],
    alignItems: 'center',
  },
  submitButtontwo: {
    paddingVertical: rfSpacing['l'],
    borderRadius: rfSpacing['6xl'],
    marginTop: rfSpacing['s'],
    alignItems: 'center',
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_OrderBC,
  },
  activeButtonone: {
    backgroundColor: colors.LP_White,
  },
  activeButton: {
    backgroundColor: colors.LP_Mainorange,
  },
  disabledButton: {
    backgroundColor:colors.LP_Shadeofwhite,
  },
  submitText: {
    color: colors.LP_White,
    fontWeight: '600',
  },
  submitTexttwo: {
    color: colors.LP_HeadingColor,
    fontWeight: '600',
    textAlign: "center"
  },
  dropdownOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: colors.LP_White,
    borderWidth: 1,
    borderColor: colors.LP_SignatureImageBorder,
    borderRadius: rfSpacing['xss'],
    maxHeight: rfSpacing['1.45H'],
    zIndex: 999,
  },
  container4: {
    width: rfSpacing['3.35H'],
    flexDirection: 'row',
    backgroundColor: colors.LP_PlaceOrderContainer4,
    borderRadius: rfSpacing['6xsl'],
    padding: rfSpacing['xms'],
    alignSelf: 'center',
    marginTop: rfSpacing['s'],
  },
  buttonOrderUnit: {
    paddingVertical: rfSpacing['s'],
    paddingHorizontal: rfSpacing['5xxl'],
    borderRadius: rfSpacing['6xsl'],
  },
  textOrderUnit: {
    color: colors.LP_Tabtext,
    fontSize: rfSpacing['xl'],
  },
  hoverText: {
    color: colors.LP_HeadingColor,
  },
  activeText: {
    color: colors.LP_Mainorange,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: rfSpacing['3.4H'],
    height: rfSpacing['5.1H'],
    backgroundColor: colors.LP_White,
    padding: rfSpacing['3xl'],
    borderRadius: rfSpacing['s'],
    elevation: rfSpacing['s'],
  },
  modalContainertwo: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['3.95H'],
    backgroundColor: colors.LP_White,
    padding: rfSpacing['3xl'],
    borderRadius: rfSpacing['s'],
    elevation: 5,
  },
  submitTextone: {
    color: colors.LP_HeadingColor,
  },
  leftsidetext: {
    color: colors.LP_rememberhaed,
    fontSize: rfSpacing['m'],
    fontWeight: "400",
    marginLeft: rfSpacing['s'],
    top: -rfSpacing['3xl'],
  },
  rightsidetext: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['l'],
    fontWeight: "600",
    top: -rfSpacing['3xl'],
  },
  loadingBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.LP_LoadingBTNColor,
    padding: rfSpacing['xl'],
    borderRadius: rfSpacing['7xl'],
    marginTop: rfSpacing['m'],
  },
  loadingText: {
    color: colors.LP_Mainorange,
    fontSize: rfSpacing['xl'],
  },
  successBtn: {
    backgroundColor: colors.LP_LightGreen,
    padding: rfSpacing['xl'],
    borderRadius: rfSpacing['7xl'],
    marginTop: rfSpacing['m'],
    alignItems: "center",
  },
  successText: {
    color:colors.LP_White,
    fontSize: rfSpacing['xl'],
    fontWeight: "bold",
  },
  FD_R_AI_C_JC_C_G_10: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: rfSpacing['m']
  },
  W_3XL_H_3XL: {
    width: rfSpacing['3xl'],
    height: rfSpacing['3xl'],
  },
  OrderConfirmationText: {
    fontSize: rfSpacing['3xl'],
    fontWeight: 'bold',
    color: colors.LP_HeadingColor,
  },
  OrderDetailsContainer: {
    width: rfSpacing['3.10H'],
    height: rfSpacing['1.93H'],
    backgroundColor: colors.LP_Shadeofwhite,
    borderRadius: rfSpacing['xl'],
    top: rfSpacing['s'],
    alignSelf: "center",
  },
  FD_R_Gap_1_2H_MarginTop_4XML: {
    flexDirection: "row",
    gap: rfSpacing['1.2H'],
    marginTop: rfSpacing['4xml'],
  },
  FD_R_Gap_1_83H_MarginTop_4XML: {
    flexDirection: "row",
    gap: rfSpacing['1.83H'],
    marginTop: rfSpacing['4xml'],
  },
  FD_R_Gap_1_82H_MarginTop_4XML: {
    flexDirection: "row",
    gap: rfSpacing['1.82H'],
    marginTop: rfSpacing['4xml'],
  },
  FD_R_Gap_1_6H_MarginTop_4XML: {
    flexDirection: "row",
    gap: rfSpacing['1.6H'],
    marginTop: rfSpacing['4xml'],
  },
  FD_R_Gap_1_42H_MarginTop_4XML: {
    flexDirection: "row",
    gap: rfSpacing['1.42H'],
    marginTop: rfSpacing['4xml'],
    alignSelf: "center",
  },
  FD_R_Gap_1_93H_MarginTop_4XL: {
    flexDirection: "row",
    gap: rfSpacing['1.93H'],
    marginTop: rfSpacing['4xl'],
    alignSelf: "center",
  },
  BorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.LP_Searchcolor,
    marginVertical: rfSpacing['s'],
  },
  BorderBottomXS: {
    borderBottomWidth: rfSpacing['xxxs'],
    borderBottomColor:colors.LP_Searchcolor,
    marginVertical: rfSpacing['s'],
  },
  OrderAmountText: {
    color: colors.LP_rememberhaed,
    fontSize: rfSpacing['mll'],
    fontWeight: "400",
  },
  OrderAmountValueText: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['ml'],
    fontWeight: "600",
  },
  TaxFeeText: {
    color: colors.LP_rememberhaed,
    fontSize: rfSpacing['mll'],
    fontWeight: "400",
  },
  TaxFeeValueText: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['ml'],
    fontWeight: "600",
  },
  TotalAmountText: {
    color:colors.LP_rememberhaed,
    fontSize: rfSpacing['xxl'],
    fontWeight: "400",
  },
  TotalAmountValueText: {
    color: colors.LP_Mainorange,
    fontSize: rfSpacing['3xl'],
    fontWeight: "600",
  },
  ArrowModelContainer: {
    backgroundColor: colors.LP_White,
    alignItems: "center",
    justifyContent: "center",
  },
  ThirdModelContainer: {
    alignSelf: "center",
    top: -rfSpacing['5xl'],
  },
  OrderConfirmedText: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['4xxsl'],
    fontWeight: 'bold',
    textAlign: "center",
    top: -rfSpacing['3xl'],
  },
  ThanksForOrderContainer: {
    paddingTop: rfSpacing['xl'],
    top: -rfSpacing['3xl'],
  },
  ThanksForOrderText: {
    color: colors.LP_NaturalGray,
    fontSize: rfSpacing['ml'],
    textAlign: "center",
  },
  OrderNumberContainer: {
    flexDirection: "row",
    width: rfSpacing['2.25H'],
    height: rfSpacing['4xxm'],
    backgroundColor:colors.LP_Searchcolor,
    alignSelf: "center",
    marginTop: rfSpacing['4xl'],
    top: -rfSpacing['3xl'],
  },
  OrderNumberText: {
    color: colors.LP_HeadingColor,
    paddingLeft: rfSpacing['xxxs'],
    paddingTop: rfSpacing['xxs'],
  },
  W_XL_H_XL_ResizeContain_MarginTop_XSS_MarginLeft_XXS: {
    width: rfSpacing['xl'],
    height: rfSpacing['xl'],
    resizeMode: "contain",
    marginTop: rfSpacing['xss'],
    marginLeft: rfSpacing['xxs'],
  },
  DoneButton: {
    marginTop: rfSpacing['4xl'],
    backgroundColor: colors.LP_White,
    top: -rfSpacing['3xl'],
  },

  //Points Screen / History Screen
  PB_9xml: {
    paddingBottom: rfSpacing['9xml']
  },
  containerPoints: {
    backgroundColor: colors.LP_Pointsbgcolor,
  },
  C_B_FS_XXL_FW_600_MT_4XXSL_L_4XL: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
    marginTop: rfSpacing['4xxsl'],
    left: rfSpacing['4xl']
  },


  // MyOrder Screen
  BG_F_xxxs: {
    backgroundColor:colors.LP_Pointsbgcolor,
    flex: rfSpacing['xxxs'],
  },

  H_6XSL_W_6XSL_ML_310H_MT_135H: {
    height: rfSpacing['6xsl'],
    width: rfSpacing['6xsl'],
    marginLeft: rfSpacing['3.10H'],
    marginTop: -rfSpacing['1.35H']
  }
})