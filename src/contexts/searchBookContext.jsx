import {createContext, useState, useContext} from 'react';
import { getBooksRequest } from '../api/apiSearchBooks.js';

const SearchBookContext = createContext();

export const useBookSearch = () => {
    const context = useContext(SearchBookContext);
      if (!context) {
          throw new Error('useBookSearch must be used within a BookSearchProvider');
      }
      return context;
  };

export function SearchBookProvider ({children}) {
    const[Books, setBooks] = useState([]);

    const getBooksRequest = async () => {
        const res = await getBooksRequest();
        console.log(res.data);
    }

    return (<SearchBookContext.Provider value={{Books}}>
        {children}
        </SearchBookContext.Provider>);
}


