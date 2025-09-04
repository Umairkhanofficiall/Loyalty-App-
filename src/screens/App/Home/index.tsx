import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getImage } from '../../../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import Search from '../../../assets/Images/SVGS/Search';
import Bell from '../../../assets/Images/SVGS/Bell';
import FastImage from 'react-native-fast-image';
import rfSpacing from '../../../theme/rfSpacing';
import colors from '../../../theme/colors';
import Tick from '../../../assets/Images/SVGS/Tick';


export default function App() {

    const data = [
    { id: 1, date: "12-04-2025", time: "1:04PM", points: 125 },
    { id: 2, date: "13-04-2025", time: "3:45PM", points: 125 },
    { id: 3, date: "14-04-2025", time: "1:15AM", points: 125 },

  ];
  const navigation = useNavigation();
  return (
    
      <LinearGradient
        colors={['#FFFFFF', '#FFE9E5', '#E85D43']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{flex:1 }}
      >

        <ScrollView contentContainerStyle={{ paddingBottom: rfSpacing['9xml'] }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "black", fontSize: 20, fontWeight: "600", paddingLeft: 20, paddingTop: 40 }}>
              Hey, Jackob
            </Text>
            <Text style={{ color: "gray", paddingLeft: 20 }}>its amazing day to scan and earn more</Text>
            <Text style={{ color: "gray", paddingLeft: 20 }}>points</Text>
          </View>


          <View style={styles.iconWrapper}>
            <Search />
          </View>


          <View style={styles.iconWrapper}>
            <Bell />
          </View>
        </View>

        <Text style={styles.text}>Total Points Earned </Text>



        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <FastImage
            style={styles.gif}
            source={require("../../../assets/Images/gif.gif")}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={{ color: "black", fontSize: 48, textAlign: "center", fontWeight: "600" }}>12,500</Text>

          <Pressable onPress={() => navigation.navigate('OrderReceive' as never)}>
            <Image source={getImage('signature')} style={styles.icon} />
          </Pressable>
        </View>


        <LinearGradient
          colors={['white', '#fddbd5ff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.container2}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <LinearGradient
                colors={[colors.LP_Gradientyoulevel, colors.LP_Gradientyouleveltwo]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ height: rfSpacing['xmml'], width: rfSpacing['7xmml'], borderRadius: rfSpacing['xs'], marginLeft: rfSpacing['3xl'], marginTop: rfSpacing['xl'], }}
              >
                <Text style={{ fontSize: rfSpacing['s'], textAlign: "center", color: colors.LP_HeadingColor, paddingTop: rfSpacing['xxs'] }}>Your Level</Text>
              </LinearGradient>
              <Text style={{ color: "black", fontSize: 24, fontWeight: "600", paddingLeft: 20, paddingTop: 10 }}>Silver</Text>
            </View>
            <View>
              <Image source={getImage('rank')} style={styles.silver} />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: 'gray', marginLeft: 20, marginTop: 16, fontSize: 12, fontWeight: "400" }}>scans progress:</Text>
            <Text style={{ color: "black", marginTop: 16, marginLeft: 175, fontSize: 12, fontWeight: "400" }}>360/1000</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8, marginLeft: 20, marginTop: 10 }}>
            <Image source={getImage('red')} style={{ height: 8, width: 76.3 }} />
            <Image source={getImage('black')} style={{ height: 8, width: 76.3 }} />
            <Image source={getImage('silver')} style={{ height: 8, width: 76.3 }} />
            <Image source={getImage('silver')} style={{ height: 8, width: 76.3 }} />
          </View>

          <Text style={{ textAlign: "center", color: "gray", fontSize: 12, fontWeight: "400", marginTop: 16 }}>640 scans required to reach Gold</Text>

          <View style={styles.subcontainer}>
            <View style={{ flexDirection: "row" }} >
              <View>
                <Text style={{ color: "gray", paddingTop: 15, paddingLeft: 15, fontSize: 14 }}>Total Orders</Text>
                <Text style={{ color: "black", paddingTop: 5, paddingLeft: 15, fontSize: 20, fontWeight: "600" }}>225</Text>
              </View>

              <Image source={getImage('arrow')} style={{ height: 40, width: 40, marginLeft: 170, marginTop: 20 }} />

            </View>
          </View>

        </LinearGradient>

        <View style={styles.container3}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "600", padding: 20 }}>Recent scans</Text>

            
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 170, }}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Points' as never)}>
                <Text style={styles.buttonText}>History</Text>
              </TouchableOpacity>
              <Image source={getImage('arrow')} style={{ height: 25, width: 25,marginLeft:-rfSpacing['s'],marginTop:-rfSpacing['xxs'] }} />
            </View>
            

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

        </View>
         
 </ScrollView>
      </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#feb9a6ff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginRight: 10,
    elevation: 4

  },
  icon: {
    height: 30,
    width: 30,
    top: -30,
    left: -20,
    position: "static"
  },
  text: {
    color: "gray",
    textAlign: "center",
    paddingTop: 60
  },
  container2: {
    width: 370,
    height: 285,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 3,
  },
  silver: {
    width: 60,
    height: 60,
    marginLeft: 200,
    marginTop: 16,
    resizeMode:"contain"
  },
  subcontainer: {
    height: 85,
    width: 327,
    backgroundColor: "#f3f3f3ff",
    marginLeft: 20,
    marginTop: 13,
    borderRadius: 16
  },
  container3: {
    width: "100%",
    height: 368,
    backgroundColor: "white",
    borderRadius: 24
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "black",

  },
  button: {
    width: 50,
    height: 20,
  },
  gif: {
    height: rfSpacing['6xssml'],
    width: rfSpacing['6xssml'],
    backgroundColor: colors.LP_Mainlightorange,
    borderRadius: rfSpacing['5xl'],
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: rfSpacing['m']
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

});
