import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 39918a48868eaf3273dc0475feb8e61816a80ff68a3a84a1db592762bbdfa5b7'
            }
        });

        this.setState({images: response.data.results});
        console.log(response.data.results);
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;