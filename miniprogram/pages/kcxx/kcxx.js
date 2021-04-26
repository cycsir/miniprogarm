// pages/kcxx/kcxx.js
let dh=' '
var name1=' '
var id=' '
var cname=' '
var n2=' '
var openId=' '
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    name2:' ',
    teacher:' '
  },
  getn:function(e){
    dh=e.detail.value
   },
  /**
   * 生命周期函数--监听页面加载
   */
  fresh: function (){
   console.log(1) 
    var that=this
   
     
      // 授权用户的openid
      // 判断openid是否存在于数据库
      wx.cloud.database().collection('yonghu').where({
        _openid:openId
      }).get()
      .then(res =>{
        name1=res.data[0].name
        wx.cloud.database().collection('pinglun').add({
          data:{
            duiha:dh,
            name:name1,
            courseid:id,
            coursename:n2
          }
        })
        .then(res=>{
          wx.cloud.database().collection('pinglun')
          .where({
            courseid:id
          })
          .get()
          .then(res =>{
            that.setData({
              list:res.data
            })
          })
        })
      })
  },
   onLoad: function (options) {
    id=options.id
    wx.cloud.database().collection('course')
    .doc(id)
    .get()
    .then(res=>{
      console.log(res)
      n2=res.data.name
      this.setData({
        teacher:res.data.teacher,
        name2:res.data.name
      })
    })
    wx.cloud.callFunction({
      name: "login",
      success(res){
        openId= res.result.openid
      }
    })
  },
  fresh1:function(){
    wx.cloud.database().collection('course').where({
      _id:id
    })
    .get()
    .then(res=>{
      cname=res.data[0].name
      wx.cloud.database().collection('coursexz').where({
        courseid:id,
        _openid:openId
      })
      .get()
      .then(res=>{
        console.log(res)
        if(res.data.length=='0'){
          wx.cloud.database().collection('coursexz').add({
            data:{
              courseid:id,
              name:cname
            }
          })
          wx.showToast({
            title: '选课成功',
          })
        }
        else{
          wx.showToast({
            title: '你已选过该课程',
          })
        }
      })
     
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.cloud.database().collection('pinglun')
    .where({
      courseid:id
    })
    .get()
    .then(res =>{
      this.setData({
        list:res.data
      })
    })
      // 判断openid是否存在于数据库
     
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})