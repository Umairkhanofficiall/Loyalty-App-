import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Signature from 'react-native-signature-canvas';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';


export default function Signaturetext() {
  const navigation= useNavigation();
  const ref = useRef(null);

  const webStyle = ` .m-signature-pad--description {
    color: #E85D43 !important;
    font-size: 18px !important;
    font-weight: bold !important;
    text-align: center !important;
  }
  .m-signature-pad--footer {
    margin: 10px !important;
  
  }`;
  const [signature, setSignature] = useState(null);

  const handleOK = (sig) => {
    setSignature(sig);
  };

  const handleClear = () => {
    if (ref.current) {
      ref.current.clearSignature();
    }
    setSignature(null);
  };

  const handleSaveManually = () => {
   
    ref.current?.readSignature();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign below with finger</Text>

      <View style={styles.canvasContainer}>
        <Signature
          ref={ref}
          onOK={handleOK}
          autoClear={false}
          descriptionText="Sign above"
          webStyle={webStyle}
        />
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.btn} onPress={handleClear}>
          <Text style={styles.btnText}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Home' as never)}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>

      {signature && (
        <Image
          resizeMode="contain"
          style={styles.preview}
          source={{ uri: signature }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.LP_IconBG,
    padding: rfSpacing['xxl']
  },
  title: {
    fontSize: rfSpacing['xxl'],
    fontWeight: '600',
    marginBottom: rfSpacing['m'],
    color:colors.LP_Mainorange
  },
  canvasContainer: {
    flex: 1,
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_Gradientyouleveltwo,
    borderRadius: rfSpacing['s'],
    overflow: 'hidden',
    elevation:rfSpacing['xxs']
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rfSpacing['m']
  },
  btn: {
    flex: 1,
    padding: rfSpacing['m'],
    marginHorizontal: rfSpacing['xs'],
    backgroundColor: colors.LP_Mainorange,
    borderRadius: rfSpacing['s'],
    alignItems: 'center'
  },
  btnText: {
    color: colors.LP_White,
    fontWeight: '600'
  },
  preview: {
    width: rfSpacing['3.37H'],
    height: rfSpacing['3.7H'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: '#ccc',
    marginTop: rfSpacing['3xl'],
    alignSelf:"center"
  },
});
