// pages/addShebei/addShebei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sbList: [],
    index: 0,
    sbName: 0,
    date: '请选择出厂时间'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindSaveTap: function () {

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
    // 获取申报设备列表接口
    wx.request({
      url: `${getApp().data.url}/miniApps/qysb/qysbList`,
      data: {
        "qyId": "27"
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          sbList: res.data.data
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
  bc: function () {

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
  // 设备名称picker
  bindPickerChange1: function (e) {
    this.setData({
      sbName: e.detail.value
    })
    // 取值（设备名称）
    console.log(this.data.sbList[e.detail.value].equipmentName)
    this.setData({
      shebeiName: this.data.sbList[e.detail.value].equipmentName
    })
  },
  // 时间picker
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 图片上传
  up: function () {
    var that = this;
    wx.chooseImage({
      count: 5,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        var imgList = []
        console.log(tempFilePaths)
        for (var i = 0; i < tempFilePaths.length; i++) {
          wx.uploadFile({
            url: `${getApp().data.url}/miniApps/order/uploadFile`, //仅为示例，非真实的接口地址
            filePath: tempFilePaths[i],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: function (res) {
              var data = JSON.parse(res.data) 
              console.log(data.file)
              imgList.push(data.file);
              console.log(imgList)
            }
          })
        }
      }
    })
  },

  // 继续添加
  jxtj: function () {

  },
  // 保存提交
  bc: function () {
    var that = this;
    // 获取申报设备列表接口
    wx.request({
      url: `${getApp().data.url}/miniApps/order/createOrder`,
      data: {
        "value": {
          "qyId":"28",
          "orderType": "维修",
          "companyName": "阿里巴巴",
        },
        "equips": [
          {
            "equipmentName": "水管锅炉",
            "manufactureFactory": "欧亚学",
            "equipmentModel": "HGHGHGHHG",
            "factoryCode": "HHGHGGH",
            "deliveryDate": "2017-08-02",
            "errorDescription": "11111111111111111111111111",
            "errorImage1": "resources/upload/2018/01/15/201801151001110511252119.jpg",
          }
        ]
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data); 
    
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
})