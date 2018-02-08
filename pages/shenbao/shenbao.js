// pages/addShebei/addShebei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sbList: [],
    index: 0,
    sbName: 0,
    array: ["请选择", "维修", "售后"],
    SheBeiList: {},
    equipsList: []
  },
  /**    
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      url: getApp().data.url
    })
    var that = this;
    // 获取申报设备列表接口
    wx.request({
      url: `${getApp().data.url}/miniApps/qysb/qysbList`,
      data: {
        "qyId": getApp().data.qyId
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Cookie": getApp().data.jsessionid
      },
      success: function (res) {
        // console.log(res.data.data);
        that.setData({
          sbList: res.data.data
        })
        // that.setData({
        //   ggxh: res.data.data[0].equipmentModel,
        //   sccj: res.data.data[0].manufactureFactory,
        //   ccbm: res.data.data[0].factoryCode,
        //   ccsj: res.data.data[0].deliveryDate
        // })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  // 添加描述监听
  desc: function (e) {
    this.data.desc = e.detail.value;
    console.log(this.data.desc)
  },
  // 设备名称picker
  bindPickerChange1: function (e) {
    this.setData({
      sbName: e.detail.value
    })
    // 取值（设备名称）
    console.log(this.data.sbName)
    console.log(this.data.sbList[e.detail.value].equipmentName)
    this.setData({
      shebeiName: this.data.sbList[e.detail.value].equipmentName
    })
    // 回填其他
    this.setData({
      ggxh: this.data.sbList[this.data.sbName].equipmentModel,
      sccj: this.data.sbList[this.data.sbName].manufactureFactory,
      ccbm: this.data.sbList[this.data.sbName].factoryCode,
      ccsj: this.data.sbList[this.data.sbName].deliveryDate
    })
    this.data.SheBeiList.equipmentName = this.data.shebeiName
    this.data.SheBeiList.equipmentModel = this.data.ggxh
    this.data.SheBeiList.manufactureFactory = this.data.sccj
    this.data.SheBeiList.factoryCode = this.data.ccbm
    this.data.SheBeiList.deliveryDate = this.data.ccsj
    console.log(this.data.SheBeiList)
  },
  // 申报类型
  bindPickerChange_type: function (e) {
    this.setData({
      index: e.detail.value
    })
    // 取值（申报类型）
    console.log(this.data.array[e.detail.value])
    this.setData({
      sb_type: this.data.array[e.detail.value]
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
            header: {
              "Content-Type": "application/json",
              "Cookie": getApp().data.jsessionid
            },
            success: function (res) {
              var data = JSON.parse(res.data)
              console.log(data)
              imgList.push(data.file);
              console.log(imgList);
              that.setData({
                img: imgList
              })
            }
          })
        }
      }
    })
  },
  // 继续添加
  jxtj: function () {
    console.log(this.data.img)
    if (this.data.img == undefined){
      wx.showModal({
        title: '提示',
        content: '至少上传以一张照片',
      })
    }else{
      this.data.SheBeiList.errorImage1 = this.data.img[0];
      this.data.SheBeiList.errorImage2 = this.data.img[1];
      this.data.SheBeiList.errorImage3 = this.data.img[2];
      this.data.SheBeiList.errorImage4 = this.data.img[3];
      this.data.SheBeiList.errorImage5 = this.data.img[4];
      this.data.SheBeiList.errorDescription = this.data.desc;
      console.log(this.data.SheBeiList)
      var logs1 = wx.getStorageSync('logs1') || []
      logs1.unshift(this.data.SheBeiList)
      wx.setStorageSync('logs1', logs1)
      wx.navigateTo({
        url: '../shenbao/shenbao',
      })
      this.data.equipsList.push(this.data.SheBeiList)
      console.log(this.data.equipsList)
    }
  },
  // 保存提交
  bc: function () {
    if (this.data.img == undefined){
      wx.showModal({
        title: '提示',
        content: '至少上传以一张照片',
      })
    }else{
      this.data.SheBeiList.errorImage1 = this.data.img[0] || "";
      this.data.SheBeiList.errorImage2 = this.data.img[1] || "";
      this.data.SheBeiList.errorImage3 = this.data.img[2] || "";
      this.data.SheBeiList.errorImage4 = this.data.img[3] || "";
      this.data.SheBeiList.errorImage5 = this.data.img[4] || "";
      this.data.SheBeiList.errorDescription = this.data.desc;
      console.log(this.data.SheBeiList)
      var logs1 = wx.getStorageSync('logs1') || []
      logs1.unshift(this.data.SheBeiList)
      wx.setStorageSync('logs1', logs1)
      var that = this;
      // 获取申报设备列表接口
      console.log(that.data.sb_type)
      if (that.data.sb_type != undefined) {
        wx.request({
          url: `${getApp().data.url}/miniApps/order/createOrder`,
          data: {
            "order": {
              "qyId": getApp().data.qyId,
              "orderType": this.data.sb_type,
              "companyName": getApp().data.companyName,
            },
            "equips": wx.getStorageSync('logs1')
          },
          method: 'POST',
          header: {
            "Content-Type": "application/json",
            "Cookie": getApp().data.jsessionid
          },
          success: function (res) {
            console.log(res.data);
            if (res.data.success == true) {
              wx.clearStorageSync();
              wx.showToast({
                title: '申报成功',
              })
              wx.switchTab({
                url: '../index/index',
              })
            } else {
              wx.clearStorageSync();
              wx.showModal({
                title: '提示',
                content: '申报失败，请重试',
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

      } else {
        wx.showModal({
          title: '提示',
          content: '参数有无，请选择申报类型',
        })
      }
    }
  },
})