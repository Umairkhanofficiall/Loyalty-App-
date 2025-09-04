import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import colors from '../../theme/colors';
import rfSpacing from '../../theme/rfSpacing';
import spacing from '../../theme/spacing';
const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export default StyleSheet.create({
     F1_JC_C_AI_C: {
        flex: rfSpacing['xxxs'],
        justifyContent: 'center',
        alignItems: 'center',
    },
    SubContainer: {
        width: rfSpacing['3.7H'],
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
        color: 'white',
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
    WhiteButton:{
        width: rfSpacing['3.4H'],
        height: rfSpacing['6xml'],
        borderRadius: rfSpacing['4xxm'],
        alignSelf: "center",
        marginTop: rfSpacing['3xl'],
        textAlign: "center",
        color: colors.LP_HeadingColor,
        verticalAlign: "middle",
        fontSize: rfSpacing['xl'],
        fontWeight:"bold",
        fontFamily: "Font/Plus Jakarta Sans",
        borderWidth:rfSpacing['xxxs'],
        borderColor:colors.LP_ProfileGrayborder
    },
    ButtonForModel:{
        width: rfSpacing['3.5H'],
        height: rfSpacing['6xml'],
        borderRadius: rfSpacing['4xxm'],
        alignSelf: "center",
        marginTop: rfSpacing['3xl'],
        textAlign: "center",
        color: colors.LP_White,
        verticalAlign: "middle",
        fontSize: rfSpacing['xl'],
        fontWeight:"bold",
        fontFamily: "Font/Plus Jakarta Sans",
        borderWidth:rfSpacing['xxxs'],
        borderColor:colors.LP_ProfileGrayborder
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: rfSpacing['xxl']
    },
    card: {
        width: rfSpacing['3.7H'],
        height: rfSpacing['5.1H'],
        backgroundColor: colors.LP_signin,
        borderRadius: rfSpacing['4xl']
    },

    logo: {
        marginLeft: rfSpacing['5xxsl'],
        marginTop: rfSpacing['5xxsl'],
    },
    Text: {
        textAlign: "center",
        fontSize: rfSpacing['4xxm'],
        color: 'black', fontWeight: "600",
        marginTop: rfSpacing['4xl'],
        fontFamily: 'Plus Jakarta Sans'
    },
    subText: {
        textAlign: "center", color: colors.LP_rememberhaed, marginTop: rfSpacing['4xl'], fontSize: rfSpacing['xxl']
    },
    subTexttwo: {
        textAlign: "center", color: colors.LP_rememberhaed, fontSize: rfSpacing['xxl']
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
        color: 'black',
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
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
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
    }
})