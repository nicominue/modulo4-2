import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Card,
  Button,
  Icon,
  Image,
  Divider,
} from "react-native-elements";
import Header from "../../components/Header";
import { getPokemon, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";
import Collapsible from "react-native-collapsible";
//import { styles } from './styles'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default ListItem = (props) => {
  const { url } = props.route.params.item;
  const [pokemon, setPokemon] = useState();
  const [imgId, setImgId] = useState();
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    console.log(JSON.stringify(url));
    getPokemon(url).then((data) => {
      const path = url.split("/");
      setPokemon(data);
      setImgId(getPokemonImgId(path[6]));
    });
  });

  return (
    <View style={styles.container}>
      <Header
        leftIcon="arrow-back"
        title={pokemon?.name}
        leftAction={() => props.navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{ marginTop: height / 8, flex: 1, width }}
      >
        <View
          style={{
            height: 100,
            width: 100,
            zIndex: 2,
            opacity: 0.5,
            borderRadius: 100,
            right: 10,
            top: 10,
            backgroundColor: "green",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            {imgId}
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
            source={{ uri: `${IMG_URL}${imgId}.png` }}
          />
        </View>
        <View style={{ height: 0.5, backgroundColor: "#646464" }} />
        <View
          style={{ flex: 2, backroundColor: "#ffffff", alignItems: "center" }}
        >
          <View
            style={{
              height: height / 3,
              width: width / 1.1,
              borderRadius: 8,
              backgroundColor: "#000000",
              marginTop: "5%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 16, color: "white" }}><Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                > Peso: </Text> 
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>{pokemon?.weight}</Text>
              </Text>
              <Text style={{ fontSize: 16, color: "white" }}><Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                > Altura: </Text>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>{pokemon?.height}</Text>
              </Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Tipos
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text>Tipos</Text>
              {pokemon?.types.map((type) => (
                <Text>{type.type.name}</Text>
              ))}
            </View>
            <View></View>
            <View style={{ flexDirection: "column", backgroundColor: "green" }}>
              <TouchableOpacity onPress={() => setIsCollapsed(!collapsed)}>
                <Text>Habilidades</Text>
              </TouchableOpacity>

              <Collapsible collapsed={isCollapsed}>
                {pokemon?.abilities.map((a) => (
                  <>
                  <Text key ="{item}">
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>.</Text>
                    <Text>{a.ability.name}</Text>
                  </Text>
                  </>
                ))}
              </Collapsible>
            </View>
          </View>
        </View>
      </ScrollView>
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
