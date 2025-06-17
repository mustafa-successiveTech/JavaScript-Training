/* 8. Create a function that fetches data from multiple APIs in parallel 
and then performs some operation on the combined data, using async/await. */

const fetchData = async () => {

  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/comments/1'
  ];

  try {

    console.log("Starting to fetch all URLs in parallel...");
    const responses = await Promise.all(
      urls.map((url, index) => {
        return fetch(url);
      })
    );

    console.log("All fetch requests completed. Parsing JSON...");

    const data = await Promise.all(
      responses.map((res, index) => {
        return res.json();
      })
    );

    console.log("All data parsed. Combining results...");

    const combined = {
      post: data[0],
      user: data[1],
      comment: data[2]
    };

    console.log("Combined Data Ready:", combined);
    return combined;

  } catch (error) {
    throw error;
  }
};

fetchData().then(data => {
  console.log("Combined Data:", data);
});
