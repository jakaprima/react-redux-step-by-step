
export	const logger = function(store){
		return function(next){
			return function(aksi){
				next(aksi);
				console.log(aksi);
			}
		}
	}

export	const laporanError = function(store){
		return function (next){
			return function (aksi){
				try{
					next(aksi);
				}catch(err){
					console.error('pesan error', aksi);
					console.error(err)

				}
			}
		}
	}

export	const thunkMiddleware = function(store){
		return function (next){
			return function (aksi){
				if (typeof aksi === 'function'){
					aksi(store.dispatch, store.getState());
				}else{
					next(aksi);
				}
			}
		}
	}