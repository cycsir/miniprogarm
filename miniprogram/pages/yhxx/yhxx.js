// pages/yhxx/yhxx.js
var id=' '
var id1=' '
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    list1:{},
    list2:{},
    list3:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  b1(){
    wx.cloud.database().collection('yonghu').where({
      _openid:id
    }).update({
        data:{
        q1:'有'
        }
      })
      wx.showModal({
        content:"更改成功",
        confirmText:"我知道了"
      })
  },
  b2(){
    wx.cloud.database().collection('yonghu').where({
      _openid:id
    }).update({
        data:{
        q1:'无'
        }
      })
      wx.showModal({
        content:"更改成功",
        confirmText:"我知道了"
      })
  },
  b3(){
    wx.cloud.database().collection('yonghu').where({
      _openid:id
    }).update({
        data:{
        q2:'有'
        }
      })
      wx.showModal({
        content:"更改成功",
        confirmText:"我知道了"
      })
  },
  b4(){
    wx.cloud.database().collection('yonghu').where({
      _openid:id
    }).update({
        data:{
        q2:'无'
        }
      })
      wx.showModal({
        content:"更改成功",
        confirmText:"我知道了"
      })
  },
  b5:function(e){
    id1=e.currentTarget.dataset.id
    wx.cloud.database().collection('coursexz')
    .doc(id1)
    .remove()
    wx.showModal({
      content:"删除成功",
      confirmText:"我知道了"
    })
  },
  b6:function(e){
    id1=e.currentTarget.dataset.id
    wx.cloud.database().collection('course')
    .doc(id1)
    .remove()
    wx.showModal({
      content:"删除成功",
      confirmText:"我知道了"
    })
  },
  onLoad: function (options) {
    id=options.id
    wx.cloud.database().collection('yonghu')
    .where({
      _openid:id
    })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        list:res.data[0],
      })
    })
    wx.cloud.database().collection('coursexz')
    .where({
      _openid:id
    })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        list1:res.data
      })
    })
    wx.cloud.database().collection('course')
    .where({
      _openid:id
    })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        list2:res.data
      })
    })
    wx.cloud.database().collection('pinglun')
    .where({
      _openid:id
    })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        list3:res.data,
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