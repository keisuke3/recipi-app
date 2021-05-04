import { recipesRepository } from '../repositories/repositoryPattern/recipesRepository';
import { authRepository } from '../repositories/repositoryPattern/authRepository';

type recipeRepositoryType = {
  recipes: string;
};

type authRepositoryType = {
  signup: string;
};

const repositories = {
  recipes: recipesRepository,
  signup: authRepository,
};

export const repositoryFactory = {
  get: (name: keyof recipeRepositoryType) => repositories[name],
  post: (name: keyof authRepositoryType) => repositories[name],
};
