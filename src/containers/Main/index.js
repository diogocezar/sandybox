import React, { Component, Fragment } from 'react';

import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'

import * as sandyboxActions           from '../../actions/sandybox'

import Preview from '../../components/Preview'
import Html    from '../../components/Html'
import Css     from '../../components/Css'
import Js      from '../../components/Js'

class Main extends Component {
    constructor(props) {
        super(props)
        this.baseUrl  = `http://localhost:3000/codes/`
        this.fileName = 'index'
        this.state    = {
            arrayFiles : [
                {'file' : 'html', 'url' : `${this.baseUrl}{hash}/${this.fileName}.html` },
                {'file' : 'css',  'url' : `${this.baseUrl}{hash}/${this.fileName}.css` },
                {'file' : 'js',   'url' : `${this.baseUrl}{hash}/${this.fileName}.js` }
            ]
        }
        this.preview   = document.getElementById("preview");
        this.htmlField = document.getElementById("html");
        this.cssField  = document.getElementById("css");
        this.jsField   = document.getElementById("js");

    }
    componentDidMount(){
        this.loadFiles(this.props.match.params.id)
        if (this.props.sandybox.html && this.props.sandybox.css && this.props.sandybox.js){
            this.sandyBoxRender();
        }
    }
    sandyBoxRender(){
        console.log(this.preview);
        //const iframeComponent = this.preview.contentWindow.document;
        //iframeComponent.open();
        //iframeComponent.writeln(`${this.htmlField.innerText}<style>${this.cssField.innerText}</style><script>${this.jsField.innerText}</script>`);
        //iframeComponent.close();
    }
    compile(){
        document.addEventListener('keyup', () => {
            this.sandyBoxRender();
        });
    }
    loadFiles = (hash) => {
        try{
            Promise.all(
                this.state.arrayFiles.map(
                    item => fetch(item.url.replace('{hash}', hash))
                        .then(response => response.text())
                        .then(text => {
                            switch(item.file){
                                case 'html' : this.props.setHTML(text);  break;
                                case 'js'   : this.props.setJS(text);    break;
                                case 'css'  : this.props.setCSS(text);   break;
                                default: console.log('Item not found.'); break;
                            }
                        }
                    )
                )
            )
        }
        catch(err){
            console.log(err)
        }
    }
    render() {
        if(this.props.sandybox.html && this.props.sandybox.css && this.props.sandybox.js){
            return (
                <Fragment>
                    <Preview />
                    <Html>
                        {this.props.sandybox.html}
                    </Html>
                    <Css>
                        {this.props.sandybox.css}
                    </Css>
                    <Js>
                        {this.props.sandybox.js}
                    </Js>
                </Fragment>
            )
        }
        else{
            return(
                <h1>Carregando...</h1>
            )
        }
    }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)