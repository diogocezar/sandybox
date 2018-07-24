export function setJS(js) {
    return {
        type: 'SET_JS',
        data: js
    }
}

export function setHTML(html){
    return{
        type: 'SET_HTML',
        data: html
    }
}

export function setCSS(css){
    return{
        type: 'SET_CSS',
        data: css
    }
}