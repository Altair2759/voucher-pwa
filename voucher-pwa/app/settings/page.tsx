// Next.js Client Component
// Required because we use React Hooks and localStorage
"use client";

// React Hook Imports
// useState stores component data
// useEffect runs code when the component loads
import { useEffect, useState } from "react";

// React Functional Component
export default function SettingsPage() {

    // React State
    // Stores whether Secret Whisper Mode is enabled or disabled
    const [showWhisperMode, setShowWhisperMode] = useState(() => {
        if (typeof window === "undefined") {
            return true;
        }

        const saved = localStorage.getItem("showWhisperMode");

        return saved !== null ? JSON.parse(saved) : true;
    });
    const [vibrationEnabled, setVibrationEnabled] = useState(true);

    // Stores the browser's notification permission status
    const [notificationPermission, setNotificationPermission] =
        useState<NotificationPermission>("default");

    const [categories, setCategories] = useState({
        Food: true,
        Shopping: true,
        Entertainment: true,
        Travel: true,
    });

    const [deviceSupport, setDeviceSupport] = useState({
        notifications: false,
        vibration: false,
        speech: false,
        camera: false,
    });

    // Stores whether the Notification Categories are expanded
    const [showCategories, setShowCategories] = useState(false);

    // React Effect Hook
    // Runs once when the page loads
    useEffect(() => {

        // Load Vibration preference
        const savedVibration = localStorage.getItem("vibrationEnabled");

        if (savedVibration !== null) {
            setVibrationEnabled(JSON.parse(savedVibration));
        }

        // Check whether the browser supports notifications
        if ("Notification" in window) {
            setNotificationPermission(Notification.permission);
        }

        const savedCategories = localStorage.getItem("notificationCategories");

        if (savedCategories) {
            setCategories(JSON.parse(savedCategories));
        }

        setDeviceSupport({
            notifications: "Notification" in window,
            vibration: "vibrate" in navigator,
            speech:
                "speechSynthesis" in window &&
                "SpeechSynthesisUtterance" in window,
            camera:
                !!navigator.mediaDevices &&
                !!navigator.mediaDevices.getUserMedia,
        });
    }, []);

    // Function
    // Toggles Whisper Mode on and off
    const handleWhisperToggle = () => {

        // Reverse current value
        const newValue = !showWhisperMode;

        // Update React State
        setShowWhisperMode(newValue);

        // Save new value to localStorage
        // Allows the setting to persist after refresh
        localStorage.setItem(
            "showWhisperMode",
            JSON.stringify(newValue)
        );
    };

    const toggleCategory = (category: keyof typeof categories) => {

        const updated = {
            ...categories,
            [category]: !categories[category],
        };

        setCategories(updated);

        localStorage.setItem(
            "notificationCategories",
            JSON.stringify(updated)
        );
    };

    // Toggle Vibration Feedback ON and OFF
    const handleVibrationToggle = () => {
        // Reverse the current setting
        const newValue = !vibrationEnabled;

        // Update the React state
        setVibrationEnabled(newValue);

        // Save the user's preference in localStorage
        localStorage.setItem(
            "vibrationEnabled",
            JSON.stringify(newValue)
        );
    };

    // Ask the user for notification permission
    const requestNotificationPermission = async () => {

        // Check whether the browser supports notifications
        if (!("Notification" in window)) {
            alert("This browser does not support notifications.");
            return;
        }

        // Ask the user for permission
        const permission = await Notification.requestPermission();

        // Save the new permission status
        setNotificationPermission(permission);

        // Show a welcome notification
        if (permission === "granted") {
            new Notification("Voucher PWA", {
                body: "Notifications have been enabled successfully!"
            });
        }
    };

    // JSX User Interface
    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "30px",
                backgroundColor: "#ffffff",
                color: "#000000",
            }}
        >

            {/* Page Heading */}
            <h1
                style={{
                    color: "#000000",
                    marginBottom: "30px",
                }}
            >
                ⚙ Settings
            </h1>

            {/* Settings Card */}
            <div
                style={{
                    backgroundColor: "#d2d2d26f",
                    border: "none",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                    borderRadius: "12px",
                    padding: "20px",
                    maxWidth: "600px",
                }}
            >

                {/* Section Heading */}
                <h2>Accessibility</h2>

                {/* Section Description */}
                <p
                    style={{
                        color: "#4b5563",
                        marginBottom: "25px",
                    }}
                >
                    Read your voucher details out aloud using Whisper Mode.
                </p>

                {/* Toggle Button */}
                <button

                    // Calls handleToggle when clicked
                    onClick={handleWhisperToggle}

                    style={{
                        padding: "10px 30px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",

                        // Conditional Styling
                        backgroundColor: showWhisperMode
                            ? "#22c55e"
                            : "#dc2626",

                        color: "white",
                        fontWeight: "bold",
                    }}
                >

                    {/* Conditional Rendering
                        Display ON when enabled
                        Display OFF when disabled */}
                    {showWhisperMode ? "ON" : "OFF"}

                </button>

                {!deviceSupport.speech && (
                    <p
                        style={{
                            color: "#dc2626",
                            marginTop: "12px",
                            fontSize: "14px",
                        }}
                    >
                        Secret Whisper Mode is unavailable because your browser does not support speech synthesis.
                    </p>
                )}

                <hr
                    style={{
                        margin: "35px 0",
                        border: "none",
                        borderTop: "1px solid #d1d5db",
                    }}
                />

                <h3
                    style={{
                        marginBottom: "12px",
                    }}
                >
                    Vibration Feedback
                </h3>

                <p
                    style={{
                        color: "#4b5563",
                        marginBottom: "25px",
                    }}
                >
                    Vibrate your device when important voucher actions occur.
                </p>

                <button
                    onClick={handleVibrationToggle}
                    style={{
                        padding: "10px 30px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        backgroundColor: vibrationEnabled
                            ? "#22c55e"
                            : "#dc2626",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {vibrationEnabled ? "ON" : "OFF"}
                </button>

                {!deviceSupport.vibration && (
                    <p
                        style={{
                            color: "#dc2626",
                            marginTop: "12px",
                            fontSize: "14px",
                        }}
                    >
                        Your current device does not support vibration feedback.
                    </p>
                )}

                <hr
                    style={{
                        margin: "35px 0",
                        border: "none",
                        borderTop: "1px solid #d1d5db",
                    }}
                />

                <h3
                    style={{
                        marginBottom: "12px",
                    }}
                >
                    Notifications
                </h3>

                <p
                    style={{
                        color: "#4b5563",
                        marginBottom: "25px",
                    }}
                >
                    Allow Voucher PWA to send browser notifications.
                </p>

                <p
                    style={{
                        marginBottom: "15px",
                        fontWeight: "bold",
                    }}
                >
                    Status:{" "}

                    {notificationPermission === "granted" && (
                        <span style={{ color: "#16a34a" }}>
                            Enabled
                        </span>
                    )}

                    {notificationPermission === "default" && (
                        <span style={{ color: "#f59e0b" }}>
                            Not Requested
                        </span>
                    )}

                    {notificationPermission === "denied" && (
                        <span style={{ color: "#dc2626" }}>
                            Blocked
                        </span>
                    )}
                </p>

                {notificationPermission === "denied" && (
                    <p
                        style={{
                            color: "#dc2626",
                            marginTop: "12px",
                            fontSize: "14px",
                        }}
                    >
                        Notifications have been blocked in your browser settings.
                        Enable them from your browser if you would like to receive voucher alerts.
                    </p>
                )}

                <button
                    onClick={requestNotificationPermission}
                    disabled={notificationPermission === "granted"}
                    style={{
                        padding: "10px 30px",
                        border: "none",
                        borderRadius: "8px",
                        cursor:
                            notificationPermission === "granted"
                                ? "default"
                                : "pointer",

                        backgroundColor:
                            notificationPermission === "granted"
                                ? "#22c55e"
                                : "#2563eb",

                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {
                        notificationPermission === "granted"
                            ? "Enabled"

                            : notificationPermission === "denied"
                                ? "Notifications Blocked"

                                : "Enable Notifications"
                    }
                </button>

                <hr
                    style={{
                        margin: "35px 0",
                        border: "none",
                        borderTop: "1px solid #d1d5db",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "15px",
                    }}
                >
                    <h2> Notification Categories</h2>

                    <button
                        onClick={() => setShowCategories(!showCategories)}
                        style={{
                            padding: "8px 16px",
                            border: "none",
                            borderRadius: "8px",
                            backgroundColor: "#2563eb",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "0.25s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.85";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "1";
                        }}
                    >
                        {showCategories ? "▲ Hide" : "▼ Show"}
                    </button>
                </div>

                <p
                    style={{
                        color: "#4b5563",
                        marginBottom: "25px",
                    }}
                >
                    Choose which voucher categories you would like to receive notifications for.
                </p>

                {showCategories && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                        }}
                    >
                        {Object.entries(categories).map(([category, enabled]) => (
                            <div
                                key={category}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "12px 0",
                                    borderBottom: "1px solid #e5e7eb",
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: "500",
                                    }}
                                >
                                    {category}
                                </span>

                                <button
                                    onClick={() =>
                                        toggleCategory(category as keyof typeof categories)
                                    }
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = "0.85";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = "1";
                                    }}
                                    style={{
                                        width: "90px",
                                        height: "40px",
                                        border: "none",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        transition: "0.25s ease",
                                        backgroundColor: enabled
                                            ? "#22c55e"
                                            : "#dc2626",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {enabled ? "ON" : "OFF"}
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <hr
                    style={{
                        margin: "35px 0",
                        border: "none",
                        borderTop: "1px solid #d1d5db",
                    }}
                />

                <h2
                    style={{
                        marginBottom: "12px",
                    }}
                >
                    📱 Device Compatibility
                </h2>

                <p
                    style={{
                        color: "#4b5563",
                        marginBottom: "25px",
                    }}
                >
                    Your browser supports the following features:
                </p>

                {/* FIX: Moved window check into useEffect via deviceSupport state
                    to avoid SSR crash ("window is not defined") */}
                {!deviceSupport.notifications && (
                    <p
                        style={{
                            color: "#dc2626",
                            marginTop: "12px",
                            fontSize: "14px",
                        }}
                    >
                        Your browser does not support notifications.
                    </p>
                )}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                    }}
                >
                    {Object.entries(deviceSupport).map(([feature, supported]) => (
                        <div
                            key={feature}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "1px solid #e5e7eb",
                                paddingBottom: "10px",
                            }}
                        >
                            <span
                                style={{
                                    textTransform: "capitalize",
                                }}
                            >
                                {feature}
                            </span>

                            <span
                                style={{
                                    fontWeight: "bold",
                                    color: supported ? "#16a34a" : "#dc2626",
                                }}
                            >
                                {supported ? "✔ Supported" : "✖ Not Supported"}
                            </span>
                        </div>
                    ))}
                </div>

            </div> {/* END Settings Card */}

        </div> // END Page wrapper
    );
}