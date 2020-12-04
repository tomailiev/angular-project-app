module.exports = function (model) {
    function getAll(req, res, next) {
        model.find({})
            .then(docs => {
                res.send(docs)
            })
            .catch(e => {
                console.log(e);
                next(e);
            })
    }

    function getOne(req, res, next) {
        const id = req.params.id;
        model.findById(id)
            .then(doc => {
                res.status(200).send(doc);
            })
            .catch(next);
    }

    function createOne(req, res, next) {
        const body = req.body;
        model.create(body)
            .then(doc => {
                res.status(201).send(doc);
            })
            .catch(next);
    }


    function updateOne(req, res, next) {
        const id = req.params.id;
        model.findOneAndUpdate({ _id: id }, req.body, { new: true })
            .then(newDoc => {
                console.log(newDoc);
                res.status(200).json(newDoc)
            })
            .catch(next);
    }

    function deleteOne(req, res, next) {
        const id = req.params.id;
        model.findByIdAndRemove(id)
            .then(doc => {
                res.send(doc)
            })
            .catch(next);
    }

    return {
        getAll,
        getOne,
        createOne,
        updateOne,
        deleteOne
    };
}