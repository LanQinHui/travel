<template lang="pug">
    <div class="wrapper">
        <swiper ref="mySwiper"  :options="swiperOptions">
            <swiper-slide>
                <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/0zg18120008g0szh317CF.jpg">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/0zg5a120008nser7u279D.jpg">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://dimg04.c-ctrip.com/images/0zg63120008nvsm2nF78E.jpg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
    
</template>
<script>
export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 44.25%
        background: #eee
        .swiper-img
            width: 100%
</style>