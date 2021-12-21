<template>
  <div
      v-if="event"
      className="card border-dark mb-3 d-block mx-auto"
      style="max-width: 18rem"
  >
    <div className="card-header">{{ event.title }}</div>
    <div className="card-body text-dark">
      <h5 className="card-title">{{ event.date }} - {{ event.time }}</h5>
      <p className="card-text">
        {{ event.description }}
      </p>
      <p className="alert-danger">Locatie:{{ event.location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style scoped></style>