import React, { useState } from "react";
import { View, Button, Text, Pressable, TextInput } from "react-native"
import { styles } from "./GenButtonStyles"

import { InputPass } from "../inputPass/inputPass";
import generatePass from "../../services/passwordService";
import * as Clipboard from 'expo-clipboard';

export function GenButton(){
    const [pass, setPass] = useState('')
    const [passwordLength, setPasswordLength] = useState('15')

    function handleGeneratePassword(){
        const parsedLength = Number.parseInt(passwordLength, 10)
        const safeLength = Number.isFinite(parsedLength) && parsedLength > 0 ? parsedLength : 15

        let token = generatePass(safeLength)
        setPass(token)

        if (safeLength.toString() !== passwordLength) {
            setPasswordLength(safeLength.toString())
        }
    }

    function handleCopyButton(){
        if (!pass) {
            return
        }
        Clipboard.setStringAsync(pass)
    }

    function handleChangePasswordLength(value: string){
        const numericValue = value.replace(/\D/g, '')
        setPasswordLength(numericValue)
    }
    
    return(
        <>
            <InputPass pass={pass}/>

            <View style={styles.passwordLengthContainer}>
                <Text style={styles.passwordLengthLabel}>Tamanho da senha</Text>
                <TextInput
                    value={passwordLength}
                    onChangeText={handleChangePasswordLength}
                    keyboardType="number-pad"
                    maxLength={3}
                    style={styles.passwordLengthInput}
                    placeholder="15"
                    placeholderTextColor="#a8a8a8"
                />
            </View>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleGeneratePassword}
            >
                <Text style={styles.texto}>🔐 GERAR SENHA 🔐</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleCopyButton}
            >
                <Text style={styles.texto}>🗒️ COPIAR 🗒️</Text>
            </Pressable>
        </>
    )
}