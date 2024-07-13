import { Toggle } from "../ui/toggle";
import { useEffect, useState } from "react";
import { Fullscreen, Shrink } from "lucide-react";

type ScreenTogglerProps = {
  className?: string;
};

function ScreenToggler(props: ScreenTogglerProps): JSX.Element {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    const docElement = document.documentElement as HTMLElement & {
      mozRequestFullScreen?: () => Promise<void>;
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };

    const requestFullscreen = () => {
      if (docElement.requestFullscreen) {
        return docElement.requestFullscreen({ navigationUI: "hide" });
      } else if (docElement.mozRequestFullScreen) {
        // Firefox
        return docElement.mozRequestFullScreen();
      } else if (docElement.webkitRequestFullscreen) {
        // Safari
        return docElement.webkitRequestFullscreen();
      } else if (docElement.msRequestFullscreen) {
        // IE/Edge
        return docElement.msRequestFullscreen();
      }
    };

    const exitFullscreen = () => {
      const doc = document as Document & {
        mozCancelFullScreen?: () => Promise<void>;
        webkitExitFullscreen?: () => Promise<void>;
        msExitFullscreen?: () => Promise<void>;
      };

      if (doc.exitFullscreen) {
        return doc.exitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        // Firefox
        return doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {
        // Safari
        return doc.webkitExitFullscreen();
      } else if (doc.msExitFullscreen) {
        // IE/Edge
        return doc.msExitFullscreen();
      }
    };

    if (isFullScreen) {
      requestFullscreen()?.catch((err: any) => {
        console.error("Failed to enter fullscreen mode:", err);
        setIsFullScreen(false);
      });
    } else {
      if (
        document.fullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
      ) {
        exitFullscreen()?.catch((err: any) => {
          console.error("Failed to exit fullscreen mode:", err);
        });
      }
    }
  }, [isFullScreen]);

  return (
    <Toggle
      className={props.className}
      onClick={() => setIsFullScreen(!isFullScreen)}
    >
      {isFullScreen ? <Shrink /> : <Fullscreen />}
    </Toggle>
  );
}

export default ScreenToggler;
