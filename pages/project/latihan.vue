<script setup lang="ts">
import { LIST_RENDER } from '~/lib/listRender'

const contact = reactive({
  name: '',
  email: '',
  age: 0,
  type: 'regular',
  complain: false,
  message: '',
})
</script>
<template>
  <p>Latihan render</p>
  <!-- <template
    v-for="(item, index) in LIST_RENDER"
    :key="`${item.title}-${index}`"
  >
    <div v-if="!item.done">
      <p>{{ item.title }}</p>
      <p>{{ item.description }}</p>
    </div>
  </template> -->

  <h1>Contact</h1>
  <form>
    <label>
      <span>Nama</span>
      <input v-model="contact.name" />
    </label>

    <label>
      <span>Email</span>
      <input v-model="contact.email" />
    </label>

    <label>
      <span>Age</span>
      <input v-model.number="contact.age" />
    </label>

    <label>
      <span>Type</span>
      <select id="" v-model="contact.type">
        <option value="regular">Regular</option>
        <option value="vip">VIP</option>
      </select>
    </label>

    <label>
      <span>Complain</span>
      <input type="checkbox" v-model="contact.complain" />
    </label>

    <label>
      <span>Message</span>
      <textarea v-model.trim="contact.message" />
    </label>

    <button type="submit" @click.prevent="console.log(contact)">Simpan</button>
  </form>
</template>

<style scoped>
input,
textarea {
  outline: solid black 1px;
  border-radius: 4px;
  padding: 4px 8px;
}

label {
  display: flex;
  gap: 12px;
  align-items: center;
  flex: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

button {
  background: green;
  width: fit-content;
  padding: 8px 16px;
  color: white;
  border-radius: 8px;
}
</style>
