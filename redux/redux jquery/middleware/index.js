// basic middleware
	// store parameter disini itu juga sama seperti object creator di membuat store dibawah
	// aksi parameter dibawah itu sama dengan aksi di dispatch
	// contoh di dispatch ada kurangi function yang mengembalikan object
	// object tersebut dipass ke aksi dibawah ini
	// next itu berhubungan sama reducer
	const logger = function(store){
		return function(next){
			return function(aksi){
				// console.log('data getState sebelum', store.getState());
				// console.log('data aksi sebelum', aksi);
				next(aksi);
				console.log(aksi);
				// console.log('data getState sesudah', store.getState());
				// console.log('data aksi sesudah', aksi);
			}
		}
	}

	// membuat dua middleware
	// ketika next method diatas dijalankan dan ada parameter setelahnya maka akan dijalankan middleware kedua
	// ini untuk menghandle synchronous function
	const laporanError = function(store){
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

	const thunkMiddleware = function(store){
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