import express from 'express';
import PropertiesReader from 'properties-reader';

const app: express.Express = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(3000, () => {
  console.log('Start on port 3000.');
});

// バッチ実行
app.post('/execbat', (req: express.Request, res: express.Response) => {
  // ログ出力
  console.log(JSON.stringify(req.body));

  // iniファイル修正
  modifyIni(req.body['path']).then(
    (data) => {
      // 修正に成功した場合、バッチを実行する
      execBat();
      res.send('OK');
    },
    (err) => {
      // 修正に失敗した場合
      console.log('ini modify error');
      res.send('NG');
    }
  );
});

// ini書き換え
const modifyIni = (path: string) => {
  const iniPath = './bat/sample.ini';
  const props = PropertiesReader(iniPath);
  props.set('hoge.fuga', path);

  return props.save(iniPath);
};

// バッチ実行
const execBat = () => {
  const appPath = '.\\bat\\sample.bat';
  const argument = '';
  const cmd = appPath + ' ' + argument;

  require('child_process').execSync(cmd, (err: string, stdout: string, stderr: string) => {
    if (err) console.log('err:', err);
    if (stdout) console.log('stdout:', stdout);
    if (stderr) console.log('stderr:', stderr);
  });
};
