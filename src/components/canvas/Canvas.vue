<script setup lang="ts">
  import { ref, onMounted, computed } from "vue"
  import type { TextOptions} from "./canvas.util";
  import { CanvasSize, canvasMeta, defaultTextOptions } from "./canvas.util";

  interface Props {
    size?: CanvasSize
  }
  
  const { size = CanvasSize.A4 } = defineProps<Props>()
  
  const meta = canvasMeta[size]
  
  const canvasRef = ref<HTMLCanvasElement>()
  const ctx = computed(() => {
    return canvasRef.value instanceof HTMLCanvasElement
      ? canvasRef.value.getContext("2d")
      : null
  })

  onMounted(() => {
    reset()
  })

  function reset() {
    // fill whole canvas with a white color
    if (!canvasRef.value || !ctx.value) {
      return
    }
    ctx.value.fillStyle = "white";
    ctx.value.fillRect(0, 0, meta.width, meta.height);
  }

  function drawText(
    text: string, 
    x: number, 
    y: number, 
    options?: TextOptions
  ): boolean {
    if (!canvasRef.value || !ctx.value) {
      return false
    }
    options = {
      ...defaultTextOptions,
      ...options
    }
    ctx.value.fillStyle = options.color;
    ctx.value.font = `${options.fontSize}/${options.lineHeight} ${options.fontFamily}`
    ctx.value.textAlign = options.textAlign
    ctx.value.textBaseline = "top"

    if (options.textAlign == "center") {
      x = meta.width / 2
    }
    ctx.value.fillText(text, x, y)
    return true
  }

  function drawBorder(color: string, width = 1, padding = 8) {
    if (!canvasRef.value || !ctx.value) {
      return false
    }

    ctx.value.lineWidth = width
    ctx.value.strokeStyle = color
    ctx.value.strokeRect(padding, padding, (meta.width - (padding * 2)), (meta.height - (padding * 2)))
  }

  function drawImage(src: string, x: number, y:number) {
    if (!canvasRef.value || !ctx.value) {
      return false
    }

    const image = new Image()
    image.src = src
    
    ctx.value.drawImage(image, x, y, 500, 500)
  }

  function download(): boolean {
    if (!canvasRef.value || !ctx.value) {
      return false
    }
    let link = document.createElement('a')
    link.download = 'filename.png'
    link.href = canvasRef.value.toDataURL()
    link.click()
    return true
  }

  defineExpose({
    reset,
    drawText,
    drawBorder,
    drawImage,
    download,
  })
</script>

<template>
  <canvas 
    ref="canvasRef"
    class="canvas"
    :width="meta.width"
    :height="meta.height"
  >
    Your browser doesn't support the canvas element.
  </canvas>
</template>

<style scoped>
  .canvas {
    width: 100%;
  }
</style>