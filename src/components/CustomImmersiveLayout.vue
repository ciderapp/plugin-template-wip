<script setup lang="ts">
import CComponent from "../api/CComponent.vue";

const showRightSide = ref(true);
</script>

<template>
  <div class="my-layout">
    <div
      class="main-content"
      :class="{
        'hide-right-side': !showRightSide,
      }"
    >
      <div class="left-side">
        <div class="artwork" @click="showRightSide = !showRightSide">
          <CComponent name="ImmersiveArtwork"></CComponent>
        </div>
      </div>
      <div class="right-side">
        <CComponent name="ImmersiveDrawerContent"></CComponent>
      </div>
    </div>
    <div>
      <CComponent name="MojavePlayer"></CComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-layout {
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
}
.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "left-side right-side";
  height: 100%;
  overflow: hidden;
  transition: grid-template-columns 0.5s var(--ease_appleSpring);

  &.hide-right-side {
    grid-template-columns: 1fr 0fr;
    grid-template-areas: "left-side";

    .right-side {
        opacity: 0;
        transform: scale(0.9);
        padding:0;
    }
  }
}

.controls-container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 0px 0px;
  width: 100%;
  height: 100%;
  justify-items: center;
}

.artwork {
  aspect-ratio: 1/1;
  width: 80%;
  max-width: 60cqh;
  min-width: 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--mediaItemShadow-Shadow);
  cursor: pointer;
    transition: transform 0.3s var(--ease_appleSpring);

  &:active {
    transform: scale(0.95);
    transition: transform 0.1s var(--ease_appleSpring);
  }
}

.left-side {
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-items: center;
}

.right-side {
  display: grid;
  width: 100%;
  overflow: hidden;
  padding: 2em;
  transition: opacity 0.3s var(--ease_appleSpring), transform 0.3s var(--ease_appleSpring), padding 0.3s var(--ease_appleSpring);
}

:deep(.lyric-view) {
  padding-top: 45vh;

  .lyric-line {
    --fontSize: clamp(10px, 3vw, var(--lyricsMaxSize));
    --fontSizeBG: clamp(6px, 2vw, var(--lyricsMaxSize));

    &.finished {
      transition: opacity 0.5s var(--appleEase), filter 0.5s var(--appleEase),
        transform 0.5s var(--appleEase), grid-template-rows 0.35s ease-in-out;
      --lineBlurAmount: 10px;
      opacity: var(--finishedOpacity);
    }

    @media (max-width: 1200px) {
      --fontSize: 30px;
      --fontSizeBG: 18.5px;
    }

    @media (max-width: 960px) {
      --fontSize: 20px;
      --fontSizeBG: 10px;
    }

    @media (max-width: 300px) {
      --fontSize: 15px;
      --fontSizeBG: 5px;
    }
  }

  .lyrics-lower-placeholder {
    height: 45vh;
  }
}
</style>
