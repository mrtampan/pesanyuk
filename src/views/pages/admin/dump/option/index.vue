<template lang="html">
  <div class="centerx">
    <vue-numeric currency="Rp. " readOnly separator="." :value="tr.jumlah" class="vs-textarea w-full"></vue-numeric>
    <template v-if="dataImg">
          <!-- Image Container -->
          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img :src="dataImg" alt="img" class="responsive">
          </div>

          <!-- Image upload Buttons -->
          <div class="modify-img flex justify-between mt-5">
            <input type="file" fileName="photos[]" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
            <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Update Image</vs-button>
            <vs-button type="flat" color="#999" @click="dataImg = null">Remove Image</vs-button>
          </div>
    </template>

    <div class="upload-img mt-5" v-if="!dataImg">
          <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-upload @click="$refs.uploadImgInput.click()" @on-success="successUpload" />
          <vs-button @click="$refs.uploadImgInput.click()">Upload Image</vs-button>
    </div>

     <div class="vx-row mb-6">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="mb-6 mt-12">Jumlah <sup class="text-danger">*</sup></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
         <vue-numeric currency="Rp. " separator="." v-model="diskon" class=" w-full vs-inputx vs-input--input normal" name="diskon" v-validate="'required'"></vue-numeric>
        <span class="text-danger text-sm" v-show="errors.has('item-jumlah')">{{ errors.first('item-jumlah') }}</span>
          </div>
        </div>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitData">Submit</vs-button>
    </div>
  
  
  </div>
</template>

<script>
import VueNumeric from 'vue-numeric'
export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      jumlah : 'Rp. ',
      dataId: null,
      dataImg: ''
    }
  },
  watch: {
    isSidebarActive (val) {
      if (!val) return
      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        const { id, img} = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataImg = img
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isFormValid () {
      return !this.errors.any() && this.dataName && this.dataCategory && this.dataPrice > 0
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  components: {
    'vue-numeric': VueNumeric
  },
  methods: {
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataImg = ''
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obja = {
            id: this.dataId,
            img: this.dataImg
          }

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch('dataList/updateItem', obja).catch(err => { console.error(err) })
          } else {
            delete obja.id
            obja.popularity = 0
            this.$store.dispatch('dataList/addItem', obja).catch(err => { console.error(err) })
          }

          this.$emit('closeSidebar')
          this.initValues()
        }
      })
    },
    updateCurrImg (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
  }
}

</script>