import "./BookDetailsPage.css";

import useFetch from "@hooks/useFetch.js";
import { useParams } from "react-router-dom";

//components
import { BookRelatedBooksSection } from "../../components/BookRelatedBooksSection.jsx";
import { BookComments } from "../../components/comments/BookComments/BookComments.jsx";
import { RateBookSection } from "../../components/RateBookSection.jsx";
import { BookDetailsSection } from "../../components/BookDetailsSection/BookDetailsSection.jsx";

export function BookDetailsPage() {
  const { id } = useParams();

  // Fetch book data
  const {
    data: bookData,
    error: bookError,
    isPending: bookIsPending,
  } = useFetch(`/book/${id}`);

  if (bookError) {
    return <p>{bookError}</p>;
  }
  if (bookIsPending) {
    return <p>Loading...</p>;
  }
  if (bookData) {
    // Combine categories and subcategories, removing duplicates
    const categoriesSet = new Set([
      ...(bookData.data.subcategories.subcategories, ["None"]),
      bookData.data.subcategories.category,
    ]);
    const categories = Array.from(categoriesSet).join(", ");

    return (
      <>
        <BookDetailsSection
          bookId={id}
          isbn={bookData.data.isbn}
          bookName={bookData.data.title}
          bookDescription={bookData.data.description}
          year={bookData.data.yearReleased}
          vol={bookData.data.volume}
          pages={bookData.data.numberOfPages}
          editory={bookData.data.publisher}
          bookImg={bookData.data.coverImgPath}
          rank={bookData.data.rate}
          authorName={bookData.data.authors?.join(", ")}
          language={bookData.data.languages?.join(", ")}
          fileType={bookData.data.fileExtensions?.join(", ")}
          categories={categories}
          numComments={bookData.data.comments.length}
          bookFiles={bookData.data.files}
          fileName={bookData.data.files[0]}
        />
        <RateBookSection id={bookData.data.id} />
        <BookRelatedBooksSection books={bookData.data.relatedBooks} />
        <BookComments
          comments={bookData.data.comments}
          bookId={bookData.data.id}
        />
      </>
    );
  }
}
