// pages/upPwd/upPwd.js
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  oldPwd: function (e) {
    this.data.oldPwd = e.detail.value;
    console.log(this.data.oldPwd)
  },
  newPwd: function (e) {
    this.data.newPwd = e.detail.value;
    console.log(this.data.newPwd)
  },
  okNewPwd: function (e) {
    this.data.okNewPwd = e.detail.value;
    console.log(this.data.okNewPwd)
  },
  upPwd:function(){
    if (this.data.oldPwd == null || this.data.newPwd == null || this.data.okNewPwd==null){
      wx.showModal({
        title: '提示',
        content: '请输入完整信息',
      })
    } else if (this.data.newPwd != this.data.okNewPwd){
      wx.showModal({
        title: '提示',
        content: '两次输入密码不一致',
      })
    }else{
      wx.request({
        url: `${getApp().data.url}/miniApps/enterprise/updatePassword`,
        data:
        {
          "enterpriseNumber": getApp().data.enterpriseNumber,
          "oldPassword": this.data.oldPwd,
          "newPassword": this.data.newPwd

        },
        method: 'POST',
        header: {
          "Content-Type": "application/json",
          "Cookie": getApp().data.jsessionid 
        },
        success: function (res) {
          console.log(res.data);
          if (res.data.success == true) {
            wx.showToast({
              title: '修改密码成功',
            })
            wx.navigateBack({
              url: "../qiyezhongxin/qiyezhongxin"
            })
          }else{
            wx.showModal({
              title: '提示',
              content: '修改密码失败',
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
  }
})