// pages/qiyezhongxin/qiyezhongxin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    this.setData({
      name: getApp().data.companyName,
      num: getApp().data.enterpriseNumber
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
    wx.showToast({
      title: '你好',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  upPwd: function () {
    wx.navigateTo({
      url: '../upPwd/upPwd',
    })
  },
  btn_logout: function () {
    wx.redirectTo({
      url: '../login/login',
    })
  },
  shenbao: function () {
    wx.navigateTo({
      url: '../shenbao/shenbao',
    })
  },
  htManger: function () {
    wx.navigateTo({
      url: '../htManger/htManger',
    })
  },
  qiyexinxi: function () {
    wx.navigateTo({
      url: '../qiyexinxi/qiyexinxi',
    })
  },
  gonggao:function(){
    wx.navigateTo({
      url: '../gonggao/gonggao',
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: getApp().data.iphone //仅为示例，并非真实的电话号码
    })
  }
})