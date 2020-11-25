<template>
<form @submit.prevent="submitForm">

  <div class="subscription-form">
    <input type="text" id="name" name="name" 
      v-model.trim="name" 
      :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}" 
      placeholder="ваше имя" class="subscription-form__name">

    <small class="helper-text invalid"
      v-if="$v.name.$dirty && !$v.name.required">
      Заполните поле
    </small>
    <small class="helper-text invalid"
      v-else-if="$v.name.$dirty && !$v.name.minLength">
      Не меньше {{$v.name.$params.minLength.min}} символов
    </small>

    <input type="text" id="email" name="email" 
      v-model.trim="email" 
      :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}" 
      placeholder="ваш email" class="subscription-form__mail">

    <small class="helper-text invalid"
      v-if="$v.email.$dirty && !$v.email.required">
      Заполните поле
    </small>
    <small class="helper-text invalid"
      v-else-if="$v.email.$dirty && !$v.email.email">
      Введите правильный адрес
    </small>

    <button class="subscribe-btn" type="submit">подписаться</button>
  </div>
  
</form>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/subscription-form';
</style>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'subscriptionForm',
 
  data() {
    return {
      name: '',
      email: ''
    }
  },
  validations: {
     name: {
      required,
      minLength: minLength(6)
     },
      email: {email, required},
  },
  methods: {
    submitForm() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        name: this.name,
        email: this.email
      }
      console.log(formData)
      this.$emit('subscriptionresult', true);
    }
  }
}
</script>