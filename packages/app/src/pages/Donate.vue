<template>
  <q-page padding>
    <div class="column items-center">
      <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url">
        <button class="donation-button" >
          <img class="donation-icon" src="../statics/icons/paypal-28x28.png" />
          Donate via Paypal
        </button>
      </a>
      <a target="_blank" href="https://opencollective.com/grey-software">
        <button class="donation-button" >
          <img class="donation-icon" src="../statics/icons/opencollective-28x28.png" />
          Support via OpenCollective
        </button>
      </a>
      <a target="_blank" href="https://github.com/sponsors/grey-software">
        <button class="donation-button" >
          <img class="donation-icon" src="../statics/icons/github-28x28.png" />
          Sponsor on GitHub
        </button>
      </a>
      <router-link to='/'>
        <button class="donation-button" >
          Exit
        </button>
      </router-link>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
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
  padding: 2px 20px;
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
