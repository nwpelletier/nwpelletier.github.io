import React, { useContext, useState } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";
import "./SingleProject.css";

const WhisperAds = () => {
  const { isTablet, isMobile } = useContext(ScreenSizeContext);
  const [popupImage, setPopupImage] = useState(null);
  return (
    <div className="project-single-container">
      <div className="project-single-header">
        <img src="/pictures/whisper-ads-icon.png" height="48px" width="48px" />
        <h1>WhisperAds</h1>
        <span>|</span>
        <a
          href="https://chromewebstore.google.com/detail/whisperads/jpifidmolmffpipmffgekoikmkocokha"
          target="_blank"
          rel="noopener noreferrer"
        >
          Available Here
        </a>
      </div>
      <div className="project-single-scrollable">
        <div
          className={
            isTablet || isMobile
              ? `project-single-column`
              : `project-single-row`
          }
        >
          <p>
            As someone who often has background audio playing while
            working—switching between music playlists, YouTube, or Twitch.tv—I
            noticed a recurring issue with Twitch’s volume handling during ads.
            When your Twitch player volume is set low, ads sometimes abruptly
            play at much higher volume, which can be jarring. This inspired me
            to create my first Chrome extension to handle this problem.
          </p>
          <img src="/pictures/whisperAds/whisperAdsPopup.jpg" />
        </div>

        <div className="project-single-column">
          <p>
            I started by identifying the key DOM elements—the ad player and the
            volume slider—and experimented with scripts in the browser console
            to manipulate the volume before, during, and after ads. After
            extensive testing, I developed a straightforward solution: the
            extension polls regularly to detect when an ad element appears. Once
            an ad is detected, it stores the user’s current volume (saved in
            Chrome storage) and adjusts the volume according to the user’s
            preference for ads—either leaving volume unchanged, muting
            completely, or dimming it by half. When the ad finishes, the volume
            is restored to the saved user level.
          </p>
          <figure>
            <img
              src="/pictures/whisperAds/volumeSlider.jpg"
              onClick={() =>
                setPopupImage("/pictures/whisperAds/volumeSlider.jpg")
              }
              alt="Volume slider in Twitch DOM"
              className="clickable"
            />
            <figcaption>
              Inspecting elements until I found the volume slider
            </figcaption>
          </figure>

          <figure>
            <img
              src="/pictures/whisperAds/videoAd.jpg"
              onClick={() => setPopupImage("/pictures/whisperAds/videoAd.jpg")}
              alt="Video ad countdown element"
              className="clickable"
            />
            <figcaption>
              Dug even further until I found an element representing the ad
              countdown
            </figcaption>
          </figure>
        </div>

        <div className="project-single-row">
          <p>
            {" "}
            This logic runs entirely within the content script. Meanwhile, the
            background script broadcasts any setting changes to all other open
            Chrome tabs running Twitch, ensuring consistent behavior. The
            current UI is very simple, serving as a proof of concept to
            understand extension development from scratch. Future versions will
            add more customizable volume settings, a cleaner interface, and
            support for YouTube ads as well.
          </p>
        </div>
        <div className="project-single-footer">
          <a
            href="https://github.com/nwpelletier/ad-volume-normalizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the code on Github!
          </a>
        </div>
        {popupImage && (
          <div className="popup-overlay" onClick={() => setPopupImage(null)}>
            <img
              src={popupImage}
              className="popup-image"
              alt="Full size"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WhisperAds;
