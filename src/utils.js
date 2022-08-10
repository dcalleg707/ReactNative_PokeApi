export const getPokemonData = pokeData => {
    const {
        front_default,
        front_shiny,
        front_female,
        front_shiny_female,
        back_default,
        back_shiny,
        back_female,
        back_shiny_female
    } = pokeData.sprites
    return {
        name: pokeData.name,
        id: pokeData.id,
        imageUrl: pokeData.sprites.other["official-artwork"].front_default ?? "",
        types: pokeData.types.map(type => type.type.name),
        weight: pokeData.weight,
        moves: pokeData.moves.slice(0, 4).map(move => move.move.name),
        sprites: [
            front_default,
            front_shiny,
            front_female,
            front_shiny_female,
            back_default,
            back_shiny,
            back_female,
            back_shiny_female
        ].filter(el => el != null)
    }
}