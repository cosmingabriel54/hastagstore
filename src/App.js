// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [getData, setGetData] = useState('');
  const [postData, setPostData] = useState('test');
  const [responseData, setResponseData] = useState('');

  const handleGetRequest = async () => {
    try {
      const response = await axios.get('http://localhost:8080/get/data');
      setGetData(response.data);
    } catch (error) {
      console.error('Error making GET request', error);
    }
  };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('http://localhost:8080/post/data', { data: postData });
      setResponseData(response.data);
    } catch (error) {
      console.error('Error making POST request', error);
    }
  };

  return (
      <div>
        <h1>React HTTP Requests</h1>
        <div>
          <h2>GET Request</h2>
          <button onClick={handleGetRequest}>Fetch Data</button>
          {getData && <p>Data: {getData}</p>}
        </div>
        <div>
          <h2>POST Request</h2>
          <input
              type="text"
              value={postData}
              onChange={(e) => setPostData(e.target.value)}
              placeholder="Enter data to post"
          />
          <button onClick={handlePostRequest}>Send Data</button>
          {responseData && <p>Response: {responseData}</p>}
        </div>
      </div>
  );
};

export default App;
