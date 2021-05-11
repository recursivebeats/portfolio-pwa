<template>
  <q-page class="flex flex-center q-pa-sm">
    <div>
      <div class="text-h1 text-center q-mb-sm">This is my PWA</div>
      <div class="text-h6 text-center"> {{ networkAvailabilityMessage }}</div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters({
      networkAvailable: 'network/networkAvailable'
    }),
    networkAvailabilityMessage () {
      const mod = this.networkAvailable ? 'Online' : 'Offline'
      return `You are ${mod}`
    }
  }
}
</script>
