import { Persistency } from "./persistensy";

describe('Persistency test', () => {
afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    //sut = system under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log', () => {

    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console,'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log with  "pedido salvo com sucesso" ', () => {
  
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console,'log');
    sut.saveOrder();
    expect(consoleSpy).toBeCalledWith(' pedido salvo com sucesso')
  });
});