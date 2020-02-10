'use strict';

module.exports.commands = (res) => {

    const logger = require('../config/logger.js');
    const list_commands = require('./../data/commands');
    const format_responses = (commands) => {
        return new Promise((resolve, reject) => {
            if (!commands) {
                let error = {
                    statusCode: 422,
                    message: 'No commands'
                };
                logger.error(error);
                reject(error);
            } else {
                logger.info(commands);
                resolve({
                    data: commands
                });
            }
        });
    }


    main();
    async function main() {
        try {
           let resp = await format_responses(list_commands);
           res.json(resp);
        } catch (e) {
            res.sendStatus(e);
        }
    }
};