export default function sandybox(state = [], action) {
    switch (action.type) {
        case 'SET_JS':
            return {
                ...state,
                js: action.data
            }
        case 'SET_HTML':
            return {
                ...state,
                html: action.data
            }
        case 'SET_CSS':
            return {
                ...state,
                css: action.data
            }
        default:
            return state
    }
}