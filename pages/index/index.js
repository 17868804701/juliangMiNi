Page({
  data: {
    selected: true,
    selected1: false,
    hidden: false,
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected3: false,
      selected4: false,
      selected2: true
    })
  },
  selected3: function (e) {
    this.setData({
      selected2: false,
      selected1: false,
      selected: false,
      selected4: false,
      selected3: true
    })
  },
  selected4: function (e) {
    this.setData({
      selected2: false,
      selected1: false,
      selected: false,
      selected3: false,
      selected4: true
    })
  },
  del: function (e) {
    // miniApps / order / deleteRepairOrder
    console.log(e.currentTarget.dataset.orderid);
    this.setData({
      del_id: e.currentTarget.dataset.orderid
    })
    wx.showModal({
      title: '删除',
      content: '确定删除改订单嘛',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          console.log(e.currentTarget.dataset.orderid);
          // 删除订单
          wx.request({
            url: `${getApp().data.url}/miniApps/order/deleteRepairOrder`,
            data: {
              "orderId": e.currentTarget.dataset.orderid
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
                  title: '删除成功',
                })
                wx.reLaunch({
                  url: '../index/index',
                })
              } else {
                wx.showModal({
                  title: '提示',
                  content: '删除订单失败',
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
          console.log('取消')
        }
      }
    })
  },
  pingjia: (e) => {
    console.log(e.currentTarget.dataset.orderid);
    wx.navigateTo({
      url: '../pingjia/pingjia?orderId=' + e.currentTarget.dataset.orderid,
    })
  },
  orderInfo: (e) => {
    console.log(e.currentTarget.dataset.orderid)
    wx.navigateTo({
      url: '../orderInfo/orderInfo?orderId=' + e.currentTarget.dataset.orderid,
    })
  },
  shenbao: function () {
    wx.navigateTo({
      url: '../shenbao/shenbao',
    })
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    // wx.showModal({
    //   title: '温馨提示',
    //   content: '待派工的订单长按可以删除',
    // })
  },
  onShow: function () {
    var that = this;
    // 待派工
    console.log(getApp().data.jsessionid)
    wx.request({
      url: `${getApp().data.url}/miniApps/order/getMiniAppsOrderList`,
      data: {
        "qyId": getApp().data.qyId,
        "maintainStatus": "待派工",
        "keyword": ""
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Cookie": getApp().data.jsessionid
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          dpgList: res.data.data,
          dpgListLength: res.data.data.length
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    }),
      // 待确认
      wx.request({
        url: `${getApp().data.url}/miniApps/order/getMiniAppsOrderList`,
        data: {
          "qyId": getApp().data.qyId,
          "maintainStatus": "待确认",
          "keyword": ""
        },
        method: 'POST',
        header: {
          "Content-Type": "application/json",
          "Cookie": getApp().data.jsessionid
        },
        success: function (res) {
          console.log(res.data.data);
          that.setData({
            dqrList: res.data.data,
            dqrListLength: res.data.data.length
          })
        },
        fail: function (res) {
          // fail
        },
        complete: function (res) {
          // complete
        }
      }),
      // 待评价
      wx.request({
        url: `${getApp().data.url}/miniApps/order/getMiniAppsOrderList`,
        data: {
          "qyId": getApp().data.qyId,
          "maintainStatus": "待评价",
          "keyword": ""
        },
        method: 'POST',
        header: {
          "Content-Type": "application/json",
          "Cookie": getApp().data.jsessionid
        },
        success: function (res) {
          console.log(res.data.data);
          that.setData({
            dpjList: res.data.data,
            dpjListLength: res.data.data.length
          })
        },
        fail: function (res) {
          // fail
        },
        complete: function (res) {
          // complete
        }
      }),
      // 已完成
      wx.request({
        url: `${getApp().data.url}/miniApps/order/getMiniAppsOrderList`,
        data: {
          "qyId": getApp().data.qyId,
          "maintainStatus": "已完成",
          "keyword": ""
        },
        method: 'POST',
        header: {
          "Content-Type": "application/json",
          "Cookie": getApp().data.jsessionid
        },
        success: function (res) {
          console.log(res.data.data);
          that.setData({
            ywcList: res.data.data,
            ywcListLength: res.data.data.length,
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
  // 确认订单
  okOrder: function (e) {
    console.log(e.currentTarget.dataset.orderid)
    wx.request({
      url: `${getApp().data.url}/miniApps/order /setOrderStatus`,
      data: {
        "qyId": getApp().data.qyId,
        "orderId": e.currentTarget.dataset.orderid,
        "maintainStatus": "待开工"
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
            title: '确认订单成功',
          })
          wx.reLaunch({
            url: '../index/index',
          })
        } else {
          wx.showToast({
            title: '提示',
            content: '确认订单失败',
          })
        }
        // that.setData({
        //   dqrList: res.data.data,
        //   dqrListLength: res.data.data.length
        // })
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
