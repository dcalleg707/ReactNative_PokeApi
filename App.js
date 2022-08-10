import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { POKEMON_API_URL } from '@env';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from '@components/PokeCard';
import PokeDetails from '@components/PokeDetails';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [search, setSearch] = useState('');

  const getPokemonData = pokeData => {
    return {
      name: pokeData.name,
      id: pokeData.id,
      imageUrl: pokeData.sprites.other["official-artwork"].front_default ?? "",
      types: pokeData.types.map(type => type.type.name),
      weight: pokeData.weight,
      moves: pokeData.moves.slice(0, 4).map(move => move.move.name)
    }
  }

  const changePokemons = async (url) => {
    if (!url) return;
    const pokeUrls = await axios.get(url)
      .then(res => {
        setNext(res.data.next);
        setPrev(res.data.previous);
        return res.data.results
      })
      .catch(err => console.log(err.response))

    const pokemonPromises = []
    pokeUrls.forEach(pokeUrl => {
      const pokemonAllData = axios.get(pokeUrl.url)
      pokemonPromises.push(pokemonAllData)
    })

    Promise.all(pokemonPromises)
      .then(res => res.map(pokeData => getPokemonData(pokeData.data)))
      .then(res => setPokemon(res))
  }

  useEffect(() => {
    changePokemons(`${POKEMON_API_URL}pokemon/?limit=4`)
  }, [setPokemon, setNext, setPrev])


  const pokeCards = pokemon.map((item, index) =>
    <PokeCard pokeData={item} setSelectedPokemon={setSelectedPokemon} key={index} />
  )

  return (
    <View style={styles.container}>
      <Text>Listado Pokemón</Text>
      <View style={styles.pokemonGrid}>
        <View style={selectedPokemon ? styles.cardsContainerSmall : null}>
          <TextInput style={styles.searchBar} placeholder="Buscar Pokemón" />
          <View style={styles.cardsContainer}>
            {pokeCards}
          </View>
        </View>
        {selectedPokemon ?
          <View style={styles.detailsContainer}>
            <TouchableOpacity style={styles.closeDetails} onPress={() => setSelectedPokemon(null)}>
              <Text>x</Text>
            </TouchableOpacity>
            <PokeDetails pokeData={selectedPokemon} />
          </View>
          : null}

      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => changePokemons(prev)}
          title="previous"
          color="#4290f5"
        />
        <Button
          onPress={() => changePokemons(next)}
          title="next"
          color="#4290f5"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginHorizontal: "auto",
    width: "100%",
  },
  cardsContainerSmall: {
    width: "60%",
  },
  searchBar: {
    width: "90%",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "lightgray",
  },
  buttonsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  pokemonGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  detailsContainer: {
    width: "30%",
    marginRight: "10%",
  },
  closeDetails: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    zIndex: 1,
  }

});
