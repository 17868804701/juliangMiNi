// pages/addShebei/addShebei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   sbList: [],
   index:0,
   date:'请选择出厂时间'
  },

  bindPickerChange: function (e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.setData({
      sbName: this.data.sbList[e.detail.value].title
    })
    console.log(this.data.sbName)
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  ggxh: function (e) {
    this.data.ggxh = e.detail.value;
    console.log(this.data.ggxh)
  },
  sccj: function (e) {
    this.data.sccj = e.detail.value;
    console.log(this.data.sccj)
  },
  ccbm: function (e) {
    this.data.ccbm = e.detail.value;
    console.log(this.data.ccbm)
  },
  dj: function (e) {
    this.data.gsmc = e.detail.value;
    console.log(this.data.dj)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  add:function(){
    var that = this;
    console.log(this.data.sbName || this.data.sbList[0].title)
    if (this.data.sccj == null || this.data.ggxh == null || this.data.ccbm == null || this.data.date==null){
      wx.showModal({
        title: '提示',
        content: '请填写设备所有信息',
      })
    }else{
      wx.request({
        url: `${getApp().data.url}/miniApps/qysb/addEnterpriseEquipment`,
        data: {
          "qyId": getApp().data.qyId,
          "equipmentName": this.data.sbName || this.data.sbList[0].title,
          "manufactureFactory": this.data.sccj,
          "equipmentModel": this.data.ggxh,
          "factoryCode": this.data.ccbm,
          "deliveryDate": this.data.date
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
              title: '添加成功',
            })
            wx.navigateBack({
              url: "../shebei/shebei"
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '添加失败',
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**    
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: `${getApp().data.url}/miniApps/qysb/getEquipmentInfo`,
      data: {},
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Cookie": getApp().data.jsessionid 
      },
      success: function (res) {
        console.log(res.data.sysDictionaries);
        that.setData({
          sbList: res.data.sysDictionaries
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