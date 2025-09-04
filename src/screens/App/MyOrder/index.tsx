import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { getImage } from '../../../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import OrderBox from '../../../assets/Images/Order/OrderBox';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [270000, 140000, 250000, 100000],
      color: () => colors.LP_Mainorange,
      strokeWidth: rfSpacing['xxs'],
    },
  ],
};

const orders = [
  {
    id: '1',
    status: 'inprocess',
    orderId: 'Order #: 991264',
    date: '12-04-2025 | 1:04PM',
    title: 'Cup Cake Large - Cotton',
    icon: <OrderBox />,
  },
  {
    id: '2',
    status: 'completed',
    orderId: 'Order #:991278',
    date: '13-04-2025 | 11:20AM',
    title: 'Chocolate Pastry Small',
    icon: <OrderBox />,
  },
  {
    id: '3',
    status: 'rejected',
    orderId: 'Order #:991289',
    date: '14-04-2025 | 5:30PM',
    title: 'Blueberry Muffin',
    icon: <OrderBox />,
  },
  {
    id: '4',
    status: 'inprocess',
    orderId: 'Order #:991295',
    date: '15-04-2025 | 2:10PM',
    title: 'Strawberry Donut',
    icon: <OrderBox />,
  },
  {
    id: '5',
    status: 'completed',
    orderId: 'Order #:991301',
    date: '16-04-2025 | 4:45PM',
    title: 'Vanilla Ice Cream',
    icon: <OrderBox />,
  },
];

const statusMap = {
  inprocess: { borderColor: '#EAAA15', textColor: '#FFCB00', minWidth: 68 },
  completed: { borderColor: '#2AC87C', textColor: '#2AC87C', minWidth: 72 },
  rejected: { borderColor: '#EA3454', textColor: '#EA3454', minWidth: 60 },
};

const chartConfig = {
  backgroundGradientFrom: colors.LP_White,
  backgroundGradientTo: colors.LP_White,
  decimalPlaces: 0,
  color: () => colors.LP_HeadingColor,
  labelColor: () => colors.LP_HeadingColor,
  propsForBackgroundLines: {
    stroke: 'transparent',
  },
  propsForLabels: {
    fontSize: rfSpacing['l'],
  },
  yAxisLabel: '',
  yAxisSuffix: '',
};

const Order = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: rfSpacing['10xl'] }}
        ListHeaderComponent={
          <>
            {/* Top Red Header */}
            <View style={styles.container2}>
              <Text style={styles.title}>My Orders</Text>
            </View>

            {/* White Stats + Chart */}
            <View style={styles.container3}>
              <View style={styles.statsRow}>
                <View style={styles.containerone}>
                  <Text style={styles.statLabel}>Total Orders</Text>
                  <Text style={styles.statValue}>225</Text>
                </View>
                <View style={styles.containertwo}>
                  <View style={styles.containerone}>
                    <Text style={styles.statLabel}>Total Spent(PKR)</Text>
                    <Text style={styles.statValue}>2,85,290</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.subLabel}>Statistics</Text>
              <Text style={styles.subTitle}>Spending</Text>

              <LineChart
                data={{
                  ...data,
                  datasets: [
                    ...data.datasets,
                    {
                      data: [0, 50000, 500000],
                      withDots: false,
                      color: () => 'transparent',
                    },
                  ],
                }}
                width={screenWidth - 40}
                height={rfSpacing['1.5H']}
                chartConfig={chartConfig}
                bezier
                withInnerLines={false}
                withOuterLines={false}
                withShadow={false}
                withDots={false}
                withVerticalLabels={true}
                withHorizontalLabels={true}
                fromZero
                segments={2}
                formatYLabel={(yValue) => {
                  const val = parseInt(yValue);
                  if (val === 0) return '0';
                  if (val === 250000 || val === 50000) return '50K';
                  if (val === 500000) return '500K';
                  return '';
                }}
                decorator={() => (
                  <View>
                    {/* Tooltip */}
                    <View
                      style={{
                        position: 'absolute',
                        top: rfSpacing['7xl'],
                        left: (screenWidth - 30) * 3 / 7 - 30,
                        backgroundColor: colors.LP_HeadingColor,
                        paddingHorizontal: rfSpacing['ms'],
                        paddingVertical: rfSpacing['xs'],
                        borderRadius: rfSpacing['s'],
                        zIndex: 999,
                      }}>
                      <Text style={{ color: '#fff', fontSize: 12 }}>
                        25,234 PKR
                      </Text>
                    </View>

                    {/* Black dot on Thursday */}
                    <View
                      style={{
                        position: 'absolute',
                        top: rfSpacing['8xll'],
                        left: (screenWidth - 10) * 3 / 7 - 1,
                        width: rfSpacing['l'],
                        height: rfSpacing['l'],
                        borderRadius: rfSpacing['s'],
                        backgroundColor: colors.LP_HeadingColor,
                      }}
                    />
                  </View>
                )}
                style={styles.chartStyle}
              />
            </View>

            {/* Order History Heading */}
            <View style={{ flexDirection: 'row',marginTop:-rfSpacing['8xl'] }}>
              <Text
                style={{
                  color: colors.LP_HeadingColor,
                  fontSize: rfSpacing['xxl'],
                  fontWeight: '600',
                  
                  left: rfSpacing['4xl'],
                }}>
                Order History
              </Text>

              <View
                style={{
                  width: 112,
                  height: 32,
                  borderColor: '#C5C7D0',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  borderRadius: 8,
                  marginLeft: 160,
                 
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: 'black',
                      textAlign: 'center',
                      paddingTop: 4,
                      marginLeft: 5,
                    }}>
                    This month
                  </Text>
                  <Image
                    source={getImage('arrowdown')}
                    style={{ height: 25, width: 25, marginTop: 5 }}
                  />
                </View>
              </View>
            </View>
          </>
        }
        renderItem={({ item }) => {
  const normalizedStatus = item.status.trim().toLowerCase();
  const statusStyle = statusMap[normalizedStatus] || {
    borderColor: '#000000ff',
    textColor: colors.LP_HeadingColor,
    minWidth: 60,
  };

  return (
    <View style={styles.subcontainer3}>
      <View style={{ flexDirection: 'row', padding: 12, alignItems: 'center' }}>
        <View style={{height:rfSpacing['5xl'],width:rfSpacing['5xl'],backgroundColor:colors.LP_BorderBG,borderRadius:rfSpacing['xxl'],marginTop:-rfSpacing['4xl']}}>
          <View style={{flex: 1, justifyContent: 'center',alignSelf:"center" }}>
        {item.icon}
        </View>
        </View>
         <View style={{ flex: 1,marginLeft:rfSpacing['l'] }}>
          <Text style={{ fontSize: rfSpacing['l'], fontWeight: '600', color: colors.LP_HeadingColor,marginTop: 4 }}>
            {item.orderId} 
          </Text>
          <Text style={{ fontSize: rfSpacing['l'], color: colors.LP_NaturalGray, }}>
            {item.date}
          </Text>
          <Text style={{ fontSize: rfSpacing['l'], fontWeight: '600', color:colors.LP_HeadingColor, marginTop: 8 }}>
            {item.title}
          </Text>
        </View>
         
        {/* Status Badge */}
        <Text
          style={{
            color: statusStyle.textColor,
            borderWidth: 1,
            borderColor: statusStyle.borderColor,
            minWidth: statusStyle.minWidth,
            textAlign: 'center',
            borderRadius: 4,
            marginRight: 6,
            marginTop:-rfSpacing['6xl'],
            fontSize:rfSpacing['m']
          }}>
          {item.status}
        </Text>
      </View>
    </View>
  );
}}
/>
      <Pressable onPress={() => navigation.navigate('PlaceOrder' as never)}>
            <Image
              source={getImage('buttoncircle')}
              style={{
                height: 52,
                width: 52,
                marginLeft:332,
                marginTop:-160
                
               
                
              }}
            />
          </Pressable>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f6',
    flex: 1,
  },
  container2: {
    width: '100%',
    height: 204,
    backgroundColor:colors.LP_Mainorange,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  container3: {
    width: 361,
    height: 335,
    backgroundColor: 'white',
    elevation: 2,
    top:-100,
    alignSelf: 'center',
    borderRadius: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 24,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 16,
    gap: 16,
  },
  containerone: {
    width: 156,
    height: 88,
    backgroundColor: '#F2F3F6',
    borderWidth: 1,
    borderColor: '#E6E9EF',
    borderRadius: 16,
  },
  containertwo: {
    width: 156,
    height: 88,
    backgroundColor: '#F2F3F6',
    borderWidth: 1,
    borderColor: '#E6E9EF',
    borderRadius: 16,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#5C6670',
    paddingLeft: 16,
    paddingTop: 16,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.LP_HeadingColor,
    paddingLeft: 16,
    paddingTop: 12,
  },
  subLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#5C6670',
    paddingLeft: 16,
    paddingTop: 12,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.LP_HeadingColor,
    paddingLeft: 16,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
    marginRight: 20,
    top: -10,
    width: 303,
    height: 110,
  },
  subcontainer3: {
    width: 361,
    height: 103,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dbd9d9ff',
    marginLeft: 25,
    marginTop: 16,
    borderRadius: 16,
  },
});
