import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Auth/Login'
import FAuth from '../../screens/Auth/FAuth'
import ButtomTab from '../ButtomTab'
import ScanBar from '../../screens/App/QRScanner/ScanBar';
import Scanner from '../../screens/App/QRScanner/Scanner/index'
import PlaceOrder from '../../screens/App/MyOrder/PlaceOrder';
import Levels from '../../screens/App/LoyaltyPoints/Levels';
import Redeem from '../../screens/App/LoyaltyPoints/Redeem';
// import History from '../../screens/App/LoyaltyPoints/History';
// import Order from '../../screens/App/MyOrder/Order'
// import Points from '../../screens/App/LoyaltyPoints';
import BuyItems from '../../screens/App/LoyaltyPoints/Redeem/BuyItems';
import Payment from '../../screens/App/LoyaltyPoints/Redeem/Payment';
import OrderReceive from '../../screens/App/Home/OrderReceive';
import Signaturetext from '../../screens/App/Home/Signaturetext';
import Notification from '../../screens/App/Home/Notification';
export type RootStackParamList = {
 Login:undefined;
 FAuth : undefined;
 ButtomTab : undefined,
 Scanner: undefined,
 ScanBar:undefined,
 PlaceOrder:undefined,
 Levels:undefined,
 Redeem:undefined,
 History:undefined,
 BuyItems:undefined,
 Payment:undefined,
 OrderReceive:undefined,
 Signaturetext:undefined,
 Points:undefined,
 Navigation:undefined,
};
const Stack = createStackNavigator<RootStackParamList>();
export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="FAuth" component={FAuth} options={{ headerShown: false}} />
        <Stack.Screen name="ButtomTab" component={ButtomTab} options={{headerShown: false}}/>
        <Stack.Screen name="Scanner" component={Scanner} options={{headerShown: false}}/>
        <Stack.Screen name="ScanBar" component={ScanBar} options={{headerShown: false}}/>
         <Stack.Screen name="PlaceOrder" component={PlaceOrder} options={{headerShown: false}}/>
          {/* <Stack.Screen name="History" component={History} options={{headerShown: false}}/> */}
           <Stack.Screen name="Redeem" component={Redeem} options={{headerShown: false}}/>
           <Stack.Screen name="Levels" component={Levels} options={{headerShown: false}}/>
           
          {/* <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/> */}
         
        {/* <Stack.Screen name="Points" component={Points} options={{headerShown: false}}/> */}
        <Stack.Screen name="BuyItems" component={BuyItems} options={{headerShown: false}}/> 
        <Stack.Screen name="Payment" component={Payment} options={{headerShown: false}}/> 
        <Stack.Screen name="OrderReceive" component={OrderReceive} options={{headerShown: false}}/>
        <Stack.Screen name="Signaturetext" component={Signaturetext} options={{headerShown: false}}/>
        <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}