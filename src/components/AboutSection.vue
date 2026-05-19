<script setup lang="ts">
import { aboutContent, personalInfo } from '@/data/personal'
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-dark-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          关于我
        </h2>
        <div class="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative">
          <div class="w-full aspect-square max-w-md mx-auto">
            <div class="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 transform rotate-3"></div>
            <img 
              :src="personalInfo.avatar" 
              :alt="personalInfo.name"
              class="relative w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              教育背景
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ aboutContent.university }}
            </p>
            <p class="text-gray-500 dark:text-gray-500 text-sm">
              {{ aboutContent.education }}
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              个人简介
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ aboutContent.summary }}
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              兴趣爱好
            </h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="hobby in aboutContent.hobbies" 
                :key="hobby"
                class="px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {{ hobby }}
              </span>
            </div>
          </div>
          
          <div class="pt-4">
            <div class="flex flex-wrap gap-6 text-sm">
              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ personalInfo.location }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{{ personalInfo.email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>