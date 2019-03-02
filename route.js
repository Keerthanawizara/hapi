

const Wolf = require('./models/wolves');

module.exports = [
	{
		method: 'GET',
		path: '/api/wolves',
		handler(request,h) {
			Wolf.find({}, '', function (error, wolves) {
				if (error) {
					console.error(error);
				}

				h.response(wolves);
			});
		}
	},
	{
		method: 'POST',
		path: '/api/wolves/{name}',
		handler(request, h) {
			const wolf = new Wolf({
				name: request.params.name
			});
			wolf.save((error, wolf) => {
				if (error) {
					console.error(error);
				}
               reply(wolf);
			});
		}
	}
];