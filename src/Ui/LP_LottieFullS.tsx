import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import rfSpacing from '../theme/rfSpacing'
import colors from '../theme/colors'
import LottieView from 'lottie-react-native';

const LP_LottieFullS = () => {
  return (
    <View style={styles.overlay}>
      <View style={styles.loaderBox}>
        <LottieView
          source={require('../assets/animations/spinner.json')}
          autoPlay
          loop
          style={{ width: rfSpacing['10xl'], height: rfSpacing['10xl'] }}
        />
        <Text style={styles.loadingText}>Loading app...</Text>
      </View>
    </View>
  )
}

export default LP_LottieFullS

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(53,53,53,0.8)', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  loaderBox: {
    width:rfSpacing['1.42H'],
    height:rfSpacing['1.75H'],
    backgroundColor:colors.LP_White,
    borderRadius:rfSpacing['xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: rfSpacing['m'],
    textAlign: 'center',
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['l'],
  },
})
