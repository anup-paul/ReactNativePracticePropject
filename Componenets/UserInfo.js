import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function UserInfo({ user }) {
    return (
        <>
            <View style={styles.UserContainer}>
                <Text style={styles.textEdit} >{user.name}</Text>
                <Text style={styles.textEdit} >{user.Company}</Text>
                <Text style={styles.textEdit} >{user.email}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    UserContainer: {
        border: "2px solid black",
        borderRadius: "5px",
        margin: "10px",
        padding: "10px"
    },
    textEdit: {
        textAlign: "center"
    }
})
