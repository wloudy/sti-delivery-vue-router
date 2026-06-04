<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue', 'submitted'])

const pickup = ref('')
const delivery = ref('')
const cargo = ref('')

function close() {
  emit('update:modelValue', false)
}

function submit() {
  emit('submitted')
  pickup.value = ''
  delivery.value = ''
  cargo.value = ''
  close()
}
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    max-width="520"
    persistent
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card rounded="xl">
      <v-card-title class="d-flex align-center justify-space-between pa-6">
        <span class="text-h5 font-weight-bold">Новый заказ</span>
        <v-btn icon="mdi-close" variant="text" @click="close" />
      </v-card-title>

      <v-card-text class="px-6 pb-2">
        <v-text-field
          v-model="pickup"
          label="Откуда забрать"
          placeholder="Адрес ресторана / магазина"
          prepend-inner-icon="mdi-map-marker-outline"
          variant="outlined"
          class="mb-4"
        />
        <v-text-field
          v-model="delivery"
          label="Куда доставить"
          placeholder="Ваш адрес"
          prepend-inner-icon="mdi-home-map-marker"
          variant="outlined"
          class="mb-4"
        />
        <v-textarea
          v-model="cargo"
          label="Что доставить"
          placeholder="Описание груза..."
          prepend-inner-icon="mdi-package-variant"
          variant="outlined"
          rows="3"
        />
      </v-card-text>

      <v-divider />

      <v-card-actions class="pa-6">
        <v-btn variant="outlined" size="large" class="flex-grow-1" @click="close">
          Отмена
        </v-btn>
        <v-btn color="primary" size="large" class="flex-grow-1" @click="submit">
          Отправить заказ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
