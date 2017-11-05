exports.render = function(req, res) {
    req.session.email = undefined;
    res.render('index', {
        title: 'Howdy World'
    })
};
