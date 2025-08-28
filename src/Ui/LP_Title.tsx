import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import rfSpacing from '../theme/rfSpacing'
import colors from '../theme/colors'

const LP_Title = ({ Title }: any) => {
    return (
        <Text style={styles.Title}>{Title}

        </Text>
    )
}

export default LP_Title

const styles = StyleSheet.create({
    Title: {
        textAlign: "center",
        fontSize: rfSpacing['4xxm'],
        color: colors.LP_HeadingColor,
        fontWeight: "600",
        marginTop: rfSpacing['4xl'],
        fontFamily: 'Plus Jakarta Sans'
    }
})