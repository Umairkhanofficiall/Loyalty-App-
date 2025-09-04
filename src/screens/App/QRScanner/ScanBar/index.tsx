import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { getImage } from '../../../../assets/Images/images'
import { useNavigation } from '@react-navigation/native';

type Props = {
  navigation: any;
};


const ScanBar = () => {
    const navigation = useNavigation();

  return (
   <LinearGradient
    colors={['#050505ff','#050505ff','#050505ff','#050505ff','#050505ff', '#d0513bff','#050505ff','#050505ff','#050505ff','#050505ff', '#000000ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
<Text style={styles.text}>Scan QR Code</Text>
<View style={styles.image}>
<Image source={getImage('flash')} style={styles.icon} />
</View>

<Pressable 
onPress={()=>navigation.navigate('Scanner' as never)}
style={styles.scanArea}>
    <View>
     <Text style={styles.instruction}>Bring QR code within the scan box</Text>
     </View>
        <View style={styles.scanBox}></View>
       </Pressable>
<Pressable onPress={() => navigation.goBack()}>
     {({ pressed }) => (
    <Image
      source={getImage('cross')}
      style={[
        styles.cross,
        { tintColor: pressed ? '#e0e0e0ff' : '#878585ff' } 
      ]}
    />
  )}
   </Pressable>
   </LinearGradient>
  )
}

export default ScanBar

const styles = StyleSheet.create({
text:{
    textAlign: "center",
    paddingTop: 29,
    fontSize: 20,
    color: "white",
},
image:{
     width: 40,
    height: 40,
    backgroundColor: "#2c2c2cff", // circle ka color
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
    marginLeft: 350
},
icon:{
     width: 14,
    height: 20,
    
},
scanArea: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  scanBox: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15
  },
  
  instruction: {
    color: '#fff',
    marginTop: 100,
    width:250,
    height:30,
    borderWidth:1,
    borderRadius:15,
    borderColor:"#fff",
    textAlign:"center",
    paddingTop:4
  },
  cross:{
    width:52,
    height:52,
    marginTop:100,
    alignSelf:"center",
    tintColor:"#878585ff",
  }
})

