// pages/lskc/lskc.js
var id=' '
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name2:' ',
    list:{},
  },
  c(){
    wx.navigateTo({
      url: '/pages/tjkc/tjkc?id='+id,
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    id=options.id
    wx.cloud.database().collection('course')
    .doc(id)
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        name2:res.data.name
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
    wx.cloud.database().collection('coursest')
    .where({
      courseid:id
    })
    .get()
    .then(res=>{
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