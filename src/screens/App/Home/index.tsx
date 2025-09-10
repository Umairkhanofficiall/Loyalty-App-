import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert, Pressable } from 'react-native';
import { getImage } from '../../../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import Search from '../../../assets/Images/SVGS/Search';
import Bell from '../../../assets/Images/SVGS/Bell';
import rfSpacing from '../../../theme/rfSpacing';
import styles from '../../Auth/styles';
import LP_ScanProgress from '../../../Ui/LP_ScanProgress';
import LP_GetPoints from '../../../Ui/LP_GetPoints';
import LP_YourLevel from '../../../Ui/LP_YourLevel';
import LP_MainGIf from '../../../Ui/LP_MainGIf';
import LP_ContentDisc from '../../../Ui/LP_ContentDisc';
import LP_LinearGradient from '../../../Ui/LP_LinearGradient';
export default function App() {
  const navigation = useNavigation();
  return (
    <LP_LinearGradient
      colors={['#FFFFFF', '#FFE9E5', '#E85D43']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: rfSpacing['9xml'] }}>
        <View style={styles.FD_R_AI_C}>
          <View style={{ flex: 1 }}>
            <Text style={styles.C_B_FS_FW_PL_PT}>
              Hey, Jackob
            </Text>
            <Text style={styles.C_PF}>its amazing day to scan and earn more</Text>
            <Text style={styles.C_PF}>points</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Search />
          </View>
          <View style={styles.iconWrapper}>
            <Bell />
          </View>
        </View>
        <Text style={styles.text}>Total Points Earned </Text>
        <View style={styles.FD_R_AS_C}>
          <View style={{marginTop:rfSpacing['m']}}>
          <LP_MainGIf/>
          </View>
          <Text style={styles.C_FS_TA_FW}>12,500</Text>
          <Pressable onPress={() => navigation.navigate('OrderReceive' as never)}>
            <Image source={getImage('signature')} style={styles.icon} />
          </Pressable>
        </View>
        <LP_LinearGradient
          colors={['white', '#fddbd5ff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.container2}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <LP_YourLevel/>
              <Text style={styles.C_FS_FW_PL_PT}>Silver</Text>
            </View>
            <View>
              <Image source={getImage('rank')} style={styles.silver} />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.C_ML_MT_FS_FW}>scans progress:</Text>
            <Text style={styles.C_MT_ML_FS_FW}>360/1000</Text>
          </View>
      <View style={{alignSelf:"center"}}>
          <LP_ScanProgress/>
          </View>
          <Text style={styles.TA_C_FS_FW_MT}>640 scans required to reach Gold</Text>
          <View style={styles.subcontainer}>
            <View style={{ flexDirection: "row" }} >
              <View>
                <Text style={styles.C_PT_PL_FS}>Total Orders</Text>
                <Text style={styles.C_PT_PL_FS_FW}>225</Text>
              </View>
              <Image source={getImage('arrow')} style={styles.H_W_ML_MT} />
            </View>
          </View>
        </LP_LinearGradient>
        <View style={styles.container3}>
          <View style={{ flexDirection: "row" }}>
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
      </ScrollView>
    </LP_LinearGradient>
  );
}


