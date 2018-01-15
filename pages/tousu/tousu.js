// pages/tousu/tousu.js
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
    console.log(options.orderId)
    this.setData({
      id: options.orderId
    })
  },
  content:function(e){
    this.data.content = e.detail.value;
    console.log(this.data.content)
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
  
  },
  tousu:function(){
    wx.request({
      url: `${getApp().data.url}/miniApps/order/orderEvaluate`,
      data: {
        "orderId": this.data.id,
        "complaint": this.data.content
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data);
        if(res.data.success==true){
            wx.showToast({
              title: '投诉成功',
            })
        }else{
          wx.showModal({
            title: '提示',
            content: '投诉失败，请稍后重试',
          })
        }
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  }
})