import React, {createContext, useState} from 'react';
export const SearchContext = createContext();
export const SearchProvider = ({children}) => {
    const [searchWords, setSearchWords] = useState([]);

    return (
        <SearchContext.Provider value={{ searchWords, setSearchWords }}>
            {children}
        </SearchContext.Provider>
    );
};