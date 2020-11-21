<template>
  <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

    <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Pengaturan Toko' : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-shop />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'Ganti Password' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-change-password />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-link-2" :label="!isSmallerScreen ? 'Pengaturan Pembayaran' : ''">
      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-pembayaran />
      </div>
    </vs-tab>
    <!-- <vs-tab icon-pack="feather" icon="icon-bell" :label="!isSmallerScreen ? 'Notifikasi' : ''">
      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-notifications /> -->
      <!-- </div> -->
    <!-- </vs-tab> -->
  </vs-tabs>
</template>

<script>
import UserSettingsChangePassword from './UserSettingsChangePassword.vue'
import UserSettingsShop from './UserSettingsShop.vue'
import UserSettingsPembayaran from './UserSettingsPembayaran.vue'
import UserSettingsNotifications from './UserSettingsNotifications.vue'

export default {
  components: {
    UserSettingsChangePassword,
    UserSettingsShop,
    UserSettingsPembayaran,
    UserSettingsNotifications
  },
  data () {
    return {

    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
