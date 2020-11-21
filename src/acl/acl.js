import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'

Vue.use(AclInstaller)

let initialRole = 'public'

const userInfo = JSON.parse(localStorage.getItem('userInfo'))
if (userInfo && userInfo.nama_role) initialRole = userInfo.nama_role

export default new AclCreate({

  initial: initialRole,
  notfound: '/pages/not-authorized',
  //notfound : '/pages/login',
  router,
  acceptLocalRules: true,
  globalRules: {
    error : new AclRule('owner').or('admin').or('public').generate(),
    owner  : new AclRule('owner').or('public').generate(),
    admin: new AclRule('admin').or('public').generate(),
    cashier: new AclRule('cashier').or('public').generate(),
    courier: new AclRule('courier').or('public').generate(),
    public : new AclRule('public').generate()
  }

})
