import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
import faker from "faker";

/**
 * コンポーネントの子要素に入れたコンポーネントもしくはHTML要素は、
 * 親コンポーネント側のprops.childrenで取得できる。
 * これを利用することで、コンポーネントの再利用性を高める事ができる。
 * (今回であればApprovalCard Component)
 */
const App = () => {
    return (
        <>
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>
                    <span>are you sure ?</span>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    name={faker.name.findName()}
                    timeAgo="Today at 3:00"
                    text="2"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    name={faker.name.findName()}
                    timeAgo="Yesterday at 10:00"
                    text="3"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));