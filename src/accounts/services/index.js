import Account from '../entities/Account';

export default {
  registerAccount: async  (firstName, lastName, email, password, {accountsRepository}) => {
    const account = new Account(undefined, firstName, lastName, email, password);
    return accountsRepository.persist(account);
  },
  updateAccount: (id, firstName, lastName, email, password, {accountsRepository})=>{
    const account = new Account(undefined, id, firstName, lastName, email, password);
    return accountsRepository.persist(account);   
  },
  getAccount: (accountId, {accountsRepository}) => {
    return accountsRepository.get(accountId);
  },
  find: ({accountsRepository})=>{
    return accountsRepository.find();
  },
  findByEmail: (email, {accountsRepository})=>{
    return accountsRepository.getByEmail(email);
  }
};

//{ "firstName":"Ziang","lastName":"Huang","email":"20095901@mail.wit.ie","password":"123456" }


