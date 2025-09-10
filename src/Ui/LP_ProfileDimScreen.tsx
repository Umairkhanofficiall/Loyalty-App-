import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import LP_LinearGradient from './LP_LinearGradient'
import Search from '../assets/Images/SVGS/Search'
import Bell from '../assets/Images/SVGS/Bell'


const LP_ProfileDimScreen = () => {
  return (
    <View>
   <View style={styles.H_8XL}>
           <LP_LinearGradient
             colors={["#FFFFFF", "#FFE9E5", "#E85D43"]}
             start={{ x: 0, y: 0 }}
             end={{ x: 1, y: 0 }}
             style={StyleSheet.absoluteFillObject}
           />
           <View style={styles.FD_R_AI_C}>
             <View style={styles.F_1}>
               <Text style={styles.CL_B_FS_3XL_FW_600_PL_3XL_PT_5XXML}>
                 Hey, Jackob
               </Text>
               <Text style={styles.CL_NG_PL_3XL}>
                 its amazing day to scan and earn more
               </Text>
               <Text style={styles.CL_NG_PL_3XL}>points</Text>
             </View>
             <View style={styles.iconWrapperProfile}>
               <Search />
             </View>
             <View style={styles.iconWrapperProfile}>
               <Bell />
             </View>
           </View>
         </View>
         <View style={styles.dimOverlay} />
         </View>
  )
}

export default LP_ProfileDimScreen