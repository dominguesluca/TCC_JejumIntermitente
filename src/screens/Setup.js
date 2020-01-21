import { createStackNavigator } from 'react-navigation'

import Menu from './Main'

export default createStackNavigator({
    Menu
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#2E8B57',
        },
        headerTintColor: '#FFF'
    }
})