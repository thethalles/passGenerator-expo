import React from "react"
import { TextInput } from "react-native"
import { styles } from "./inputPassStyle"

interface InputPassProps{
    pass: string
}

export function InputPass(props: InputPassProps){
    return(
        <TextInput 
            placeholder="password"
            placeholderTextColor={'#c6c6c6'}
            value={props.pass}
            style={styles.inputer}        
        />
    )
}