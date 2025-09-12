import { View, Text ,Image , TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import LP_ContentDisc from './LP_ContentDisc'
import { getImage } from '../assets/Images/images'
import LP_GetPoints from './LP_GetPoints'
import { useNavigation } from '@react-navigation/native'


const LP_HomeFourthRow = () => {
    const navigation =  useNavigation();
  return (
    <View style={styles.container3}>
          <View style={styles.FD_R}>
            <LP_ContentDisc
            Title={'Recent scans'}/>
            <View style={styles.FD_R_MT_MR}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Points' as never)}>
                <Text style={styles.buttonText}>History</Text>
              </TouchableOpacity>
              <Image source={getImage('arrow')} style={styles.H_W_ML_S_MT_XXS} />
            </View>
          </View>
         <LP_GetPoints/>
        </View>
  )
}

export default LP_HomeFourthRow