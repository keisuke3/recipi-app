import { repository } from '../repository';

const resource = '/signup';

type registInfoType = {
  displayName: string;
  email: string;
  password: string;
};

export const authRepository = {
  async post(registInfo: registInfoType) {
    try {
      const { data } = await repository.post(resource, registInfo);
      return data;
    } catch (error) {
      /*eslint no-console: "off"*/
      console.log(`会員登録に失敗しました。もう一度お試しください${error}`);
    }
  },
};
