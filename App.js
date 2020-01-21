
import { StyleSheet, Text, View } from 'react-native';

import React from 'react'

import {
  createStackNavigator
} from 'react-navigation-stack'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
/*Telas do app*/
import Icon from 'react-native-vector-icons/Ionicons'
import AddPhoto from './src/screens/AddPhoto'
import Profile from './src/screens/Profile'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Feed from './src/screens/Feed'

/*Telas de dicas e menu*/
import Reduca from './src/screens/Reduca'
import Exercicios from './src/screens/Exercicios'
import Menu from './src/screens/Menu'
import Jejum from './src/screens/Jejum'
import Dieta from './src/screens/Dieta'
import CalculoCalorico from './src/screens/CalculoCalorico'
import TaxaMetabolicaBasal from './src/screens/TaxaMetabolicaBasal'
import Alimentos from './src/screens/Alimentos'

/*Telas sobre alimentos para a dieta*/
import CafeDaManha from './src/screens/CafeDaManha'
import Almoco from './src/screens/Almoco'
import Janta from './src/screens/Janta'

/*Tipos de dieta */
import LowCarb from './src/screens/LowCarb'
import DietaDukan from './src/screens/DietaDukan'
import DietaPaleolitica from './src/screens/DietaPaleolitica'
import DietaRavenna from './src/screens/DietaRavenna'
import DietaDash from './src/screens/DietaDash'

/*Como fazer o jejum */
import DozeHoras from './src/screens/DozeHoras'
import DezesseisHoras from './src/screens/DezesseisHoras'
import VinteQuatroHoras from './src/screens/VinteQuatroHoras'


/*Cardapío*/
import Frango from './src/screens/Frango'
import Acem from './src/screens/Acem'
import Parmegiana from './src/screens/Parmegiana'
import PeitoFrango from './src/screens/PeitoFrango'
import Peixe from './src/screens/Peixe'
import Salada from './src/screens/Salada'


//export default function App(){

export default function App() {
  /*const comments = [{
    nickname: 'Lucas Prissinotto',
    comment: 'Que bom !!'
  }, {
      nickname: 'Roger Oliveira',
      comment: 'Bom saber'
  }]
  return(
      
    <View style={{ flex: 1}}>
      <Header/>
        <Post image={require('./assets/imgs/jejum.jpg')}
        comments = {comments}/>
    </View>
    
  ) */
  const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: '' } },
    Register: { screen: Register, navigationOptions: { title: 'Registrar-se' } }
  }, {
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
    DozeHoras: DozeHoras,
    DezesseisHoras: DezesseisHoras,
    VinteQuatroHoras: VinteQuatroHoras,
    //Jejum:Jejum,
    //Dieta:Dieta,
    Menu: Menu,

  }, {
    initialRouteName: 'Menu'
  })

  const alimentosNavigate =
    createStackNavigator({
      Jantar: Janta,
      PeitoFrango: PeitoFrango,
      Peixe: Peixe,
      Salada: Salada,
      Almoco: Almoco,
      CafeDaManha: CafeDaManha,
      Frango: Frango,
      Parmegiana: Parmegiana,
      Acem: Acem,
      Alimentos: Alimentos

    }, {
      initialRouteName: 'Alimentos'
    })


  const loginOrProfileRouter = createAppContainer(
    createSwitchNavigator({
      Profile: Profile,
      Auth: authRouter
    }, {
      initialRouteName: 'Auth'
    })
  )
  const MenuRoutes = {

    Feed: {
      name: 'Feed',
      screen: Feed,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: ({ tintColor }) =>
          <Icon name='ios-home' size={30} color={tintColor} />
      }
    },
    Menu: {
      name: 'Itens',
      screen: itensNavigate,
      navigationOptions: {
        title: 'Menu',
        tabBarIcon: ({ tintColor }) =>
          <Icon name='md-menu' size={30} color={tintColor} />
      }
    },
    Add: {
      name: 'AddPhoto',
      screen: AddPhoto,
      navigationOptions: {
        title: 'Adicionar Foto',
        tabBarIcon: ({ tintColor = '#32CD32' }) =>
          <Icon name='ios-camera' size={30} color={tintColor} />
      }
    },
    Dieta: {
      name: 'Minha dieta',
      screen: alimentosNavigate,
      navigationOptions: {
        title: 'Minha dieta',
        tabBarIcon: ({ tintColor }) =>
          <Icon name='ios-restaurant' size={30} color={tintColor} />
      }
    },
    Profile: {
      name: 'Profile',
      screen: loginOrProfileRouter,
      navigationOptions: {
        title: 'Perfil',
        tabBarIcon: ({ tintColor }) =>
          <Icon name='ios-person' size={30} color={tintColor} />
      }
    }
  }

  const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
      showLabel: true,
    }
  }

}
const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
export default MenuNavigator

