var eventModel = require('./eventModel.js');

/**
 * eventController.js
 *
 * @description :: Server-side logic for managing events.
 */
module.exports = {

    /**
     * eventController.list()
     */
    list: function (req, res) {
        eventModel.find(function (err, events) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting event.',
                    error: err
                });
            }
            return res.json(events);
        });
    },

    /**
     * eventController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        eventModel.findOne({_id: id}, function (err, event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting event.',
                    error: err
                });
            }
            if (!event) {
                return res.status(404).json({
                    message: 'No such event'
                });
            }
            return res.json(event);
        });
    },

    /**
     * eventController.create()
     */
    create: function (req, res) {
        var event = new eventModel({
			name : req.body.name,
			date : req.body.date,
			participant : req.body.participant,
			description : req.body.description,
			coverphoto : req.body.coverphoto,
            posts : req.body.posts,
            
            title : req.body.title,
			start : req.body.start,
            end : req.body.end
            

        });

        event.save(function (err, event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating event',
                    error: err
                });
            }
            return res.status(201).json(event);
        });
    },

    /**
     * eventController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        eventModel.findOne({_id: id}, function (err, event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting event',
                    error: err
                });
            }
            if (!event) {
                return res.status(404).json({
                    message: 'No such event'
                });
            }

            event.name = req.body.name ? req.body.name : event.name;
			event.date = req.body.date ? req.body.date : event.date;
			event.participant = req.body.participant ? req.body.participant : event.participant;
			event.description = req.body.description ? req.body.description : event.description;
			event.coverphoto = req.body.coverphoto ? req.body.coverphoto : event.coverphoto;
			event.posts = req.body.posts ? req.body.posts : event.posts;
			
            event.save(function (err, event) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating event.',
                        error: err
                    });
                }

                return res.json(event);
            });
        });
    },
     /**
     * taskController.search()
     */
    search: function (req, res) {
        const query = req.params.ch;
            eventModel.find({name: new RegExp(query, "i")},function (err, evts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting events.',
                    error: err
                });
            }
            
            return res.json(evts);
        })
    },
    /**
     * eventController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        eventModel.findByIdAndRemove(id, function (err, event) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the event.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
