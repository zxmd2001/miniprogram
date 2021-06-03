// miniprogram/pages/word/word.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx:Math.floor(Math.random() * 15)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that =this;
    const db = wx.cloud.database({
      env: 'cloud1-0g8boqgk50d4cb4d'
    }) 
    db.collection('word').get({
   
      success: res => {
        that.setData({
          wordlist: res.data
        })
        console.log("success")
      },
      
    })
     
  },
  show: function () {
    this.setData({
        showNot: true
    })
},
  next:function(){
    this.setData({
      showNot: false
  })
  this.setData({
    idx:Math.floor(Math.random() * 4)
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