<template lang="pug">
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
        <span class="iconfont">&#xe632;</span>城市/景点/游玩</div>
        <div class="header-right">城市
            <span class="iconfont">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
    name : 'HomeHeader'
}
</script>

<style lang="stylus" scoped> 
    @import "~styles/varibles.styl"
    .header
        display: flex  
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            margin-top: .12rem
            margin-bottom : .12rem
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rm
            line-height: .64rm
            margin-top: .12rem
            margin-bottom : .12rem
            margin-left: .2rem
            margin-right: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.24rem 
            float: right
            text-align: center
            margin-top: .12rem
            margin-bottom : .12rem
            
            
</style>>