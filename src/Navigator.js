import React from 'react'
import { 
   createStackNavigator
} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation'
/*Telas do app*/
import Icon from 'react-native-vector-icons/Ionicons'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'
import Feed from './screens/Feed'

/*Telas de dicas e menu*/
import Reduca from './screens/Reduca'
import Exercicios from './screens/Exercicios'
import Menu from './screens/Menu'
import Jejum from './screens/Jejum'
import Dieta from './screens/Dieta'
import CalculoCalorico from './screens/CalculoCalorico'
import TaxaMetabolicaBasal from './screens/TaxaMetabolicaBasal'
import Alimentos from './screens/Alimentos'

/*Telas sobre alimentos para a dieta*/
import CafeDaManha from './screens/CafeDaManha'
import Almoco from './screens/Almoco'
import Janta from './screens/Janta'

/*Tipos de dieta */
import LowCarb from './screens/LowCarb'
import DietaDukan from './screens/DietaDukan'
import DietaPaleolitica from './screens/DietaPaleolitica'
import DietaRavenna from './screens/DietaRavenna'
import DietaDash from './screens/DietaDash'

/*Como fazer o jejum */
import DozeHoras from './screens/DozeHoras'
import DezesseisHoras from './screens/DezesseisHoras'
import VinteQuatroHoras from './screens/VinteQuatroHoras'


/*Cardapío*/
import Frango from './screens/Frango'
import Acem from './screens/Acem'
import Parmegiana from './screens/Parmegiana'
import PeitoFrango from './screens/PeitoFrango'
import Peixe from './screens/Peixe'
import Salada from './screens/Salada'


const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: {title: ''}},
    Register: { screen: Register, navigationOptions: { title: 'Registrar-se'}}
},{
    initialRouteName: 'Login'
})


const itensNavigate = createStackNavigator({
    Acesso: Reduca,
    AcessoExercicios: Exercicios,
    AcessoDieta: Dieta,
    AcessoJejum: Jejum,
    AcessoCalculo: CalculoCalorico,
    AcessoTaxa: TaxaMetabolicaBasal,
    AcessoAlimentos: Alimentos,
    LowCarb: LowCarb,
    DietaRavenna: DietaRavenna,
    DietaPaleolitica: DietaPaleolitica,
    DietaDukan: DietaDukan,
    DietaDash: DietaDash,
    DozeHoras:DozeHoras,
    DezesseisHoras: DezesseisHoras,
    VinteQuatroHoras:VinteQuatroHoras,
    //Jejum:Jejum,
    //Dieta:Dieta,
    Menu: Menu,
    
},{
    initialRouteName: 'Menu'
})

const alimentosNavigate = 
    createStackNavigator({
    Jantar: Janta,
    PeitoFrango:PeitoFrango,
    Peixe:Peixe,
    Salada:Salada,
    Almoco: Almoco,
    CafeDaManha: CafeDaManha,
    Frango:Frango,
    Parmegiana:Parmegiana,
    Acem:Acem,
    Alimentos: Alimentos
    
},{
    initialRouteName: 'Alimentos'
})


const loginOrProfileRouter = createAppContainer(
    createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
},{
    initialRouteName: 'Auth'
})
)
const MenuRoutes = {
    
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title:'Inicio',
            tabBarIcon: ({ tintColor})=>
                <Icon name='ios-home' size={30} color={tintColor}/>
        }
    },
    Menu:{
        name: 'Itens',
        screen: itensNavigate,
        navigationOptions:{
            title: 'Menu',
            tabBarIcon: ({tintColor})=>
                <Icon name='md-menu' size={30} color={tintColor}/>
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Adicionar Foto',
            tabBarIcon: ({tintColor='#32CD32'}) =>
                <Icon name='ios-camera' size={30} color={tintColor}/>
        }
    },
    Dieta:{
        name: 'Minha dieta',
        screen: alimentosNavigate,
        navigationOptions:{
            title: 'Minha dieta',
            tabBarIcon: ({tintColor})=>
                <Icon name='ios-restaurant' size={30} color={tintColor}/>
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Perfil',
            tabBarIcon: ({tintColor})=>
                <Icon name='ios-person' size={30} color={tintColor}/>
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: true,
    }
}


const MenuNavigator = createBottomTabNavigator(MenuRoutes,MenuConfig)
export default MenuNavigator