'use strict';

const controller = require('../../controllers/listCommands.js');

describe('Test controller List Commands.', (done) => {

  it('Success List Commands.', () => {
    const res = {
      sendStatus: (responseStatus) => {
        return responseStatus;
      },
      json: (responseMessage) => {
        return responseMessage;
      }
    };
    controller.commands(res, () => {
      done();
    });
  });

  it('Error List Commands.', () => {
    const res = {
      sendStatus: (responseStatus) => {
        return responseStatus;
      }
    };
    controller.commands(res, () => {
      done();
    });
  });

});
