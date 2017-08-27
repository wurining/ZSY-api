// invoked in worker
// think.beforeStartServer(async () => {
//     const config = think.model('config');
//     // 将所有的自定义路由保存在字段为 router 的数据上
//     const data = await config.where({key: 'router'}).find();
//     const routers = JSON.parse(data.value);
//     // 触发 routerChange 事件，将新的自定义路由设置到 think.app.routers 对象上
//     // routers 格式和自定义路由格式相同，二维数组
//     think.app.emit('routerChange', routers);
// })
// think.beforeStartServer(async () => {
//     const filesPath = think
//         .getdirFiles(think.APP_PATH, think.APP_PATH)
//         .filter(
//             function (filePath) {
//                 if (/common\/config\/router\.js$/.test(filePath)) {
//                     return false;
//                 }
//                 return /[a-z]*\/config\/router\.js$/.test(filePath);
//             });
//
//     let routers = [];
//     for (let i = 0; i < filesPath.length; i++) {
//         let path = require(filesPath[i]);
//         for (let j = 0; j < path.length; j++) {
//             routers.push(path[i]);
//         }
//     }
//     think.app.emit('routerChange', routers);
// });
