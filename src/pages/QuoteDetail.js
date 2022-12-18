import React, { Fragment, Suspense, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const Comments = React.lazy(() => import("../components/comments/Comments"));
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Ashish Pal", text: "Cry Cry, but don't try" },
//   { id: "q2", author: "Park Dae Suk", text: "Money is everything" },
// ];
const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const { quoteId } = useParams();
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  const match = useRouteMatch();
  // console.log(match)

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);


  const loadingSpinner = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );

  if (status === "pending") return loadingSpinner;

  if (error) return <p>Something went wrong</p>;

  if (!loadedQuote.text) return <p>Quote not found with that id</p>;
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Suspense fallback={loadingSpinner}>
        <Route path={`${match.path}`} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`}>
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </Suspense>
    </Fragment>
  );
};

export default QuoteDetail;
