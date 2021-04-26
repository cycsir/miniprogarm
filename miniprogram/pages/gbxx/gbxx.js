// pages/gbxx/gbxx.js
let name1=''
let sex=''
let birth=''
var l0=' '
var l1=' '
var l2=' '

  /**
   * 页面的初始数据
   */
  
 

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  
Component({
  /**
   * 组件的属性列表
   */
  
    properties: {
        
    },
  /**
   * 组件的初始数据
   */
    data: {
        selectShow:false,//初始option不显示
        nowText:"请选择",//初始内容
        animationData:{},//右边箭头的动画
        select: false,
        select_sex: '请选择性别：',
        multiIndex: [0, 0, 0],
        date: '2016-09-01',
        time: '12:01',
        region: ['广东省', '广州市', '海珠区'],
        // select_year:'年份',
        // select_month:'月份',
        // select_day:'日期',
        
       
    },
  /**
   * 组件的方法列表
   */
    methods: {
      getn:function(e){
        name1=e.detail.value
      },
     /**
      * 生命周期函数--监听页面加载
      */
      fresh(){
        if(name1==''||sex==''){
          wx.showModal({
            content:"请完善信息",
            confirmText:"我知道了"
          })
        }
        else{
        console.log(l0)
        wx.cloud.callFunction({
         name: "login",
         success(res){
         // 授权用户的openid
         let openId= res.result.openid
         // 判断openid是否存在于数据库
         wx.cloud.database().collection('yonghu').where({
           _openid:openId
         }).update({
             data:{name:name1,
               sex:sex,
               birth:birth,
               l0:l0,
               l1:l1,
               l2:l2,
             }
           })
        .then(res=>{
          name1=''
          sex=''
        })
         }
       })
       wx.navigateTo({
         url: '/pages/grxx/grxx',
       })
      }
      },
        bindShowMsg() {
           this.setData({
                select:!this.data.select
            })
       },
       mySelect(e) {
           var name = e.currentTarget.dataset.name
           sex=name
           this.setData({
               select_sex: name,
               select: false
           })
       },
       bindDateChange: function(e) {
        birth=e.detail.value
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          date: e.detail.value
        })
      },
     
      bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        l0=e.detail.value[0]
        console.log(l0)
        l1=e.detail.value[1]
        l2=e.detail.value[2]
        this.setData({
          region: e.detail.value
        })
      }
    }
})