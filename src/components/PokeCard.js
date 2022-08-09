import { View, Text, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default ({ pokeUrl, setPokemon }) => {

    const [pokeData, setPokeData] = useState({});

    useEffect(() => {
        axios.get(pokeUrl)
            .then(res => {
                const data = res.data
                setPokeData({
                    name: data.name,
                    id: data.id,
                    imageUrl: data.sprites["front_default"],
                })
            })
            .catch(err => console.log(err))
    }, [setPokeData])

    return (
        <View>
            <Image
                source={{ uri: pokeData.imageUrl }}
                style={Styles.pokeImage}
            />
            <Text>#{pokeData.id}</Text>
            <Text>{pokeData?.name}</Text>
        </View>

    )
}

const Styles = StyleSheet.create({
    pokeImage: { width: 50, height: 50 }
})

