<template>
  <div class="container">
    <div class="column" ref="leftColumn" @mousedown="initResize" style="width: 50dvw;">
      Left Column (Drag to resize) {{ leftColumn }}
    </div>
    <div class="resizer" @mousedown.prevent="initResize"></div>
    <div class="column" style="flex-grow: 1;">
      Right Column
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ColumnElement extends HTMLElement {
  offsetWidth: number;
}

const leftColumn = ref<ColumnElement | null>(null);

const initResize: (event: MouseEvent) => void = (event) => {
  if (!leftColumn.value) return;

  const startX = event.clientX;
  const startWidth = leftColumn.value.offsetWidth;

  const doResize = (moveEvent: MouseEvent) => {
    const currentWidth = startWidth + (moveEvent.clientX - startX);
    if (leftColumn.value) {
      leftColumn.value.style.width = `${currentWidth}px`;
    }
  };

  const stopResize = () => {
    window.removeEventListener('mousemove', doResize);
    window.removeEventListener('mouseup', stopResize);
  };

  window.addEventListener('mousemove', doResize);
  window.addEventListener('mouseup', stopResize);
};
</script>


<style scoped>
.container {
  display: flex;
  height: 100dvh;
  background-color: #f8f9fa;
}
.column {
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
}
.resizer {
  cursor: col-resize;
  background-color: #000;
  width: 5px;
}
</style>