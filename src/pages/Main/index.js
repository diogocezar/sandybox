import React, { Component, Fragment } from 'react';
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'
import * as sandyboxActions           from '../../actions/sandybox'

import Preview                        from '../../components/Preview'
import Loading                        from '../../components/Loading'
import Editors                        from '../../components/Editors'

import 'codemirror/lib/codemirror.css'
import '../../assets/styles/themes/dracula.css'
import './main.css'

import config from './config'

class Main extends Component {
    constructor(props) {
		super(props)
		this.hash     = this.props.match.params.id
		this.baseUrl  = this.getBaseUrl()
        this.state    = {
            arrayFiles : [
                {'file' : 'html', 'url' : `${this.baseUrl}{hash}/${config.file}.html` },
                {'file' : 'css',  'url' : `${this.baseUrl}{hash}/${config.file}.css` },
                {'file' : 'js',   'url' : `${this.baseUrl}{hash}/${config.file}.js` }
            ]
		}
	}
	getBaseUrl(){
		if (window.location.hostname === "localhost")
			return `${config["offline-url"]}:${config.port}/${config.folder}/`
		else
			return `${config["online-url"]}/${config.folder}/`
	}
    componentDidMount(){
        this.loadFiles()
    }
    loadFiles = () => {
        try{
            Promise.all(
                this.state.arrayFiles.map(
                	item => fetch(item.url.replace('{hash}', this.hash))
                        .then(response => response.text())
                        .then(text => {
                            switch(item.file){
                                case 'html' : this.props.setHtml(text);  break;
                                case 'js'   : this.props.setJs(text);    break;
                                case 'css'  : this.props.setCss(text);   break;
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
                    <Preview name={this.hash}/>
					<Editors />
                </Fragment>
            )
        }
        else{
            return(
				<Loading />
            )
        }
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)