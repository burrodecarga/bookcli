import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PortfolioScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Portfolio</Text>
        </View>
    )
}

export default PortfolioScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})