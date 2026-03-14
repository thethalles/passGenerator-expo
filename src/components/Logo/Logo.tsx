import React from "react";
import {View, Text, Image} from "react-native";
import { styles } from "./LogoStyle";
import passLogo from "../../../assets/logo-app.png"
import picLogo from "../../../assets/logo-app.png"

export function Logo() {
    return (
        <View>
            <Text style={styles.title}>PASS GENERATOR</Text>
            PASS
            <Image
                source = {picLogo}
                style={styles.imageSize}
            />
        </View>
    )
}