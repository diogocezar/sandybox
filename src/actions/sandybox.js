export function setJs(js) {
    return {
        type: 'SET_JS',
        data: js
    }
}

export function setHtml(html){
    return{
        type: 'SET_HTML',
        data: html
    }
}

export function setCss(css){
    return{
        type: 'SET_CSS',
        data: css
    }
}