<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-font">
                        <icon-svg class="icon-svg-font" :icon-class="item.iconsName"/>
                    </div>
                    <p class="icons-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
             
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'HomeIcons',
    data() {
        return {
            iconsList: [{
                id: '0001',
                iconsName: 'gouwu',
                desc: '热门购物'
            },{
                id: '0002',
                iconsName: 'lunchuan',
                desc: '轮船'
            },{
                id: '0003',
                iconsName: 'haibian',
                desc: '海边'
            },{
                id: '0004',
                iconsName: 'reqiqiu',
                desc: '热气球'
            },{
                id: '0005',
                iconsName: 'daohang',
                desc: '导航'
            },{
                id: '0006',
                iconsName: 'fanchuan',
                desc: '帆船'
            },{
                id: '0007',
                iconsName: 'zhishengji',
                desc: '直升机'
            },{
                id: '0008',
                iconsName: 'weizhi',
                desc: '位置'
            },{
                id: '0009',
                iconsName: 'jiushengyi',
                desc: '救生衣'
            }]
        }
    },
    computed: {
        pages() {
            const pages = []
            this.iconsList.forEach((item,index) => {
                const page = Math.floor(index / 8);
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            });
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icons >>> .swiper-container
        // overflow hidden
        height: 0
        padding-bottom: 50%
    // background-color: green
    .icon
        position relative
        overflow: hidden
        height: 0
        float: left
        width: 25%
        padding-bottom: 25%
        // background-color: red
        .icon-font
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            // background-color: blue
            .icon-svg-font
                display: block
                margin: auto
                height: 100%
                width: 100%
        .icons-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height .44rem
            line-height: .44rem
            text-align: center
            color: #333
            ellipsis()
</style>