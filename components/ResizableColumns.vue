<template>
  <div class="container">
    <div class="column" ref="leftColumn" @mousedown="initResize" style="width: 50dvw;">
      <slot name="left" />
    </div>
    <div class="resizer" @mousedown.prevent="initResize"></div>
    <div class="column" style="flex-grow: 1;">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface ColumnElement extends HTMLElement {
  offsetWidth: number;
}

const leftColumn = ref<ColumnElement | null>(null);
const leftColumnWidth = ref<string|null>(null);
const LOCAL_STORAGE_KEY = 'ResizableColumns.leftColumnWidth';

const initResize: (event: MouseEvent) => void = (event) => {
  if (!leftColumn.value) return;

  const startX = event.clientX;
  const startWidth = leftColumn.value.offsetWidth;

  const doResize = (moveEvent: MouseEvent) => {
    const currentWidth = startWidth + (moveEvent.clientX - startX);
    if (leftColumn.value) {
      leftColumn.value.style.width = `${currentWidth}px`;
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, `${currentWidth}px`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const stopResize = () => {
    window.removeEventListener('mousemove', doResize);
    window.removeEventListener('mouseup', stopResize);
  };

  window.addEventListener('mousemove', doResize);
  window.addEventListener('mouseup', stopResize);
};

onMounted(() => {
  try {
    const savedWidth = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedWidth) {
      leftColumnWidth.value = savedWidth;
      if (leftColumn.value) {
        leftColumn.value.style.width = savedWidth;
      }
    }
  } catch (error) {
    console.error(error);
  }
});
</script>


<style lang="scss">
:root {
  --stroke: 5px;
}
$stroke: 5px;
.container {
  position: relative;
  width: 100%;
  display: flex;
  height: 100%;
  border: 1px solid red;
}
.column {
  padding: 20px;
  background-color: #ffffff;
  // border: 1px solid #dee2e6;
}
.resizer {
  cursor: col-resize;
  background-color: red;
  width: $stroke;
  position: relative;
}
</style>