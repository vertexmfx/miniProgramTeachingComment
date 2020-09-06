// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StudentId:null,
    Passwd:null
  },

  studentIdChange:function(e){
    // console.log('studentid changed.'+e.detail.value)
    this.setData({
      StudentId:e.detail.value
    })
  },

  passwdChange:function(e){
    this.setData({
      Passwd:e.detail.value
    })
  },

  tapLogin:function(){
    let studentId=this.data.StudentId
    let passwd=this.data.Passwd
    if (studentId!=null && passwd!=null){
        let loginInfo={
          'request':"studentLogin",
          'StudentId':studentId,
          'Passwd':passwd
        }
        wx.request({
          url: 'http://vertex.tpddns.cn:81/html/miniProgpingjiao/php/studentFunc.php',
          data:loginInfo,
          method:"POST",
          timeout:1000,
          success:function(res){
            console.log(res)
            if(res.data!=null){
              wx.setStorage({
                data:res.data.StudentName,
                key: 'StudentName',
              })
              wx.setStorage({
                data: res.data.School,
                key: 'School',
              })
              wx.setStorage({
                data: res.data.StudentId,
                key: 'StudentId',
              })
              wx.setStorage({
                data: res.data.Grade,
                key: 'Grade',
              })
              wx.setStorage({
                data: res.data.Major,
                key: 'Major',
              })
              wx.setStorage({
                data: res.data.Phone,
                key: 'Phone',
              })
              wx.setStorage({
                data: res.data.Gender,
                key: 'Gender',
              })
              wx.showToast({
                title: '登录成功',
                icon:"success",
                timeout:1000
              })
              wx.switchTab({
                url: '../navigate/my',
              })
            }
            else{
              wx.showToast({
                title: '登陆失败',
                icon:"fail"
              })
            }
          }
        })
    }else{
      wx.showToast({
        title: '登陆失败',
        icon:"fail"
      })
    }
  },

  tapReg:function(){
    wx.navigateTo({
      url: './reg',
    })
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



})