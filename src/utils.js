export const getPokemonData = pokeData => {
    return {
        name: pokeData.name,
        id: pokeData.id,
        imageUrl: pokeData.sprites.other["official-artwork"].front_default ?? "",
        types: pokeData.types.map(type => type.type.name),
        weight: pokeData.weight,
        moves: pokeData.moves.slice(0, 4).map(move => move.move.name)
    }
}