const { createApp } = Vue

const app = createApp({})

app.component("calculator", Calculator)

app.mount("#app")