// !Program/Laboratory Reservation/miniprogram/pages/questionShow/questionShow.js
import {over} from '../../util';
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
        questionList:[],
        isQuestion:true
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
        const that = this;
        wx.cloud.callFunction({
            name:'searchQuestion'
        }).then(res => {
            let newQuestionList;
            console.log(res)
            const { questionList } = res.result;
            console.log(questionList)
            if (questionList.length === 0) {
                that.setData({
                    isQuestion:false
                })
            } else {
            newQuestionList = questionList.filter(item => {
               return over(item.createTime,90) === false;
            })
            console.log(newQuestionList)
            that.setData({
                questionList:newQuestionList
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