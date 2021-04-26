// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  a:function(e){
    wx.navigateTo({
      url: '/pages/kcxx/kcxx?id='+ e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: "login",
      success(res){
      // 授权用户的openid
      let openId= res.result.openid
    wx.cloud.database().collection('yonghu').where({
      _openid:openId})
      .get()
      .then(res=>{
        if(res.data.length=='0'){
          wx.cloud.database().collection('yonghu').add({
                      data:{
                      name:'未命名',
                      sex:'男',
                     birth:'',
                     q1:'有',
                     q2:'无',
                      l0:'',
                    l1:'',
                     l2:'',
                  }
                  })
        }
      })
   }
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
    wx.cloud.database().collection('course')
    .get()
    .then(res =>{
      this.setData({
        list:res.data
      })
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
    wx.cloud.database().collection('course')
    .get()
    .then(res =>{
      this.setData({
        list:res.data
      })
    })
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