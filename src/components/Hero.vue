<!-- eslint-disable vue/multi-word-component-names -->
<script></script>

<template>
  <section class="flex flex-col md:flex-row items-center justify-center">
    <div class="md:w-1/2 p-4 opacity-0 translate-x-full animate-slide-right">
      <h1
        class="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-center md:text-left"
      >
        <span
          class="text-transparent bg-clip-text text-white"
          >Hello <span>👋</span>, I'm Minel</span
        >
      </h1>
      <p class="text-base text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl text-center md:text-left">
        I'm a french front-end developper. And a web-designer from MMI Montbéliard. 
      </p>
      <div class="flex flex-col md:flex-row justify-center md:justify-start">
        <button
          class="px-6 py-3 rounded-full sm:mx-4 lg:mx-4 mb-4 md:mb- bg-gradient-to-br from-[#60A337] via-[#8ebe71] to-[#B7F05B] text-[#272727] md:w-fit hover:font-bold transition-all"
        >
          H<a href="mailto:minelkujundzic@icloud.com">ire me</a>
        </button>
        <a href="../../public/extra/Minel_KUJUNDZIC.pdf" download>
          <button
            class="px-6 py-3 rounded-full bg-transparent boutondownload bg-white text-[#272727] w-full md:w-fit hover:font-bold transition-all"
          >
            Download CV
          </button></a
        >
      </div>
    </div>
    <div class="md:w-1/2 p-4 opacity-0 -translate-x-full animate-slide-left">
      <img src="/image/MK-PP-Cartoon.png" alt="Minel's Profile Picture" />
    </div>
  </section>
</template>
