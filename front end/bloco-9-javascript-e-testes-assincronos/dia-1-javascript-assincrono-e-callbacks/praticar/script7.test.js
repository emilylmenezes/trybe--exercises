const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('testing capital letters', (done) => {
  uppercase('test', (callback) => {
    try {
      expect(callback).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});

