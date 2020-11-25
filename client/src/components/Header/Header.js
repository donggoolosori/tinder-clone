import React from "react";
// style
import "./Header.css";
// icon
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header__container">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <IconButton className="header__logo">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </IconButton>
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;