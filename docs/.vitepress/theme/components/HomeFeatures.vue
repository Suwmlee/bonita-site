<template>
  <div class="home-features">
    <div class="container">
      <div class="features">
        <div class="feature" v-for="(feature, index) in features" :key="index">
          <div class="icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.home-features {
  padding: 2.5rem 0;
  background-color: var(--vp-c-bg-soft);
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.feature {
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s;
  border: 1px solid var(--vp-c-divider);
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.8rem;
}

h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style> 