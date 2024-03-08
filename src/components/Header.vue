<script setup lang="ts"> 
</script>

<template>
        <nav class="m-7 sticky top-0 HeaderAnimation">
      <div class="flex justify-between items-center p-2 bg-[#353232] bg-opacity-25 rounded-full border border-[#60A337]">
        <div class="flex items-center">
          <img
            src="/image/MK-LOGO.svg"
            alt="Minel Kujundzic Logo"
            class="lg:h-14 lg:px-7 min-[320px]:h-7 min-[320px]:px-3"></img>
        </div>
        <a href="/">
          <li class="list-none text-white lg:text-xl sm:text-lg min-[320px]:text-sm">Home</li>
        </a>
        <li class="list-none text-white lg:text-xl sm:text-lg min-[320px]:text-sm">Skills</li>
        <li class="list-none text-white lg:text-xl sm:text-lg min-[320px]:text-sm">Project</li>
        <div class="p-2 border rounded-full border-[#60A337] bg-gradient-to-r from-[#52773B] to-[#364d27] gradient-hover min-[320px]:p-1 sm:p-4">
          <button class="text-white font-bold lg:text-xl sm:text-lg lg:px-6 min-[320px]:text-sm min-[320px]:px-2 sm:px-5">Contact me</button>
        </div>
      </div>
    </nav>
</template>

<style>

.HeaderAnimation {

  animation: HeaderAnimation 1s ease-out forwards;
}
@keyframes HeaderAnimation {
    0% {
        transform: translateY(-200%);
    }
    100% {
        transform: translateY(0);
    }
}
</style>