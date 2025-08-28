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
    //  <>
    //       <StatusBar
    //         translucent={true}
    //         backgroundColor="white"
    //         barStyle="dark-content"
    //       />

    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: rfSpacing['9xml'] }}>
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
                    source={require("../../../assets/Images/gif.gif")}
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
        <View style={{ flexDirection: "row",marginTop:rfSpacing['3xl'] }}>
          <Text style={{ color: colors.LP_HeadingColor, fontSize: rfSpacing['xxl'], fontWeight: "600", marginTop: rfSpacing['4xxsl'], left: rfSpacing['4xl'] }}>
            Scan History
          </Text>
          <Pressable onPress={() => setModalVisible(true)}>
            <FilterModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onApply={handleApply}
            />
            <View style={{ width: rfSpacing['1.05H'], height: rfSpacing['5xl'], borderColor: colors.LP_Thismonthborder, borderWidth: rfSpacing['xxxs'], backgroundColor: colors.LP_White, borderRadius: rfSpacing['s'], marginLeft: rfSpacing['1.5H'], marginTop: rfSpacing['4xl'] }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: rfSpacing['ml'], fontWeight: "400", color: colors.LP_HeadingColor, textAlign: "center", paddingTop: rfSpacing['xs'], marginLeft: rfSpacing['xs'] }}>This month</Text>
                <Image source={getImage('arrowdown')} style={{ height: rfSpacing['4xll'], width: rfSpacing['4xll'], marginTop: rfSpacing['xs'] }} />
              </View>
            </View>
          </Pressable>
        </View>



        <View style={{}}>
          <>
            {data.map((item) => (
              <View key={item.id} style={styles.subcontainer3}>
                <View style={{ flexDirection: "row", marginTop: rfSpacing["xml"] }}>
                  <View
                    style={{
                      height: rfSpacing["5xxml"],
                      width: rfSpacing["5xxml"],
                      backgroundColor: colors.LP_IcontickBG,
                      borderRadius: rfSpacing["4xl"],
                      marginLeft: rfSpacing["m"],
                    }}
                  >
                    <View
                      style={{
                        marginLeft: rfSpacing["xm"],
                        marginTop: rfSpacing["xm"],
                      }}
                    >
                      <Tick />
                    </View>
                  </View>

                  {/* Date & Heading */}
                  <View>
                    <Text
                      style={{
                        color: colors.LP_borderText,
                        marginLeft: rfSpacing["l"],
                      }}
                    >
                      {item.date} | {item.time}
                    </Text>
                    <Text
                      style={{
                        color: colors.LP_HeadingColor,
                        marginLeft: rfSpacing["xl"],
                        fontSize: rfSpacing["xl"],
                        fontWeight: "600",
                      }}
                    >
                      Got Points
                    </Text>
                  </View>

                  {/* Points */}
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: rfSpacing["8xml"],
                      gap: rfSpacing["xs"],
                    }}
                  >
                    <View style={styles.iconWrapper3}>
                      <Image
                        source={getImage("tick")}
                        style={{
                          height: rfSpacing["xl"],
                          width: rfSpacing["xl"],
                          resizeMode: "contain",
                          top: -rfSpacing["xxxs"],
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        color: colors.LP_HeadingColor,
                        fontSize: rfSpacing["xxl"],
                        marginTop: rfSpacing["ms"],
                      }}
                    >
                      {item.points}
                    </Text>
                  </View>
                </View>
              </View>

            ))}
          </>
        </View>
      </ScrollView>
    </View>


  )
}

export default Points

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LP_Pointsbgcolor,
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
})