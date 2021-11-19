module.exports = app => {
    const datas = require("../controllers/data.controller.js");

// for article
    // Create a new article data
    app.post('/api/data/create', datas.create);

    // Retrieve all article data 
    app.get('/api/data/all', datas.findAll);

    // Retrieve a single article data with dataId
    app.get('/api/data/find/:dataId', datas.findOne);

    // Retrieve a single article data with title
    app.get('/api/data/bytitle', datas.findOne1);

    // Retrieve a single article data with page
    app.get('/api/data/bypage', datas.findOne2);

    // Update a checkin data with checkinId
    app.put('/api/data/update/:dataId', datas.update1);

    // Update an Article data with title
    app.put('/api/data/update', datas.update);

    // Delete a checkin data with checkinId
    app.delete('/api/data/delete', datas.delete);

// for comment
    app.put('/api/data/comment', datas.comment);
}