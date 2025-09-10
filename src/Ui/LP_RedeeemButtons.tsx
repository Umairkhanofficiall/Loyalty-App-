import { View, Text,Pressable,Image} from 'react-native'
import styles from '../screens/Auth/styles'
import { getImage} from '../assets/Images/images'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Boxes from '../assets/Images/Levels/Boxes'
import Flagradeem from '../assets/Images/Levels/Flagradeem'


const LP_RedeeemButtons = () => {
    const navigation= useNavigation();
  return (
    <View>
    <Pressable onPress={() => navigation.navigate('BuyItems' as never)}
          style={styles.Buyitems}>
          <View style={styles.RedeemButton}>
            <View style={styles.IconBG}>
              <Flagradeem style={styles.IconItem} />
            </View>
            <View>
              <Text style={styles.subTextbutton}>Buy Item</Text>
              <Text style={styles.subDesc}>You can use your earned Points to purchase any items you like.</Text>
            </View>
            <Image source={getImage('arrow')} style={styles.ImageRedeem} />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Payment' as never)}
          style={styles.Buyitems}>
          <View style={styles.RedeemButton}>
            <View style={styles.IconBG}>
              <Boxes style={styles.IconItem} />
            </View>
            <View>
              <Text style={styles.subTextbutton}>Redeem to cash</Text>
              <Text style={styles.subDesc}>Convert Your Earned Points Into Real Cash</Text>
            </View>
            <Image source={getImage('arrow')} style={styles.ImageRedeem} />
          </View>
        </Pressable>
        </View>
  )
}

export default LP_RedeeemButtons