import { repository } from './repository';

const resource = '/recipes';

export const recipesRepository = {
  async get() {
    try {
      const { data } = await repository.get(resource);
      return data.recipes;
    } catch (error) {
      /*eslint no-console: "off"*/
      const { status, statusText } = error;
      console.log(`Error! HTTP Status: ${status}${statusText}`);
    }
  },
};
