<template>
    <div class="page" id="home">
        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label for="email" class="col-12 control-label">邮箱</label>

                                    <div class="col-12">
                                        <input id="email" type="email" class="form-control" name="email" required autofocus>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password" class="col-12 control-label">密码</label>
                                    <div class="col-12">
                                        <input id="password" type="password" class="form-control" name="password" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-12">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input" name="remember"> 记住账号
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-12 align-middle">

                                        <router-link class="btn btn-primary" to="/home">确定</router-link>
                                        <a class="btn btn-link" href="/register">
                                            注册新账号
                                        </a>
                                    </div>
                                </div>
                            </form>
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
                name: '',
                password: ''
            }
        }
    });
</script>