// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gsmc: function (e) {
    this.data.gsmc = e.detail.value;
    console.log(this.data.gsmc)
  },
  qysh: function (e) {
    this.data.qysh = e.detail.value;
    console.log(this.data.qysh)
  },
  gsdz: function () {
    var that = this;
    // 选择地图
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        console.log(res.address);
        console.log(res.latitude);
        console.log(res.longitude);
        that.setData({
          address: res.address,
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  lxr: function (e) {
    this.data.lxr = e.detail.value;
    console.log(this.data.lxr)
  },
  phone: function (e) {
    this.data.phone = e.detail.value;
    console.log(this.data.phone)
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
  tijiao: function () {
 
    console.log(this.data.gsmc)
    console.log(this.data.qysh)
    console.log(this.data.address)
    console.log(this.data.lxr)
    console.log(this.data.address)
    console.log(this.data.phone)
    console.log(this.data.longitude)
    console.log(this.data.latitude)
    var re =/^(13[0-9]|17[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    // console.log(re.test(this.data.phone),'正则测试结果') 
    if (this.data.gsmc == null || this.data.qysh == null || this.data.address == null || this.data.lxr == null || this.data.phone == null) {
      wx.showModal({
        title: '提示',
        content: '请填写完整信息',
      })
    } else if (re.test(this.data.phone) == false || this.data.phone.length<11){
        wx.showModal({
          title: '提示',
          content: '请输入合法的手机号',
        })
    } else {
      wx.request({
        url: `${getApp().data.url}/miniApps/enterprise/enterpriseRegister`,
        data:
        {
          "companyName": this.data.gsmc,
          "qyType": "服务企业",
          "enterpriseNumber": this.data.qysh,
          "companyAddress": this.data.address,
          "linkman": this.data.lxr,
          "area": this.data.address,
          "iphone": this.data.phone,
          "areaCode": "610113",
          "longitude": this.data.longitude,
          "latitude": this.data.latitude

        },
        method: 'POST',
        header: {
          "Content-Type": "application/json",
          "Cookie": getApp().data.jsessionid 
        },
        success: function (res) {
          console.log(res.data);
          if(res.data.success==true){
              wx.showToast({
                title: '注册成功',
              })
              wx.redirectTo({
                url: '../login/login',
              })
          }else{
            wx.showModal({
              title: '提示',
              content: '注册失败',
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