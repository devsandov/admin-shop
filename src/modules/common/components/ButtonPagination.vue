<template>
  <div class="flex justify-center py-10 bg-gray-100 space-x-3">
    <button
      :disabled="page === 1"
      @click="$router.push({ query: { page: page - 1 } })"
      class="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 text-whi bg-blue-500 disabled:bg-gray-300 hover:bg-blue-600 transition-all"
    >
      <arrow-leftt-icon />
      <span>Back</span>
    </button>
    <button
      :disabled="hasMoreData"
      @click="$router.push({ query: { page: page + 1 } })"
      class="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 text-whi bg-blue-500 disabled:bg-gray-300 hover:bg-blue-600 transition-all"
    >
      <span>Next</span>
      <arrow-right-icon />
    </button>
  </div>
</template>

<script lang="ts" setup>
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';
import ArrowLefttIcon from '@/icons/ArrowLefttIcon.vue';

interface Props {
  page: number;
  hasMoreData: boolean;
}

defineProps<Props>();
</script>
