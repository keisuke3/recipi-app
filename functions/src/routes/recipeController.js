const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://recipi-app-2bf39.firebaseio.com',
  });
}

const db = admin.firestore();

module.exports = {
  async getRecipe(req, res) {
    try {
      const recipes = [];
      const allRecipe = await db.collection('recipes').orderBy('createdAt', 'asc').get();
      allRecipe.forEach(doc => {
        recipes.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async postRecipe(req, res) {
    const { dishName, document, material } = req.body;
    const createdAt = new Date().toISOString();
    try {
      const addRecipe = await db.collection('recipes').add({
        dishName,
        document,
        material,
        createdAt,
      });
      const fetchRecipe = await addRecipe.get();
      const newRecipe = {
        id: fetchRecipe.id,
        ...fetchRecipe.data(),
      };
      res.status(200).json({ newRecipe });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async putRecipe(req, res) {
    const id = req.params.id;
    const { dishName, document, material } = req.body;
    try {
      await db.collection('recipes').doc(id).update({
        dishName,
        document,
        material,
      });
      const getRecipe = await db.collection('recipes').doc(id).get();
      const updateRecipe = {
        id: getRecipe.id,
        ...getRecipe.data(),
      };
      res.status(200).json({ updateRecipe });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteRecipe(req, res) {
    const id = req.params.id;
    try {
      await db.collection('recipes').doc(id).delete();
      res.status(200).json({ id });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
