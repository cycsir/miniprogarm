// pages/tjkc/tjkc.js
let name=' '
var openId=' '
var na=' '
var temfile=' ' 
var na1=' '
var temfile1=' '
var id=' '
var video=' '
var file=' '
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videourl:' ',
    list:{},
  },
  getn:function(e){
    name=e.detail.value
   },
  /**
   * 生命周期函数--监听页面加载
   */
  a1(){
  wx.chooseMessageFile({
    count:1,
    type: 'flie',
    success: res=> {
      console.log(res)
      na=res.tempFiles[0].name,
      temfile=res.tempFiles[0].path
      console.log(na)
      this.setData({
        list:res.tempFiles
      })
      wx.cloud.uploadFile({
        cloudPath:na,
        filePath:temfile,
        success: res => {
          console.log(res)
          file=res.fileID
        },
      })
    }
  })
  },
  a2(){
    wx.chooseMessageFile({
      count:1,
      type: 'video',
      success: res=> {
        console.log(res)
        na1=res.tempFiles[0].name,
        temfile1=res.tempFiles[0].path
        this.setData({
          videourl:res.tempFiles[0].path
        })
        wx.cloud.uploadFile({
          cloudPath:na1,
          filePath:temfile1,
          success: res => {
            console.log(res)
            video=res.fileID
          },
        })
      }
    })
    },
  fresh(){
      wx.cloud.database().collection('coursest').add({
        data:{
          zhangjie:name,
          courseid:id,
          video:video,
          file:file,
          name:na
        }
      })
      wx.navigateTo({
        url: '/pages/lskc/lskc',
      })
    },
  onLoad: function (options) {
    id=options.id
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