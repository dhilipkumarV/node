
function router(app) {
	app.get('/ping', (req, res) => {
		res.status(200).send('pong');
	});
}
export default router;