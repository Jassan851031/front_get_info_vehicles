const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'https://60b4182c4ecdc1001748031a.mockapi.io/test',
			transporte: [],
			usuarios: [],
			resumen: []
		},

		actions: {

			getResumen: () => {
				const store = getStore();
				fetch(store.path + '/resumen')
					.then(resp => resp.json())
					.then(data => {
						setStore({ resumen: data });
						//console.log(data);

					})
					.catch(err => console.log(err));
			},

			getUsuarios: () => {
                const store = getStore();
                fetch(store.path + '/usuarios', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
						setStore({ usuarios: data });
						//console.log('wewe');
                    })
				},

			getTransporte: () => {
                const store = getStore();
                fetch(store.path + '/transportes', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
						setStore({ transporte: data });
						//console.log('wewe');
                    })
				},

			addViaje: (newViaje) => {
				const store = getStore();
				const data = newViaje;

				fetch(store.path + '/form', {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					}
				})
				.then(resp => resp.json())
				.then(data => console.log(data))
			},
		}
	};
};

export default getState;