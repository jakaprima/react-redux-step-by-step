export default function images(state = {data:[],
  loading:"Please click the 'Random Images' button"}, action){
    switch (action.type) {
      case 'IMAGES':
      console.log('test index', action.data)
        return {...state,
          data: action.data,
          loading: "loaded"
        };
      case 'IMAGES_LOADING':
        return {...state,
          loading: "loading..."
        };
      default:
        return state;
    }
}
