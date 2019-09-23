import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 【クラスコンポーネントのルール】
 * 1. JavaScript クラスである事
 * 2. React.Componentを継承している事
 * 3. JSXを返すrenderメソッドを定義している事
 *
 */
class App extends React.Component {
    render() {
        console.log('start geo');
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );

        console.log('start rendering');
        return <div>Latitude: test</div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));