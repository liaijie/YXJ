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
             <label><span>短信验证码</span> <input type="text" placeholder="请输入短信验证码"></label>
           </div>
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
        padding-left: .266667rem;
        div{
            height: 1.453333rem;
            padding-top: .56rem;
            box-sizing: border-box;
            font-weight: 500;
            span{
                float: left;
                font-size: .4rem;
                width:2rem;
            }
        }
        
    }
}

</style>
