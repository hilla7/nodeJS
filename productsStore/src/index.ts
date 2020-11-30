import { app } from './app';

app.set('port', process.env.APP_PORT || 8001);

app.listen(app.get('port'), () => {
  console.log('Application is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('Press CTRL+C to stop\n');
});
