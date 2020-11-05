<template>
  <div>
    <q-dialog v-model="inDonation">
      <q-card id="this-card">
        <q-card-section>
          <h6 class="q-my-sm">Thank you for donating! 💕</h6>
          <span>This app was developed by Grey Software, a not-for-profit organization that empowers students to build open-source software for their communities and societies.</span>
          <span><br>You can support us as we envision and build the software ecosystem of the future by sponsoring us below.</span>
        </q-card-section>
        <q-separator/>
        <q-card-section>
          <q-card-actions vertical>
            <q-btn
              rounded
              class="q-pa-xs q-ma-sm"
              icon="img:/icons/paypal-28x28.png"
              label="Donate via Paypal"
              type="a"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url"
              target="_blank"
            />
            <q-btn
              rounded
              class="q-pa-xs q-ma-sm"
              icon="img:/icons/opencollective-28x28.png"
              label="Support via OpenCollective"
              type="a"
              href="https://opencollective.com/grey-software"
              target="_blank"
            />
            <q-btn
              rounded
              class="q-pa-xs q-ma-sm"
              icon="img:/icons/github-28x28.png"
              label="Sponsor on GitHub"
              type="a"
              href="https://github.com/sponsors/grey-software"
              target="_blank"
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-btn
      rounded
      icon="mdi-charity"
      label="Donate"
      @click="open"
    />
  </div>
</template>

<script lang="ts">
interface Dialog {
  inDonation: boolean
  open(): void
}

export default {
  name: 'donation-dialog',
  data () {
    return {
      inDonation: false,
    } as Dialog
  },
  methods: {
    open (this: Dialog) {
      this.inDonation = true
    },
  },
}
</script>

<style>
#this-card {
  width: 100%;
  max-width: 350px;
}

.donation-icon {
  margin-right: 8px;
}
</style>
