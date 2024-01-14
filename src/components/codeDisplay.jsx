// src/components/CodeDisplay.js
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { githubDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeDisplay = ({ owner, repo, path }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
        );

        // Decode the content from base64 using atob
        const decodedContent = atob(response.data.content);
        setCode(decodedContent);
      } catch (error) {
        console.error("Error fetching code:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [owner, repo, path]);
  const containerStyle = {
    height: "800px", // Set your preferred height
    width: "1020px", // Set your preferred width
    overflow: "auto",
    fontSize: "12px", // Make it scrollable if content overflows
  };
  const originalString = { path };
  const delimiter = "/"; // space character
  var filename = originalString.path;
  const resultArray = filename.split(delimiter);
  // console.log(resultArray[1]);
  // console.log(resultArray[1]);

  const customSyntaxStyle = {
    ...atomDark,
    fontSize: "12px", // Set your preferred font size
  };
  return (
    <div>
      <div className="text-lg mb-2"> {resultArray[1]}</div>
      <div style={containerStyle}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <SyntaxHighlighter language="csharp" style={customSyntaxStyle}>
            {code}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default CodeDisplay;
