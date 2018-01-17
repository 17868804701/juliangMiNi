// pages/shebei/shebei.js
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
    var that = this;
    wx.request({
      url: `${getApp().data.url}/miniApps/qysb/qysbList`,
      data: { "qyId": getApp().data.qyId },
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Cookie": getApp().data.jsessionid 
      },
      success: function (res) {
        console.log(res.data);
        if (res.data.msg != "查询成功") {
          wx.showModal({
            title: '提示',
            content: '网络异常',
          })
        } else {
          that.setData({
            shebeiList: res.data.data,
            shebeiListLength: res.data.data.length
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  // del: function (e) {
  //   // miniApps / order / deleteRepairOrder
  //   console.log(e.currentTarget.dataset.id);
  //   this.setData({
  //     del_id: e.currentTarget.dataset.id
  //   })
  //   wx.showModal({
  //     title: '删除',
  //     content: '确定删除该设备嘛',
  //     success: function (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //         // 删除shebei
  //         wx.request({
  //           url: `${getApp().data.url}/miniApps/qysb/delEnterpriseEquipment`,
  //           data: {
  //             "orderId": e.currentTarget.dataset.id
  //           },
  //           method: 'POST',
  //           header: {
  //             "Content-Type": "application/json",
  //             "Cookie": getApp().data.jsessionid
  //           },
  //           success: function (res) {
  //             console.log(res.data);
  //             if (res.data.success == true) {
  //               wx.showToast({
  //                 title: '删除成功',
  //               })
  //               wx.reLaunch({
  //                 url: '../shebei/shebei',
  //               })
  //             } else {
  //               wx.showModal({
  //                 title: '提示',
  //                 content: '删除失败',
  //               })
  //             }
  //           },
  //           fail: function (res) {
  //             // fail
  //           },
  //           complete: function (res) {
  //             // complete
  //           }
  //         })
  //       } else {
  //         console.log('取消')
  //       }
  //     }
  //   })
  // },

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
  add:function(){
   wx.navigateTo({
    url: '../addShebei/addShebei',
   })
  }
})