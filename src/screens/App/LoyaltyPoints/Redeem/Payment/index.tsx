import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable, ScrollView, Image,StatusBar,
} from 'react-native';
import { getImage } from '../../../../../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import rfSpacing from '../../../../../theme/rfSpacing';
import colors from '../../../../../theme/colors';
import ScannerLoader from '../../../../../Ui/LP_ScannerLoader';
import FastImage from 'react-native-fast-image';

const Payment = () => {
    const navigation = useNavigation();
    const [points, setPoints] = useState('');
    const [wallet, setWallet] = useState('');
    const [holderName, setHolderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [showModal, setShowModal] = useState(false);
     const [showLottie, setShowLottie] = useState(false);

    const availablePoints = 12500;
    const rate = 0.54; 

    const calculatedAmount = points ? (parseInt(points) * rate).toFixed(0) : '0';

    const validateForm = () => {
        if (!points || parseInt(points) <= 0) return false;
        if (!wallet) return false;
        if (wallet && (!holderName || !accountNumber)) return false;
        return true;
    };

    const handleProceed = () => {
    if (validateForm()) {
      setShowLottie(true); 
      setTimeout(() => {
        setShowLottie(false); 
        setShowModal(true);   
      }, 2000); 
    }
  };

    return (
        // <>
        //       <StatusBar
        //         translucent={true}
        //         backgroundColor="transparent"
        //         barStyle="dark-content"
        //       />
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: rfSpacing['4xl'] }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={getImage('rightface')} style={{ width: rfSpacing['5xl'], height: rfSpacing['5xl'] }} />
                </Pressable>
                <Text style={styles.header}>Redeem to Cash</Text>
            </View>
            <Text style={styles.subHeader}>Ready to Redeem Cash?</Text>
            <Text style={styles.desc}>Convert your points to cash in just a couple steps.</Text>

            
            <View style={styles.boxRow}>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>Available Points</Text>
                    <Text style={styles.points}>{availablePoints}</Text>
                </View>
                <Text style={styles.equals}>=</Text>
                <View style={styles.infoBox}>
                    <Text style={styles.labeltwo}>Equivalent to (PKR)</Text>
                    <Text style={styles.amount}>{(availablePoints * rate).toFixed(0)}</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", gap: rfSpacing['1.2H'] }}>
                <Text style={{ fontSize:  rfSpacing['l'], color: colors.LP_HeadingColor }}>Your Points</Text>
                <Text style={{ fontSize:  rfSpacing['l'], color: colors.LP_HeadingColor }}>Your Amount (PKR)</Text>
            </View>
            <View style={styles.boxRow}>

                <TextInput
                    placeholder="Enter Points"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    style={styles.inputBox}
                    value={points}
                    onChangeText={setPoints}
                />
               
                <Text style={styles.equals}>=</Text>
                <TextInput
                    placeholder="0"
                    placeholderTextColor="#999"
                    style={[styles.inputBox, { backgroundColor: colors.LP_White }]}

                />
            </View>

         
            <Text style={[styles.labelthree, { marginTop: rfSpacing['4xl'] }]}>Select Wallet</Text>
            <TouchableOpacity
                style={[styles.walletOption, wallet === 'JazzCash' && styles.walletSelected]}
                onPress={() => setWallet('JazzCash')}
            >
                <Text style={styles.walletText}>JazzCash</Text>
            </TouchableOpacity>
            {wallet === 'JazzCash' && (
                <View style={styles.walletDetails}>
                    <TextInput
                        placeholder="Wallet Holder Name"
                        placeholderTextColor="#999"
                        style={styles.walletInput}
                        value={holderName}
                        onChangeText={setHolderName}
                    />
                    <TextInput
                        placeholder="Wallet / Account Number"
                        placeholderTextColor="#9b9999ff"
                        keyboardType="numeric"
                        style={styles.walletInput}
                        value={accountNumber}
                        onChangeText={setAccountNumber}
                    />
                </View>
            )}
            <TouchableOpacity
                style={[styles.walletOption, wallet === 'EasyPaisa' && styles.walletSelected]}
                onPress={() => setWallet('EasyPaisa')}
            >
                <Text style={styles.walletText}>EasyPaisa</Text>
            </TouchableOpacity>

           
            <TouchableOpacity
                style={[styles.proceedBtn, { opacity: validateForm() ? 1 : 0.4 }]}
                onPress={handleProceed}
                disabled={!validateForm()}
            >
                <Text style={styles.proceedText}>Proceed </Text>
            </TouchableOpacity>
          
           {showLottie && <ScannerLoader />}
           
            <Modal
                visible={showModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainertwo}>

                                  <View>
                            <FastImage
                 style={{ width: rfSpacing['1.3H'],
                            height: rfSpacing['1.3H'],
                        alignSelf:"center" }}
                source={require("../../../../../assets/Images/Levels/giftwo.gif")}
                resizeMode={FastImage.resizeMode.contain}
              />
                          {/* <WebView
                            source={require('../../../assets/Images/Levels/giftwo.gif')}
                            style={{
                              flex: 1,
                              backgroundColor: 'transparent'
                            }}
                            originWhitelist={['*']}
                            scrollEnabled={false}
                          /> */}
                        </View>
                        <Text style={{ color: colors.LP_HeadingColor, fontSize:  rfSpacing['5xl'], fontWeight: '500', textAlign: "center", top:  rfSpacing['3xl'] }}>
                            Successful!
                        </Text>
                        <Text style={{ fontSize:  rfSpacing['4xxm'], fontWeight: 600, color: colors.LP_amountcolor, textAlign:"center", marginTop:  rfSpacing['3xl'] }}>1890PKR</Text>
                        <View style={{ paddingTop:  rfSpacing['s'], top: - rfSpacing['3xl'] }}>
                            <Text style={{ color: colors.LP_NaturalGray, fontSize:  rfSpacing['l'], textAlign: "center", marginTop:  rfSpacing['3xl'],fontFamily:"Plus Jakarta Sans",width:rfSpacing['3.05H'],letterSpacing:0.6 }}>amount request has been sent to our team. Once the request is approved, your balance will be credited into your give JazzCash account.  </Text>
                            <View style={{ width: rfSpacing['3.05H'], height: rfSpacing['8xl'], backgroundColor: colors.LP_Shadeofwhite, borderRadius:  rfSpacing['xl'],marginTop:rfSpacing['xm'] }}>
                                <Text style={{ color: colors.LP_HeadingColor, fontSize:  rfSpacing['xl'], fontWeight: "500", textAlign: "center", top:  rfSpacing['l'] }}>jakob Rizza</Text>
                                <Text style={{ color: colors.LP_Mainorange, fontSize:  rfSpacing['xl'], fontWeight: "500", textAlign: "center", top:  rfSpacing['3xl'] }}>03035610661</Text>
                            </View>
                            <View style={{ borderBottomWidth: rfSpacing['xxxs'], borderBottomColor: '#E4EBF0', marginVertical:rfSpacing['m'] , marginTop:rfSpacing['xxl'] }} />
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.submitButtontwo, { marginTop:  rfSpacing['s'], backgroundColor: colors.LP_White, top: - rfSpacing['3xl'] }]}
                        >
                            <Text style={styles.submitTexttwo}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ScrollView>
        //</>
    );
};

export default Payment;

const styles = StyleSheet.create({
    container: {
        padding:  rfSpacing['3xl'],
        backgroundColor: colors.LP_Containerbg,
        flexGrow: 1,
    },
    header: {
        fontSize:  rfSpacing['4xl'],
        color: colors.LP_HeadingColor,
        fontWeight: '700',
        marginBottom:  rfSpacing['m'],
        marginTop:  rfSpacing['m'],
        paddingLeft:  rfSpacing['m']
    },
    subHeader: {
        fontSize:  rfSpacing['3xl'],
        fontWeight: '600',
        marginBottom:  rfSpacing['xs'],
        color: colors.LP_HeadingColor,
        paddingTop:  rfSpacing['m']
    },
    desc: {
        color: colors.LP_NaturalGray,
        marginBottom:  rfSpacing['3xl'],
        marginTop:rfSpacing['m'],
        fontSize:rfSpacing['l']
    },
    boxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:  rfSpacing['xml'],
        marginTop:  rfSpacing['m']
    },
    infoBox: {
        flex: 1,
        backgroundColor: colors.LP_White,
        borderRadius:  rfSpacing['xl'],
        padding:  rfSpacing['xml'],
        alignItems: 'center',
        elevation:  rfSpacing['xxxs'],
        height: rfSpacing['9xl'],
    },
    label: {
        color: colors.LP_NaturalGray,
        fontSize:  rfSpacing['l'],
        fontWeight: "400",
        marginBottom:  rfSpacing['xs'],
        left: - rfSpacing['3xl']
    },
    labeltwo: {
        color: colors.LP_NaturalGray,
        fontSize:  rfSpacing['l'],
        fontWeight: "400",
        marginBottom:  rfSpacing['xs'],
        left: -rfSpacing['ms']
    },
    labelthree: {
        color: colors.LP_HeadingColor,
        fontSize:  rfSpacing['xl'],
        fontWeight: "600",
        marginBottom:  rfSpacing['xs'],

    },
    points: {
        color: colors.LP_Mainorange,
        fontSize: rfSpacing['3xl'],
        fontWeight: "600",
        left: -rfSpacing['5xxsl']
    },
    amount: {
        color: colors.LP_amountcolor,
        fontSize: rfSpacing['3xl'],
        fontWeight: "600",
        left: -rfSpacing['5xxsl']

    },
    equals: {
        marginHorizontal:  rfSpacing['m'],
        fontSize:  rfSpacing['xxl'],
        top:-rfSpacing['xl'],
        fontWeight: 'bold',
        color: colors.LP_HeadingColor
    },
  
    inputBox: {
        flex: 1,
        backgroundColor: colors.LP_White,
        borderRadius:  rfSpacing['m'],
        padding:  rfSpacing['l'],
        fontSize:  rfSpacing['l'],
        color: colors.LP_HeadingColor,
        elevation:  rfSpacing['xxxs'],
    },
    walletOption: {
        backgroundColor: colors.LP_White,
        borderRadius:  rfSpacing['m'],
        padding:  rfSpacing['xml'],
        marginTop:  rfSpacing['m'],
    },
    walletSelected: {
        borderColor:colors.LP_Mainorange,
        borderWidth: 1.5,
    },
    walletText: {
        fontSize:  rfSpacing['l'],
        fontWeight: '600',
        color: colors.LP_HeadingColor
    },
    walletDetails: {
        marginTop:  rfSpacing['m'],

    },
    walletInput: {
        backgroundColor: colors.LP_White,
        borderRadius:  rfSpacing['m'],
        padding:  rfSpacing['m'],
        marginBottom:  rfSpacing['m'],
        color: colors.LP_HeadingColor

    },
    proceedBtn: {
        backgroundColor: colors.LP_Mainorange,
        paddingVertical:  rfSpacing['l'],
        borderRadius: rfSpacing['5xl'],
        marginTop: rfSpacing['5xl'],
        alignItems: 'center',
    },
    proceedText: {
        color: colors.LP_White,
        fontWeight: 'bold',
    },
    
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        backgroundColor: colors.LP_White,
        padding: 25,
        borderRadius:  rfSpacing['m'],
        width: '90%',
    },
    modalContainertwo: {
        width: rfSpacing['3.4H'],
        height: rfSpacing['4.9H'],
        backgroundColor: colors.LP_White,
        padding:  rfSpacing['3xl'],
        borderRadius:  rfSpacing['m'],
        elevation:  rfSpacing['xs'],
    },
    submitButtontwo: {
        paddingVertical:  rfSpacing['l'],
        borderRadius: rfSpacing['6xl'],
        marginTop:  rfSpacing['m'],
        alignItems: 'center',
        borderWidth: 1,
        borderColor:colors.LP_bordersubmit
    },
    submitTexttwo: {
        color: colors.LP_HeadingColor,
        fontWeight: '600',
    },
});
