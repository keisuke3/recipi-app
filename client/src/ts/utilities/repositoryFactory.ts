import { recipesRepository } from './recipesRepository';

type repositoryType = {
  recipes: string;
};

const repositories = {
  recipes: recipesRepository,
};

export const repositoryFactory = {
  get: (name: keyof repositoryType) => repositories[name],
};
