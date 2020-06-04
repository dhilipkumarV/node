function healthCheck(req, res) {
	res.status(200).send('pong');
}
export default healthCheck;