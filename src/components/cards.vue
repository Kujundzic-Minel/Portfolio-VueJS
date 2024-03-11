<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
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

        // Appliquer la même transformation à la carte et au glow
        card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        card.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`

        // Calculer les coordonnées du glow
        let glowX = (x / cardRect.width) * 100
        let glowY = (y / cardRect.height) * 100

        // Définir le gradient radial du glow
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

<template>
  <div class="container p-12">
    <div class="cards-grid">
      <div class="card">
        <div class="content-card">
          <img src="/image/TaVue.png" alt="" />
          <div
            class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent rounded-[25px]"
          >
            <div class="p-4 text-white font-semibold">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur optio sint
                similique! Iste, quos?
              </p>
            </div>
          </div>
        </div>
        <div class="glow"></div>
      </div>
      <div class="card">
        <div class="content-card">
          <img src="/image/kyks.png" alt="" />
          <div
            class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent rounded-[25px]"
          >
            <div class="p-4 text-white font-semibold">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur optio sint
                similique! Iste, quos?
              </p>
            </div>
          </div>
        </div>
        <div class="glow"></div>
      </div>
      <div class="card">
        <div class="content-card">
          <img src="/image/kyks.png" alt="" />
          <div
            class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent rounded-[25px]"
          >
            <div class="p-4 text-white font-semibold">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur optio sint
                similique! Iste, quos?
              </p>
            </div>
          </div>
        </div>
        <div class="glow"></div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
.card {
  width: 100%;
  height: 0;
  padding-bottom: 141%; /* Rapport d'aspect 16:9 (9/16 = 0.5625, donc padding-bottom: 56.25%) */
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