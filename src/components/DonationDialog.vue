<template>
  <div>
    <q-dialog v-model="inDonation">
      <q-card class="donation-card">
        <q-card-section>
          <h6 class="q-my-sm">Thank you for donating! 💕</h6>
          <span>This app was developed by Grey Software, a not-for-profit organization that empowers students to build open-source software for their communities and societies.</span>
          <span><br>You can support us as we envision and build the software ecosystem of the future by sponsoring us below.</span>
        </q-card-section>
        <q-card-section>
          <div class="column items-center">
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
          </div>
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
.donation-icon {
  margin-right: 8px;
}

.donation-button {
  border-radius: 24px;
  height: 48px;
  border: 1px solid #003084;
  outline: none;
  display: flex;
  align-items: center;
  padding: 20px;
  color: #003084;
  font-size: 20px;
  background-color: white;
  transition: all 0.3s ease-out;
}

.donation-button:hover {
  cursor: pointer;
  border: 1px solid #1ba0de;
}

.donation-button:active {
  cursor: pointer;
  border: 1px solid #1ba0de;
  color: white;
  background-color: #003084;
}
</style>
