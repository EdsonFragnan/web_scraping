'use strict';

module.exports.saveScraping = (res) => {
   
    const scraping_function = require('./../scraping/scraping.js');
    const logger = require('../config/logger.js');
    const list_commands = require('./../data/commands');
    const fs = require("fs");

    const callScraping = () => {
        return new Promise((resolve) => {
            scraping_function.scraping((data) => {
                resolve(data);
            });
        });
    };

    const saveCommands = (commands) => {
        return new Promise((resolve, reject) => {
            if (!list_commands) {
                let commands_list = [];
                commands_list.push(commands);
                fs.writeFile('data/commands.json', JSON.stringify(commands_list), function(err) {
                    if (err) {
                        let error = {
                            statusCode: 422,
                            message: err
                        };
                        logger.error(error);
                        reject(error);
                    } else {
                        logger.info(commands_list);
                        resolve({message: 'Commands History Created!'})
                    }
                });
            } else {
                list_commands.push(commands);
                logger.info(list_commands);
                resolve({message: 'Commands History Created!'})
            }
        });
    };

    main();
    async function main() {
        try {
            let scrap = await callScraping();
            let save_scrap = await saveCommands(scrap);
            res.json(save_scrap);   
        } catch (e) {
            res.sendStatus(e);
        }
    }
};
    

    