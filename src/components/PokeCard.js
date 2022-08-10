import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@styles/PokeCard";

export default ({ pokeData, setSelectedPokemon }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => setSelectedPokemon(pokeData)}>
            <Image
                source={{ uri: pokeData.imageUrl }}
                style={styles.pokeImage}
            />
            <Text >#{pokeData.id}</Text>
            <Text >{pokeData?.name}</Text>
        </TouchableOpacity>

    )
}
