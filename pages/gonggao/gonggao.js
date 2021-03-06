// pages/gonggao/gonggao.js
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
  gonggaoInfo:function(e){
    console.log(e.currentTarget.dataset.content)
    var content = e.currentTarget.dataset.content
    wx.navigateTo({
      url: '../gonggaoInfo/gonggaoInfo?content='+content,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: `${getApp().data.url}/notification/getTzggList`,
      data: {
        "page": "",
        "type": "企业端",
        "maintenanceWorkerId": getApp().data.qyId
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Cookie": getApp().data.jsessionid
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          list: res.data.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
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