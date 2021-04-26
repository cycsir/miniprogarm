// pages/xueqing/xueqing.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    ch1:' ',
    lesson:' ',
    ch2:'courseid'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  a(e){
    if(app.globalData.qx=='0'){
      wx.navigateTo({
        url: '/pages/xskc/xskc?id='+ e.currentTarget.dataset.id,
      })
    }
    else{
        wx.navigateTo({
          url: '/pages/lskc/lskc?id='+ e.currentTarget.dataset.id,
        })
    }
  },
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  fresh(){
    if(app.globalData.qx=='0'){
      wx.navigateTo({
        url: '/pages/grxx/grxx'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/fbkc/fbkc'
      })
    }

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(app.globalData.qx=='0'){
      this.setData({
        ch1:'已选课程',
        lesson:'课程表',
        ch2:'courseid'
      })
      var that=this
      wx.cloud.callFunction({
        name: "login",
        success(res){
        // 授权用户的openid
        let openId= res.result.openid
        // 判断openid是否存在于数据库
        wx.cloud.database().collection('coursexz').where({
          _openid:openId
        }).get()
        .then(res =>{
            console.log(res)
          that.setData({
            list:res.data
          })
        })
      }
    })
  }
    else {
      this.setData({
        ch1:'已设立课程',
        lesson:'添加课程',
        ch2:'_id'
      })
      var that=this
      wx.cloud.callFunction({
        name: "login",
        success(res){
        // 授权用户的openid
        let openId= res.result.openid
        // 判断openid是否存在于数据库
        wx.cloud.database().collection('course').where({
          _openid:openId
        }).get()
        .then(res =>{
            console.log(res)
          that.setData({
            list:res.data
          })
        })
      }
    })
    }
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