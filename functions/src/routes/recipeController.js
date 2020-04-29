const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://recipi-app-2bf39.firebaseio.com',
});

const db = admin.firestore();

module.exports = {
  async getRecipe(req, res) {
    try {
      const recipe = [];
      const allRecipe = await db.collection('recipes').orderBy('createdAt', 'asc').get();
      allRecipe.forEach(doc => {
        recipe.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      res.status(200).json({
        data: recipe,
      });
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
      const returnRecipe = {
        id: fetchRecipe.id,
        ...fetchRecipe.data(),
      };
      res.status(200).json({ data: returnRecipe });
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
      const updateRecipe = await db.collection('recipes').doc(id).get();
      const returnRecipe = {
        id: updateRecipe.id,
        ...updateRecipe.data(),
      };
      res.status(200).json({ data: returnRecipe });
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
