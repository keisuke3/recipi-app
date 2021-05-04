import * as yup from 'yup';

export const signUpSchema = {
  fields: [
    {
      name: 'displayName',
      type: 'text',
      labelText: 'ユーザー名',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      labelText: 'メールアドレス',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      labelText: 'パスワード',
      required: true,
    },
  ],
  validation: yup.object({
    displayName: yup.string().required('ユーザー名の入力は必須です'),
    email: yup.string().required('メールアドレスの入力は必須です').email('正しい書式で入力してください'),
    password: yup.string().min(10, 'パスワードは10文字以上入力してください').required('パスワードの入力は必須です'),
  }),
};

export const signInSchema = {
  fields: [
    {
      name: 'email',
      type: 'text',
      labelText: 'メールアドレス',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      labelText: 'パスワード',
      required: true,
    },
  ],
  validation: yup.object({
    email: yup.string().required('メールアドレスの入力は必須です').email('正しい書式で入力してください'),
    password: yup.string().min(10, 'パスワードは10文字以上入力してください').required('パスワードの入力は必須です'),
  }),
};
