import { createRouter, createWebHistory } from 'vue-router';
import * as firebase from 'firebase';
import RecipeList from '../../components/pages/RecipeList.vue';
import RecipeRegistration from '../../components/pages/RecipeRegistration.vue';
import ShoppingList from '../../components/pages/ShoppingList.vue';
import SignIn from '../../components/pages/SignIn.vue';
import SignUp from '../../components/pages/SignUp.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/',
      name: 'recipe-list',
      component: RecipeList,
    },
    {
      path: '/registration',
      name: 'recipe-registration',
      component: RecipeRegistration,
    },
    {
      path: '/shopping',
      name: 'shopping-list',
      component: ShoppingList,
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp,
      meta: { isPublic: true },
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn,
      meta: { isPublic: true },
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const isPublic = to.matched.some(record => record.meta.isPublic);
  firebase.auth().onAuthStateChanged(user => {
    if (!user && !isPublic) {
      next({ path: '/signin', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  });
});
