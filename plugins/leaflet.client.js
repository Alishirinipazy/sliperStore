import leaflet from "leaflet/dist/leaflet"
export default defineNuxtPlugin(nuxtApp=>{
    return nuxtApp.provide("leaflet",leaflet)
})