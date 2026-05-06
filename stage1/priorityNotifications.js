const notifications = []; 

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function getPriority(notification) {
  const weight = weights[notification.Type] || 0;

  const timestamp = new Date(notification.Timestamp).getTime();

  return weight * 1000000000000 + timestamp;
}

function getTop10(notifications) {
  return notifications
    .sort((a, b) => getPriority(b) - getPriority(a))
    .slice(0, 10);
}