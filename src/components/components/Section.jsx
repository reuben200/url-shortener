import { useState } from "react";

const Section = () => {
  const [originalUrl, setOriginalUrl] = useState(''); // Ensure state is always a string
  const [shortUrlVisible, setShortUrlVisible] = useState(false);
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    if (!originalUrl.trim()) {
      alert("Please enter a valid URL.");
      return;
    }

    try {
      const response = await fetch('https://url-shortener-server-j9qa.onrender.com/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl: originalUrl }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Shortened URL:', data.shortUrl);
      
      setShortUrl(data.shortUrl); // Assuming server responds with `shortUrl`
      setShortUrlVisible(true);
    } catch (err) {
      console.error(err);
      alert("An error occurred while shortening the URL.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      alert("Short URL copied to clipboard!");
    });
  };

  return (
    <div className="w-3/5 p-10 rounded-xl border-2 border-gray-200 flex flex-col space-y-5 justify-center items-center">
      <span className="mb- w-full">
        <p className="text-lg font-bold italic text-white">Long URL</p>
        <input
          type="text"
          placeholder="Paste your long url here..."
          value={originalUrl} // Controlled input with initialized state
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-full rounded-md border shadow-lg py-2 px-4 text-xl text-red-500 font-bold"
        />
      </span>

      {/* Short URL Section */}
      {shortUrlVisible && (
        <div className="flex-col w-full py-5">
          <p className="text-lg font-bold italic text-white">Short URL</p>
          <span className="mb- w-full flex">
            <input
              type="text"
              value={shortUrl} // Controlled input
              readOnly
              className="w-full rounded-l-md border shadow-lg py-2 px-4 text-xl text-blue-500 font-bold"
            />
            <button
              className="bg-gray-800 text-white text-sm font-bold rounded-r-md px-4"
              onClick={handleCopy}
            >
              Copy
            </button>
          </span>
        </div>
      )}

      {/* Shorten Button */}
      <button
        className="rounded-lg px-10 py-2 bg-gray-800 font-bold hover:bg-gray-600 text-gray-100 border-2 border-gray-100 mt-3"
        onClick={handleShorten}
      >
        Shorten
      </button>
    </div>
  );
};

export default Section;
