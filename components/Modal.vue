<template>
  <div class="modal p-1 border border-primary">

    <slot></slot>

  </div>
  <div class="actions flex">
    <slot name="actions">
    
      <button class="flex-grow btn ghost primary-btn" @click="handleClose">Close</button>
      <button class="flex-grow btn primary-btn" @click="handleSubmit">Submit</button>
    
    </slot>

  </div>

</template>

<script setup lang="ts">

const props = defineProps<{
  visible: boolean;
  delay: number;
}>();



const emit = defineEmits(['visible',
                          'submit',
                          'close'   ]);

const handleSubmit = () => {
  emit('submit');
};

const handleClose = () => {
  emit('close');
};


</script>