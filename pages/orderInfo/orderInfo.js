// pages/orderInfo/orderInfo.js
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
    console.log(options)
    var that = this;
    this.setData({
      id: options.orderId,
    })
    this.setData({
      url: getApp().data.url
    })
    console.log(this.data.id)
    wx.request({
      url: `${getApp().data.url}/miniApps/order/getOrderDetails`,
      data: {
        "orderId":this.data.id
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Cookie": getApp().data.jsessionid 
      },
      success: function (res) {
        console.log(res.data);
        console.log(res.data.orderDetails);
        that.setData({
          companyName: res.data.qyInfo.companyName,
          maintain_status: res.data.maintain_status,
          enterpriseNumber: res.data.qyInfo.enterpriseNumber,
          iphone: res.data.qyInfo.iphone,
          linkman: res.data.qyInfo.linkman,
          companyAddress: res.data.qyInfo.companyAddress,
          orderList: res.data.orderDetails
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  showImage:function(e){
    console.log(e.currentTarget.dataset.img)
    var url = getApp().data.url + e.currentTarget.dataset.img
    var imgList = [];
    imgList.push(url)
    wx.previewImage({
      current: e.currentTarget.dataset.img, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  showImages:function(){
    console.log(e.currentTarget.dataset.img)
    var url = getApp().data.url + e.currentTarget.dataset.img
    var imgList = [];
    imgList.push(url)
    wx.previewImage({
      current: e.currentTarget.dataset.img, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
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
  // 打电话
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.iphone //仅为示例，并非真实的电话号码
    })
  },
  tousu: function () {
    wx.navigateTo({
      url: '../tousu/tousu?orderId=' + this.data.id,
    })
  }
})