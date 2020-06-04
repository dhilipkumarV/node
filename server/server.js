import newrelic from 'newrelic';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from './misc/logger';
import setGlobals from './misc/setGlobals';
import router from './routes/router';

setGlobals();
const { PORT = 8000 } = process.env;
const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cookieParser());
app.use(function (req, res, next) {
	newrelic.setTransactionName(req.path);
  next();
});
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, (err) => {
	if (err) {
		throw err;
	}
	logger.info(`Running on: http://localhost:${PORT}/ping`);
});
router(app);

export default app;