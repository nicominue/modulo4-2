import React, { Component, useCallback, useDebugValue, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  RefreshControl,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Avatar, ListItem, Button, Icon, Text } from "react-native-elements";
import Header from "../../components/Header";
import { getPokemonList, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";
//import { styles } from './styles'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const wait = (timeout) => {
  return new Promise(resolve =>  setTimeout(resolve, timeout));
}

export default List = (props) => {
  const [pokemons, setPokemons] = useState();
  const [next, setNext] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    getPokemonList().then(data => {
      setPokemons(data.results);
      setNext(data.next);
    });
  }, []);

  const loadMore = () => {
    setLoadingMore(true);
    getPokemonList(next).then(data => {
      setPokemons([...pokemons, ...data.results])
      setNext(data.next)
      setLoadingMore(false);
    })
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log('refreshing')
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = (item) => {
    const path = item.url.split("/");
    const imgID = getPokemonImgId(path[6]);

    return (
      <TouchableOpacity onPress={() => props.navigation.navigate("ListItem", item= {item})} style={{ marginVertical:'1%', alignItems:'center', 
    justifyContent:'center', borderWidth:0.5, borderColor:'#707070', borderRadius:5}}>
<ListItem style={{width}}>
  <ListItem.Content>
    <ListItem.Title>{item.name}</ListItem.Title>
  </ListItem.Content>
  <Avatar size='large' source={{uri : `${IMG_URL}${imgID}.png`}} /> 
  </ListItem>
</TouchableOpacity>
    );  
  }

  return(
    <View style={styles.container}>
      <Header />
      <FlatList
        data={pokemons}
        renderItem={(item, index ) => renderItem(item.item, index)}
        keyExtractor={(item, index) => index}
        style={{ marginTop: height/8 }}
        refreshControl={
          <RefreshControl 
          refreshing={refreshing} 
          onRefresh={() => onRefresh()} />
        }
        ListFooterComponent={
          loadingMore?
          (<ActivityIndicator />)
          :
          (<Button title= 'Load More' onPress={() => loadMore()} />)
        }
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    width: width / 3,
    height: height / 3,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    width,
    height,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
