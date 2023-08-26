import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};


describe('Messaging.ts jest test', () => {

afterEach(() => jest.clearAllMocks());

  it('should return undefined ', () => {
    const sut = createSut();
    //const consoleSpy = jest.spyOn(console,'log');
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once ', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console,'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with  "mensage enviada" and teste ', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console,'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('mensage enviada','teste');
  });
})