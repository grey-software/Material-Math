<template>
  <div>
    <q-dialog v-model="inDonation">
      <q-card class="donation-card">
        <q-card-section>
          <h6>Thank you for donating! 💕</h6>
          <span>Your donations help keep our work alive.</span>
          <span><br>All proceeds go to Grey Software.</span>
        </q-card-section>
        <q-card-section>
          <div class="column items-center">
            <q-btn
              class="q-pa-xs q-ma-sm"
              icon="img:../statics/icons/paypal-28x28.png"
              label="Donate via Paypal"
              type="a"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url"
              target="_blank"
            />
            <q-btn
              class="q-pa-xs q-ma-sm"
              icon="img:../statics/icons/opencollective-28x28.png"
              label="Support via OpenCollective"
              type="a"
              href="https://opencollective.com/grey-software"
              target="_blank"
            />
            <q-btn
              class="q-pa-xs q-ma-sm"
              icon="img:../statics/icons/github-28x28.png"
              label="Sponsor on GitHub"
              type="a"
              href="https://github.com/sponsors/grey-software"
              target="_blank"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-btn label="Donate" icon="favorite" @click="open"/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'donation-dialog',
  data () {
    return {
      inDonation: false,
    }
  },
  methods: {
    open () {
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
