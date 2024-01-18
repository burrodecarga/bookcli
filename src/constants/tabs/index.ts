import { ReactElement } from 'react'
import { Chat, Config, Home, Likes, Notifications } from '../../screens'

export type MyTabsProps={    
        id: string
        title: string,
        screen: string
        icon: string
        Component: string
        item: typeof MyTabs 
}

export type MyItemProps ={
    item: typeof MyTabs 
}

export const MyTabs = [
    {
        id: 1,
        title: 'Messages',
        screen: 'Chat',
        icon: 'message-text',
        Component: Chat
    },
    {
        id: 2,
        title: 'Likes',
        screen: 'Likes',
        icon: 'heart',
        Component: Likes
    },
    {
        id: 3,
        title: 'Home',
        screen: 'Home',
        icon: 'home',
        Component: Home
    },
    {
        id: 4,
        title: 'Settings',
        screen: 'Settings',
        icon: 'cog',
        Component: Config
    },
    {
        id: 5,
        title: 'Activity',
        screen: 'Notifications',
        icon: 'bell',
        Component: Notifications
    },
]