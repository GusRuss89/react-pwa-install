import React from "react";
import InstallDialogAction from "./InstallDialogAction";

export default function InstallDialog(props) {
  return (
    <div style={{display: props.open ? 'block' : 'none'}} onClick={props.onClose} aria-labelledby="dialog-title">
      <h1 id="dialog-title">{props.title || "Install Web App"}</h1>
      <div>
        <div>
          {!!props.logo && (
            <div>
              <img src={props.logo} alt="logo" />
            </div>
          )}
          {!!props.features && (
            <div>
              <p>Key Features:</p>
              <div>
                {props.features}
              </div>
            </div>
          )}
        </div>
        {!!props.description && (
          <>
            <p>Description:</p>
            <div>
              {props.description}
            </div>
          </>
        )}
      </div>
      <InstallDialogAction platform={props.platform} onSubmit={props.onSubmit} onClose={props.onClose} />
    </div>
  );
}
