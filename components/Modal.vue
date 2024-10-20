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



watch(
  () => props.visible,
  (value) => {
    if (value) {
      setTimeout(() => {
        toggleVisibile();
      }, props.delay);
    }
  }
)
const emit = defineEmits(['visible',
                          'submit',
                          'close'   ]);


const toggleVisibile = () => {
  emit('visible');
};

const handleSubmit = () => {
  emit('submit');
};

const handleClose = () => {
  emit('close');
  toggleVisibile();
};


</script>