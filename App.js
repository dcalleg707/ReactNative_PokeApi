import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { POKEMON_API_URL } from '@env';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from '@components/PokeCard';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState('')
  const [search, setSearch] = useState('');

  const changePokemons = (url) => {
    if (!url) return;

    axios.get(url)
      .then(res => {
        console.log(res.data.results)
        setPokemon(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    changePokemons(`${POKEMON_API_URL}pokemon/?limit=4`)
  }, [setPokemon, setNext, setPrev])


  const pokeCards = pokemon.map((item, index) =>
    <PokeCard pokeUrl={item.url} setSelectedPokemon={setSelectedPokemon} key={index} />
  )

  return (
    <View style={styles.container}>
      <Text>Listado Pokemón</Text>
      <View>
        <View>
          <TextInput placeholder="Buscar Pokemón" />
          <View>
            {pokeCards}
          </View>
        </View>
        <View>
          <Text>{selectedPokemon}</Text>
        </View>
      </View>


      <View>
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
});
