import React from "react"
import { TextInput } from "react-native"
import { styles } from "./inputPassStyle"

export function InputPass(){
    return(
        <TextInput style={styles.inputer} placeholder="password" />
    )
}