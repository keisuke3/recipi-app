const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://recipi-app-2bf39.firebaseio.com',
  });
}

const auth = admin.auth();

module.exports = {
  // 会員登録
  async userRegit(req, res) {
    const { email, password, displayName } = req.body;
    try {
      const userInfo = await auth.createUser({
        email,
        emailVerified: true,
        password,
        displayName,
      });
      res.status(200).json(userInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
