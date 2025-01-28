import { useEffect, useState } from "react";

export default function useOnline() {
  const getNetworkStatus = () => window.navigator.onLine ?? false;
  const [isOnline, setIsOnline] = useState(getNetworkStatus());

  /** using poll method **/
  //   useEffect(() => {
  //     setInterval(() => {
  //       setIsOnline(getNetworkStatus());
  //     }, 500);
  //   }, []);

  /**
   *  using event listener method
   */

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));

    window.addEventListener("offline", () => setIsOnline(false));

    return () => {
      // cleanup
      window.removeEventListener("online", () =>
        console.log("removed online event listener")
      );

      window.removeEventListener("offline", () =>
        console.log("Removed Offline Event Listener")
      );
    };
  }, []);

  return isOnline;
}
