<template>
  <form @submit.prevent="handleSubmit">
    <button type="button" class="btn ghost primary-btn" @click="handleClose">Close</button>
    <div v-for="(value, key) in settings" :key="key" class="form-group">
      <label :for="key">{{ key }}</label>
      <input
        :id="key"
        :name="key"
        v-model="localSettings[key]"
        class="form-control"
      />
    </div>
    <button type="submit" class="btn primary-btn">Save</button>
  </form>
</template>



<script setup lang="ts">

const props = defineProps<{
  settings?: Record<string, string>;
}>();

// defineProps<{}>();

const form = ref<HTMLFormElement | null>(null);


const emit = defineEmits(['submit', 'close']);

const localSettings = reactive({ ...props.settings });


watch(
  () => props.settings,
  (newSettings) => {
    Object.assign(localSettings, newSettings);
  },
  { immediate: true }
);

const handleClose = () => {
  emit('close');
};
const handleSubmit = () => {
  emit('submit', {...localSettings});
};

</script>
