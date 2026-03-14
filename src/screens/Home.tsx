import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Menu } from "../components/Menu/Menu";
import { Logo } from "../components/Logo/Logo";
import { InputPass } from "../components/inputPass/inputPass";
import { GenButton } from "../components/GenButton/GenButton";

export default function Home(){
    return(
        <View>
            <Menu/>
            <Logo/>
            <InputPass/>
            <GenButton/>
            <StatusBar style="auto"/>
        </View>
    )
}