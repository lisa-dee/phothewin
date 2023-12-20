<template>
    <div class="bg-gray-800 w-full h-full py-10">
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto">
      <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">What is this site?</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">There are many contributions to this site. It wouldn't be possible without the following:</p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-lg border-white border-2 p-6 shadow-lg">
          <dt class="text-2xl leading-7 text-gray-300">About Pho</dt>
          <dd class="text-base font-bold leading-9 tracking-tight text-white">Pho is a Vietnamese dish</dd>
        </div>
        <div class="rounded-lg border-white border-2 p-6 shadow-lg">
          <dt class="text-2xl leading-7 text-gray-300">About Me</dt>
          <dd class="text-base font-bold leading-9 tracking-tight text-white">I enjoy Pho. I am no expert. I had my first bowl at the age of 22. 
        I have been enjoying Pho for over 15 years now. I am a creature of habit. I order the same thing every time.
        I like to judge and compare across restaurants and I make sure the playing field is always level.
        I hope you get to try some good Pho soon.</dd>
        </div>
        <div class="rounded-lg border-white border-2 p-6 shadow-lg">
          <dt class="text-2xl leading-7 text-gray-300">About San Diego</dt>
          <dd class="text-base font-bold leading-9 tracking-tight text-white">San Diego is a city in California. Very far from Vietnam!</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
   </template>
   <script>
     export default {
       data: () => ({
         show: false,
       }),
     }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   </style>