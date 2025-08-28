import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Auth/Login'
import FAuth from '../../screens/Auth/FAuth'
import ButtomTab from '../ButtomTab'
import ScanBar from '../../screens/App/QRScanner';
import Scanner from '../../screens/App/QRScanner/ScanBar';
// import PlaceOrder from '../../screens/App/MyOrder/PlaceOrder';
// import Levels from '../../screens/App/LoyaltyPoints/Levels/Levels';
// import Redeem from '../../screens/App/LoyaltyPoints/Reedem';
// import History from '../../screens/App/LoyaltyPoints/History';
// import Order from '../../screens/App/MyOrder/Order'
// import Points from '../../screens/App/LoyaltyPoints';
// import BuyItems from '../../screens/App/LoyaltyPoints/BuyItems';
// import Payment from '../../screens/App/LoyaltyPoints/Payment/Payment';
// import Signature from '../../screens/App/Home/OrderReceive';
// import Signaturetext from '../../screens/App/Home/Signature';
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
 Signature:undefined,
 Signaturetext:undefined,
 Points:undefined,
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
         {/* <Stack.Screen name="PlaceOrder" component={PlaceOrder} options={{headerShown: false}}/>
          <Stack.Screen name="History" component={History} options={{headerShown: false}}/>
           <Stack.Screen name="Redeem" component={Redeem} options={{headerShown: false}}/>
           <Stack.Screen name="Levels" component={Levels} options={{headerShown: false}}/> */}
           
          {/* <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/> */}
         
        {/* <Stack.Screen name="Points" component={Points} options={{headerShown: false}}/>
        <Stack.Screen name="BuyItems" component={BuyItems} options={{headerShown: false}}/>
        <Stack.Screen name="Payment" component={Payment} options={{headerShown: false}}/>
        <Stack.Screen name="Signature" component={Signature} options={{headerShown: false}}/>
        <Stack.Screen name="Signaturetext" component={Signaturetext} options={{headerShown: false}}/> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}