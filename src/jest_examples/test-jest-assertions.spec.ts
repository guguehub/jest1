//to be para primitivos, to equal para objects

describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).not.toBe(11);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    
  });

  it('should split tests', () => {

    const number = 10;
    
    expect(number).toBeCloseTo(10.001);
    expect(number).not.toBe(null);
    expect(number).toHaveProperty('toString');
  });
});


describe('checar', () => {
  it('should test jest assertions with Objects', () => {
    const person = { name: 'luis', age: 30};
    const anotherPerson = { ...person};
    
    expect(person).toEqual(anotherPerson);

  });
});