import React from 'react';
import { StyleSheet, View, NativeRouter, Route, Switch } from 'react-native';
import Home from './Componenets/Home';
// import { NativeRouter, Route, Switch } from "react-router-native";

import User from './Componenets/User';


export default function App() {

  // const [name, setName] = useState('');

  return (
    <>
      <Home style={styles.container}></Home>
      <NativeRouter>
        <View style={styles.container} >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/userDetails" component={User} />
          </Switch>
        </View>
      </NativeRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
