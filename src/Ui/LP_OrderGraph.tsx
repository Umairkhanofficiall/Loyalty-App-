import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';

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

const LP_OrderGraph = () => (
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
            <Text style={{ color:colors.LP_White, fontSize: rfSpacing['ml'] }}>
              25,234 PKR
            </Text>
          </View>
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
);

export default LP_OrderGraph;

const styles = StyleSheet.create({
  container3: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['3.1H'],
    backgroundColor: 'white',
    elevation: rfSpacing['xxs'],
    top:-rfSpacing['1H'],
    alignSelf: 'center',
    borderRadius: rfSpacing['3xl'],
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: rfSpacing['xl'],
    marginLeft: rfSpacing['xl'],
    gap: rfSpacing['xl'],
  },
  containerone: {
   width: rfSpacing['1.43H'],
    height: rfSpacing['9xl'],
    backgroundColor: '#F2F3F6',
    borderWidth: rfSpacing['xxxs'],
    borderColor: '#E6E9EF',
    borderRadius: rfSpacing['xl'],
  },
  containertwo: {
    backgroundColor: '#F2F3F6',
    borderWidth: rfSpacing['xxxs'],
    borderColor: '#E6E9EF',
    borderRadius: rfSpacing['xl'],
  },
  statLabel: {
    fontSize: rfSpacing['l'],
    fontWeight: '400',
    color: '#5C6670',
    paddingLeft: rfSpacing['xl'],
    paddingTop: rfSpacing['xl'],
  },
  statValue: {
    fontSize: rfSpacing['4xl'],
    fontWeight: '600',
    color: colors.LP_HeadingColor,
    paddingLeft: rfSpacing['xml'],
    paddingTop: rfSpacing['l'],
  },
  subLabel: {
    fontSize: rfSpacing['l'],
    fontWeight: '400',
    color: '#5C6670',
    paddingLeft: rfSpacing['xl'],
    paddingTop: rfSpacing['xl'],
  },
  subTitle: {
    fontSize: rfSpacing['3xl'],
    fontWeight: '600',
    color: colors.LP_HeadingColor,
    paddingLeft: rfSpacing['xml'],
  },
  chartStyle: {
    marginVertical: rfSpacing['s'],
    borderRadius: rfSpacing['xl'],
    marginRight: rfSpacing['3xl'],
    top: -rfSpacing['m'],
},
});