const reviewService = require('../services/reviewService');
// const { body, validationResult } = require('express-validator');

exports.findReviews = async(req, res) => {
    try {
        const reviews = await reviewService.findAllReviews(req.body.movieId);
        return res.status(200).json(reviews)
    } catch (err) {
        console.error(err);
        res.status(406).json(err)
    }
};

exports.saveReview = async(req, res) => {
    try {
        const response = await reviewService.saveReview(req.body.movieId, req.body.name, req.body.rating, req.body.comment);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(406).json(error)
    }
};
