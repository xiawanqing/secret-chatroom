<template>
    <div class="page" id="home">
        <div class="top-banner row p-2">
            <div class="col col-4 pl-4">
                <span class="fas fa-signal pr-2"></span>中国移动
            </div>
            <div class="col col-4 centered">
                13:55
            </div>
            <div class="col col-4 right">
                <span class="fas fa-cog"></span>
            </div>
        </div>
        <div class="call-name-block">
            <div class="centered m-2"><img class="avatar-circle" src="/public/graphics/b1/avatar.png"></div>
            <p>Jumin Han</p>
        </div>
        <div class="centered my-4">
            <div class="call-status">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle last"></div>
            </div>
        </div>
        <div class="centered mt-2">
            <router-link to="/start"><img class="phone-circle m-4" src="/resources/img/phone-stop.png"/></router-link>
            <img class="phone-circle m-4" src="/resources/img/phone-rounded.png"/>
        </div>
    </div>
</template>

<script>
    export default({
        data: function () {
            return {
                title: 'Welcome to Mystic Messenger'
            }
        }
    });
</script>