// pages/xsxx/xsxx.js
var id=' '
var url=' '
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    id=options.id
    wx.cloud.database().collection('coursest')
    .doc(id)
    .get()
    .then(res=>{
      console.log(res)
      url=res.data.file
      this.setData({
       list:res.data
      })
    })
  },
  a(){
    wx.cloud.downloadFile({
      fileID: url
    }).then(res => {
      // get temp file path
      console.log('下载成功',res.tempFilePath)
      wx.openDocument({
        filePath: res.tempFilePath,
        success:res=>{
          console.log('打开文档成功')
        }
      })
    }).catch(error => {
      // handle error
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