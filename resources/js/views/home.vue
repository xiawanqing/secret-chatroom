<template>
    <div class="page" id="home">
        <div class="top-banner">
            <span class="typewriter">{{title}}</span>
        </div>
        <div class="container mb-4">
            <div class="row mt-4" style="height: 100px">
                <div class="col col-4 centered">
                    <img src="/public/graphics/b1/avatar.png">
                </div>
                <div class="col col-7 speech-bubble m-2 converstion">
                    红烧肉是最好吃的
                </div>
            </div>
            <div class="row mt-4"></div>
            <div class="row mt-4">
                <div class="col pl-4">
                    <div class="item">
                        <router-link to="/new">
                            <div>
                                <img class="icon-1" src="/resources/img/book.png"/>
                                <div class="title">新的游戏</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col px-4">
                    <div class="item">
                        <div>
                            <img class="icon-1" src="/resources/img/disk.png"/>
                            <div class="title">存档/读档</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col pl-4">
                    <div class="item">
                        <router-link to="/new">
                            <div>
                                <img class="icon-1" src="/resources/img/history.png"/>
                                <div class="title">相册</div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col px-4">
                    <div class="item">
                        <div>
                            <img class="icon-1" src="/resources/img/download.png"/>
                            <div class="title">DLC</div>
                        </div>
                    </div>
                </div>
            </div>
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