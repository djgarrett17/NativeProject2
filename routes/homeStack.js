import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../screens/Login.js'
import SignUp from '../screens/SignUp.js'
import Home from '../screens/Home.js'


const screens ={
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    },
    Home: {
        screen: Home
    },

}


const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack)