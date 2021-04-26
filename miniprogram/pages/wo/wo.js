// pages/wo/wo.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    my_select:[
      {title:"个人信息",url:"/images/my/message.png",net_url:"/pages/grxx/grxx"},
      {title:"个人主页",url:"/images/my/space.png",net_url:"/pages/grxx/grxx"},
      {title:"我的收藏",url:"/images/my/collect.png",net_url:"/pages/grxx/grxx"},
      {title:"我的老师",url:"/images/my/teacher.png",net_url:"/pages/grxx/grxx"},
      {title:"我的答疑",url:"/images/my/doubt.png",net_url:"/pages/grxx/grxx"},
      {title:"设置",url:"/images/my/set_up.png",net_url:"/pages/grxx/grxx"}
    ]
  },
  b:function(e){
    console.log(e)
  },
  getUserInfo:function(){
    console.log("44444")
  },
  a:function(){
    wx.navigateTo({
      url: '/pages/grxx/grxx',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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