import React from 'react';

const ApprovalCard = props => {
    return (
        <div>
            {props.children}
            <div>
                <button type="button">Approve</button>
                <button type="button">Reject</button>
            </div>
        </div>
    );
};

export default ApprovalCard;