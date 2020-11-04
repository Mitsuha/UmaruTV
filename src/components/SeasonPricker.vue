<template>
    <div class="season-pricker">
        <div class="season">
            <div>第一季</div>
            <div>星辰远征军</div>
            <div>不灭钻石</div>
            <div>黄金之风</div>
        </div>
        <div class="episode">

        </div>
    </div>
</template>

<script>
    export default {
        name: "SeasonPricker"
    }
</script>

<style lang="scss">
    .season-pricker{
        margin-left: 10px;
        .season{
            div{
                position: relative;
                display: inline-block;
                padding: 0 14px 0 10px;
                line-height: 34px;
                background: #f4f5f7;
                color: #222222;
                margin-right: 25px;
                border-top: 1px solid #e5e9ef;
                border-bottom: 1px solid #e5e9ef;
            }

            div:before{
                content: "";
                position: absolute;
                width: 10px;
                height: 36px;
                left: -10px;
                top: -1px;
                background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAkCAYAAABfVsDFAAAAAXNSR0IArs4c6QAAAfRJREFUOBGNk81u00AQx2fW65jEVSRIgsqlHHkCXgCJCxdegba3SlUrHgSEQFyQaA+8CK8ALwAH8mVVbba0aez1DrMmTnZrO+1ePDvzm//MrHcReI2ms1eG6JTNgd03LbSBP5OLafwgHEgpmrjCX0YFiiLvblgI+Jpps9hIcvC/sow+p5kx94KfPGz/AqDvnLCRL3u20IdFpi830d5Uw2T2uxPJHRm4Gut030vwLsvoah32LQ+Ogu5JlmskQz613Hlwr4cKSHzLcqPraA+2gAjFp5tUp/eCtx9t/STCH5nOK3xFuVBH8T7VRt2mvaMrg0QUjBI1jtthP3DuTK0yIuaI8DFNzbwUKCq6G9eWIL+kOvcq1yrbpMEgHiHQhXvkjbBNIAQNtP5BjbBSqoeAfXHXgFb1ag77/My8O+sNYCG7+OhwnKhhpy23A35G5VpbpYe/07PL11y+44I2XAvzAzsOQ9F18guzAieJekZAz1syuM1WlTXRYdSSYYVkhzfgmCjOp7NJN27F/MsrvNcGJWqXe6U60GZ6MO/fcq9bFcmlYwVPzv6+5Mr9ppdt+RVs8vwoimSj6goens+fGsAXrFqdatnCCka9OGiF7pVxCMcs2uA/thdJETn+WrOAubYx7i2vRQGk9fO5vrle6FO6occNXOH+Bwb4n8RqXkuaAAAAAElFTkSuQmCC");
            }

            div:after{
                content: "";
                position: absolute;
                width: 10px;
                height: 36px;
                left: 99%;
                top: -1px;
                background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAkCAYAAABfVsDFAAAAAXNSR0IArs4c6QAAAfVJREFUOBGF1b1uE0EQAOCZ/fFZcWIJGScRDR0SouAV6HgBJKSUVEGKhHgEeigIUsQTUEDJO9AhGpBoEcKxk5jYju3z3f5l5hQj29zdbuG73f12vLO7dwd/BiNzej7+3j8bPYVYmc7SMJrMw+nZaN47H7+s88iYgfMBZqmZaVT3ut1Wr2yQWDZKgaCVlMbbw2Xb5vUf5o6GFk0QcBRCUJuQ62uYo0tEObiYPIliBg0t25REaaJrkRlrVTQ9GFxOH3J9tfyHuTPRMnHGHq1Cvi/FSglO8GA4DO3VAaVYIC2jFCHzk2dRzIASbdFlLdHSyIylFIAAt3rD8WOuc6nE3Nls6G1w8ILvudRipWjygI96l+ndKCYJWguBxjyPYgaJEglAOKTzgrXTKKLReaFMsf93ej+KiwGIHoPfiWL6e34wmnud9rcoNtY7iv4REfMoznK7AFTHxXT4p6oY5yEg/rzTbX1lUxs5y+wVgTfLYJWYn3YPYPZutz9FcW78glb4HSVmazGtFhhrgwzy/RLytXQalJinTfu8u7vdj2JarrmQ+HYVlka2ltIC+EU79iWKc+uuaHFfb0Kur83Z03JRXmG/u/MhinPrM0A84XNQi3kTMuNcItVJGeS24m1pXYB0kaciiFedztbvKgw3n4kf9NY/qEQ3Hdf5GsAxnUDMHAAAAABJRU5ErkJggg==");
            }
        }
    }
</style>