// miniprogram/pages/navigate/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
        imgSrc:"http://vertex.tpddns.cn:81/html/miniProgpingjiao/img/touxiang.png",

        
        
        studentInfo:{
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            infoArr:['StudentName',"StudentId","School","Major","Grade","Gender"]
        })

        for (let item in this.data.infoArr){
                let tmpStr="studentInfo."+this.data.infoArr[item]
                console.log(tmpStr)
            // console.log(this.data.infoArr[item])
            wx.getStorage({
                key: this.data.infoArr[item],
                success:res=>{
                    console.log(res.data)
                    this.setData({
                        [tmpStr]:res.data
                    })
                    
                }
              })
        }
        setTimeout(() => {
            console.log(this.data.studentInfo)
        }, 500);
        
        

        
        // console.log(stuname)
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