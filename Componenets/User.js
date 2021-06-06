import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserInfo from './UserInfo';

export default function User() {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
            console.log(data);
            setUsers(data);
        })
    }, [])

    return (
        <View>
            <Text style={styles.container}> User Information </Text>
            <Text style={styles.container} >Total User: {users.length}</Text>
            {
                users.map(user => <UserInfo key = {user.id} user = {user} ></UserInfo>)
            }
            <button onPress={()=>history.push("/")} >Go to home Page</button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        textAlign:"center"
    }
})
