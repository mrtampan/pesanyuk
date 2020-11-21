<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vs-popup title="Tampilan Register | Edit Tampilan Register | Paket Aktive" :active.sync="isPopupActiveLocalEdit">
    </vs-popup>
</template>

<script>

export default {
  props: {
    isPopupActiveEdit: {
      required: true
    }
  },
  data () {
    return {
    }
  },
  watch: {
    isPopupActiveEdit () {
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isPopupActiveLocalEdit: {
      get () {
        return this.isPopupActiveEdit
      },
      set (val) {
        if (!val) {
          this.$emit('closePopupEditPaket')
          this.isPopupActiveEdit = false
        }
      }
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

    &:not(.ps) {
      overflow-y: auto;
    }
}
</style>
