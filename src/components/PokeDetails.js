import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@styles/PokeDetails";

export default ({ pokeData, setSelectedPokemon }) => {

    const types = pokeData.types?.reduce((prev, cur) => prev + " " + cur, "")
    const moves = pokeData.moves?.reduce((prev, cur) => prev + " " + cur, "")
    const sprites = pokeData.sprites?.map((spriteUrl, index) =>
        <Image
            source={{ uri: spriteUrl }}
            style={styles.pokeImage}
            key={index}
        />
    )

    return (
        <View>
            <TouchableOpacity style={styles.closeDetails} onPress={() => setSelectedPokemon(null)}>
                <Text>x</Text>
            </TouchableOpacity>
            <View style={styles.cardContainer} >
                <Image
                    source={{ uri: pokeData.imageUrl }}
                    style={styles.pokeImage}
                />
                <Text >#{pokeData.id}</Text>
                <Text >{pokeData?.name}</Text>
            </View>
            <Text style={styles.title}>Types</Text>
            <Text>{types}</Text>
            <Text style={styles.title}>Peso</Text>
            <Text>{pokeData.weight}</Text>
            <Text style={styles.title}>Sprites</Text>
            <ScrollView horizontal={true} style={styles.spritesContainer}>
                {sprites}
            </ScrollView>
            <Text style={styles.title}>Movimientos</Text>
            <Text>{moves}</Text>
        </View>


    )
}
