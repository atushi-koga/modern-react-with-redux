// import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * HTMLとJSXの違い
 *
 * 1.style属性
 *  HTML: <div style="background-color: blue;"></div>
 *  JSX : <div style="{{ backgroundColor: 'blue' }}"></div>
 *  ・styleプロパティの中身はJS変数のオブジェクトで記載する
 *  ・プロパティにダッシュを含むものは、キャメルケースにする
 *
 * 2.class属性
 *  HTML: <label class="label">Enter name</label>
 *  JSX: <label className="label">Enter name</label>
 *
 * 3.JS変数、関数が参照可能
 * const buttonText = 'Click Me';
 * <button>{buttonText}</button>
 *
 * 4.for属性
 *  HTML: <label for="label">Enter name</label>
 *  JSX: <label htmlFor="label">Enter name</label>
 *
 * */

// Create a react component
const App = () => {
    const buttonText = {text: 'Click me'};
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));