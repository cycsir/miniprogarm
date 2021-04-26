// pages/grxx/grxx.js
let q1=' '
var app=getApp()
var q2=' '
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:' ',
    sex:' ',
    birth:' ',
    ch1:' '
  },
  a:function(){
    wx.navigateTo({
      url: '/pages/gbxx/gbxx',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that=this
    if(app.globalData.qx=='0'){
      this.setData({
        ch1:'老师端入口',
      })
    }
    else{
      this.setData({
        ch1:'学生端入口',
      })
    }
    wx.cloud.callFunction({
      name: "login",
      success(res){
      // 授权用户的openid
      let openId= res.result.openid
      // 判断openid是否存在于数据库
      wx.cloud.database().collection('yonghu').where({
        _openid:openId
      }).get()
      .then(res =>{
        console.log(res)
        that.setData({
          name:res.data[0].name,
          sex:res.data[0].sex,
          birth:res.data[0].birth
        })
      })
      }
    })
  },
  qx1(){
    var that=this
    if(app.globalData.qx=='0'){
    wx.cloud.callFunction({
      name: "login",
      success(res){
      // 授权用户的openid
      let openId= res.result.openid
      // 判断openid是否存在于数据库
      wx.cloud.database().collection('yonghu').where({
        _openid:openId
      }).get()
      .then(res =>{
        console.log(res)
        q1=res.data[0].q1
      })
      .then(res=>{
        if(q1=='有'){
          app.globalData.qx='1'
          wx.switchTab({
            url: '/pages/shouye/shouye',
          })
        }
        else{
          wx.showToast({
            icon:'none',
            title: '你没有获得教师权限',
          })
        }
      })
      }
    })
    }
    else{
      app.globalData.qx='0'
      wx.switchTab({
        url: '/pages/shouye/shouye',
      })
    }
  },
  qx2(){
    var that=this
    wx.cloud.callFunction({
      name: "login",
      success(res){
      // 授权用户的openid
      let openId= res.result.openid
      // 判断openid是否存在于数据库
      wx.cloud.database().collection('yonghu').where({
        _openid:openId
      }).get()
      .then(res =>{
        console.log(res)
        q2=res.data[0].q2
      })
      .then(res=>{
        if(q2=='有'){
          wx.navigateTo({
            url: '/pages/gly/gly',
          })
        }
        else{
          wx.showToast({
            icon:'none',
            title: '你没有获得管理员权限',
          })
        }
      })
      }
    })
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