<template>
  <q-layout
    view="hHh lpR fFf"
    class="bg-grey-1"
  >
    <q-header
      elevated
      class="bg-white text-grey-8 q-py-xs"
      height-hint="58"
    >
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        /> -->

        <q-btn
          flat
          no-caps
          no-wrap
          class="q-ml-xs"
          v-if="$q.screen.gt.xs"
        >
          <material-math-icon />
          <q-toolbar-title
            shrink
            class="text-weight-bold"
          >
            Material Math
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            flat
          >
            <q-avatar size="36px">
              <img src="../assets/logo.svg">
            </q-avatar>
            <q-tooltip>Profile</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="link in links1"
            :key="link.text"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon
                color="grey"
                :name="link.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item
            v-for="link in links2"
            :key="link.text"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon
                color="grey"
                :name="link.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-xs" />

          <q-item-label
            header
            class="text-weight-bold text-uppercase"
          >
            More from Youtube
          </q-item-label>

          <q-item
            v-for="link in links3"
            :key="link.text"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon
                color="grey"
                :name="link.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item
            v-for="link in links4"
            :key="link.text"
            v-ripple
            clickable
          >
            <q-item-section avatar>
              <q-icon
                color="grey"
                :name="link.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-lg" />

          <div class="q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MaterialMathIcon from '../components/MaterialMathIcon'

export default {
  name: 'MyLayout',
  components: {
    MaterialMathIcon
  }
}
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
