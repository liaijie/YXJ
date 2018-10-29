<template>
    <div class="applyInfo">
        <div class="title">
            <p>确认办卡信息</p>
        </div>
       <div class="personInfo">
           <div>
             <label><span>姓&nbsp;&nbsp;&nbsp;&nbsp;名</span><input type="text" placeholder="请输入申请人姓名"></label>
           </div>
           <div>
             <label><span>身份证号</span><input type="text" placeholder="请输申请人身份证号"></label>
           </div>
           <div>
             <label><span>手机号</span><input type="text" placeholder="请输入申请人手机号"></label>
           </div>
           <div>
             <label><span>短信验证码</span> <input type="text" placeholder="请输入短信验证码"><span class="send">发送</span></label>
           </div>
       </div> 
       <div class="agreeBtn">
           <input type="button" value="同意以下协议条款并提交申请">
        </div>   
        <div class="terms">
            <p>1. 我已认真阅读并完全同意：<router-link to="/termsdetail">《银信家平台服务协议》</router-link>的所有条款</p>
            <p>2. 必须准确填写申请人真实个人信息，否则无法判断此卡是否为首卡</p>
            <p>3. 收到办卡审核通知短信，在本平台中查询办卡进度已完成的，将获得随机1-188元现金红包；</p>
            <p>4. 在本平台申请信用卡不收取任何费用，凡是索取均为欺诈，请不要相信！禁止任何人利用本平台进行信用卡套现等违法行为。</p>
        </div> 
    </div>
</template>
<script>
export default {
    mounted:function(){
        console.log(this.$route.params.bank)
    }
    
}
</script>
<style lang="less">
*{
    margin: 0;
    padding: 0;
}
html,body{
    height: 100%;
}

.applyInfo{
    background-color: #e6e6e6;
    height: 100%;
    .title{
        height:1.2rem;
        background-color:#4090cd;
        p{
            font-size: .48rem;
            color: #fff;
            text-align: center;
            line-height: 1.2rem;
        }
    }
    .personInfo{
        background-color: #fff;
        height: 5.906667rem;
        padding-left: .493333rem;
        margin-bottom: .466667rem;
        div{
            height: 1.453333rem;
            padding-top: .56rem;
            box-sizing: border-box;
            font-weight: 500;
            border-bottom: 2px solid #e6e6e6;
            position: relative;
            &:last-child{
                border:none;
                height:1.333333rem;
            } 
            span{
                float: left;
                font-size: .4rem;
                width:2rem;
                 margin-right:.72rem
            }
            input{
                outline: none;
                border:none;
            }
            .send{
                float:right;
                border-left: 1px solid #e6e6e6;
                display:block;
                height:1.466667rem;
                position:absolute;
                right:0px;
                top:.026667rem;
                line-height: 1.466667rem;
                padding-left: .893333rem;
                font-size: .4rem;
                color:#4b71f6;
            }
        }
        
    }
    .agreeBtn{
        padding: 0 .333333rem;
        input{
             width: 100%;
             height: 1.186667rem;
             background-color: #4090cd;
             color:#fff;
             font-size: .426667rem;
             border-radius:.106667rem;
            
        }
    }
    .terms{
        padding: .466667rem .666667rem  0  .48rem;
        font-size: .293333rem;
        line-height: .453333rem;
        color:#8e8e8e;
        a{
            color:#4e74f6;
            text-decoration:none;
        }
    }
}

</style>
