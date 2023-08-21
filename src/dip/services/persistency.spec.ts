//spec testes unitarios, it testes ingegraçao

describe( 'Teste 1 , numero', () => {
  it('it should return 1 ', () => {
    const number = 1;
    expect(number).toBe(1)
  });
});

describe('this test should return (name)= luiz', () => {
  test('teste feito com TEST', () => {
    const nome = "Luis";
    expect(nome).toBe('Luis');
  });
})
