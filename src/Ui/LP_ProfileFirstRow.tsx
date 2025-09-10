import { View, Text , Pressable} from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import { useNavigation } from '@react-navigation/native'
import Close from '../assets/Images/Profile/Close'

const LP_ProfileFirstRow = () => {
    const navigation = useNavigation();
  return (
   <View style={styles.FD_R_JC_SB}>
             <Text style={styles.FS_XXL_CL_HC_FW_600}>Profile</Text>
             <Pressable onPress={() => navigation.goBack()}>
               <View style={styles.Closeicon}>
                 <Close />
               </View>
             </Pressable>
           </View>
  )
}

export default LP_ProfileFirstRow