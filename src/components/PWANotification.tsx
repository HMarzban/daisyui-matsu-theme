import { useState, useEffect, useCallback, memo } from "react";

interface PWANotificationProps {
  offline?: boolean;
  update?: boolean;
  onUpdate?: () => void;
}

const PWANotificationComponent = ({
  offline,
  update,
  onUpdate,
}: PWANotificationProps) => {
  const [visible, setVisible] = useState(false);

  // Reset visibility when props change
  useEffect(() => {
    if (offline || update) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [offline, update]);

  // Handle close button click
  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  // Handle update button click
  const handleUpdate = useCallback(() => {
    if (onUpdate) {
      onUpdate();
    }
    setVisible(false);
  }, [onUpdate]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`alert ${
          update ? "alert-info" : "alert-success"
        } shadow-lg max-w-sm`}
      >
        <div className="flex w-full justify-between items-center">
          <div>
            {offline && <span>App is ready for offline use!</span>}
            {update && <span>New content is available.</span>}
          </div>

          {update && (
            <button
              className="btn btn-sm btn-ghost"
              onClick={handleUpdate}
              aria-label="Update application"
            >
              Update
            </button>
          )}

          <button
            className="btn btn-sm btn-circle btn-ghost"
            onClick={handleClose}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
const PWANotification = memo(PWANotificationComponent);
export default PWANotification;
