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
  stars:""
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
    str: this.data.str1,
    stars:1
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
    str: this.data.str2,
    stars: 2
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
    str: this.data.str3,
    stars: 3
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
    str: this.data.str4,
    stars: 4
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
   str: this.data.str5,
   stars: 55
  })
 },
 onLoad: function (options) {
   this.setData({
     id: options.orderId,
   })
  if (this.data.star5 == '★') {
   this.setData({
    star1: '★',
    star2: '★',
    star3: '★',
    star4: '★',
    str: '服务态度非常好'
   })
  }
  var that = this;
 },
 content: function (e) {
  this.data.content = e.detail.value;
  this.setData({
   content: e.detail.value
  })
  console.log(this.data.content)
 },
 pingjia: function () {
   console.log(this.data.stars)
   wx.request({
     url: `${getApp().data.url}/miniApps/order/orderEvaluate`,
     data: {
       "orderId": this.data.id,
       "evaluate": this.data.content,//评价内容
       "evaluateLevel": this.data.stars//星级
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
           title: '评价成功',
         })
         wx.navigateBack({
           url: "../index/index"
         })
       } else {
         wx.showModal({
           title: '提示',
           content: '评价失败，请稍后重试',
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
})
