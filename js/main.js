$('#submit').on('click',function(){
        var username = $('#inputUser').val();
        var password = $('#inputPassword').val();
        if(username==''){
            return notice('用户名不能为空');
        }
        if(password==''){
            return notice('密码不能为空');
        }
        userLen = username.length;
        pwdLen = password.length;
        if(userLen >=12){
            return notice('用户名长度不能大于12个字符');
        }
        if(userLen <5){
            return notice('用户名长度不能小于5个字符');
        }
        if (username.indexOf(" ") != -1) {
            return notice("用户名中不能有空格");
        }
        if(hasSpecialString(username)){
            return notice("用户名中不能有特殊字符");
        }

        if(pwdLen >=16){
            return notice('密码长度不能大于16个字符');
        }
        if(pwdLen <6){
            return notice('密码长度不能小于6个字符');
        }
        if(!/[A-Z]/.test(password)){
            return notice('密码中必须含有大写字母');
        }
        if(!hasSpecialString(password)){
            return notice("密码中必须含有特殊字符");
        }
        location.href='success.html?username='+username+'&pwd='+password;
        return false;
    });

    /**
     *
     * @description 验证字符中是否存在特殊字符
     * @param string
     * @returns {boolean}  true 有特殊字符|false 没有
     */
    function hasSpecialString(string){
        var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
            regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

        if(regEn.test(string) || regCn.test(string)) {
            return true;
        }else{
            return false
        }
    }

    function notice(msg){
        layer.open({
            content: msg
            ,style: 'background-color:rgba(0,0,0,.7); color:#fff; border:none;padding:15px 16px;width:60%' //自定风格
            ,time: 3
        });
    }


