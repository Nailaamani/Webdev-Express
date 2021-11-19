//Filename: data.controller.js
//Author  : Naila Amani
//Desc.   : Containing function of features can be used in blog process

const Data = require('../models/data.model.js');

// Create and Save a new Article Data
exports.create = (req, res) => {
    
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Article Title content can not be empty"
        });
    }
    // Create an article Data
    
    const data = new Data({
          title: req.body.title || "Untittled title",
          page: req.body.page,
          article: req.body.article
    });

    // Save article and comment Data in the database
    data.save()
    .then(dataLoad => {
        res.send(dataLoad);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the article."
        });
    });
};

// Retrieve and return all article Data from the database.
exports.findAll = (req, res) => {
    Data.find()
    .then(datas => {
        res.send(datas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Data."
        });
    });
};

// Find a single Data article with a articleId
exports.findOne = (req, res) => {
    Data.findById(req.params.dataId)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Data article not found with " + req.params.dataId
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Data article not found with " + req.params.dataId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Data Article with " + req.params.dataId
        });
    });
};


// Find a single Data article with a title
exports.findOne1 = (req, res) => {
    if(!req.body.title) {
        return res.status(400).send({
            message: "Article Title content can not be empty"
        });
    }
    
    Data.findOne({title:req.body.title})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Data article not found with title" + req.body.title
            });            
        }
        res.send(data);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving Data Article with title" + req.body.title
        });
    });
};

// Find a single Data article with a articleId
exports.findOne2 = (req, res) => {
    if(!req.body.page) {
        return res.status(400).send({
            message: "Article Page content can not be empty"
        });
    }
    
    Data.findOne({page:req.body.page})
    .then(datas => {
        if(!datas) {
            return res.status(404).send({
                message: "Data article not found with page" + req.body.page
            });            
        }
        res.send(datas);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving Data Article with page" + req.body.page
        });
    });
};


// Update a Data article identified by the dataId in the request
exports.update1 = (req, res) => {
    // Validate Request
    if(!req.body.article) {
        return res.status(400).send({
            message: "article Data content can not be empty"
        });
    }

// Find  Data and update it with the request body
    Data.findByIdAndUpdate(req.params.dataId, {
      article: req.body.article || "Untitled article",
      comment: req.body.comment
    }, {new: true})
    .then(data=> {
        if(!data) {
            return res.status(404).send({
                message: "article Data not found with id " + req.params.dataId
            });
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Article Data not found with id " + req.params.dataId
            });                
        }
        return res.status(500).send({
            message: "Error updating article Data with id " + req.params.dataId
        });
    });
};

// Update a Data article identified by the title in the request
exports.update = (req,res) => {
    Data.find({title:req.body.title})
        .then(datas=>{
          Data.findOneAndUpdate({title:req.body.title},{
          article: req.body.article
           }, {new:true, useFindAndModify:false})
          .then(datas=>{
          if(!datas){
            return res.status(404).send({
                message: "article Data not found with title " + req.body.title
            });
        }
          res.send(datas);
        });
      });
  }

// Delete an Article Data with the specified title in the request
exports.delete = (req, res) => {
    Data.find({title:req.body.title})
        .then(datas=>{
            Data.findOneAndDelete({title:req.body.title})
            .then(datas => {
                if(!datas) {
                    return res.status(404).send({
                        message: "Article Data not found with title " + req.body.title
                    });
                }
                res.send({message: "article Data deleted successfully!"});
            }).catch(err => {
                return res.status(500).send({
                    message: "Could not delete article Data with title " + req.body.title
                });
            })
        });
};

// Update a Data article identified by the title in the request
exports.comment = (req,res) => {
    Data.find({title:req.body.title})
        .then(datas=>{
          Data.findOneAndUpdate({title:req.body.title},{
          comment: req.body.comment
           }, {new:true, useFindAndModify:false})
          .then(datas=>{
          if(!datas){
            return res.status(404).send({
                message: "article Data not found with title " + req.body.title
            });
        }
          res.send(datas);
        });
      });
  }