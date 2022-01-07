import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';


// Icono Google y Facebook
import logoApp from '../assets/logo.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
          <Image
          source={logoApp}
          style={styles.imglogoApp}
          />
        <Text style={styles.logoText}>Iniciar Sesión</Text>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputText}
            placeholder="Correo Electrónico" 
            placeholderTextColor="#81949C"
            fontWeight= '500'
            onChangeText={text => this.setEmail({email:text})}/>
        </View>
        <View style={styles.inputView}>
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#81949C"
            fontWeight= '500'
            onChangeText={text => this.setPassword({password:text})}/>
            
            <View>
              <AntDesign style={styles.iconEyeo} name="eyeo" size={28} color="black"/>
            </View>
        </View>
        <TouchableOpacity style={styles.forgotSpacing}>
          <Text style={styles.forgot}>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate("Home")}>INGRESAR</Text>
        </TouchableOpacity>

        <View style={styles.contentSesion}>
          <Text style={styles.sessionText}> ------------------- o ingresar con -------------------</Text>
        </View>
        <View style={styles.buttonStylesRedes}>
          <TouchableOpacity style={styles.buttonRedes}>
              <Image 
                source={google}
                style={styles.imgRedesGoogle}
              />
              <Text style={styles.sessionText}> Google </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRedes}>
              <Image 
                source={facebook}
                style={styles.imgRedesFacebook}
              />
               <Text style={styles.sessionText}> Facebook </Text>
          </TouchableOpacity>
        </View> 
        <View style={styles.registerOption}>
          <Text style={styles.sessionText}>¿No tienes una cuenta?</Text>
          <Text style={styles.registerBtn}>Regístrate</Text>
        </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText:{
      fontWeight:"bold",
      fontSize: 30,
      color:"#000",
      marginBottom: 20,
    },
    inputView:{
      width:"80%",
      borderRadius: 8,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding: 10,
      borderWidth: 2,
      borderColor: '#0099B9'
    },
    inputText:{
      height:50,
      color:"#000000",
      fontSize: 18
    },
    forgot: {
      color:"#000",
      fontSize: 16
    },
    loginBtn:{
      width:"80%",
      backgroundColor: "#0099B9",
      borderRadius: 8,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    },
    loginText:{
      color:"#fff",
      fontSize: 18,
      fontWeight: '500'
    },
    sessionText: {
      color: "#000",
      marginBottom: 5,
      fontSize: 17,
      textAlign: 'center'
    },
    buttonStylesRedes:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      width: 100
    },
    buttonRedes:{
      margin: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 60,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#0099B9'
    },
    imgRedesGoogle:{
      width: 27,
      height: 27,
      marginRight: 5
    },
    imgRedesFacebook: {
      width: 17,
      height: 30,
      marginRight: 5
    },
    imglogoApp: {
      height: 144,
      width: 105,
      marginBottom: 15
    },
    registerOption: {
      display: 'flex',
      flexDirection: 'row'
    },
    contentSesion: {
      width: '100%',
    },
    registerBtn: {
      color: '#0099B9',
      marginLeft: 10,
      fontSize: 16,
      fontWeight: 'bold'
    },
    forgotSpacing: {
      marginBottom: 17,
      marginLeft: 135
    },
    iconEyeo: {
      marginTop: -39,
      marginLeft: 275,
      color: '#0099B9'
    }
  });
  
