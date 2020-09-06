// miniprogram/pages/navigate/course.js
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
        wx.getStorage({
          key: 'StudentId',
          success:res=>{
              this.setData({
                  studentId:res.data
              })
              console.log(this.data.studentId)
              let studentInfo={
                  "request":"getCourseList",
                  "StudentId":this.data.studentId
              }
              wx.request({
                url: 'http://vertex.tpddns.cn:81/html/miniProgpingjiao/php/studentFunc.php',
                data:studentInfo,
                timeout:1000,
                method:"POST",
                success:res=>{
                    let courseArr=new Array()
                    for (let courseidx in res.data){
                        courseArr.push(res.data[courseidx].CourseName)
                    }
                    this.setData({
                        courseArr:courseArr
                    })
                }
              })
          }
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