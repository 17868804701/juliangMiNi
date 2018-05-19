// pages/login/login.js
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
  tel: function (e) {
    this.data.tel = e.detail.value;
    console.log(this.data.tel)
  },
  yanzhengma: function (e) {
    this.data.yanzhengma = e.detail.value;
    console.log(this.data.yanzhengma)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  reset:function(){
    wx.request({
      url: `${getApp().data.url}/app/restPwd?phone=`+this.data.tel+'&&code='+this.data.yanzhengma,
      method: 'GET',
      header: {
        "Content-Type": "application/json",
        "Cookie":this.data.a
      },
      success: function (res) {
       if(res.data.success==true){
         wx.showModal({
           title: '提示',
           content: '密码重置成功，新密码为：123456',
           success: function (res) {
             if (res.confirm) {
               wx.redirectTo({
                 url: '../login/login',
               })
             } else if (res.cancel) {
               wx.redirectTo({
                 url: '../login/login',
               })
             }
           }
         })
       } else {
         wx.showModal({
           title: '提示',
           content: '网络繁忙',
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
  },
  send:function(){
    console.log(this.data.tel)
    var that = this
    wx.request({
      url: `${getApp().data.url}/app/forgetGetMsg?phone=`+this.data.tel,
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        if(res.data.success==true){
          wx.showToast({
            title: '验证码发送成功',
          })
          console.log(res.header["Set-Cookie"])
          that.setData({
            a: res.header["Set-Cookie"]
          })
        }else{
          wx.showModal({
            title: '提示',
            content: '网络繁忙',
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
  },
  reset_btn: function () {
    

  }
})