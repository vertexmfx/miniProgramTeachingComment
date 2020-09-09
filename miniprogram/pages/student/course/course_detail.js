// miniprogram/pages/student/course/course_detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        CourseId:'',
        Dialog:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            CourseId:options.CourseId
        })
        let tmpArr={request:"getCourseInfo",
        CourseId:this.data.CourseId}
        wx.request({
          url: 'http://vertex.tpddns.cn:81/html/miniProgpingjiao/php/courseFunc.php',
          method:"POST",
          data:tmpArr,
          timeout:1000,
          success:res=>{
              this.setData({
                  CourseInfo:res.data
              })
          }
        
        })
    },

    quitCourse:function(){
        wx.getStorage({
          key: 'StudentId',
          success:res=>{
            wx.request({
                url: 'http://vertex.tpddns.cn:81/html/miniProgpingjiao/php/courseFunc.php',
                data:{
                    request:"quitCourse",
                    CourseId:this.data.CourseId,
                    StudentId:res.data
                },
                method:"POST",
                success:res1=>{
                    if(res1.data==1){
                        wx.showToast({
                          title: '已退出课程',
                          icon:"success",
                          timeout:500
                        })
                        wx.switchTab({
                          url: '../../navigate/course',
                        })
                    }else{
                        wx.showToast({
                          title: '操作失败',
                          icon:"loading",
                          timeout:500
                        })
                    }
                }
              })
          }
        })
    },
    showDialog:function(){
        this.setData({Dialog:true})
    },
    cancelQuit:function(){
        this.setData({Dialog:false})
    },
    confirmQuit:function(){
        this.quitCourse()
    },

    studentList:function(){
        wx.navigateTo({
          url: './student_list?CourseId='+this.data.CourseId,
        })
    },
    teacherList:function(){
        wx.navigateTo({
          url: './teacher_detail?CourseId='+this.data.CourseId,
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