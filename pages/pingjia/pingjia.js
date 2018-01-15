// var memberId = getApp().data.memberId;
Page({
 data: {
  name: '',
  phoneNumber: '',
  star1: '☆',
  star2: '☆',
  star3: '☆',
  star4: '☆',
  star5: '★',
  str: '请点击星星评价'
 },
 tousu: function () {
  wx.navigateTo({
   url: '../tousu/tousu'
  })
 },
 click_1: function () {
  console.log("1星评价")
  if (this.data.star1 == "★") {
   this.setData({
    star5: '☆',
    star4: '☆',
    star3: '☆',
    star2: '☆',
    str: this.data.str1
   })
  } else {
   this.setData({
    star1: '★',
    str: this.data.str1
   })
  }

 },
 click_2: function () {
  console.log("2星评价")
  if (this.data.star2 == '★') {
   this.setData({
    star5: '☆',
    star4: '☆',
    star3: '☆',
    str: this.data.str2
   })
  } else {
   this.setData({
    star1: '★',
    star2: '★',
    str: this.data.str2
   })
  }
 },
 click_3: function () {
  console.log("3星评价")
  if (this.data.star3 == "★") {
   this.setData({
    star5: '☆',
    star4: '☆',
    str: this.data.str3
   })
  } else {
   this.setData({
    star1: '★',
    star2: '★',
    star3: '★',
    str: this.data.str3
   })
  }
 },
 click_4: function () {
  console.log("4星评价")
  if (this.data.star4 == '★') {
   this.setData({
    star5: '☆',
    str: this.data.str4
   })
  } else {
   this.setData({
    star1: '★',
    star2: '★',
    star3: '★',
    star4: '★',
    str: this.data.str4
   })
  }
 },
 click_5: function () {
  console.log("5星评价");
  this.setData({
   star1: '★',
   star2: '★',
   star3: '★',
   star4: '★',
   star5: '★',
   str: this.data.str5
  })
 },
 callPhone: function () {
  wx.makePhoneCall({
   phoneNumber: this.data.phoneNumber//仅为示例，并非真实的电话号码
  })
 },
 onLoad: function (options) {
  if (this.data.star5 == '★') {
   this.setData({
    star1: '★',
    star2: '★',
    star3: '★',
    star4: '★',
    str: '服务态度非常好'
   })
  }
  console.log(options.storeId)
  console.log(options.orderId)
  console.log(options.storename)
  console.log(options.money)
  this.setData({
   storeId: options.storeId,
   orderId: options.orderId,
   storename: options.storename,
   money: options.money
  })
  var that = this;
  // wx.request({
  //  url: getApp().data.url + '/ws/business/evaluateQry',
  //  data: { "params": { "orderId": getApp().data.memberId, "storeId": this.data.storeId } },
  //  method: 'POST',
  //  header: {
  //   "Content-Type": "application/json"
  //  },
  //  success: function (res) {
  //   console.log(res.data);
  //   console.log(res.data.object.list[0].secondList[0].NAME)
  //   that.setData({
  //    name: res.data.object.storeName,
  //    phoneNumber: res.data.object.phone,
  //    str1: res.data.object.list[0].secondList[0].NAME,
  //    str2: res.data.object.list[1].secondList[0].NAME,
  //    str3: res.data.object.list[2].secondList[0].NAME,
  //    str4: res.data.object.list[3].secondList[0].NAME,
  //    str5: res.data.object.list[4].secondList[0].NAME,
  //   })
  //  },
  //  fail: function (res) {
  //   // fail
  //  },
  //  complete: function (res) {
  //   // complete
  //  }
  // })
 },
 content: function (e) {
  this.data.content = e.detail.value;
  this.setData({
   content: e.detail.value
  })
  console.log(this.data.content)
 }
})