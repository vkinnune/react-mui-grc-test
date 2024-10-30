import React, { useState } from "react";
import {
  Drawer,
  Tabs,
  Tab,
  Typography,
  Box,
  IconButton,
  List,
  Badge,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CommentIcon from "@mui/icons-material/Comment";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import NotificationCard from "./NotificationCard";

interface NotificationDrawerProps {
  open: boolean;
  onClose: () => void;
  notifications: any[];
  onNotificationClick: (notification: any) => void;
  onMarkAllAsRead: () => void;
}

function NotificationDrawer({
  open,
  onClose,
  notifications,
  onNotificationClick,
  onMarkAllAsRead,
}: NotificationDrawerProps) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const getNotificationsForTab = () => {
    switch (tabIndex) {
      case 0:
        // All
        return notifications;
      case 1:
        // My Tasks
        return notifications.filter((n) => n.category === "task");
      case 2:
        // Comments and Mentions
        return notifications.filter(
          (n) => n.category === "comment" || n.category === "mention"
        );
      case 3:
        // System Alerts
        return notifications.filter((n) => n.category === "system");
      default:
        return notifications;
    }
  };

  const currentNotifications = getNotificationsForTab();

  const groupNotificationsByDate = (notificationsList: any[]) => {
    const grouped: { [key: string]: any[] } = {};

    notificationsList.forEach((notification) => {
      const date = new Date(notification.timestamp);
      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      let dateLabel;

      if (date.toDateString() === today.toDateString()) {
        dateLabel = "Today";
      } else if (date.toDateString() === yesterday.toDateString()) {
        dateLabel = "Yesterday";
      } else {
        dateLabel = date.toLocaleDateString();
      }

      if (!grouped[dateLabel]) {
        grouped[dateLabel] = [];
      }

      grouped[dateLabel].push(notification);
    });

    return grouped;
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 350,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Notifications
          </Typography>
          <IconButton onClick={onMarkAllAsRead}>
            <Badge color="primary">
              <Typography variant="caption">Mark all as read</Typography>
            </Badge>
          </IconButton>
        </Box>

        {/* Tabs */}
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          aria-label="Notification Tabs"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="All" icon={<ViewListIcon />} iconPosition="start" />
          <Tab
            label="My Tasks"
            icon={<AssignmentIcon />}
            iconPosition="start"
          />
          <Tab
            label="Comments & Mentions"
            icon={<CommentIcon />}
            iconPosition="start"
          />
          <Tab
            label="System Alerts"
            icon={<SystemUpdateIcon />}
            iconPosition="start"
          />
        </Tabs>

        {/* Notification List */}
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          {tabIndex === 0 ? (
            // Grouped by Date for "All" Tab
            Object.entries(groupNotificationsByDate(currentNotifications)).map(
              ([dateLabel, notifications]) => (
                <Box key={dateLabel} sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ px: 2 }}>
                    {dateLabel}
                  </Typography>
                  <List>
                    {notifications.map((notification: any) => (
                      <NotificationCard
                        key={notification.id}
                        notification={notification}
                        onClick={onNotificationClick}
                      />
                    ))}
                  </List>
                </Box>
              )
            )
          ) : (
            // Simple List for Other Tabs
            <List>
              {currentNotifications.length === 0 ? (
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                  No notifications.
                </Typography>
              ) : (
                currentNotifications.map((notification: any) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    onClick={onNotificationClick}
                  />
                ))
              )}
            </List>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}

export default NotificationDrawer;
