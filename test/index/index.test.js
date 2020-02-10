'use strict';

describe('Invalid routes.', (done) => {

  after(function () {
    process.exit(0);
  });

  it('Return status of route GET.', (done) => {
    request.get('/')
      .expect(404)
      .end((err, res) => {
        done(err);
      });
  });

  it('Return status of route POST.', (done) => {
    request.post('/')
      .expect(404)
      .end((err, res) => {
        done(err);
      });
  });

  it('Return status of route DELETE.', (done) => {
    request.delete('/')
      .expect(404)
      .end((err, res) => {
        done(err);
      });
  });

  it('Return status of route PUT.', (done) => {
    request.put('/')
      .expect(404)
      .end((err, res) => {
        done(err);
      });
  });

  it('Return status of route PATCH.', (done) => {
    request.patch('/')
      .expect(404)
      .end((err, res) => {
        done(err);
      });
  });
});