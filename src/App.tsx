import React, { useState } from "react";
import {
  IconButton,
  Badge,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationDrawer from "./components/NotificationDrawer";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  // Sample notifications data
  const sampleNotifications = [
    {
      id: "notif1",
      category: "task",
      title: "Task Assigned",
      message: "Complete the vendor compliance review by Nov 5.",
      timestamp: "2023-10-31T09:00:00Z",
      read: false,
      actionLabel: "View Task",
    },
    {
      id: "notif2",
      category: "mention",
      title: "New Mention in Comment",
      message: "John Doe mentioned you in a comment.",
      timestamp: "2023-10-30T16:45:00Z",
      read: true,
    },
    {
      id: "notif3",
      category: "system",
      title: "Scheduled Maintenance",
      message: "System maintenance on Nov 1 from 2 AM to 4 AM.",
      timestamp: "2023-10-29T14:30:00Z",
      read: false,
    },
    {
      id: "notif4",
      category: "comment",
      title: "New Comment on Policy",
      message: "Alice commented on the Security Policy document.",
      timestamp: "2023-10-28T12:15:00Z",
      read: true,
    },
    {
      id: "notif5",
      category: "task",
      title: "Approval Required",
      message: "Please approve the new risk assessment.",
      timestamp: "2023-10-27T10:00:00Z",
      read: false,
      actionLabel: "Approve",
    },
    // Add more notifications as needed
  ];

  const [notificationsData, setNotificationsData] =
    useState(sampleNotifications);

  // Calculate unread notifications count
  const unreadCount = notificationsData.filter((n) => !n.read).length;

  // Mark all notifications as read
  const handleMarkAllAsRead = () => {
    setNotificationsData((prevNotifications) =>
      prevNotifications.map((n) => ({ ...n, read: true }))
    );
  };

  // Handle notification click
  const handleNotificationClick = (notification: any) => {
    // Mark notification as read
    setNotificationsData((prevNotifications) =>
      prevNotifications.map((n) =>
        n.id === notification.id ? { ...n, read: true } : n
      )
    );
    // Navigate or perform action based on notification
    console.log("Notification clicked:", notification);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: "16px" }}>
        <IconButton color="inherit" onClick={handleOpenDrawer}>
          <Badge badgeContent={unreadCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <h1>Notification Drawer Example</h1>
      </div>
      <NotificationDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        notifications={notificationsData}
        onNotificationClick={handleNotificationClick}
        onMarkAllAsRead={handleMarkAllAsRead}
      />
    </ThemeProvider>
  );
}

export default App;
