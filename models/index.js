const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const PokemonSchema = require('./pokemon');

const Pokemon = mongoose.model('Pokemon',PokemonSchema);

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/pokedex');
};

module.exports = {
    Pokemon,
    connect,
}