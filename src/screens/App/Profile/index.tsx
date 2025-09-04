import React from "react";
import { View, Text, StyleSheet, Image,Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { getImage } from "../../../assets/Images/images";
import Search from "../../../assets/Images/SVGS/Search";
import Bell from "../../../assets/Images/SVGS/Bell";
import colors from "../../../theme/colors";
import rfSpacing from "../../../theme/rfSpacing";
import Close from "../../../assets/Images/Profile/Close";
import Profileimage from "../../../assets/Images/Profile/Profileimage";
import Verifyicon from "../../../assets/Images/Profile/Verifyicon";
import ProfileFlag from "../../../assets/Images/Profile/ProfileFlag";
import ProfileLevels from "../../../assets/Images/Profile/ProfileLevels";
import ProfileOrder from "../../../assets/Images/Profile/ProfileOrder";
import ProfilePoints from "../../../assets/Images/Profile/ProfilePoints";
import LP_ButtonOrange from "../../../Ui/LP_ButtonOrange";
import LP_WhiteButton from "../../../Ui/LP_WhiteButton";

type Props = {
  navigation: any;
};

const ExampleScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      
      <View style={{ height: 200 }}>
        <LinearGradient
          colors={["#FFFFFF", "#FFE9E5", "#E85D43"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFillObject}
        />
        
        

       
       <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "black", fontSize: 20, fontWeight: "600", paddingLeft: 20, paddingTop: 40 }}>
              Hey, Jackob
            </Text>
            <Text style={{ color: colors.LP_NaturalGray, paddingLeft: 20 }}>its amazing day to scan and earn more</Text>
            <Text style={{ color: colors.LP_NaturalGray, paddingLeft: 20 }}>points</Text>
          </View>


          <View style={styles.iconWrapper}>
            <Search />
          </View>


          <View style={styles.iconWrapper}>
            <Bell />
          </View>
        </View>
      </View>
<View style={styles.dimOverlay} />
      
      <View style={styles.container}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{ fontSize: rfSpacing['xxl'], color:colors.LP_HeadingColor,fontWeight:"600" }}>Profile</Text>
        <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.Closeicon}>
        <Close/ >
        </View>
        </Pressable>
        </View>


        <View style={{flexDirection:"row",marginTop:rfSpacing['5xl'],}}>
        <View>
          <Profileimage/>
        </View>
        <View style={{marginLeft:rfSpacing['s']}}>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.NameText}>Jakob Rizza</Text>
          <Verifyicon style={styles.VerifyIcon}/>
        </View>
        <View>
        <Text style={styles.Emailtext}>jakobrizza@email.com</Text>
        <View style={styles.UL_Firm}>
        <Text style={styles.Firm}>Distributor</Text>
        </View>
        </View>
        </View>
        <View style={{marginLeft:rfSpacing['95l'],marginTop:rfSpacing['xxl']}}>
        <Image source={getImage('arrow')} style={styles.Arrowicon}/>
        </View>
        </View>

        <View style={{ borderBottomWidth: rfSpacing['xxxs'], borderBottomColor: '#E4EBF0', marginVertical: rfSpacing['s'],paddingTop:rfSpacing['xs'] }} />


        <Text style={styles.SubHeading}>Quick Links</Text>
        <View style={{flexDirection:"row",gap:rfSpacing['xxl']}}>
        <View>
        <View style={styles.Boxes}>
        <View style={{flexDirection:"row",margin:rfSpacing['m'],gap:rfSpacing['l']}}>
        <View>
          <ProfileFlag/>
          <Text style={styles.BoxText}>Go To Redeem</Text>
        </View>
        <View>
          <Image source={getImage('arrow')} style={styles.ArrowiconBoxes}/>
        </View>
        </View>
        </View>

        <View style={styles.Boxes}>
        <View style={{flexDirection:"row",margin:rfSpacing['m'],gap:rfSpacing['6xl']}}>
        <View>
          <ProfileOrder/>
          <Text style={styles.BoxText}>All Orders</Text>
        </View>
        <View>
          <Image source={getImage('arrow')} style={styles.ArrowiconBoxes}/>
        </View>
        </View>
        </View>
        </View>

        <View>
        <View style={styles.Boxes}>
        <View style={{flexDirection:"row",margin:rfSpacing['l'],gap:rfSpacing['7mxl']}}>
        <View>
          <ProfileLevels/>
          <Text style={styles.BoxText}>Levels</Text>
        </View>
        <View>
          <Image source={getImage('arrow')} style={styles.ArrowiconBoxes}/>
        </View>
        </View>
        </View>

        <View style={styles.Boxes}>
        <View style={{flexDirection:"row",margin:rfSpacing['m'],gap:rfSpacing['xxl']}}>
        <View>
          <ProfilePoints/>
          <Text style={styles.BoxText}>Loyalty Points</Text>
        </View>
        <View>
          <Image source={getImage('arrow')} style={styles.ArrowiconBoxes}/>
        </View>
        </View>
        </View>
        </View>
        </View>

        <View style={{ borderBottomWidth: rfSpacing['xxxs'], borderBottomColor: '#E4EBF0', marginVertical: rfSpacing['s'],paddingTop:rfSpacing['xs'] }} />

        <View style={{flexDirection:"row",gap:rfSpacing['xxl']}}>
        <View style={styles.Boxes2}>
        <View style={{flexDirection:"row",margin:rfSpacing['m'],gap:rfSpacing['4xxll']}}>
        <View>
          <ProfileFlag/>
          <Text style={styles.BoxText}>Help Center</Text>
        </View>
        <View>
          <Image source={getImage('arrow')} style={styles.ArrowiconBoxes}/>
        </View>
        </View>
        </View>

        <View style={styles.Boxes2}>
        <View style={{flexDirection:"row",margin:rfSpacing['l']}}>
        <View>
          <ProfileLevels/>
          <Text style={styles.BoxText}>Terms & Policies</Text>
        </View>
        <View>
          <Image source={getImage('arrow')} style={styles.ArrowiconBoxes}/>
        </View>
        </View>
        </View>
        </View>

        <LP_WhiteButton
           title="Logout"
          onPress={() => navigation.navigate('Login')} />
        
        <Text style={styles.LastTextProfile1}>Version 2.15(1048757)</Text>
        <Text style={styles.LastTextProfile2}>By GULF PACKAGING</Text>
        <View>
        </View>
      </View>
    </View>
  );
};

export default ExampleScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 10,
  },
  headerSubtitle: {
    color: "#5a5a5a",
    paddingLeft: 10,
  },
  iconWrapper: {
     height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#feb9a6ff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginRight: 10,
    elevation: 1
    
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "black",
  },
  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24, // overlap thoda sa
    padding: 20,
  },
  Closeicon:{
   paddingTop:rfSpacing['ms']
  },
  NameText:{
    color:colors.LP_HeadingColor,
    fontSize:rfSpacing['xxl'],
    fontWeight:"600",

  },
  Emailtext:{
    color:colors.LP_NaturalGray
  },
  Firm:{
    color:colors.LP_Mainorange,
    textAlign:"center",
    marginTop:-rfSpacing['xms']
    
  },
  UL_Firm:{
    height:rfSpacing['xxl'],
    width:rfSpacing['9xl'],
    borderWidth:rfSpacing['xxxs'],
    borderColor:colors.LP_Mainorange,
    borderRadius:rfSpacing['xms'],
    marginTop:rfSpacing['xss']
  },
  Arrowicon:{
    height:rfSpacing['5xxsl'],
    width:rfSpacing['5xxsl'],
  },
  VerifyIcon:{
    marginTop:rfSpacing['xs'],
    marginLeft:rfSpacing['xs']
  },
  SubHeading:{
    color:colors.LP_HeadingColor,
    fontSize:rfSpacing['xxl'],
    fontWeight:"600",
    paddingTop:rfSpacing['s']
  },
  Boxes:{
   width:rfSpacing['1.75H'],
   height:rfSpacing['8xl'],
   backgroundColor:colors.LP_ProfileGrayBox,
   borderRadius:rfSpacing['m'],
   marginTop:rfSpacing['xl'],
   borderWidth:rfSpacing['xxxs'],
   borderColor:colors.LP_ProfileGrayborder

  },
  BoxText:{
    color:colors.LP_HeadingColor,
    fontSize:rfSpacing['l'],
    fontWeight:"600",
    paddingTop:rfSpacing['m']
  },
  ArrowiconBoxes:{
     height:rfSpacing['5xxsl'],
    width:rfSpacing['5xxsl'],
    marginLeft:rfSpacing['m'],
    marginTop:rfSpacing['xss']
  },
  Boxes2:{
    width:rfSpacing['1.75H'],
   height:rfSpacing['8xl'],
   borderRadius:rfSpacing['m'],
   marginTop:rfSpacing['xl'],
   borderWidth:rfSpacing['xxxs'],
   borderColor:colors.LP_ProfileGrayborder
  },
  LastTextProfile1:{
    color:colors.LP_NaturalGray,
    fontSize:rfSpacing['m'],
    textAlign:"center",
    paddingTop:rfSpacing['l']    
  },
  LastTextProfile2:{
     color:colors.LP_Mainorange,
    fontSize:rfSpacing['m'],
    textAlign:"center",
    paddingTop:rfSpacing['l']
  }
});
