import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Avatar,
  Box,
  Button,
  Badge,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CommentIcon from "@mui/icons-material/Comment";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ApprovalIcon from "@mui/icons-material/HowToReg";

interface NotificationCardProps {
  notification: any;
  onClick: (notification: any) => void;
}

function NotificationCard({ notification, onClick }: NotificationCardProps) {
  const { category, title, message, timestamp, read, actionLabel } =
    notification;

  const getIcon = () => {
    switch (category) {
      case "task":
        return actionLabel === "Approve" ? (
          <ApprovalIcon />
        ) : (
          <AssignmentIcon />
        );
      case "comment":
      case "mention":
        return <CommentIcon />;
      case "system":
        return <SystemUpdateIcon />;
      default:
        return <NotificationsIcon />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: read ? "inherit" : "#f0f0f0",
        mb: 1,
      }}
    >
      <CardActionArea onClick={() => onClick(notification)}>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Badge
            variant={read ? "standard" : "dot"}
            color="primary"
            overlap="circular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>{getIcon()}</Avatar>
          </Badge>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {message}
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            {formatTimestamp(timestamp)}
          </Typography>
        </CardContent>
      </CardActionArea>
      {actionLabel && (
        <Box sx={{ px: 2, pb: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              // Handle action button click
              console.log(
                `${actionLabel} clicked for notification ${notification.id}`
              );
            }}
          >
            {actionLabel}
          </Button>
        </Box>
      )}
    </Card>
  );
}

export default NotificationCard;
