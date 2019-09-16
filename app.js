const express = require('express'); // 引入express
var bodyParser = require('body-parser');
const app = express();

//bodyParser API
app.use(bodyParser.urlencoded({ extended: false }));

//设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

let allUserInfo = [{
  userId: 1,
  userName: '小明',
  age: '18',
  address: '浙江杭州'
}, {
  userId: 2,
  userName: '张三',
  age: '20',
  address: '浙江宁波'
}, {
  userId: 3,
  userName: '李四',
  age: '21',
  address: '浙江温州'
}];

app.get('/getUserInfo', (req, res) => {
  // let getId = parseInt(req.query.userId); // 将userId变成Number类型
  // let sendValue;
  console.log(req.query);
  // 根据传过来的userId，获取用户的info，并返回给客户端
  // for (let i = 0, len = allUserInfo.length; i < len; i++) {
  //   if (allUserInfo[i].userId === getId) {
  //     sendValue = allUserInfo[i];
  //   }
  // }
  res.send(JSON.stringify());
});
app.post('/addUser', (req, res) => {
  let query = req.body;
  allUserInfo.push({
    userId: allUserInfo[allUserInfo.length - 1].userId + 1,
    userName: query.userName,
    age: query.age,
    address: query.address
  });
  res.send('OK');
});

const server = app.listen(3000, function () {
  console.log('Express app server listening on port %d', server.address().port);
});
