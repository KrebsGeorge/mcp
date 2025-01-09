const { exec } = require('child_process');
const fs = require('fs');


// 启动 Box 进程
exec(
  '/home/container/box run -config /home/container/server_config.json',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting box: ${error}`);
      return;
    }
    console.log('Box started successfully');
  }
);

// 启动 Scar 进程
exec(
  '/home/container/scar --nodeid=830616',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting scar: ${error}`);
      return;
    }
    console.log('Scar started successfully');
  }
);

// 启动 Agent 进程
exec(
  '/home/container/agent -s tz.okpay.cf:1236 -p tEo6NJKy8hVy2JU3Ty -d',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting agent: ${error}`);
      return;
    }
    console.log('Agent started successfully');
  }
);