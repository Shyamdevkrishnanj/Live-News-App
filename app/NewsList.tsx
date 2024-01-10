"use client"

import React, { useEffect } from 'react';
import Article from './Article';

type Props = {
  news: NewsResponse;
};

function NewsList({ news }: Props) {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the script content with the provided configuration
    script.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "jFwVKREeTW7BBbnbRSSc9",
        domain: "www.chatbase.co"
      };
    `;

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Create a second script element for the external script
    const externalScript = document.createElement('script');

    // Set the attributes for the external script
    externalScript.src = 'https://www.chatbase.co/embed.min.js';
    externalScript.defer = true;

    // Append the external script to the body of the document
    document.body.appendChild(externalScript);

    // Cleanup function to remove the added scripts when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(externalScript);
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}

export default NewsList;



