const movieModel = require("../models/movieModel");

// Storing fetched data into database
const saveMovie = async (movieName, releaseDate) => {
    try {
        console.log("Adding new movie to database...");
        const video = new movieModel({
            name: movieName,
            createdAt: releaseDate
        });
        let result  = await video.save();
        return result._id
    } catch (error) {
        console.log(error);
        return false;
    }
};

// find one video by id from db
// const findOneService = async (videoId) => {
//     try {
//         const findAVideo = await VideoSch.findOne({ videoId: videoId });
//         if (findAVideo) {
//             return true;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         console.log(error);
//         return {
//             status: "failure",
//             msg: `error occured while finding videos : ${error}`
//         }
//     }
// };

// find all videos that are stored in db
const findAllMovies = async (searchKey) => {
    try {
        let movies;
        if(searchKey){
            movies = await movieModel.find({name: {"$regex": searchKey}});
        }
        else{
            movies = await movieModel.find();
        }
        return movies;
    } catch (error) {
        console.log(error);
        return false;
    }
};

// find videos with matching title or description from db
// const findByNameService = async (searchString, page, limit) => {
//     try {
//         const skipIndex = (page - 1) * limit;
//         const paginatedResult = await VideoSch.find({
//             $or: [
//                 { "videoTitle": { $regex: new RegExp(searchString, "i") } },
//                 { "videoDescription": { $regex: new RegExp(searchString, "i") } },
//             ]
//         })
//             .sort({ publishedAt: -1 })
//             .limit(limit)
//             .skip(skipIndex)
//             .exec();

//         const totalCount = await VideoSch.count({
//             $or: [
//                 { "videoTitle": { $regex: new RegExp(searchString, "i") } },
//                 { "videoDescription": { $regex: new RegExp(searchString, "i") } },
//             ]
//         });
//         return {
//             data: paginatedResult,
//             page: page ? page : 1,
//             pageSize: limit ? limit : totalCount,
//             count: paginatedResult ? paginatedResult.length : totalCount,
//             totalCount: totalCount
//         };

//     } catch (error) {
//         console.log(error);
//         return {
//             status: "failure",
//             msg: `error occured while finding videos : ${error}`
//         }
//     }
// };

// get count of number of videos in the database
// const countVideos = async () => {
//     try {
//         const totalCount = await VideoSch.count();
//         return totalCount;

//     } catch (error) {
//         console.log(error);
//         return {
//             status: "failure",
//             msg: `error occured while counting videos : ${error}`
//         }
//     }
// };

module.exports = {
    saveMovie,
    findAllMovies
}