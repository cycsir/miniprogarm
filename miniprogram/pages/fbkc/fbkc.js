let name=' '
var teacher=' '
var openId=' '
var img='cloud://zze-1gmo35wn0ea76415.7a7a-zze-1gmo35wn0ea76415-1305263827/gll.png'
var na=' '
var temfile=' ' 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:'cloud://zze-1gmo35wn0ea76415.7a7a-zze-1gmo35wn0ea76415-1305263827/gll.png'
  },
  getn:function(e){
    name=e.detail.value
   },
   fresh(){
    wx.cloud.uploadFile({
      cloudPath:na,
      filePath: temfile, // 文件路径
      success: res => {
        // get resource ID
        console.log('上传成功',res)
        img=res.fileID
        wx.cloud.database().collection('yonghu').where({
          _openid:openId
        }).get()
        .then(res =>{
          teacher=res.data[0].name
          wx.cloud.database().collection('course').add({
            data:{
              name:name,
              teacher:teacher,
              img:img
            }
          })
        })
     wx.switchTab({
        url: '/pages/shouye/shouye',
      })
        },
      fail: err => {
        // handle error
      }
    })
      // 判断openid是否存在于数据库
      
   },
  /**
   * 生命周期函数--监听页面加载
   */
  a(){
    wx.chooseMessageFile({
      count:1,
      type: 'image',
      success: res=> {
        console.log(res)
        img=res.fileID
        this.setData({
          imgurl:res.tempFiles[0].path
        })
        na=res.tempFiles[0].name,
        temfile=res.tempFiles[0].path
      }
    })
  },
  
    
  
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: "login",
      success(res){
      // 授权用户的openid
       openId= res.result.openid
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