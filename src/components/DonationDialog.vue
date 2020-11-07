<template>
  <div>
    <q-dialog v-model="donateDialogOpen">
      <q-card id="donation-card">
        <q-card-section>
          <h6 class="q-my-md">Thank you for donating! 💕</h6>
          <p>This app was developed by Grey Software, a not-for-profit organization that empowers students to build open-source software for their communities and societies.</p>
          <p class="q-my-sm">You can support us as we envision and build the software ecosystem of the future by sponsoring us below.</p>
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
              align="left"
            />
            <q-btn
              rounded
              class="q-pa-xs q-ma-sm"
              icon="img:/icons/opencollective-28x28.png"
              label="Back on OpenCollective"
              type="a"
              href="https://opencollective.com/grey-software"
              target="_blank"
              align="left"
            />
            <q-btn
              rounded
              class="q-pa-xs q-ma-sm"
              icon="img:/icons/github-28x28.png"
              label="Sponsor on GitHub"
              type="a"
              href="https://github.com/sponsors/grey-software"
              target="_blank"
              align="left"
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
  donateDialogOpen: boolean
  open(): void
}

export default {
  name: 'donation-dialog',
  data () {
    return {
      donateDialogOpen: false,
    } as Dialog
  },
  methods: {
    open (this: Dialog) {
      this.donateDialogOpen = true
    },
  },
}
</script>

<style>
#donation-card {
  width: 100%;
  max-width: 350px;
}

.donation-icon {
  margin-right: 8px;
}
</style>
