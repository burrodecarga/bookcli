import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text } from 'react-native'
import { MyTabs, MyItemProps, MyTabsProps } from '../constants/tabs'
import React, { useState } from 'react'
import TabButton from '../components/TabButton'



const Tab = createBottomTabNavigator()

export default () => {
    const [tabs, setTabs] = useState(MyTabs)

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'Home'}
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBar,

                }}
            >
                {
                    tabs.map((item: any, index: number) =>
                        <Tab.Screen
                            key={item.id}
                            name={item.screen}
                            component={item.Component}
                            options={{
                                tabBarShowLabel: false,
                                tabBarButton: (props) => <TabButton item={item} {...props} />
                            }}
                        />
                    )
                }

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        position: 'absolute',
        bottom: 25,
        marginHorizontal: 16,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#dadada'
    }
})