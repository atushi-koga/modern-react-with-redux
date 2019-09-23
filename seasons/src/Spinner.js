import React from 'react';

const Spinner = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// propsのデフォルト値を設定
// propsとして親コンポーネントから値が渡されなかった場合に適用される値
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;