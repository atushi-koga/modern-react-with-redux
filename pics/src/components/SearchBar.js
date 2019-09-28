import React from 'react';

/**
 * 【UnControlled vs Controlled Element】
 * ・フォームに入力されたデータは、ReactではDOM上で管理するのではなく、
 *   アプリケーション側(state)で管理する。 -> 取得、更新が容易
 *
 *
 */
class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>Image Search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={(e) => {
                                   this.setState({term: e.target.value})
                               }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;