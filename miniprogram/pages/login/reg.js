

// pages/login/reg.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
            "text": "对话",
            "iconPath": "../../images/tabbar_icon_chat_default.png",
          "selectedIconPath": "../../images/tabbar_icon_chat_active.png",
            dot: true
        },
        {
            "text": "设置",
          "iconPath": "../../images/tabbar_icon_setting_default.png",
          "selectedIconPath": "../../images/tabbar_icon_setting_active.png",
            badge: 'New'
        }],
        radioItems: [
            {name: 'cell standard', value: '0', checked: true},
            {name: 'cell standard', value: '1'}
        ],
        schools:['国防科技大学','国防野鸡大学','国防体育大学'],
        schoolIndex:0,
        grades:[2017,2018,2019,2020],
        gradeIndex:0,
        majors:['大数据工程','指挥信息系统工程','目标工程','仿真工程'],
        majorIndex:0,
        formData:{

        }
    },


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
    bindCountryChange: function(e) {
        console.log('picker country 发生选择改变，携带值为', e.detail.value);

        this.setData({
            schoolIndex: e.detail.value
        })
    },

    bindGradeChange: function(e) {
        console.log('picker grade 发生选择改变，携带值为', e.detail.value);

        this.setData({
            gradeIndex: e.detail.value
        })
    },

    bindMajorChange: function(e) {
        console.log('picker major 发生选择改变，携带值为', e.detail.value);

        this.setData({
            majorIndex: e.detail.value
        })
    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }},

    formInputChange(e) {
            const {field} = e.currentTarget.dataset
            console.log(field);
            this.setData({
                [`formData.${field}`]: e.detail.value
            })
        },
    
    tabChange(e) {
        console.log('tab change', e)
    },


    testDB:function(){
        // console.log("testdb.");
        wx.request({
            url: 'http://vertex.tpddns.cn:81/html/miniProgpingjiao/php/index.php',
            success:function(res){
                console.log(res.data)
            }
          })
    },

    submitForm() {
        this.selectComponent('#regForm').validate((valid, errors) => {
            console.log('valid', valid, errors)
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        error: errors[firstError[0]].message
                    })
                }
            } else {
                let passwd=this.data.formData.passwd;
                let passwd2=this.data.formData.passwd2;
                if(passwd!=passwd2){
                    wx.showToast({
                      title: '请确认密码正确',
                      icon:"loading",
                      duration:1000
                    })
                }else{
                     var studentInfo={
                        'request':"insertStudent",
                        'StudentId':this.data.formData.id,
                        'StudentName':this.data.formData.name,
                        'Phone':this.data.formData.mobile,
                        'School':this.data.schools[this.data.schoolIndex],
                        'Major':this.data.majors[this.data.majorIndex],
                        'Grade':this.data.grades[this.data.gradeIndex],
                        'Passwd':passwd,
                        "WechatId":'testmimiprog'
                    }
                    wx.request({
                      url: 'http://vertex.tpddns.cn:81/html/miniProgpingjiao/php/studentFunc.php',
                      data:studentInfo,
                      method:"POST",
                      timeout:1000,
                      success:function(e){
                          console.log(e)
                          if(e.data==="affected:1"){
                            wx.showToast({
                                title: '注册成功',
                                icon:"success",
                                duration:1000
                            })
                            wx.navigateTo({
                              url: './login',
                            })
                          }else{
                              wx.showToast({
                                title: '注册失败',
                                icon:"fail",
                                duration:1000
                              })
                          }
                          
                      }
                    }) 
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    

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