<template>
  <div class="h-128 w-64 border flex flex-col text-center">
    <NuxtLink :to="`movies/${movie.id}`" class="mb-5 inline-block">
      <img
        class="shadow-lg transform transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-2 shadow-[#106ae0] delay-50 duration-200 inline-block"
        :src="imgURL"
        alt="Movie Poster"
      />
    </NuxtLink>
    <div class="text-lg">
      {{ movie.title }}
    </div>
    <p class="text-m text-gray-500 break-words text-wrap truncate overflow-hidden px-2">
      {{ movie.overview }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Movie } from "~/types/Movie";

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: true,
  },
});

const config = useRuntimeConfig();

const imgURL = computed(() =>
  props.movie.poster_path != null
    ? `${config.public.imgBaseUrl}/${props.movie.poster_path}`
    : "https://via.placeholder.com/300x500"
);
</script>
