import { View, Text, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import styles from '../../../Auth/styles'
import { getImage } from '../../../../assets/Images/images'
import { useNavigation } from '@react-navigation/native'
import rfSpacing from '../../../../theme/rfSpacing'

const notifications = [
  {
    id: '1',
    type: 'points',
    date: '18-09-2025 | 2:30PM',
    points: 125,
    message: 'You have received 125 points.',
  },
  {
    id: '2',
    type: 'points',
    date: '18-09-2025 | 3:10PM',
    points: 300,
    message: 'You have received 300 points.',
  },
  {
    id: '3',
    type: 'order',
    date: '18-09-2025 | 4:00PM',
    orderName: 'Cup Cake Large',
    message: 'Your order has been confirmed.',
  },
  {
    id: '4',
    type: 'order',
    date: '18-09-2025 | 5:15PM',
    orderName: 'Chocolate Pastry',
    message: 'Your order has been confirmed.',
  },
  {
    id: '5',
    type: 'points',
    date: '18-09-2025 | 2:30PM',
    points: 125,
    message: 'You have received 125 points.',
  },
  {
    id: '6',
    type: 'points',
    date: '18-09-2025 | 3:10PM',
    points: 300,
    message: 'You have received 300 points.',
  },
  {
    id: '7',
    type: 'order',
    date: '18-09-2025 | 4:00PM',
    orderName: 'Cup Cake Large',
    message: 'Your order has been confirmed.',
  },
  {
    id: '8',
    type: 'order',
    date: '18-09-2025 | 5:15PM',
    orderName: 'Chocolate Pastry',
    message: 'Your order has been confirmed.',
  },
];

const Notification = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.BG_F_xxxs}>
    <FlatList
      data={notifications}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <View style={styles.containerPoints}>
          <View style={styles.W_385H_H_10XL_BG_MO_BBR_4XL_BBSR_4XL}>
            <View style={styles.FD_R_AI_C_JC_C_G_M}>
              <Pressable onPress={() => navigation.goBack()}>
                <Image source={getImage('turnback')} style={styles.turnback} />
              </Pressable>
              <Text style={styles.C_W_FS_4XL_TA_C_MT_4XXM}>Notifications</Text>
              <Image source={getImage('settingicon')} style={styles.turnback} />
            </View>
          </View>
        </View>
      }
      contentContainerStyle={{ paddingBottom: rfSpacing['10xl']}}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        
        <View style={styles.NOTI_CARD_CENTER}>
          <View style={styles.FD_R}>
            <View style={styles.NOTI_BG_ICON}>
              <Image source={getImage('notification')} style={styles.NOTI_ICON} />
            </View>
            <Text style={styles.NOTI_MSG}>{item.message}</Text>
          </View>
          <View style={styles.FD_R_MT_N3XL}>
            <View>
              {item.type === 'order' ? (
                <Text style={styles.NOTI_TITLE}>{item.orderName}</Text>
              ) : (
                <Text style={styles.NOTI_TITLE}>{item.points} Points</Text>
              )}
            </View>
            <Text style={styles.NOTI_DATE_CENTER}>{item.date}</Text>
          </View>
        </View>
      )}
    />
    </View>
  )
}
export default Notification
