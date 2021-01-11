const app = new Vue({
	el:"#root",
	data: {
		inputUser: '',
		albums: []
	},
	methods: {
		search() {
			axios.get('http://localhost/Esercizi/php-ajax-dischi/Esercizio-2/index.php', {
				params: {
					input_filter: this.inputUser
				}
			})
			.then(result => {
				this.albums = result.data.response;
			})
		},
	},
	mounted() {
		axios.get('http://localhost/Esercizi/php-ajax-dischi/Esercizio-2/index.php'
		)
		.then(result => {
			this.albums = result.data.response;
		})
	},
});
