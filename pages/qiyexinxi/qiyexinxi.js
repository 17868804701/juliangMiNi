// pages/qiyexinxi/qiyexinxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  lxr:function(e){
    this.data.lxr = e.detail.value;
    console.log(this.data.lxr)
  },
  lxdz: function (e) {
    this.data.lxdz = e.detail.value;
    console.log(this.data.lxdz)
  },
  lxdh: function (e) {
    this.data.lxdh = e.detail.value;
    console.log(this.data.lxdh)
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
      lxr: getApp().data.linkman,
      lxdz: getApp().data.companyAddress,
      lxdh: getApp().data.iphone
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
  
  },
  update:function(){
    wx.request({
      url: `${getApp().data.url}miniApps/enterprise/updateEnterprise`,
      data:{
        "qyId": getApp().data.qyId,
        "linkman": this.data.lxr,
        "companyAddress": this.data.lxdz,
        "iphone": this.data.lxdh
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data)
        if(res.data.success==true){
            wx.showToast({
              title: '修改信息成功',
            })
        }else{
          wx.showModal({
            title: '提示',
            content: '信息修改失败',
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