<template>
  <div class="col-md-4 offset-md-4">
    <button @click="handleGoogleSignIn()" class="btn btn-primary">Sign in with Google</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { User } from "@/interfaces/User";
import { getUser, createUser } from "@/services/UserService";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase.config';
import { useStore } from '../store';

export default defineComponent({
  name: "LoginGoogle",
  data() {
    return {
      user: {} as User,
      currentUser: {} as User,
    };
  },
  setup() {
    const store = useStore();
    return {
      store
    };
  },
  methods: {
    async findOrCreateUser(user: User) {
      const email = user.email;
      const res = await getUser(email);
console.log(res);

      if (res.data) {
        this.currentUser = res.data;
      } else {
        const createRes = await createUser(user);
        this.currentUser = createRes.data;
      }

      await this.store.dispatch('setCurrentUserAction', this.currentUser);
      this.$router.push({ name: 'bookmarks' });
    },
    async handleGoogleSignIn() {
      const provider = new GoogleAuthProvider();

      try {
        const result = await signInWithPopup(auth, provider);
        const userAuth = result.user;

        if (userAuth) {
          this.user.name = userAuth.displayName || '';
          this.user.email = userAuth.email || '';
          this.user.image = userAuth.photoURL || '';

          await this.findOrCreateUser(this.user);
        } else {
          console.error('No se pudo obtener información del usuario autenticado.');
        }
      } catch (error) {
        console.error('Error durante la autenticación con Google: ', error);
      }
    },
  },
});
</script>
