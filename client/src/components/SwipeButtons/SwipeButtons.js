import React from "react";
import "./SwipeButtons.css";
// icons
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons_container">
      <IconButton size="large" className="swipeButton__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton size="large" className="swipeButton__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton size="large" className="swipeButton__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton size="large" className="swipeButton__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton size="large" className="swipeButton__flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
