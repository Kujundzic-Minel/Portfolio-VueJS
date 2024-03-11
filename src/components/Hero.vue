<!-- eslint-disable vue/multi-word-component-names -->
<script> 
</script>

<template>
    <section class="flex flex-col md:flex-row items-center justify-center">
      <div class="md:w-1/2 p-4 opacity-0 translate-x-full animate-slide-right">
        <h1 class="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-center md:text-left">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#60A337] via-[#8ebe71] to-[#B7F05B]">Hello <span>👋</span>, I'm Minel</span>
        </h1>
        <p class="text-base text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl text-center md:text-left">
          Who I'am ? I'm a french front-end developper. And a web-designer.
        </p>
        <div class="flex flex-col md:flex-row justify-center md:justify-start">
          <button class="px-6 py-3 rounded-full mr-4 mb-4 md:mb-0 bg-gradient-to-br from-[#60A337] via-[#8ebe71] to-[#B7F05B] hover:bg-slate-200 text-black w-full md:w-fit">
            Hire me
          </button>
          <button class="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border w-full md:w-fit">
  Download CV
</button>
        </div>
      </div>
      <div class="md:w-1/2 p-4 opacity-0 -translate-x-full animate-slide-left">
        <img src="/image/MK-PP.svg" alt="Minel's Profile Picture" />
      </div>
    </section>

  </template>
  
  <style>
  .animate-slide-left {
    animation: slide-right 1s ease-in-out forwards;
  }
  
  .animate-slide-right {
    animation: slide-left 1s ease-in-out forwards;
  }
  
  @keyframes slide-left {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slide-right {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  </style>