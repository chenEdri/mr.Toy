
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

// function _buildCriteria(filterBy) {
//     const criteria = filterBy;
//     return criteria;
// }

async function query(filterBy = {}) {
    // const criteria =  _buildCriteria(filterBy.name)
    const collection = await dbService.getCollection('review')
    try {
        // let reviews = await collection.find(filterBy.name).toArray();
         var reviews = await collection.aggregate([
            {// the ones that match the fiter category
                 $match : { aboutToy : filterBy }  
                // $match: filterBy.name
            },
            {// taking the user details
                $lookup:
                {
                    from: 'user', // taking the information from the user collection
                    localField: 'byUserId', // how its called in review object
                    foreignField: '_id', // how its called in user object
                    as: 'byUser'
                }
            },
            {
                $unwind: '$byUser'
            },
            {
                $lookup:
                {
                    from: 'toy',
                    localField: 'aboutToyId',
                    foreignField: '_id',
                    as: 'aboutToy'
                }
            },
            {
                $unwind: '$aboutToy'
            }
        ]).toArray()

    //    let reviewAfterSort=[];
    //    reviews.forEach(review=>{
    //        if (review.aboutToy.name === filterBy.name) reviewAfterSort.push(review);
    //    })
        reviews = reviews.map(review => {
            review.byUser = { _id: review.byUserId._id, username: review.byUserId.username }
            // review.aboutUser = { _id: review.aboutUser._id, username: review.aboutUser.username }
            delete review.byUserId;
            // delete review.aboutUserId;
            return review;
        })

        // return reviewAfterSort
        return reviews
    } catch (err) {
        console.log('ERROR: cannot find reviews')
        throw err;
    }
}

async function remove(reviewId) {
    const collection = await dbService.getCollection('review')
    try {
        await collection.deleteOne({ "_id": ObjectId(reviewId) })
    } catch (err) {
        console.log(`ERROR: cannot remove review ${reviewId}`)
        throw err;
    }
}


async function add(review) {
    review.byUserId = ObjectId(review.byUserId);
    review.aboutToyId = ObjectId(review.aboutToyId);

    const collection = await dbService.getCollection('review')
    try {
        await collection.insertOne(review);
        return review;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

module.exports = {
    query,
    remove,
    add
}


