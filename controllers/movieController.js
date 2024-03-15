const movieService = require('../services/movieService');
// const { body, validationResult } = require('express-validator');

exports.findMovies = async(req, res) => {
    try {
        const movies = await movieService.findAllMovies(req.body.searchKey);
        return res.status(200).json(movies)
    } catch (err) {
        console.error(err);
        res.status(406).json(err)
    }
};

exports.saveMovie = async(req, res) => {
    try {
        const response = await movieService.saveMovie(req.body.name, req.body.createdAt);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(406).json(error)
    }
};
