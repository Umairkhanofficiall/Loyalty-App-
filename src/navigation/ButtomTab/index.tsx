import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/App/Home';
import Points from '../../screens/App/LoyaltyPoints';
import ScanBar from '../../screens/App/QRScanner/ScanBar';
import Order from '../../screens/App/MyOrder';
import Profile from '../../screens/App/Profile';
// import Scanner from '../../screens/App/QRScanner/Scanner';
import Levels from '../../screens/App/LoyaltyPoints/Levels';
import Redeem from '../../screens/App/LoyaltyPoints/Redeem';
import History from '../../screens/App/LoyaltyPoints/History';
import colors from '../../theme/colors';
import HomeTab from '../../assets/Images/ButtomTab/HomeTab';
import LoyaltyTab from '../../assets/Images/ButtomTab/LoyaltyTab';
import QrcodeTab from '../../assets/Images/ButtomTab/QrcodeTab';
import OrderTab from '../../assets/Images/ButtomTab/OrderTab';
import ProfileTab from '../../assets/Images/ButtomTab/ProfileTab';
import Notification from '../../screens/App/Home/Notification';
import rfSpacing from '../../theme/rfSpacing';
// import Payment from '../../screens/App/LoyaltyPoints/Payment';

export type BottomTabParamList = {
  Home: undefined;
  Points: undefined;
  ScanBar: undefined;
  Order: undefined;
  Profile: undefined;
  Scanner: undefined;
  Levels: undefined;
  Redeem: undefined;
  History: undefined;
  Notification:undefined;
  // Payment:undefined;
};


const Tab = createBottomTabNavigator();

export default function ButtomTAB() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === 'Home') {
            return (
              <View
                style={[
                  styles.iconWrapper,
                  focused && { backgroundColor: colors.LP_Shadeofwhite },
                ]}
              >
                <HomeTab
                  stroke={focused ? colors.LP_Mainorange : colors.LP_HeadingColor}
                  fill="none"
                />
              </View>
            );
          } else if (route.name === 'Points') {
            return (
              <View
                style={[
                  styles.iconWrapper,
                  focused && { backgroundColor: colors.LP_Shadeofwhite},
                ]}
              >
                <LoyaltyTab
                  stroke={focused ? colors.LP_Mainorange : colors.LP_HeadingColor}
                  fill="none"
                />
              </View>
            );
          } else if (route.name === 'ScanBar') {
           
            return (
              <View style={[styles.centerButton, { backgroundColor: colors.LP_Mainorange }]}>
                <QrcodeTab/>
              </View>
            );
          } else if (route.name === 'Order') {
            return (
              <View
                style={[
                  styles.iconWrapper,
                  focused && { backgroundColor: colors.LP_Shadeofwhite },
                ]}
              >
                <OrderTab
                  stroke={focused ? colors.LP_Mainorange : colors.LP_HeadingColor}
                  fill="none"
                />
              </View>
            );
          } else if (route.name === 'Profile') {
            return <ProfileTab />
          }
        },
        tabBarLabelStyle: {
          fontSize: rfSpacing['l'],
          fontWeight: '600',
          paddingBottom: rfSpacing['xs'],
        },
        tabBarStyle: {
          height: rfSpacing['8xl'],
          borderRadius: rfSpacing['6xl'],
          backgroundColor: colors.LP_White,
          position: 'absolute',
          bottom: rfSpacing['m'],
          marginHorizontal: rfSpacing['3xl'],
        },
        tabBarActiveTintColor: colors.LP_Mainorange,
        tabBarInactiveTintColor: colors.LP_NaturalGray,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Points" component={Points} />
      <Tab.Screen name="ScanBar" component={ScanBar} options={{ tabBarStyle: { display: 'none' } }} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarStyle: { display: 'none' } }} />
      {/* <Tab.Screen name="Scanner" component={Scanner} options={{ tabBarButton: () => null }} /> */}
      <Tab.Screen name="Levels" component={Levels} options={{ tabBarButton: () => null, headerShown: false, }} />
      <Tab.Screen name="Redeem" component={Redeem} options={{ tabBarButton: () => null, headerShown: false, }} />
      <Tab.Screen name="History" component={History} options={{ tabBarButton: () => null, headerShown: false, }} />
      <Tab.Screen name="Notification" component={Notification} options={{ tabBarButton: () => null, headerShown: false, }} />
      
        {/* <Tab.Screen name="Payment" component={Payment} options={{ tabBarButton: () => null, headerShown: false, }} /> */}
    </Tab.Navigator>

  );
}
const styles = StyleSheet.create({
  centerButton: {
    width: rfSpacing['7xxmmll'],
    height: rfSpacing['7xxmmll'],
    borderRadius: rfSpacing['5xl'],
    justifyContent: 'center',
    alignItems: 'center', 
  },
  iconWrapper: {
    width: rfSpacing['7xl'],
    height:  rfSpacing['7xl'],
    borderRadius:  rfSpacing['5xl'],
    justifyContent: 'center',
    alignItems: 'center',
  },
});
