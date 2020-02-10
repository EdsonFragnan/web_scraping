'use strict';

const controller = require('../../controllers/saveCommands.js');

describe('Test controller Save Commands.', (done) => {

  beforeEach((done) => {
    done();
  });

  it('Success Save Commands.', () => {
    const res = {
      sendStatus: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };

    controller.saveScraping(res, () => {
      done();
    });
  });

  it('Error Save Commands.', () => {
    const res = {
      sendStatus: (responseStatus) => {
        return responseStatus;
      }
    };
    
    controller.saveScraping(res, () => {
      done();
    });
  });

});
