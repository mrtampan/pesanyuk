<template>
  <vx-card no-shadow>

    <!-- Img Row -->
    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="activeUserInfo.photoURL" size="70px" class="mr-4 mb-4" />
      <div>
        <vs-button class="mr-4 sm:mb-0 mb-2">Langganan</vs-button>
        <vs-button type="border" color="danger">Buang</vs-button>
        <p class="text-sm mt-2">Hanya Bisa JPG, GIF or PNG. maksimal ukuran 800kB</p>
      </div>
    </div>

    <!-- Info -->
    <vs-input class="w-full mb-base " label-placeholder="Nama Pemilik" v-model="name"></vs-input>   
    <vs-input class="w-full" label-placeholder="Email" v-model="email"></vs-input>
       <vs-alert icon-pack="feather" icon="icon-info" class="h-full my-4" color="warning">
      <span>Akunmu Belum Terverifikasi. <a href="#" class="hover:underline">Kirim Konfirmasi</a></span>
    </vs-alert>
          <label class="vs-input--label">Peran</label>
          <v-select color="warning"  v-model="role_local" :clearable="false" :options="roleOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-warning text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
    <vs-input class="w-full mt-8" label-placeholder="No Whatsapp" v-model="wa"></vs-input>
       

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2">Save Changes</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning">Reset</vs-button>
    </div>
  </vx-card>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: this.$store.state.AppActiveUser.displayName,
      email: 'john@admin.com',
      company: 'SnowMash Technologies Pvt Ltd',
      statusOptions: [
        { label: 'Active',  value: 'active' },
        { label: 'Blocked',  value: 'blocked' },
        { label: 'Deactivated',  value: 'deactivated' }
      ],
      roleOptions: [
        { label: 'Admin',  value: 'admin' },
        { label: 'Pemakai',  value: 'Pemakai' },
        { label: 'Karyawan',  value: 'Karyawan' }
      ]
    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  }
}
</script>
