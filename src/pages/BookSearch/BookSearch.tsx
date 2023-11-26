import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/debounceHook'

import './BookSearch.css'
import BookItem, { Book } from './BookItem'

export default function BookSearch(): JSX.Element {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState<Array<Book>>([])
    const [resultsAmount, setResultsAmount] = useState(0)
    const debouncedSearchTerm = useDebounce(searchTerm, 200)

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetch(
                `https://openlibrary.org/search.json?title=${debouncedSearchTerm}`,
            )
                .then((response) => response.json())
                .then((data) => data.docs.slice(0, 10))
                .then((docs) => {
                    setResults(docs)
                    setResultsAmount(docs.length)
                })
                .catch((error) => {
                    console.error('Error fetching data:', error)
                })
        } else {
            setResults([])
            setResultsAmount(0)
        }
    }, [debouncedSearchTerm])
    
    const booksList = results.map((book: Book) => {
        return <BookItem key={book.key} book={book} />
    })

    return (
        <div>
            <fieldset>
                <legend>Search</legend>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </fieldset>

            {results.length > 0 && (
                <>
                    <div className='book-results'>Results: {resultsAmount} {resultsAmount === 10 && '(limited to 10)'}</div>
                    <div className="book-results__header">
                        <div className="book-results__header__item">
                            Title
                        </div>
                        <div className="book-results__header__item">
                            Author
                        </div>
                        <div className="book-results__header__item">
                            First published in
                        </div>
                    </div>
                </>
            )}

            {!results.length && (
                <div className='book-results'>No results</div>
            )}
            {booksList}
        </div>
    )
}
