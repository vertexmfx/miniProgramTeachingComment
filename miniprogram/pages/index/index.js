//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // wx.clearStorage({
    //   success: (res) => {
    //     wx.navigateTo({
    //       url: '../login/login',
    //     })
    //   },
    // })
    let studentId=wx.getStorage({
      key: 'StudentId',
      success:res=>{
        getApp().globalData.StudentId=res.data
        wx.switchTab({
          url: '../navigate/my',
        })
      },
      fail:function(){
        wx.navigateTo({
          url: '../login/login',
        })
      }
    })},
    navigateToTeacher:function(){
      wx.navigateTo({
        url: '../teacher/teacher-navigate/comment',
      })
    }
    // console.log(studentId)


})
