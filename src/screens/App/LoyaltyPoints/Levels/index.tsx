import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import { getImage } from '../../../../assets/Images/images'
import React, { useState } from 'react';
import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';
import rfSpacing from '../../../../theme/rfSpacing';
import colors from '../../../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import Tick from '../../../../assets/Images/SVGS/Tick';
import FilterModal from '../../../../Ui/LP_Calender';
import FastImage from 'react-native-fast-image';
import TabBar from '../../../../Ui/LP_ToggleButton';
import { StatusBar } from "react-native";
import Qrlogo from '../../../../assets/Images/Levels/Qrlogo';
import Flag from '../../../../assets/Images/Levels/Flag';
import Starbox from '../../../../assets/Images/Levels/Starbox';

const Points = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const handleApply = (filter: string, date?: string) => {
    console.log("Filter applied:", filter, date);
  };

  const data = [
    { id: 1, date: "12-04-2025", time: "1:04PM", points: 125 },
    { id: 2, date: "13-04-2025", time: "3:45PM", points: 125 },
    { id: 3, date: "14-04-2025", time: "1:15AM", points: 125 },

  ];


  return (
  

    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: rfSpacing['1.6H'] }}>
        <View style={styles.container2}>
          <Text style={{ color: colors.LP_White, fontSize: rfSpacing['4xl'], textAlign: "center", marginTop: rfSpacing['4xxm'] }}>Loyalty Points</Text>
          <View style={styles.container3}>

            <LinearGradient
              colors={[colors.LP_Gradientfour, colors.LP_Gradientfour, colors.LP_Gradientfive, colors.LP_Gradientfour]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.subcontainer}
            >
              <View >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#5C6670", fontSize: rfSpacing['l'], fontWeight: "400", paddingTop: rfSpacing['xl'], paddingLeft: rfSpacing['xl'] }}>Total Points Earned</Text>
                  <Image source={getImage('starone')} style={{ height: rfSpacing['6xssl'], width: rfSpacing['6xssl'], top: rfSpacing['xxxs'], marginLeft: rfSpacing['7mxl'], resizeMode: "contain" }} />
                </View>
                <View style={{ flexDirection: "row", }}>
                  <FastImage
                    style={styles.gif}
                    source={require("../../../../assets/Images/gif.gif")}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  {/* <View style={{ height: rfSpacing['6xssml'], width: rfSpacing['6xssml'], backgroundColor: colors.LP_Gifbg, borderWidth: rfSpacing['xxxs'], borderColor: colors.LP_Gifbg, borderRadius: rfSpacing['6xl'], alignSelf: "center", marginLeft: rfSpacing['xl'] }}>
                    <Image source={getImage('gif')} style={{ height: 68, width: 68, alignSelf: "center", top: -10 }} />
                  </View> */}
                  <Text style={{ fontSize: rfSpacing['5xl'], color: colors.LP_HeadingColor, fontFamily: "Plus Jakarta Sans", fontWeight: "600", paddingLeft: rfSpacing['xs'] }}>12,500</Text>
                  <Image source={getImage('starthree')} style={{ height: rfSpacing['1.1H'], width: rfSpacing['1.1H'], position: "absolute", top: -rfSpacing['7xl'], marginLeft: rfSpacing['1.89H'], resizeMode: "contain" }} />
                  <Image source={getImage('startwo')} style={{ height: rfSpacing['4xll'], width: rfSpacing['4xll'], marginTop: rfSpacing['5xl'], position: "absolute", right: rfSpacing['l'], resizeMode: "contain" }} />
                </View>

              </View>
            </LinearGradient>
            <View style={{ marginLeft: rfSpacing['3xl'] }}>
              <View style={{ flexDirection: "row" }}>
                <LinearGradient
                  colors={[colors.LP_Gradientyoulevel, colors.LP_Gradientyouleveltwo]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={{ height: rfSpacing['xmml'], width: rfSpacing['7xmml'], borderRadius: rfSpacing['xs'], marginLeft: rfSpacing['xxxs'], marginTop: rfSpacing['4xl'], }}
                >
                  <Text style={{ fontSize: rfSpacing['s'], textAlign: "center", color: colors.LP_HeadingColor, paddingTop: rfSpacing['xxs'] }}>Your Level</Text>
                </LinearGradient>
                <View style={{ flexDirection: "row" }}>
                  <Image source={getImage('rank')} style={styles.silver} />
                  <Text style={{ color: colors.LP_HeadingColor, fontSize: rfSpacing['xxl'], fontWeight: "600", paddingLeft: rfSpacing['xss'], paddingTop: rfSpacing['xl'] }}>Silver</Text>
                </View>

              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: colors.LP_NaturalGray, marginTop: rfSpacing['l'], fontSize: rfSpacing['l'], fontWeight: "400" }}>scans progress:</Text>
                <Text style={{ color: colors.LP_HeadingColor, marginTop: rfSpacing['l'], marginLeft: rfSpacing['1.45H'], fontSize: rfSpacing['l'], fontWeight: "400" }}>360/1000</Text>
              </View>
              <View style={{ flexDirection: "row", gap: rfSpacing['ms'], marginLeft: rfSpacing['xxxs'], marginTop: rfSpacing['m'] }}>
                <Image source={getImage('red')} style={{ height: rfSpacing['mms'], width: rfSpacing['8xl'] }} />
                <Image source={getImage('black')} style={{ height: rfSpacing['mms'], width: rfSpacing['8xl'] }} />
                <Image source={getImage('silver')} style={{ height: rfSpacing['mms'], width: rfSpacing['8xl'] }} />
                <Image source={getImage('silver')} style={{ height: rfSpacing['mms'], width: rfSpacing['8xl'] }} />
              </View>
            </View>

          </View>

        </View>

        <TabBar />

        <View style={{ width: rfSpacing['3.35H'], height: rfSpacing['4.1H'], backgroundColor: colors.LP_White, borderRadius: rfSpacing['4xl'], left: rfSpacing['4xxsl'], top: rfSpacing['6xl'] }}>
          <Text style={{ fontSize: rfSpacing['xxl'], fontWeight: 600, color: colors.LP_HeadingColor, marginLeft: rfSpacing['xl'], marginTop: rfSpacing['xl'] }}>
            Levels
          </Text>
          <View style={{ left: -rfSpacing['s'] }}>

            <LinearGradient
              colors={[colors.LP_Grayblockone, colors.LP_Grayblocktwo]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.containersilver}
            >

              <View style={{ flexDirection: "row", marginTop: rfSpacing['xl'] }}>
                <Image source={getImage('Silverlogo')} style={{ height: rfSpacing['6xssl'], width: rfSpacing['6xssl'], marginLeft: rfSpacing['m'], resizeMode: "contain", marginTop: rfSpacing['mms'] }} />
                <View>
                  <Text style={{ color: colors.LP_HeadingColor, marginLeft: rfSpacing['4xl'], fontSize: rfSpacing['4xl'], fontWeight: "600" }}>Silver</Text>
                  <Text style={{ color: colors.LP_borderText, marginLeft: rfSpacing['4xl'], fontSize: rfSpacing['mll'], fontWeight: "400", paddingTop: rfSpacing['s'] }}>Require No. Scans:250</Text>
                </View>
                <View style={{ flexDirection: "row", gap: rfSpacing['xxs'] }}>
                  <View style={{ width: rfSpacing['7mxl'], height: rfSpacing['3xl'], marginLeft: rfSpacing['4xxm'], borderRadius: rfSpacing['xss'], backgroundColor: colors.LP_Greensilverbox }}>
                    <Text style={{ color: colors.LP_HeadingColor, fontSize: rfSpacing['m'], marginLeft: rfSpacing['mms'], marginTop: rfSpacing['xxxs'] }}>Achieved</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={[colors.LP_Goldenblockone, colors.LP_Goldenblocktwo]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.containerGold}
            >

              <View style={{ flexDirection: "row", marginTop: rfSpacing['xl'] }}>
                <Image source={getImage('Goldlogo')} style={{ height: rfSpacing['6xssl'], width: rfSpacing['6xssl'], marginLeft: rfSpacing['m'], resizeMode: "contain", marginTop: rfSpacing['mms'] }} />
                <View>
                  <Text style={{ color: colors.LP_HeadingColor, marginLeft: rfSpacing['4xl'], fontSize: rfSpacing['4xl'], fontWeight: "600" }}>Gold</Text>
                  <Text style={{ color: colors.LP_borderText, marginLeft: rfSpacing['4xl'], fontSize: rfSpacing['mll'], fontWeight: "400", paddingTop: rfSpacing['s'] }}>Require No. Scans:1000</Text>
                </View>
                <View style={{ flexDirection: "row", gap: rfSpacing['xxs'] }}>
                  <View style={{ width: rfSpacing['65l'], height: rfSpacing['3xl'], marginLeft: rfSpacing['xl'], borderRadius: rfSpacing['xss'], backgroundColor: "#FFF6CD" }}>
                    <View style={{ flexDirection: "row", gap: rfSpacing['xxs'] }}>
                      <Text style={{ color: "#EAAA15", fontSize: rfSpacing['m'], marginLeft: rfSpacing['mms'] }}>Locked</Text>
                      <Image source={getImage('buttonlock')} style={{ height: rfSpacing['l'], width: rfSpacing['l'], marginLeft: rfSpacing['xms'], marginTop: rfSpacing['xxs'], resizeMode: "contain" }} />
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={[colors.LP_platinumblockone, colors.LP_Platinumblocktwo]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.containerPlatinum}
            >

              <View style={{ flexDirection: "row", marginTop: rfSpacing['xl'] }}>
                <Image source={getImage('Platelogo')} style={{ height: rfSpacing['6xssl'], width: rfSpacing['6xssl'], marginLeft: rfSpacing['m'], resizeMode: "contain", marginTop: rfSpacing['mms'] }} />
                <View>
                  <Text style={{ color: colors.LP_HeadingColor, marginLeft: rfSpacing['4xl'], fontSize: rfSpacing['4xl'], fontWeight: "600" }}>Platinum</Text>
                  <Text style={{ color: colors.LP_borderText, marginLeft: rfSpacing['4xl'], fontSize: rfSpacing['mll'], fontWeight: "400", paddingTop: rfSpacing['s'] }}>Require No. Scans:250</Text>
                </View>
                <View style={{ flexDirection: "row", gap: rfSpacing['xxs'] }}>
                  <View style={{ width: rfSpacing['65l'], height: rfSpacing['3xl'], marginLeft: rfSpacing['4xl'], borderRadius: rfSpacing['xss'], backgroundColor: "#DCE6FF" }}>
                    <View style={{ flexDirection: "row", gap: rfSpacing['xxs'] }}>
                      <Text style={{ color: "#3469ED", fontSize: rfSpacing['m'], marginLeft: rfSpacing['mms'] }}>Locked</Text>
                      <Image source={getImage('buttonlock')} style={{ height: rfSpacing['l'], width: rfSpacing['l'], tintColor: "#3469ED", marginLeft: rfSpacing['xms'], marginTop: rfSpacing['xxs'], resizeMode: "contain" }} />
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
          <Text style={{ color: colors.LP_borderText, paddingLeft: rfSpacing['3xl'], fontSize: rfSpacing['l'], paddingTop: rfSpacing['4xl'], letterSpacing: -0.5 }}>Level upgrading is depended upon the number of scans you have performed actively.</Text>
        </View>



        <View style={{ width: rfSpacing['3.35H'], height: rfSpacing['4H'], backgroundColor: colors.LP_White, borderRadius: rfSpacing['4xl'], left: rfSpacing['4xxsl'], top: rfSpacing['8xl'] }}>
          <Text style={{ fontSize: rfSpacing['xxl'], fontWeight: 600, color: colors.LP_HeadingColor, marginLeft: rfSpacing['xl'], marginTop: rfSpacing['xl'] }}>
            How it works
          </Text>
          <View style={{ left: -rfSpacing['l'], marginTop: rfSpacing['4xl'] }}>


            <View style={styles.containergray}>
              <View style={{ flexDirection: "row", marginTop: rfSpacing['xl'] }}>
                <View>
                  <Text style={{ color: colors.LP_HeadingColor, marginLeft: rfSpacing['3xl'], fontSize: rfSpacing['3xl'], fontWeight: "600" }}>Step 1</Text>
                  <Text style={{ color: colors.LP_borderText, marginLeft: rfSpacing['3xl'], fontSize: rfSpacing['mll'], fontWeight: "400", paddingTop: rfSpacing['s'] }}>Scan the QR code which is given on the</Text>
                  <Text style={{ color: colors.LP_borderText, marginLeft: rfSpacing['3xl'], fontSize: rfSpacing['mll'], fontWeight: "400" }}>product box</Text>
                </View>
                <View style={{ marginLeft: rfSpacing['xml'], marginTop: rfSpacing['ms'] }}>
                  <Qrlogo />
                </View>
              </View>
            </View>

            <View style={{
              height: rfSpacing['xxl'],
              borderLeftWidth: rfSpacing['xxxs'],
              borderColor: 'red',
              borderStyle: 'dashed',
              marginHorizontal: rfSpacing['l'],
              left: rfSpacing['6xl']
            }} />


            <View style={styles.containergray}>
              <View style={{ flexDirection: "row", marginTop: rfSpacing['xl'] }}>
                <View>
                  <Text style={{ color: colors.LP_HeadingColor, marginLeft: rfSpacing['3xl'], fontSize: rfSpacing['3xl'], fontWeight: "600" }}>Step 2</Text>
                  <Text style={{ color: colors.LP_borderText, marginLeft: rfSpacing['3xl'], fontSize: rfSpacing['mll'], fontWeight: "400", paddingTop: rfSpacing['s'] }}>Earn points via qr cde scanning from the</Text>
                  <Text style={{ color: colors.LP_borderText, marginLeft: rfSpacing['3xl'], fontSize: rfSpacing['mll'], fontWeight: "400" }}>product box</Text>
                </View>
                <View style={{ marginLeft: rfSpacing['m'], marginTop: rfSpacing['ms'] }}>
                  <Starbox />
                </View>
              </View>
            </View>
            <View style={{
              height: rfSpacing['xxl'],
              borderLeftWidth: rfSpacing['xxxs'],
              borderColor: 'red',
              borderStyle: 'dashed',
              marginHorizontal: rfSpacing['l'],
              left: rfSpacing['6xl']
            }} />

            <View style={styles.containergraythird}>
              <View style={{ flexDirection: "row", marginTop: rfSpacing['xl'] }}>
                <View>
                  <Text style={{ color: colors.LP_HeadingColor, marginLeft: rfSpacing['3xl'], fontSize: rfSpacing['3xl'], fontWeight: "600" }}>Step 3</Text>
                  <Text style={{ color: colors.LP_borderText, marginLeft: rfSpacing['3xl'], fontSize: rfSpacing['mll'], fontWeight: "400", paddingTop: rfSpacing['s'] }}>Redeem your point into cash and enjoy!</Text>

                </View>
                <View style={{ marginLeft: rfSpacing['xml'], marginTop: rfSpacing['ms'] }}>
                  <Flag />
                </View>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>


  )
}
export default Points

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LP_Pointsbgcolor,
    flex: 1,
  },
  container2: {
    width: rfSpacing['3.85H'],
    height: rfSpacing['2H'],
    backgroundColor: colors.LP_Mainorange,
    borderBottomEndRadius: rfSpacing['4xl'],
    borderBottomStartRadius: rfSpacing['4xl'],
  },
  container3: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['2.25H'],
    backgroundColor: "white",
    elevation: rfSpacing['xxs'],
    marginTop: rfSpacing['6xssml'],
    alignSelf: "center",
    borderRadius: rfSpacing['4xl'],
  },
  subcontainer: {
    height: rfSpacing['1.1H'],
    width: rfSpacing['3.05H'],
    backgroundColor: "#FFCDC4",
    alignSelf: "center",
    marginTop: rfSpacing['xl'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_White,
    borderRadius: rfSpacing['4xl']
  },
  silver: {
    width: rfSpacing['4xl'],
    height: rfSpacing['4xl'],
    marginLeft: rfSpacing['1.8H'],
    marginTop: rfSpacing['xl'],
    resizeMode: "contain"
  },
  container4: {
    flexDirection: 'row',
    backgroundColor: colors.LP_TabColor,
    borderRadius: rfSpacing['7xl'],
    padding: rfSpacing['xs'],
    alignSelf: 'center',
    marginTop: rfSpacing['1.45H'],
  },
  button: {
    paddingVertical: rfSpacing['s'],
    paddingHorizontal: rfSpacing['4xxll'],
    borderRadius: rfSpacing['7xl'],
  },
  activeButton: {
    backgroundColor: colors.LP_White,
  },
  text: {
    color: colors.LP_Tabtext,
    fontSize: rfSpacing['xml'],
  },
  hoverText: {
    color: colors.LP_HeadingColor,
  },
  activeText: {
    color: colors.LP_Mainorange,
  },
  subcontainer3: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['8xl'],
    backgroundColor: "white",
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_inputborder,
    marginLeft: rfSpacing['4xxsl'],
    marginTop: rfSpacing['xl'],
    borderRadius: rfSpacing['xl']

  },
  iconWrapper3: {
    height: rfSpacing['4xxsl'],
    width: rfSpacing['4xxsl'],
    borderRadius: rfSpacing['4xl'],
    backgroundColor: colors.LP_Starwrap,
    justifyContent: "center",
    alignItems: "center",
    marginTop: rfSpacing['m'],
  },
  gif: {
    height: rfSpacing['6xssml'],
    width: rfSpacing['6xssml'],
    backgroundColor: colors.LP_Mainlightorange,
    borderRadius: rfSpacing['5xl'],
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20
  },
  containersilver: {
    width: rfSpacing['3.05H'],
    height: rfSpacing['10xl'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_Silverborder,
    marginLeft: rfSpacing['4xxml'],
    marginTop: rfSpacing['xxl'],
    borderRadius: rfSpacing['xxl'],

  },
  containerGold: {
    width: rfSpacing['3.05H'],
    height: rfSpacing['10xl'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_Goldborder,
    marginLeft: rfSpacing['4xxml'],
    marginTop: rfSpacing['xxl'],
    borderRadius: rfSpacing['xxl'],
  },
  containerPlatinum: {
    width: rfSpacing['3.05H'],
    height: rfSpacing['10xl'],
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_Platinumborder,
    marginLeft: rfSpacing['4xxml'],
    marginTop: rfSpacing['xxl'],
    borderRadius: rfSpacing['xxl'],
  },
  containergray: {
    width: rfSpacing['3.05H'],
    height: rfSpacing['1H'],
    marginLeft: rfSpacing['4xll'],
    borderRadius: rfSpacing['xxl'],
    backgroundColor: "#F1F6F9"
  },
  containergraythird: {
    width: rfSpacing['3.05H'],
    height: rfSpacing['10xl'],
    marginLeft: rfSpacing['4xll'],
    borderRadius: rfSpacing['xxl'],
    backgroundColor: "#F1F6F9"
  },
})











