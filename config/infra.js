'use strict';

module.exports = app => {
    let run_port = process.env.PORT || 3000;
    const body_parser = require('body-parser');

    app.use(body_parser.json());
    app.listen(run_port, () => {
        console.log(`Web Scraping itau working on port ${run_port}`);
    });
}