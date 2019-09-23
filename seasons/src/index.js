import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

/**
 * 【クラスコンポーネント】
 * 1. JavaScript クラスである
 * 2. React.Component を継承する
 * 3. JSXを返すrenderメソッドを定義する
 * 4. 初期化処理が必要ならば、'constructor'メソッドを定義し、その中で'super'メソッドを実行した後に処理を実装する
 *
 * 【state】
 * ・stateはコンポーネントに関連したデータを含むJSオブジェクト
 * ・stateを更新すると、ひもづくコンポーネントはすぐに再レンダリングされる（たいていの場合）
 * ・stateはコンポーネントが最初に生成された時に、初期化されなければならない
 * ・stateは'setState'メソッドを通じてのみ更新可能
 * ・'setState'メソッドには、追加・更新したいプロパティのみをセットすれば良い（変更を行わないプロパティは記述不要）
 * ・プロパティ名である'state'は変更不可（myStateなど）
 *
 * 【Component Life Cycle】
 * ・クラスベースのコンポーネント内で定義できる、オプションの関数。
 * ・定義すれば、React内部で自動的にしかるべきタイミングで実行される。
 * ・ライフサイクルの流れ
 *   constructor() -> render() -> content visible on screen -> componentDidMount() -> sit and wait for updating
 *   -> component gets updated by calling setState function -> render() -> componentDidUpdate()
 *   -> sit and wait for unmount -> componentWillUnmount()
 *
 *
 */
class App extends React.Component {
    // stateの初期化
    // constructorメソッドを使ってstateを初期化する事も可能だが、この方が簡潔に書ける。
    // このコードはBabelによって、constructorメソッドでの記述に変換される。
    state = {lat: null, errorMessage: null};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update');
    }

    renderContent() {
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        return <Spinner message="please accept location request"/>;
    }

    // stateが更新されるたびに実行される
    // renderメソッドでは、JSXを返す処理のみ記述するのが基本
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));