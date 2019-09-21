import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // propsを使って各Rowコンポーネントに情報を渡す

    return (
        <>
            <Row name="Alex" time="Today at 5:00" text="1" />
            <Row name="Jane" time="Today at 6:00" text="2" />
            <Row name="Sum" time="Today at 7:00" text="3" />
        </>
    );
};

const Row = (props) => {
    const rowStyle = {display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'flex-start', margin: '10px 0 10px 30px'};
    const iconStyle = {width: '100px', height: '100px', backgroundColor: 'blue', marginRight: '10px'};
    const infoBox = {width: '200px', height: '100px', backgroundColor: 'red'};
    const infoDetailStyle = {display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-between'};

    return (
        <div style={rowStyle}>
            <div style={iconStyle}>image</div>
            <div style={infoBox}>
                <div style={infoDetailStyle}>
                    <div>{props.name}</div>
                    <div>{props.time}</div>
                </div>
                <div>{props.text}</div>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));