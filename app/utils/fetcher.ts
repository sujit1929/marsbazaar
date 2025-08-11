export const fetcher = async (url: string, method: string = 'GET', body?: any) => {
    const token = localStorage.getItem('token'); // Get token from localStorage
  
    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          // Only include Authorization header if the token exists
          Authorization: token ? `Bearer ${token}` : '',
        },
        body: body ? JSON.stringify(body) : null, // If body exists, stringify it
      });
  
      // If the response is not OK, throw an error with the response message
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
  
      // Return the parsed JSON response
      return res.json();
    } catch (error : any) {
      // Handle errors (network issues, unexpected errors)
      throw new Error(error.message || 'Something went wrong');
    }
  };
  