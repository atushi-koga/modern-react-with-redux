// Componentの名前はアッパーケースで記述する
import React from 'react';

const CommentDetail = props => {
    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '10px 0 10px 30px'
    };
    const iconStyle = {width: '100px', height: '100px', marginRight: '10px'};
    const infoBox = {width: '300px', height: '100px', backgroundColor: 'lightgrey'};
    const infoDetailStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    return (
        <div style={rowStyle}>
            <div style={iconStyle}>
                <a href="/">
                    <img style={{width: '100%', height: '100%'}} src={props.avatar} alt="avatar"/>
                </a>
            </div>
            <div style={infoBox}>
                <div style={infoDetailStyle}>
                    <div>{props.name}</div>
                    <div>{props.timeAgo}</div>
                </div>
                <div>{props.text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;