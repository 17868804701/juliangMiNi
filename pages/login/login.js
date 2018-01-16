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
  username: function (e) {
    this.data.username = e.detail.value;
    console.log(this.data.username)
  },
  password: function (e) {
    this.data.password = e.detail.value;
    console.log(this.data.password)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  register:function(){
   wx.navigateTo({
    url: '../register/register',
   })
  },
  login:function(){
    console.log(this.data.username)
    console.log(this.data.password)
    if (this.data.username == null || this.data.password == null){
      wx.showModal({
        title: '提示',
        content: '用户名或密码不能为空',
      })
    }else{
      wx.request({
        url: `${getApp().data.url}/miniApps/enterprise/login`,
        data: { "enterpriseNumber": this.data.username, "password": this.data.password },
        method: 'POST',
        header: {
          "Content-Type": "application/json"
        },
        success: function (res) {
          console.log(res.data);
          if (res.data.success==true){
              getApp().data.qyId = res.data.enterprise.qyId;
              getApp().data.iphone = res.data.enterprise.iphone;
          
              getApp().data.jsessionid ="sid="+res.data.jsessionid
              getApp().data.enterpriseNumber = res.data.enterprise.enterpriseNumber;
              getApp().data.companyName = res.data.enterprise.companyName;
              getApp().data.iphone = res.data.enterprise.iphone;
              getApp().data.linkman = res.data.enterprise.linkman;
              getApp().data.companyAddress = res.data.enterprise.companyAddress;
              wx.showToast({
                title: '登陆成功',
              })
              wx.switchTab({
                url: '../index/index',
              })
          }else{
            wx.showModal({
              title: '提示',
              content: '用户名或密码错误',
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