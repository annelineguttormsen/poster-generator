<script setup lang="ts">
import { ref, onMounted } from "vue";
import Canvas from './components/canvas/Canvas.vue';

const canvasRef = ref(null)

function drawReminderPoster() {
  if (canvasRef.value == null) {
    return
  }
  canvasRef.value.reset()
  
  const fontSize = 300;
  const padding = 100;
  
  canvasRef.value.drawBorder('#00aa50', 8, padding)
  canvasRef.value.drawText('Husk', 100, padding * 2, { color: '#00aa50', fontSize: '300px', textAlign: 'center' })
  canvasRef.value.drawText('MUNNBIND!', 100, padding * 2 + fontSize, { color: '#00aa50', fontSize: '300px', textAlign: 'center' })

  canvasRef.value.drawImage("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMwMGFhNTAiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTQgMWMyLjIxIDAgNCAxLjc1NSA0IDMuOTJDOCAyLjc1NSA5Ljc5IDEgMTIgMXM0IDEuNzU1IDQgMy45MmMwIDMuMjYzLTMuMjM0IDQuNDE0LTcuNjA4IDkuNjA4YS41MTMuNTEzIDAgMCAxLS43ODQgMEMzLjIzNCA5LjMzNCAwIDguMTgzIDAgNC45MiAwIDIuNzU1IDEuNzkgMSA0IDEiLz4KPC9zdmc+", 500, 500);
}

onMounted(() => {
  setTimeout(drawReminderPoster, 1000)
  // drawReminderPoster()
})
</script>

<template>
  <h1>Poster generator</h1>
  <p>Ayo hva skjera</p>
  <Canvas 
    ref="canvasRef"
  />

  <button
    @click="canvasRef.download"
  >
    Last ned
  </button>
  <button
    @click="drawReminderPoster"
  >
    Husk munnbind
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>./components/canvas/Canvas.vue
