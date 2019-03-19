class ControllerBase {
  static getBaseRoute(req, res) {
		res.send({ message: 'Base Route' });
	}
}
export default ControllerBase