import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { getImage } from '../../../../assets/Images/images';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../../../navigation/StackNavigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabParamList } from '../../../../navigation/ButtomTab';
import rfSpacing from '../../../../theme/rfSpacing';
import colors from '../../../../theme/colors';
import Flash from '../../../../assets/Images/Scanner/Flash';
import Loader from '../../../../Ui/LP_LottieFullS';

type ScannerNavigationProp = StackNavigationProp<RootStackParamList, 'Scanner'>;


type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, 'Points'>,
    StackNavigationProp<RootStackParamList>
  >;
};

export default function Scanner({ navigation }: Props) {
  
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [flashOn, setFlashOn] = useState(false);

  const onBarCodeRead = (e: any) => {
    if (!scannedData) {
      setScannedData(e.data);
      setShowModal(true);
      console.log("Scanned Data: ", e.data);
    }
  };

  const resetScanner = () => {
    setScannedData(null);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <RNCamera
  style={styles.camera}
  type={RNCamera.Constants.Type.back}
  flashMode={
    flashOn
      ? RNCamera.Constants.FlashMode.torch  
      : RNCamera.Constants.FlashMode.off    
  }
  onBarCodeRead={onBarCodeRead}
  captureAudio={false}
>

        <Text style={styles.text}>Scan QR Code</Text>

        <Pressable
  style={styles.image}
  onPress={() => setFlashOn(!flashOn)}
>
  <Flash fill={flashOn ? "#ffff00ff" : "white"} />
</Pressable>

        <View style={styles.scanArea}>
          <Text style={styles.instruction}>Bring QR code within the scan box</Text>
          <View style={styles.scanBox} />
        </View>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.crossPressable}  
        >
          {({ pressed }) => (
            <View
              style={[
                styles.crossWrapper,
                { backgroundColor: pressed ? "#000000ff" : "transparent" }
              ]}
            >
              <Image
                source={getImage('cross')}
                style={[
                  styles.cross,
                  { tintColor: pressed ? "#000" : "#878585ff" }
                ]}
              />
            </View>
          )}
        </Pressable>
      </RNCamera>


      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Image source={getImage('Text')} style={{ width: rfSpacing['2H'], height: rfSpacing['10xl'], marginTop:  rfSpacing['xml'], marginLeft:  rfSpacing['3xl'] }} />
            <Text style={styles.modalPoints}>You have earned</Text>
            <View style={{ flexDirection: "row", width: rfSpacing['2.25H'], height: rfSpacing['8xl'], backgroundColor: colors.LP_Gradienttwo, borderRadius:  rfSpacing['xxl'], marginTop:  rfSpacing['xl'] }}>
              <Image source={getImage('tick')} style={{ width:  rfSpacing['5xl'], height: rfSpacing['5xl'], marginTop:  rfSpacing['xxl'], marginLeft:  rfSpacing['3xl'],resizeMode:"contain" }} />
              <Text style={styles.pointsValue}>125 Points</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop:  rfSpacing['xl'] }}>
              <Text style={styles.totalPoints}>Your Total Points:</Text>
              <Text style={styles.points}>12,500</Text>
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={resetScanner}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modalButtonText}>Scan Next Item</Text>
                <Image source={getImage('qrcode')} style={{ width:  rfSpacing['3xl'], height:  rfSpacing['3xl'], marginTop:  rfSpacing['xms'], marginLeft: rfSpacing['m'], tintColor:colors.LP_White }} />
              </View>
            </TouchableOpacity>

            <Pressable
              style={styles.modalButtontwo}
              onPress={() => navigation.navigate('Points')}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modalButtonTexttwo}>Go Scan History</Text>
                <Image source={getImage('arrow')} style={{ width:  rfSpacing['6xl'], height: rfSpacing['6xl'], top: -rfSpacing['xs'], marginLeft: rfSpacing['xs'], tintColor:colors.LP_HeadingColor }} />
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  text: {
   textAlign: "center",
       paddingTop: rfSpacing['4xll'],
       fontSize: rfSpacing['4xl'],
       color: colors.LP_White,
  },
  image: {
    width: rfSpacing['5xxsl'],
       height: rfSpacing['5xxsl'],
       backgroundColor: colors.LP_Scannerflashbg,
       borderRadius: rfSpacing['3xl'],
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: rfSpacing['5xxsl'],
       marginLeft: rfSpacing['3.27H']
  },
 
  scanArea: {
    alignItems: 'center',
       justifyContent: 'center',
       marginTop: rfSpacing['7xl']
  },
  scanBox: {
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
  instruction: {
    color: '#fff',
        marginTop: rfSpacing['10xl'],
        width: rfSpacing['2.5H'],
        height: rfSpacing['4xxll'],
        borderWidth: rfSpacing['xxxs'],
        borderRadius: rfSpacing['ml'],
        borderColor: colors.LP_White,
        textAlign: "center",
        paddingTop: rfSpacing['xms']
  },
    crossPressable: {
    alignSelf: "center",
    marginTop: rfSpacing['10xl'],
    width: rfSpacing['6xsl'],
    height: rfSpacing['6xsl'],
    borderRadius: rfSpacing['6xsl'],
  },
  
  crossWrapper: {
    flex: 1,
    borderRadius: rfSpacing['10xl'],
    justifyContent: "center",
    alignItems: "center",
  },
  
  cross: {
   width: rfSpacing['6xsl'],
    height: rfSpacing['6xsl'],
    resizeMode: "contain",
  },


  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    width:  rfSpacing['3.4H'],
    height:  rfSpacing['4.5H'],
    backgroundColor:colors.LP_White,
    borderRadius:  rfSpacing['3xl'],
    padding:  rfSpacing['3xl'],
    alignItems: 'center'
  },
  modalPoints: {
    fontSize:  rfSpacing['xl'],
    color: colors.LP_NaturalGray,
    marginTop:  rfSpacing['3xl']
  },
  pointsValue: {
    fontSize:  rfSpacing['4xll'],
    fontWeight: 'bold',
    color: '#000000ff',
    textAlign: "center",
    marginTop:  rfSpacing['xl'],
    marginLeft:  rfSpacing['m']
  },
  totalPoints: {
    fontSize:  rfSpacing['xxl'],
    color:colors.LP_HeadingColor,
    marginBottom:  rfSpacing['3xl'],
    fontWeight: "600"


  },
  points: {
    color:colors.LP_Mainorange,
    fontSize:  rfSpacing['xxl'],
    fontWeight: '600',
    paddingLeft: rfSpacing['1.1H']
  },
  modalButton: {
    backgroundColor: '#E85D43',
    padding:  rfSpacing['l'],
    borderRadius:  rfSpacing['7xl'],
    width:  rfSpacing['3.05H'],
    height:  rfSpacing['7xl'],
    alignItems: 'center',
    marginVertical:  rfSpacing['xs']
  },
  historyButton: {
    backgroundColor: '#555'
  },
  modalButtonText: {
    color: '#fff',
    fontSize:  rfSpacing['xxl'],
    fontWeight: "600"

  },
  modalButtontwo: {
    padding:  rfSpacing['l'],
    borderRadius:  rfSpacing['7xl'],
    width: rfSpacing['3.27H'],
    height:  rfSpacing['7xl'],
    alignItems: 'center',
    marginVertical:  rfSpacing['xs']
  },


  modalButtonTexttwo: {
    color: 'black',
    fontSize:  rfSpacing['xxl'],
    fontWeight: "600",
    paddingLeft:  rfSpacing['3xl']
  }
});
