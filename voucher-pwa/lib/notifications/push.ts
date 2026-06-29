// Push notifications made by Crystal

export async function requestNotificationPermission() {
 
  if (!("Notification" in window)) {
 
    alert("This browser does not support notifications.");
 
    return false;
  }
 
  const permission =
    await Notification.requestPermission();
 
  return permission === "granted";
}
 
export function showNotification(
  title: string,
  body: string
) {
 
  if (Notification.permission === "granted") {
 
    new Notification(title, {
      body,
      icon: "/icon-192.png",
    });
 
  }
 
}