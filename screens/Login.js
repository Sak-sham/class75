import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image,
    Alert,
    ToastAndroid,
    KeyboardAvoidingView
} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import db from "../config";
import firebase from "firebase";

const bgImage=require("../assets/background2.png")
const appIcon=require("../assets/appIcon.png")
const appName=require("../assets/appName.png")

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           email:"",
           password:"",
        };
    }

handleLogin=(email,password)=>{
    firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>
    {this.props.navigation.navigate("BottomTab")})
    .catch(error=>{Alert.alert(error.message)})
}

    render() {
        return (
            <KeyboardAvoidingView behavior="padding"style={styles.container}>
                <ImageBackground source={bgImage}style={styles.bgImage}>
                <View style={styles.upperContainer}>
                <Image source={appIcon}style={styles.appIcon}></Image>
                <Image source={appName}style={styles.appName}></Image>
                    </View>
                    <View style={styles.lowerContainer}>
                    <TextInput
                style={styles.textinput}
                placeholder={"Enter email"}
                placeholderTextColor={"#FFFFFF"}
                onChangeText={text => this.setState({ email:text})}
                autoFocus
              />

                <TextInput
                style={styles.textinput}
                placeholder={"Enter password"}
                placeholderTextColor={"#FFFFFF"}
                onChangeText={text => this.setState({ password:text})}
                secureTextEntry/>

                <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleLogin(email,password)}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}
    const styles = StyleSheet.create({
        loginBox: {
            width: 200,
            height: 40,
            borderWidth: 1.5,
            fontSize:20,
            margin:10,
            paddingLeft:10,
        },
        container: {
            flex: 1,
            backgroundColor: "#FFFFFF"
          },
          bgImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
          },
          upperContainer: {
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center"
          },
          appIcon: {
            width: 200,
            height: 200,
            resizeMode: "contain",
            marginTop: 80
          },
          appName: {
            width: 80,
            height: 80,
            resizeMode: "contain"
          },
          lowerContainer: {
            flex: 0.5,
            alignItems: "center"
          },
          textinputContainer: {
            borderWidth: 2,
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "#9DFD24",
            borderColor: "#FFFFFF"
          },
          textinput: {
            width: "57%",
            height: 50,
            padding: 10,
            borderColor: "#FFFFFF",
            borderRadius: 10,
            borderWidth: 3,
            fontSize: 18,
            backgroundColor: "#5653D4",
            fontFamily: "Rajdhani_600SemiBold",
            color: "#FFFFFF"
          },
          scanbutton: {
            width: 100,
            height: 50,
            backgroundColor: "#9DFD24",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          },
          scanbuttonText: {
            fontSize: 24,
            color: "#0A0101",
            fontFamily: "Rajdhani_600SemiBold"
          },
          button: {
            width: "43%",
            height: 55,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F48D20",
            borderRadius: 15
          },
          buttonText: {
            fontSize: 24,
            color: "#FFFFFF",
            fontFamily: "Rajdhani_600SemiBold"
          }
        });
        

        