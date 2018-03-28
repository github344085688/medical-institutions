import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loding = r => require.ensure([], () => r(require('@/lodings/index')), 'group-foo');
const enterprise = r => require.ensure([], () => r(require('@/enterprise/index')), 'group-foo');
const drugbox = r => require.ensure([], () => r(require('@/enterprise/drug_box/index')), 'group-foo');


const mypatient = r => require.ensure([], () => r(require('@/enterprise/drug_box/my_patient/aside')), 'group-foo');
const patient_list = r => require.ensure([], () => r(require('@/enterprise/drug_box/my_patient/patient_list')), 'group-foo');
const medical_examination_record = r => require.ensure([], () => r(require('@/enterprise/drug_box/my_patient/medicalreport/medical_examination_record')), 'group-foo');
const Physical = r => require.ensure([], () => r(require('@/enterprise/drug_box/my_patient/historicalrecords/medical_examination_record')), 'group-foo');


//设备管理
const devicemantcont = r => require.ensure([], () => r(require('@/enterprise/drug_box/device_management/aside')), 'group-foo');
const devicemanagement = r => require.ensure([], () => r(require('@/enterprise/drug_box/device_management/index')), 'group-foo');
//设备管理

//药品管理
const drugementaside = r => require.ensure([], () => r(require('@/enterprise/drug_box/drug_management/aside')), 'group-foo');
const drugmanagement = r => require.ensure([], () => r(require('@/enterprise/drug_box/drug_management/index')), 'group-foo');
//药品管理


//服药记录
const drugRecording_aside = r => require.ensure([], () => r(require('@/enterprise/drug_box/drugRecording/aside')), 'group-foo');
const drugRecording_index = r => require.ensure([], () => r(require('@/enterprise/drug_box/drugRecording/index')), 'group-foo');
//服药记录


//数据统计
const datas_aside = r => require.ensure([], () => r(require('@/enterprise/drug_box/data_statistics/aside')), 'group-foo');
const datas_index = r => require.ensure([], () => r(require('@/enterprise/drug_box/data_statistics/index')), 'group-foo');
//数据统计


//账号管理
const accountmanagement = r => require.ensure([], () => r(require('@/enterprise/drug_box/account_management/aside')), 'group-foo');
const accountindex = r => require.ensure([], () => r(require('@/enterprise/drug_box/account_management/index')), 'group-foo');
//账号管理

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'loding',
      component: loding,
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: enterprise,
      children: [
        {
          path: '',
          name: 'drugbox',
          component:drugbox,
          redirect: 'mypatient',
          children: [
            //我的病人
            {
              path: 'mypatient',
              name: 'mypatient',
               components: {
                 aside: mypatient,
                 article: patient_list
               }
            },
            {
              path: 'examination',
              name: 'examination',
              components: {
                aside: mypatient,
                article: medical_examination_record
              },
            },{
              path: 'Physical',
              name: 'Physical',
              components: {
                aside: mypatient,
                article: Physical
              },
            },
            //设备管理
            {
              path: 'devicemantcont',
              name: 'devicemantcont',
               components: {
                 aside: devicemantcont,
                 article: devicemanagement
               },
            },
            //设备管理
          //drugrecording
        /*    {
              path: 'drugrecording',
              name: 'drugrecording',
              components: {
                aside: drugrecording,
                article: drugrecording
              },
            },*/
            //药品管理
            {
              path: 'drugmanagement',
              name: 'drugmanagement',
              components: {
                aside: drugementaside,
                article: drugmanagement
              },
            },
          //药品管理
            //服药记录
            {
              path: 'drugrecording',
              name: 'drugrecording',
              components: {
                aside: drugRecording_aside,
                article: drugRecording_index
              },
            },
            //服药记录
            //数据统计
            {
              path: 'datastatistics',
              name: 'datastatistics',
              components: {
                aside: datas_aside,
                article: datas_index
              },
            },
            //数据统计

            //账号管理
            {
              path: 'accountmanagement',
              name: 'accountmanagement',
              components: {
                aside: accountmanagement,
                article: accountindex
              },
            }
            //账号管理
          ]
          /* {
             path: 'devicemantcont',
             name: 'devicemantcont',
             component: devicemantcont,
             children: [
               {
                 path: '',
                 name: 'devicemanagement',
                 component: devicemanagement
               }
             ]
           },
           {
             path: "drugrecording",
             name: 'drugrecording',
             component: drugrecording,
           },
           {
             path: "drugmanagement",
             name: 'drugmanagement',
             component: drugmanagement,
           },
           {
             path: "datastatistics",
             name: 'datastatistics',
             component: datastatistics,
           },
           {
             path: "accountmanagement",
             name: 'accountmanagement',
             component: accountmanagement,
           }
         */
        }
      ]
    }
  ]
})
