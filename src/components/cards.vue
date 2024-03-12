<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="container px-4">
      <div class="cards-grid">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <div class="content-card">
            <img :src="card.imageUrl" :alt="card.altText" />
            <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent rounded-[25px]">
              <div class="p-4 text-white font-semibold">
                <p>{{ card.description }}</p>
              </div>
            </div>
          </div>
          <div class="glow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          imageUrl: '/image/TaVue.png',
          altText: 'Image 1',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur optio sint similique! Iste, quos?'
        },
        {
          imageUrl: '/image/kyks.png',
          altText: 'Image 2',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur optio sint similique! Iste, quos?'
        },
        {
          imageUrl: '/image/kyks.png',
          altText: 'Image 3',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur optio sint similique! Iste, quos?'
        }
      ]
    }
  },
  mounted() {
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        let cardRect = card.getBoundingClientRect()
        let x = e.clientX - cardRect.x
        let y = e.clientY - cardRect.y
        let midCardWidth = cardRect.width / 2
        let midCardHeight = cardRect.height / 2
        let angleY = -(midCardWidth - x) / 8
        let angleX = (midCardHeight - y) / 8

        card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        card.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`

        let glowX = (x / cardRect.width) * 100
        let glowY = (y / cardRect.height) * 100

        card.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(200, 247, 211), transparent)`
      })

      card.addEventListener('mouseleave', () => {
        card.children[0].style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`
        card.children[1].style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`
        card.children[1].style.background = `radial-gradient(circle at 50% 0%, rgb(200, 247, 211), transparent)`
      })
    })
  }
}
</script>

<style>
.container {
  max-width: 1200px;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
.card {
  width: 100%;
  height: 0;
  padding-bottom: 90%;
  perspective: 1000px;
  position: relative;
}
.card:hover {
  z-index: 10;
}
.content-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 25px;
  transition: all 0.15s ease-out;
  position: absolute;
  top: 0;
  left: 0;
}
.content-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.15s ease-out;
  border-radius: 25px;
  mix-blend-mode: hard-light;
  background: radial-gradient(circle at 50% 0%, rgb(200, 247, 211), transparent);
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>