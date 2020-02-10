'use strict';

module.exports.scraping = (callback) => {
    
    const puppeteer = require('puppeteer');
    const logger = require('../config/logger.js');
    
    let scrape = () => {

        return new Promise(async (resolve, reject) => {

            try {
                const browser = await puppeteer.launch({
                    headless: false,
                    isLandscape: false
                });
                const page = await browser.newPage();
                const url = 'https://www.google.com.br/';
                let selector = '';
                let my_commands = {
                    date: new Date(),
                    commands: []
                };

                await page.goto(url);
                my_commands.commands.push({'goTo': `Navigate to ${url}`});
                await page.waitFor(2000);
                await page.type('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input', 'itau');
                my_commands.commands.push({'type': 'Itau value inserted in the field'});
                await page.waitFor(2000);
                await page.keyboard.press('Enter');
                await page.waitFor(2000);
                my_commands.commands.push({'press': 'Clicked on the keyboard: Enter'});
                await page.waitFor(2000);
                selector = '#rso > div:nth-child(1) > div > div > div > div > div.r > a';
                await page.click(selector);
                my_commands.commands.push({'click': `Clicked on the selector: ${selector}`});
                await page.waitFor(2000);
                await browser.close();
                my_commands.commands.push({'close': 'Browser closed'});
                logger.info('Web Scraping Success');
                resolve(my_commands)
            } catch (error) {
                logger.error(`Failed to open the page, the error: ${error}`);
                reject(error);
            }
            
        });        
    };

    main();
    async function main() {
        let command_list = await scrape();
        callback(command_list);
    }
};
