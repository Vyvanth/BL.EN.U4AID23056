import { Log } from "../logging_middleware/logger.js";

const API_URL =
  "http://20.207.122.201/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2b2JpbGlzZXR0aXZ5dmFudGgyODExQGdtYWlsLmNvbSIsImV4cCI6MTc3ODA1OTU1NiwiaWF0IjoxNzc4MDU4NjU2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNDJhOWI2YTctZmJkMS00ODdmLWE4ZTQtNDNiOTM1Nzg2MzljIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidm9iaWxpc2V0dGkgdnl2YW50aCIsInN1YiI6ImNlOGI4ZDQ1LTVhODEtNGI2ZS04NGMxLTMxYmI2NTBkMWFhNCJ9LCJlbWFpbCI6InZvYmlsaXNldHRpdnl2YW50aDI4MTFAZ21haWwuY29tIiwibmFtZSI6InZvYmlsaXNldHRpIHZ5dmFudGgiLCJyb2xsTm8iOiJibC5lbi51NGFpZDIzMDU2IiwiYWNjZXNzQ29kZSI6IlBUQk1tUSIsImNsaWVudElEIjoiY2U4YjhkNDUtNWE4MS00YjZlLTg0YzEtMzFiYjY1MGQxYWE0IiwiY2xpZW50U2VjcmV0IjoiamJFcXZoWHhoenlLWHVlUyJ9._rp0IlvbcZ6ad4eUkxUMvaeLYoe3OCbANBmOMMRni8E";

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function getPriority(notification) {
  const weight = weights[notification.Type] || 0;

  const timestamp = new Date(
    notification.Timestamp
  ).getTime();

  return weight * 1000000000000 + timestamp;
}

async function fetchNotifications() {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications"
    );

    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      const errorMessage = `Notifications request failed: ${response.status} ${response.statusText} - ${errorBody}`;

      await Log("frontend", "error", "api", errorMessage);
      console.error(errorMessage);
      return [];
    }

    const data = await response.json();

    await Log(
      "frontend",
      "info",
      "api",
      "Notifications fetched successfully"
    );

    return Array.isArray(data.notifications)
      ? data.notifications
      : [];

  } catch (error) {

    await Log(
      "frontend",
      "error",
      "api",
      "Failed to fetch notifications"
    );

    console.error(error);
    return [];
  }
}

async function main() {
  try {
    const notifications = await fetchNotifications();

    const top10 = notifications
      .sort(
        (a, b) =>
          getPriority(b) - getPriority(a)
      )
      .slice(0, 10);

    await Log(
      "frontend",
      "info",
      "component",
      "Top 10 notifications computed"
    );

    console.log("\nTOP 10 PRIORITY NOTIFICATIONS\n");

    console.table(top10);

  } catch (error) {

    await Log(
      "frontend",
      "fatal",
      "component",
      "Stage 1 execution failed"
    );

    console.error(error);
  }
}

main();