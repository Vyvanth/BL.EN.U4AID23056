const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2b2JpbGlzZXR0aXZ5dmFudGgyODExQGdtYWlsLmNvbSIsImV4cCI6MTc3ODA1OTU1NiwiaWF0IjoxNzc4MDU4NjU2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNDJhOWI2YTctZmJkMS00ODdmLWE4ZTQtNDNiOTM1Nzg2MzljIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidm9iaWxpc2V0dGkgdnl2YW50aCIsInN1YiI6ImNlOGI4ZDQ1LTVhODEtNGI2ZS04NGMxLTMxYmI2NTBkMWFhNCJ9LCJlbWFpbCI6InZvYmlsaXNldHRpdnl2YW50aDI4MTFAZ21haWwuY29tIiwibmFtZSI6InZvYmlsaXNldHRpIHZ5dmFudGgiLCJyb2xsTm8iOiJibC5lbi51NGFpZDIzMDU2IiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiY2U4YjhkNDUtNWE4MS00YjZlLTg0YzEtMzFiYjY1MGQxYWE0IiwiY2xpZW50U2VjcmV0IjoiamJFcXZoWHhoenlLWHVlUyJ9._rp0IlvbcZ6ad4eUkxUMvaeLYoe3OCbANBmOMMRni8E";

export async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    const data = await response.json();

    console.log("Log sent:", data);

  } catch (error) {
    console.error("Logging failed:", error);
  }
}