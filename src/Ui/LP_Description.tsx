import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import rfSpacing from '../theme/rfSpacing';
import colors from '../theme/colors';


const LP_Description = ({Title}: any) => {
    return (
        <Text style={styles.Description}>
            {Title}
        </Text>
    )
}

export default LP_Description

const styles = StyleSheet.create({
    Description: {
        alignSelf:"center",
        textAlign: "center",
        color: colors.LP_rememberhaed,
        marginTop: rfSpacing['4xl'],
        fontSize: rfSpacing['xxl'],
      
        

    }
})