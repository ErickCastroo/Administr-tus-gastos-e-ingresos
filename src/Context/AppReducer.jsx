

export default (state, action) => {
    switch (action.type) {
        case "AGREGAR_TRANSACCION":
            return {
                ...state,
                transaccion: [...state.transaccion, action.payload]
            }
        case "BORRAR_TRANSACCION":
            return{
                ...state,
                transaccion: state.transaccion.filter(
                    (transaccion) => transaccion.id !== action.payload)
            };
        default:
            return state;
    }
}