import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 【クラスコンポーネントのルール】
 * 1. JavaScript クラスである事
 * 2. React.Componentを継承している事
 * 3. JSXを返すrenderメソッドを定義している事
 *
 * 【state】
 * ・stateはコンポーネントに関連したデータを含むJSオブジェクト
 * ・stateを更新すると、ひもづくコンポーネントはすぐに再レンダリングされる（たいていの場合）
 * ・stateはコンポーネントが最初に生成された時に、初期化されなければならない
 * ・stateは'setState'メソッドを通じてのみ更新可能
 * ・'setState'メソッドには、追加・更新したいプロパティのみをセットすれば良い（変更を行わないプロパティは記述不要）
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null, errorMessage: null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    // stateが更新されるたびに実行される
    render() {
        if(this.state.lat){
            return (<div>Latitude: {this.state.lat}</div>); 
        }
        if(this.state.errorMessage){
            return (<div>Error: {this.state.errorMessage}</div>);
        }

        return (<div>loading...</div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));