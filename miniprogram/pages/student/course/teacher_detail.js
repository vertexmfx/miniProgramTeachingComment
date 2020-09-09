// pages/student/course/teacher-detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },
    showDetail:function(event){
        for(let i=0;i<3;i++){
            if(this.data.TeacherList[i].TeacherId==event.currentTarget.dataset.id){
                this.setData({
                    ['TeacherList['+i+'].showDetail']:true
                })
                break
            }
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            CourseId:options.CourseId,
            StudentId:getApp().globalData.StudentId
        })
        wx.request({
          url: 'http://vertex.tpddns.cn:81/html/miniProgpingjiao/php/courseFunc.php',
          method:"POST",
          timeout:1000,
          data:{
              request:"getTeacherList",
              CourseId:this.data.CourseId,
              StudentId:this.data.StudentId
          },
          success:res=>{
              this.setData({
                  TeacherList:res.data
              })
              for(let i in this.data.TeacherList){
                  this.data.TeacherList[i].showDetail=false
              }
              console.log(this.data.TeacherList)
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