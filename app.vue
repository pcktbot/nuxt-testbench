<template>
  <div class="p-1 border primary-border absolute overflow-hidden w-100 h-100">
    <ResizableColumns>
      <template #left>
        <ScrollContainer class="p-1 min-md border primary-border">


        </ScrollContainer>
      </template>
      <template #right>
        <ScrollContainer></ScrollContainer>
      </template>
    </ResizableColumns>
  </div>
</template>

<style lang="scss">
.min-md {
  min-width: 400px;
  max-width: 800px;
  @media (min-width: 700px) {
    border-width: 2px;
  }
}
.p-1 {
  padding: 1rem;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.h-100 {
  height: 100dvh;
}
.w-100 {
  width: 100%;
}
.overflow {
  &-auto {
    overflow: auto;
  }
  &-hidden {
    overflow: hidden;
  }
}

</style>