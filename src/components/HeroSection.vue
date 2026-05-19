<script setup lang="ts">
import { personalInfo } from '@/data/personal'
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="animate-fade-in">
        <div class="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-lg shadow-primary-500/20">
          <img 
            :src="personalInfo.avatar" 
            :alt="personalInfo.name"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
        你好，我是
        <span class="text-gradient">{{ personalInfo.name }}</span>
      </h1>
      
      <p class="text-xl sm:text-2xl text-gray-300 mb-6 animate-slide-up animate-delay-200">
        {{ personalInfo.title }}
      </p>
      
      <p class="text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-400">
        {{ personalInfo.bio }}
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-600">
        <a 
          href="#projects" 
          class="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:scale-105"
        >
          查看项目
        </a>
        <a 
          href="#contact" 
          class="px-8 py-3 border-2 border-gray-500 text-gray-300 font-semibold rounded-full hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
        >
          联系我
        </a>
      </div>
      
      <div class="flex items-center justify-center gap-6 mt-12 animate-slide-up animate-delay-800">
        <a 
          :href="personalInfo.github" 
          target="_blank"
          class="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
        <a 
          :href="personalInfo.linkedin" 
          target="_blank"
          class="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a 
          :href="'mailto:' + personalInfo.email" 
          class="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about" class="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-200">
        <span class="text-sm mb-2">向下滚动</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>