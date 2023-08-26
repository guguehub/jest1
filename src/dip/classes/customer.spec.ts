import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string, 
  lastName:string, 
  cpf: string
  ): IndividualCustomer => {
  return new IndividualCustomer(firstName , lastName, cpf)
};

afterEach(() => jest.clearAllMocks());

describe('Individual customer test', () => {

  it('should have firstName, lastName and cpf ', () => {
    const sutIndividual = createIndividualCustomer('john', 'harris', '48486468');
    //const consoleSpy = jest.spyOn(console,'log');
    expect(sutIndividual).toHaveProperty('firstName', 'john');
    expect(sutIndividual).toHaveProperty('lastName', 'harris');
    expect(sutIndividual).toHaveProperty('cpf', '48486468' )
  });

  it('should have methods Get Name and Get Id for Individual customers ', () => {
    const sutIndividual = createIndividualCustomer('john', 'harris', '48486468');
    //const consoleSpy = jest.spyOn(console,'log');
    expect(sutIndividual.getName()).toBe('john harris');
    //o dado abaixo idn foi tratado como identidade no curso, unindo cpf e sobrenome
    expect(sutIndividual.getIdn()).toBe('48486468 harris');

  });
});

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name,cnpj);
};

//afterEach(() => jest.clearAllMocks());

describe('Enterprise customer test', () => {
  it('should have name and cnpj', () => {
    const sutEnterprise = createEnterpriseCustomer('Lojado Povo', '665165165');
    expect(sutEnterprise).toHaveProperty('name', 'Lojado Povo');
    expect(sutEnterprise).toHaveProperty('cnpj', '665165165');
  });

  it('should have methods Get Name and Cnpj for Enterprise customers ', () => {
    const sutEnterprise = createEnterpriseCustomer('Lojado Povo', '665165165');
    //const consoleSpy = jest.spyOn(console,'log');
    expect(sutEnterprise.getName()).toBe('Lojado Povo');
    //o dado abaixo idn foi tratado como identidade no curso, unindo cpf e sobrenome
    expect(sutEnterprise.getIdn()).toBe('665165165');

  });
});



  
