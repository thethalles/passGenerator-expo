import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logo } from "../components/Logo/Logo";
import { InputPass } from "../components/inputPass/inputPass";
import { GenButton } from "../components/GenButton/GenButton";
import { styles } from "./HomeStyles"

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>
                
            <View style={styles.inputContainer}>
                <GenButton/>
            </View>

            <StatusBar style="auto"/>
        </View>
    )
}