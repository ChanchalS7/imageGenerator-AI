async function fetchImageData(prompt) {
	//url
	const apiUrl = 'https://api.openai.com/v1/images/generations';
	//api key
	const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

	console.log('Api URL:', apiUrl);
	console.log('Api Key:', apiKey);
	//what kind of data is in body
	//key you are sending
	const requestHeaders = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${apiKey}`
	};

	//number of elements
	const requestBody = {
		prompt,
		n: 4,
		size: "256x256"

	}
	//browser to make request
	console.log('Make the request with api key')
	const response = await fetch(apiUrl, {
		method: 'POST',
		body: JSON.stringify(requestBody),
		headers: requestHeaders,
	});
	const data = await response.json();
	console.log("Got the data:", data);
	return data.data;
}
export default fetchImageData;
