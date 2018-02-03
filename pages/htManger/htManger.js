// pages/htManger/htManger.js
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
    console.log(options.contractId)
    this.setData({
      contractId: options.contractId
    })
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
      url: `${getApp().data.url}miniApps/contract/getContract`,
      data: {
        "contractId": this.data.contractId,
      },
      method: 'POST',
      header: {
        "Content-Type": "application/json",
        "Cookie": getApp().data.jsessionid 
      },
      success: function (res) {
        console.log(res.data);
        console.log(res.data.contract.ceds);
        that.setData({
          shebeiList: res.data.contract.ceds,
          shebeiListLength: res.data.contract.ceds.length,
          contract_type: res.data.contract.contract_type,//设备类型
          first_party_company_name: res.data.contract.first_party_company_name,//甲方信息
          first_party_enterprise_number: res.data.contract.first_party_enterprise_number,//甲方信息
          first_party_iphone: res.data.contract.first_party_iphone,//甲方信息
          first_party_linkman: res.data.contract.first_party_linkman,//甲方信息



          second_party_iphone: res.data.contract.second_party_iphone,//乙
          second_party_linkman: res.data.contract.second_party_linkman,//乙
          secondt_party_company_name: res.data.contract.secondt_party_company_name,//乙
          secondt_party_enterprise_number: res.data.contract.secondt_party_enterprise_number,//乙
        


          // 第三方

          third_party_iphone: res.data.contract.third_party_iphone,//乙
          third_party_linkman: res.data.contract.second_party_linkman,//乙
          third_party_company_name: res.data.contract.third_party_company_name,//乙
          third_party_enterprise_number: res.data.contract.third_party_enterprise_number,//乙
      



          contract_closing_date: res.data.contract.contract_closing_date,//结束日期
          contract_signing_date: res.data.contract.contract_signing_date,//开始日期


          ticket_total_money: res.data.contract.ticket_total_money,//开票总金额






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