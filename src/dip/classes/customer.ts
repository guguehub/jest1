import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
  }from "./interfaces/customer-protocol";

export class IndividualCustomer
 implements IndividualCustomerProtocol, CustomerOrder
 {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
  constructor(firstName: string,
    lastName: string,
    cpf: string,) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.cpf = cpf;
      this.cnpj = '';
    }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
    //throw new Error('Method not implemented.');
  }
  getIdn(): string {
    return this.cpf + ' ' + this.lastName;
    //throw new Error('Method not implemented.');
  }
}
export class EnterpriseCustomer implements 
EnterpriseCustomerProtocol, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string,) {
      this.name = name;
      this.cnpj = cnpj;
    }
  getName(): string {
    return this.name;
  }
  getIdn(): string {
    return this.cnpj;
  }
}
