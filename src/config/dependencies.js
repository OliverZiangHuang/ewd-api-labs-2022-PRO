import AccountsRepositoryInMemory from '../accounts/repositories/in-memory/AccountRepository';
import AccountsRepositoryMongo from '../accounts/repositories/mongo/AccountRepository';
import AccountValidators from '../accounts/validators'

const buildDependencies = () => {
  const dependencies = {
    validators: AccountValidators
  };

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  } else if (process.env.DATABASE_DIALECT === "mongo") {
    dependencies.accountsRepository = new AccountsRepositoryMongo();
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;