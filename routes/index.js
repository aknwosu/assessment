import Controller from '../controllers'

module.exports = (app) => {
	app.get('/api/v1/', Controller.getBaseRoute)
}