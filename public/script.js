document.getElementById('urlForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const originalUrl = document.getElementById('originalUrl').value;

  try {
      const response = await fetch('/api/shorten', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ originalUrl })
      });
      const data = await response.json();
      console.log(data);
      displayUrl(data.shortId, originalUrl);
  } catch (error) {
      console.error("Error:", error);
  }
});

function displayUrl(shortUrl, originalUrl) {
  const urlList = document.getElementById('urlList');
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="/api/${shortUrl}" target="_blank">${shortUrl}</a> - ${originalUrl}`;
  urlList.appendChild(listItem);
}

function getAllUrls() {

}