# Stage 1

## Priority Logic

Notifications are prioritised using:
1. Notification type weight
2. Recency

Weights used:
- Placement = 3
- Result = 2
- Event = 1

A combined priority score is calculated using both factors.

## Top 10 Selection

Notifications are sorted based on priority score in descending order.

The top 10 notifications are selected after sorting.

## Efficient Maintenance for Incoming Notifications

To efficiently maintain the top 10 notifications when new notifications arrive continuously, a Min Heap (Priority Queue) of size 10 can be used.

Approach:
- Compute priority score for each incoming notification
- Compare with the minimum element in the heap
- Replace the minimum element if the new notification has higher priority

This ensures:
- Efficient insertion
- O(log n) update complexity
- Constant maintenance of top 10 notifications