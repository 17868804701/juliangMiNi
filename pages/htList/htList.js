// pages/htList/htList.js
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
      url: `${getApp().data.url}/miniApps/contract/contractList`,
      data: {
        "qyId": getApp().data.qyId,
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Cookie": getApp().data.jsessionid 
      },
      success: function (res) {
        console.log(res.data.contractList);
        if(res.data.success!=true){
            wx.showModal({
              title: '提示',
              content: '网络异常，请检查你的网络',
            })
        }else{
          that.setData({
            htList: res.data.contractList,
            htListLength: res.data.contractList.length
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
  htManger:function(){
    wx.navigateTo({
      url: '../htManger/htManger',
    })
  }
})