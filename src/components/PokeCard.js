import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default ({ pokeUrl, setSelectedPokemon }) => {

    const [pokeData, setPokeData] = useState({});

    useEffect(() => {
        axios.get(pokeUrl)
            .then(res => {
                const data = res.data
                setPokeData({
                    name: data.name,
                    id: data.id,
                    imageUrl: data.sprites.other["official-artwork"].front_default,
                })
            })
            .catch(err => console.log(err))
    }, [pokeUrl, setPokeData])

    return (
        <TouchableOpacity style={Styles.cardContainer} onPress={() => setSelectedPokemon(pokeUrl)}>
            <Image
                source={{ uri: pokeData.imageUrl }}
                style={Styles.pokeImage}
            />
            <Text >#{pokeData.id}</Text>
            <Text >{pokeData?.name}</Text>
        </TouchableOpacity>

    )
}

const Styles = StyleSheet.create({
    pokeImage: { width: 50, height: 50 },
    cardContainer: {
        width: "50%",
        textAlign: "center",
        alignItems: "center",
    },
})

