module.exports = function (model) {
    function getAll(req, res, next) {
        model.find({})
            .then(doc => {
                res.send(doc)
            })
            .catch(next)
    }

    function getOne(req, res, next) {
        const id = req.params.id;
        model.findById(id)
            .then(doc => {
                res.status(201).send(doc);
            })
            .catch(next);
    }

    function createOne(req, res, next) {
        const body = req.body;
        model.create(body)
            .then(doc => {
                res.send(doc);
            })
            .catch(next);
    }


    function updateOne(req, res, next) {
        const id = req.params.id;
        model.findById(id)
            .then(doc => {
                Object.assign(doc, req.body);
                doc.save()
                    .then(newDoc => res.send(newDoc))
                    .catch(next);
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