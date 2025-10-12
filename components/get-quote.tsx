"use client";

import { useEffect, useState } from "react";

export default function GetQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("quoteData");

    if (saved) {
      const { quote, author, timestamp } = JSON.parse(saved);
      const age = Date.now() - timestamp;

      // 10 minutes = 600,000 ms
      if (age < 600000) {
        setQuote(quote);
        setAuthor(author);
        setLoading(false);
        return;
      } else {
        localStorage.removeItem("quoteData");
      }
    }

    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
        localStorage.setItem(
          "quoteData",
          JSON.stringify({
            quote: data.quote,
            author: data.author,
            timestamp: Date.now(),
          })
        );
      })
      .catch(() => {
        setQuote("Failed to load quote");
        setAuthor("");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="mt-16 text-center text-gray-500 dark:text-gray-400">
        Loading quote...
      </p>
    );

  return (
    <>
      <h3 className="text-2xl font-bold text-center mb-4">Quote for you</h3>
      <figure className="mt-16 p-6 border-l-4 border-gray-400 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 rounded-md shadow-sm">
        <blockquote className="text-xl italic text-gray-800 dark:text-gray-100">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {author && (
          <figcaption className="mt-3 text-right text-gray-600 dark:text-gray-400">
            &mdash; {author}
          </figcaption>
        )}
      </figure>
    </>
  );
}
