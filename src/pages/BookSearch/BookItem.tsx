import './BookItem.css'

export interface Book {
    key?: string;
    title?: string;
    author_name?: string;
    first_publish_year?: number;
}

export default function BookItem({ book }: {book: Book}): JSX.Element {
    return (
        <div className='book-item'>
            <div className="book-item__field">
                {book?.title}
            </div>
            <div className="book-item__field">
                {book?.author_name?.[0]}
            </div>
            <div className="book-item__field">
                {book?.first_publish_year}
            </div>
        </div>
    )
}
