let express = require('express');
//调用路由方法  返回实例
let router = express.Router();
//当客户端以GET方法访问/的时候  执行对应的回调函数
router.get('/', function (req, res) {
    res.render('index',
        {
            title: 'Alex Shan’s blog'
        });
});


module.exports = router;


