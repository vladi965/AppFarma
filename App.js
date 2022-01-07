import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity, Dimensions } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { FontAwesome } from '@expo/vector-icons';

//Importar la Data 
import { locations } from './data/Data';
import CustomMarker from './source/CustomMarker';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Imagenes
import img1 from './assets/Swiper/Slider1.png';
import farma1 from './assets/Farmacias/logo-Mifarma.png';
import farma2 from './assets/Farmacias/boticas-y-salud-logo.png';
import farma3 from './assets/Farmacias/logo-Botica-fasa.png';
//Medicamentos
import medic1 from './assets/Medicamentos/paracetamol.png';
import medic2 from './assets/Medicamentos/panadolForte.png';
import medic3 from './assets/Medicamentos/nastiflu.png';
import prod1 from './assets/Medicamentos/apronax.png';
import prod2 from './assets/Medicamentos/panadol-antigripal.png';
import prod3 from './assets/Medicamentos/Nastiflu1.png';
import prod4 from './assets/Medicamentos/Panadol_niños.png';
//Perfil
import foto1 from './assets/Perfil/perfil.png';

const Stack = createNativeStackNavigator()

import Login from './screens/Login'
import Home from './screens/Home'


//****************** Inicio *******************//
function Inicio(){
  return(
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.content_Primary}>
          <View style={styles.contentText}>
            <Text style={styles.textOne}>Hola</Text>
            <Text style={styles.textTwo}>Vladimir Sanchez</Text>
          </View>
        <View style={styles.searchContent}>
          <MaterialCommunityIcons name="magnify" size={30} color="#0099B9" style={{ marginTop: 9, marginLeft: 15}}/>
          <TextInput style={styles.textGum} placeholder="¿Que estas buscando?" />
        </View>
      </View>
        <View>
           <View style={styles.boxContain}>
             <View>
                <Text style={styles.textProduct}>Promociones</Text>
             </View>
             <View style={styles.contentImg}>
                  <Image 
                    source={require('./assets/Swiper/Slider1.png')}
                  />
             </View>
             <View>
                <Text style={styles.textProduct}>Farmacias Favoritas</Text>
             </View>
             <View style={styles.contentImgTwo}>
                  <Image style={styles.boxRight} source={farma1} />
                  <Image style={styles.boxRight} source={farma2} />
                  <Image style={styles.boxRight} source={farma3} />
             </View>
             <View>
                <Text style={styles.textProduct}>Productos Destacados</Text>
             </View>
             <View style={styles.contentImgTwo}>
                <View style={styles.boxImgContent}>
                  <Image style={styles.boxRight} source={medic1} />
                  <Text style={styles.textMedi}>Paracetamol</Text>
                </View>
                <View style={styles.boxImgContent}>
                  <Image style={styles.boxRight} source={medic2} />
                  <Text style={styles.textMedi}>Panadol Forte</Text>
                </View>
                <View style={styles.boxImgContent}>
                  <Image style={styles.boxRight} source={medic3} />
                  <Text style={styles.textMedi}>Nastiflu</Text>
                </View>
             </View>
           </View> 
        </View>
    </View>

    </KeyboardAwareScrollView>
  ) 
}

 //******************MEDICAMENTOS********************//

function Medicamentos(){
  return(
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.content_Secundary}>
          <View style={styles.searchContent}>
            <MaterialCommunityIcons name="magnify" size={30} color="#0099B9" style={{ marginTop: 9, marginLeft: 15}}/>
            <TextInput style={styles.textGum} placeholder="¿Que estas buscando?" />
          </View>
        </View>
        <View>
           <View style={styles.contentBtn}>
              <TouchableOpacity style={styles.btnOne}>
                  <Text style={styles.btnText}>Fiebre</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnOne}>
                  <Text style={styles.btnText}>Dolor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnOne}>
                  <Text style={styles.btnText}>Gripe</Text>
              </TouchableOpacity>
           </View> 
           <View style={styles.boxContainTwo}>
             <View>
                <Text style={styles.textProduct}>Productos Destacados</Text>
             </View>
             <View>
               <View style={styles.containStyle}>
                  <View style={styles.contentBoxStyle1}>
                      <Image style={styles.imgApronax}
                        source={prod1}
                      />
                      <Text style={styles.prodText1}>Apronax</Text>
                      <Text style={styles.textApron}>El paracetamol utiliza principalmente para tratar la fiebre</Text>
                      <View style={styles.contentFooter}>
                        <Text style={styles.textFooter}>Ver más</Text>
                        <FontAwesome name="heart" style={styles.iconHeart}></FontAwesome>
                      </View>
                  </View>
                  <View style={styles.contentBoxStyle2}>
                      <Image style={styles.imgPanadol}
                        source={prod2}
                      />
                      <Text style={styles.prodText3}>Panadol</Text>
                      <Text style={styles.textPanad}>El paracetamol utiliza principalmente para tratar la fiebre</Text>
                      <View style={styles.contentFooter}>
                        <Text style={styles.textFooter1}>Ver más</Text>
                        <FontAwesome name="heart" style={styles.iconHeart}></FontAwesome>
                      </View>
                  </View>
               </View>
             </View>
             <View>
                <Text style={styles.textProduct}>Promociones</Text>
             </View>
             <View style={styles.contentImgTwo}>
                <View style={styles.contentBoxStyle3}>
                      <Image style={styles.imgNastiflu}
                        source={prod3}
                      />
                      <Text style={styles.prodText4}>Nastiflu</Text>
                      <Text style={styles.textApron}>El paracetamol utiliza principalmente para tratar la fiebre</Text>
                      <View style={styles.contentFooter}>
                        <Text style={styles.textFooter}>Ver más</Text>
                        <FontAwesome name="heart" style={styles.iconHeart}></FontAwesome>
                      </View>
                </View>
                <View style={styles.contentBoxStyle4}>
                      <Image style={styles.imgPanadol2}
                        source={prod4}
                      />
                      <Text style={styles.prodText5}>Panadol Niños</Text>
                      <Text style={styles.textApron}>El paracetamol utiliza principalmente para tratar la fiebre</Text>
                      <View style={styles.contentFooter}>
                        <Text style={styles.textFooter}>Ver más</Text>
                        <FontAwesome name="heart" style={styles.iconHeart}></FontAwesome>
                      </View>
                </View>
             </View>
             <View>
                <Text style={styles.textProduct}>Productos Destacados</Text>
             </View>
             <View style={styles.contentImgTwo}>
                <View style={styles.boxImgContent}>
                  <Image style={styles.boxRight} source={medic1} />
                  <Text style={styles.textMedi}>Paracetamol</Text>
                </View>
                <View style={styles.boxImgContent}>
                  <Image style={styles.boxRight} source={medic2} />
                  <Text style={styles.textMedi}>Panadol Forte</Text>
                </View>
                <View style={styles.boxImgContent}>
                  <Image style={styles.boxRight} source={medic3} />
                  <Text style={styles.textMedi}>Nastiflu</Text>
                </View>
             </View>
           </View> 
        </View>
    </View>
    </KeyboardAwareScrollView>
  ) 
}

 //****************** MAPA ********************//
function Mapa(){

  const [ pin, setPin ] = React.useState ({ 
    latitude: -12.0412864,
    longitude: -76.9715581
  })

  const [ region, setRegion ] = React.useState ({ 
    latitude: -12.0412864,
    longitude: -76.9715581
  })


  return(
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.content_Secundary}>
          <View style={styles.searchContent}>
            <MaterialCommunityIcons name="magnify" size={30} color="#0099B9" style={{ marginTop: 9, marginLeft: 15}}/>
            <TextInput style={styles.textGum} placeholder="¿Que estas buscando?" />
          </View>
        </View>
        <View style={{ marginTop: 0, flex: 1}}>
        <GooglePlacesAutocomplete
              placeholder='Search'
              fetchDetails={true}
              GooglePlacesSearchQuery={{
                  rankby: "distance"
              }}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
          query={{
            key: 'AIzaSyBxMJ0cFugpamXwNmDbbn8MGUeKfV-S6YU',
            language: 'en',
            components: "country:us",
            type: "establishment",
            radius: 30000,
            location: `${region.latitude}, ${region.longitude}`
          }}
          styles={{
            container: { flex: 0, position: "absolute", width: "100%", zIndex: -1 },
            listView: { backgroundColor: "white"}
          }}
        />
      
      <MapView style={styles.map} 
          initialRegion={{
            latitude: -12.0412864,
            longitude: -76.9715581,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        provider= "google"
        >
        {
          locations.map(marker => (
            <Marker 
              coordinate = {{latitude: marker.latitude, 
              longitude: marker.longitude}}
              title= {marker.title} 
            >
              <CustomMarker item = {marker}/>
              
             </Marker> 
            
          ))
        }  
      <Marker coordinate={{latitude: region.latitude, longitude: region.longitude}} /> 

        <Marker coordinate={pin} 
            pinColor= "#fa0050"
            draggable={true}
            onDragStart={(e) =>{
              console.log("Drag Start", e.nativeEvent.coordinates)
            }}
            onDragEnd={(e) =>{
              setPin({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude
              })
            }}
          >
          <Callout>
              <Text>Hola Aqui estoy</Text>
          </Callout>
        </Marker>
       
        </MapView>
           
        </View>
      </View>
  </KeyboardAwareScrollView>
  ) 
}

 //****************** MENSAJE ********************//

function Mensaje(){
  return(
    <View style={styles.container}>
      <Text>Mensaje</Text>
    </View>
  ) 
}


 //****************** PERFIL DEL USUARIO ********************//

function Perfil(){
  return(
    <KeyboardAwareScrollView>
      <View style={styles.container}>
          <View style={styles.contentPerfil}>
             <View style={styles.contentSubPerfil}>
               <Text style={styles.textPerfil}>Vladimir Steve</Text>
               <Text style={styles.textSecundPerfil}>Sanchez Astoray</Text>
                 <View style={styles.contentCog}>
                   <FontAwesome name="cog" style={styles.iconCog}></FontAwesome>
                   <Text style={styles.textEditar}>Ver/Editar Perfil</Text>
                 </View>
             </View>
             <Image style={styles.imagenPerfil}
                  source={foto1}/>
          </View>

      </View>


    </KeyboardAwareScrollView>
  ) 
}




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: '#0099B9',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Medicamentos"
        component={Medicamentos}
        options={{
          headerStyle: { backgroundColor: '#0099B9'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          tabBarLabel: 'Medicamentos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pill" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          headerStyle: { backgroundColor: '#0099B9'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensaje"
        component={Mensaje}
        options={{
          tabBarLabel: 'Mensaje',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-text-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerStyle: { backgroundColor: '#0099B9'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



export default function App(){


    return(
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
     /*    <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer> */

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    content_Primary: {
      backgroundColor: '#0099B9',
      width: '100%',
      height: 210,
      padding: 5
    },
    content_Secundary:{
      backgroundColor: '#0099B9',
      width: '100%',
      height: 80
    },
    contentText: {
      marginTop: 40
    },
    textOne: {
      
      marginTop: 10,
      marginLeft: 10,
      color: '#fff',
      fontSize: 20
    },
    textTwo: {
      marginLeft: 10,
      color: '#fff',
      fontSize: 23
    },
    searchContent: {
      marginTop: 16,
      marginLeft: 10,
      height: 47,
      width: 385,
      backgroundColor: '#fff',
      borderRadius: 50,
      flexDirection: 'row'
    },
    textGum: {
      color: '#7A7A7A',
      fontSize: 16,
      marginLeft: 3
    },
    boxContain: {
      padding: 15
    },
    textProduct: {
      color: '#1C1C1C',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left'
    },
    contentImg: {
      marginTop: 11,
      marginBottom: 15
    },
    contentImgTwo: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10
    },
    boxRight: {
        marginRight: 5
    },
    boxImgContent: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5
    },
    textMedi: {
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '800'
    },
    contentBtn: {
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row'
    },
    btnOne: {
      width: 100,
      height: 38,
      backgroundColor: '#373737',
      borderRadius: 50,
      marginRight: 10
    },
    btnText: {
      color: '#fff',
      padding: 8,
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      fontSize: 14
    },
    boxContainTwo: {
      marginTop: 17,
    },
    contentBoxStyle1:{
      display: 'flex',
      height: 230,
      width: 161,
      backgroundColor: '#CFE1FC',
      borderRadius: 18,
      marginRight: 10
    },
    contentBoxStyle2:{
      height: 230,
      width: 161 ,
      backgroundColor: '#D8FED7',
      borderRadius: 18,
    },
    contentBoxStyle3:{
      height: 235,
      width: 161 ,
      backgroundColor: '#FFF4AE',
      borderRadius: 18,
      marginRight: 10
    },
    contentBoxStyle4:{
      height: 235,
      width: 161 ,
      backgroundColor: '#FFBDDA',
      borderRadius: 18,
      marginRight: 10
    },
    containStyle:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10
    },
    imgApronax: {
      marginTop: 14,
      marginLeft: 15
    },
    prodText1: {
      color: '#001972',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    prodText3:{
      color: "#003906",
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    prodText4:{
      color: "#765500",
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    prodText5:{
      color: "#D8005F",
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    textApron:{
      marginTop: 4,
      marginLeft: 12,
      color: '#00063D',
      fontSize: 12,
      textAlign: 'left'
    },
    textPanad:{
      marginTop: 4,
      marginLeft: 12,
      color: '#003906',
      fontSize: 12,
      textAlign: 'left'
    },
    contentFooter:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8
    },
    textFooter:{
      marginLeft: 12,
      fontWeight: 'bold',
      color: '#00063D'
    },
    textFooter1:{
      marginLeft: 12,
      fontWeight: 'bold',
      color: '#003906'
    },
    iconHeart:{
      marginRight: 12,
      fontSize: 18,
      borderColor: '#FF2E2E',
      color:'#FF2E2E'
    },
    iconCog:{
      marginTop: 10,
      fontSize: 18,
      borderColor: '#FF2E2E',
      color:'#0099B9'
    },
    imgPanadol:{
      marginTop: 14,
      marginLeft: 28
    },
    imgNastiflu:{
      marginTop: 14,
      marginLeft: 24
    },
    imgPanadol2:{
      height: 100,
      width: 80,
      marginTop: 14,
      marginLeft: 35
    },
    map:{
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    },
    contentPerfil:{
      marginTop: 30,
      display: 'flex',
      flexDirection: 'row',
  
    },
    textPerfil:{
      fontSize: 16,
      fontWeight: 'bold'
    },
    textEditar:{
       marginLeft: 9,
       marginTop: 8
    },
    imagenPerfil:{
    },
    contentCog:{
      display: 'flex',
      flexDirection: 'row'
    },
    contentSubPerfil:{
        marginRight: 80,
    }  
})