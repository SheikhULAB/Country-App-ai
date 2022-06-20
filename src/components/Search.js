import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
      props.onSearch(searchText);
    }, [searchText]);
    
    return (
        <div style={{textAlign: "center"}}>
            <input 
            value={searchText}
            type="text"
            onChange={handleChange}
             placeholder='Search Countries' />
        </div>
    );
};

export default Search;