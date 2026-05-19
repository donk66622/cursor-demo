<script setup lang="ts">
import { skills } from '@/data/personal'
</script>

<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-dark-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          技能栈
        </h2>
        <div class="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          class="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-3xl">{{ skill.icon }}</span>
            <span class="text-sm font-semibold text-primary-500">
              {{ skill.level }}%
            </span>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            {{ skill.name }}
          </h3>
          <div class="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-primary-500/50"
              :style="{ width: `${skill.level}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>