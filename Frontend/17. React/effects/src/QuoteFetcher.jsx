// import { useEffect, useState } from "react";

// const RANDOM_QUOTE_URL = "https://api.quotable.io/random";
// // const RANDOM_QUOTE_URL = "https://zenquotes.io/api/random";

// export default function QuoteFetcher() {
//   const [quote, setQuote] = useState({ text: "", author: ""});
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     async function fetchQuote() {
//     const response = await fetch(RANDOM_QUOTE_URL);
//     const jsonResponse = await response.json();
//     // const randomQuote = jsonResponse.quote;
//     // setQuote(randomQuote)
//     setQuote({
//         text: jsonResponse.text,    // quote text
//         author: jsonResponse.author,  // author name
//     });
//     setIsLoading(false)
//     }
//     fetchQuote()
//     }, [])

//   return (
//     <div>
//         <p className="Loader" style={{opacity: isLoading ? 1 : 0 }}>Loading....</p>
//       <button onClick={fetchQuote}>
//         Get Quote Using Handler
//       </button>

//       <h2>{quote.text}</h2>
//       <h4>{quote.author}</h4>
//     </div>
//   );
// }


import { useEffect, useState } from "react";

// Base ZenQuotes API
const ZEN_QUOTES_API = "https://zenquotes.io/api/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  async function fetchQuote() {
    setIsLoading(true);

    // Add cache-busting param to avoid repeated quotes / caching
    const RANDOM_QUOTE_URL =
      "https://api.allorigins.win/get?url=" +
      encodeURIComponent(`${ZEN_QUOTES_API}?t=${Date.now()}`);

    fetch(RANDOM_QUOTE_URL)
      .then((res) => res.json()) // Parse AllOrigins wrapper
      .then((data) => {
        const quoteData = JSON.parse(data.contents)[0]; // Parse ZenQuotes response
        setQuote({
          text: quoteData.q,
          author: quoteData.a,
        });
        setIsLoading(false);
      })
      .catch(() => {
        setQuote({ text: "Failed to fetch quote", author: "" });
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchQuote(); // Fetch initial quote on mount
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLoading && <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>Loading...</p>}

      <button onClick={fetchQuote} style={{ marginBottom: "20px" }}>
        Get Quote
      </button>

      {!isLoading && (
        <>
          <h2>"{quote.text}"</h2>
          <h4>- {quote.author}</h4>
        </>
      )}
    </div>
  );
}
