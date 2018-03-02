export default function subReducerFeature(stateSaatIni = {data:[], loading:'tolong klik disini untuk cari gambar'}, aksi){

	switch (aksi.type){
		case 'GET':
		console.log('ajsi');
			return Object.assign({}, stateSaatIni, {
				data: aksi.data, 
				loading: 'selesai get'
			});
		case 'LOADING':
        return Object.assign({},stateSaatIni,{
          loading: "loading..."
        });
		default: 
			return stateSaatIni;
	}
}