import React from 'react';
import "./Search.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({search, onSearchChange}) => {

    return (
        <div className='search-flex'>
            <SearchRoundedIcon/>
            <input type="text" 
            placeholder='Search' 
            value={search}
            onChange={(e)=>onSearchChange(e)}/>
        </div>
    );
}

export default Search;
