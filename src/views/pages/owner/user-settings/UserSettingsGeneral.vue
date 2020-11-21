<template>
  <vx-card no-shadow>

    <!-- Img Row -->
    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="activeUserInfo.photoURL" size="70px" class="mr-4 mb-4" />
      <div>
        <vs-button class="mr-4 sm:mb-0 mb-2">Upload photo profile</vs-button>
        <vs-button type="border" color="danger">Buang</vs-button>
        <p class="text-sm mt-2">Hanya Bisa JPG, GIF or PNG. maksimal ukuran 800kB</p>
      </div>
    </div>

    <!-- Info -->
    <vs-input class="w-full mb-base " label-placeholder="Nama Pemilik" v-model="name"></vs-input>   
    <vs-input class="w-full mb-2" label-placeholder="Email" v-model="email"></vs-input>
    <label class="vs-input--label mt-12">Ulang Tahun</label>
    <datepicker :minimumView="'day'" :maximumView="'month'" class="mb-2"></datepicker>
          <label class="vs-input--label  mb-base  mt-12">Peran</label>
          <v-select color="warning" class="mb-2" v-model="role_local" :clearable="false" :options="roleOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-warning text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
          <label class="vs-input--label mt-8">Status</label>
          <v-select color="warning" size="large" v-model="status_local" :clearable="false" :options="statusOptions" v-validate="'required'" name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-warning text-sm"  v-show="errors.has('status')">{{ errors.first('status') }}</span>
    <vs-input class="w-full mt-8" label-placeholder="No Handphone" v-model="hp"></vs-input>
    <vs-input class="w-full mt-8" label-placeholder="Instagram" v-model="ig" icon-pack="feather" icon="icon-at-sign"></vs-input>
    

       <!-- Permission -->
       
    <!-- Permissions -->
    <!-- <vx-card class="mt-base" no-shadow card-border>

      <div class="vx-row">
        <div class="vx-col w-full">
          <div class="flex items-end px-3">
            <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
            <span class="font-medium text-lg leading-none">Permissions</span>
          </div>
          <vs-divider />
        </div>
      </div>

      <div class="block overflow-x-auto">
        <table class="w-full">
          <tr>

            <th class="font-semibold text-base text-left px-3 py-2" v-for="heading in ['Module', 'Read', 'Write', 'Create', 'Delete']" :key="heading">{{ heading }}</th>
          </tr>

          <tr v-for="(val, name) in data_local.permissions" :key="name">
            <td class="px-3 py-2">{{ name }}</td>
            <td v-for="(permission, name) in val" class="px-3 py-2" :key="name+permission">
              <vs-checkbox v-model="val[name]" />
            </td>
          </tr>
        </table>
      </div> -->
    <!-- </vx-card> -->

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-12">Save Changes</vs-button>
      <vs-button class="ml-4 mt-12" type="border" color="warning">Reset</vs-button>
    </div>
  </vx-card>
</template>

<script>
import vSelect from 'vue-select'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    vSelect,
    Datepicker
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
