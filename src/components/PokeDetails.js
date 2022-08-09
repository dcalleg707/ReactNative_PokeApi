import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default ({ pokeUrl }) => {

    const [pokeData, setPokeData] = useState({});

    useEffect(() => {
        axios.get(pokeUrl)
            .then(res => {
                const data = res.data
                console.log(data.sprites)
                setPokeData({
                    name: data.name,
                    id: data.id,
                    imageUrl: data.sprites.other["official-artwork"].front_default,
                    types: data.types.map(type => type.type.name),
                    weight: data.weight,
                    moves: data.moves.map(move => move.move.name)
                })
            })
            .catch(err => console.log(err))
    }, [pokeUrl, setPokeData])

    const types = pokeData.types?.reduce((prev, cur) => prev + " " + cur, "")
    const moves = pokeData.moves?.slice(0, 4).reduce((prev, cur) => prev + " " + cur, "")

    return (
        <View style={Styles.detailsContainer}>
            <View style={Styles.cardContainer} >
                <Image
                    source={{ uri: pokeData.imageUrl }}
                    style={Styles.pokeImage}
                />
                <Text >#{pokeData.id}</Text>
                <Text >{pokeData?.name}</Text>
            </View>
            <Text>Types</Text>
            <Text>{types}</Text>
            <Text>Peso</Text>
            <Text>{pokeData.weight}</Text>
            <Text>Movimientos</Text>
            <Text>{moves}</Text>
        </View>


    )
}

const Styles = StyleSheet.create({
    pokeImage: { width: 50, height: 50 },
    cardContainer: {
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },

})

