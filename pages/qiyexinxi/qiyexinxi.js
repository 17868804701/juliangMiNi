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
    var that=this 
    var re = /^(13[0-9]|17[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if (re.test(this.data.lxdh) == false || this.data.lxdh.length < 11) {
      wx.showModal({
        title: '提示',
        content: '请输入合法的手机号',
      })
    }else{
      wx.request({
        url: `${getApp().data.url}miniApps/enterprise/updateEnterprise`,
        data: {
          "qyId": getApp().data.qyId,
          "linkman": this.data.lxr,
          "companyAddress": this.data.lxdz,
          "iphone": this.data.lxdh
        },
        method: 'POST',
        header: {
          "Content-Type": "application/json",
          "Cookie": getApp().data.jsessionid
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.success == true) {
            wx.showToast({
              title: '修改信息成功',
            })
            getApp().data.companyAddress = res.data.enterpriseBasicInfo.companyAddress
            getApp().data.iphone = res.data.enterpriseBasicInfo.iphone
            getApp().data.linkman = res.data.enterpriseBasicInfo.linkman
            that.setData({
              lxr: getApp().data.linkman,
              lxdz: getApp().data.companyAddress,
              lxdh: getApp().data.iphone
            })
            wx.navigateBack({
              url: "../qiyezhongxin/qiyezhongxin"
            })
          } else {
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
  }
})