import home from './home';
import healthCheck from './healthCheck';

function router(app) {
	app.get('/ping', healthCheck);
	app.get('/', home);
}
export default router;