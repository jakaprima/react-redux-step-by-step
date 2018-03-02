export default function subReducerFeature(stateSaatIni = {data:[], loading:'tolong klik disini untuk cari gambar'}, aksi){

	switch (aksi.type){
		case 'GET':
		console.log('ajsi');
		//menggunakan spread operator
		console.log('di reducer', aksi.data)
			return { ...stateSaatIni,
				data: aksi.data, 
				loading: 'selesai get'
			};
		case 'LOADING':
		//menggunakan object destructuring
        return Object.assign({},stateSaatIni,{
          loading: "loading..."
        });
		default: 
			return stateSaatIni;
	}
}