test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
      console.log(0)
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});
