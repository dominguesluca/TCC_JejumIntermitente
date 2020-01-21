import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import { Font } from 'expo'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native'

import bgImage from '../../assets/imgs/bg6.jpeg'
import logo from '../../assets/imgs/icone1.png'
import Icon from 'react-native-vector-icons/Ionicons'


const { width: WIDTH } = Dimensions.get('window')

class Login extends Component {
    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if(this.state.press == false){
            this.setState({showPass: false, press: true})
        }else {
            this.setState({showPass: true, press: false})
        }
    }
    state = {
        name: 'Temporario',
        email: '',
        password: ''
    }

    login = () => {
        //this.props.onLogin({ ...this.state})
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>Jejum Intermitente</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Usuário'}
                        keyboardType='email-address'
                        value={this.state.email}
                        onChangeText={email=>this.setState({email})}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Senha'}
                        secureTextEntry={this.state.showPass}
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />


                    <TouchableOpacity style={styles.btnEyes} 
                        onPress ={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'}
                            size={28} color={'rgba(255,255,255,0.7)'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={this.login}
                    style={styles.btnLogin}>
                    <Text style={styles.textLogin}>Entrar</Text>
                 </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Register')}} style={styles.buttomCadastrar}>
                     <Text style = {styles.buttomCadastrar}> Criar uma nova conta... </Text>   
                </TouchableOpacity>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 120,
        height: 120,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    logoText: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Pacifico-Regular.ttf',
        marginTop: 10,
        
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    },
    inputContainer: {
        marginTop: 10
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    btnEyes: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        borderRadius: 25,
        backgroundColor: '#008000',
        justifyContent: 'center',
        marginTop: 20,
        opacity: 2.5
    },
    textLogin: {
        color: '#FFFAFA',
        fontSize: 20,
        textAlign: 'center',
        
    },
    buttomCadastrar: {
        color: '#F5FFFA',
        fontSize: 16,
        height: 30
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

//export default connect(null, mapDispatchToProps)(Login)
export default Login