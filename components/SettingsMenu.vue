<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(value, key) in settings" :key="key" class="form-group">
      <label :for="key">{{ key }}</label>
      <input
        :id="key"
        :name="key"
        v-model="localSettings[key]"
        class="form-control"
      />
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>



<script setup lang="ts">

const props = defineProps<{
  settings: Record<string, string>;
}>();

const form = ref<HTMLFormElement | null>(null);


const emit = defineEmits(['submit']);

const localSettings = reactive({ ...props.settings });


watch(
  () => props.settings,
  (newSettings) => {
    Object.assign(localSettings, newSettings);
  },
  { immediate: true }
);

const handleSubmit = () => {
  emit('submit', {...localSettings});
};

</script>
