import React from "react";
import { platforms } from "../../src/Platforms";
import { IOSShareIcon, FireFoxA2HSIcon, MenuIcon, OperaA2HSIcon } from "../../src/Icons";

function DialogActionWithInstructions(props) {
  return (
    <div width="100%" display="flex" flexDirection="column">
      <div>
        <p>To install this app:</p>
        <ul>
          <li>
            <span style={{ display: "flex", alignItems: "center" }}>{props.action1}</span>
          </li>
          <li>{props.action2}</li>
        </ul>
      </div>
      <div width="100%" textAlign="right">
        <button onClick={props.onSubmit}>Ok</button>
      </div>
    </div>
  );
}

export default function InstallDialogAction(props) {
  return (
    <>
      <div>
        {props.platform === platforms.NATIVE && (
          <>
            <button onClick={props.onClose}>Cancel</button>
            <button onClick={props.onSubmit} color="primary" variant="contained" disableElevation>
              Install
            </button>
          </>
        )}
        {props.platform === platforms.IDEVICE && (
          <DialogActionWithInstructions
            action1={
              <>
                Tap the share button:
                <IOSShareIcon />
              </>
            }
            action2="then find and tap 'Add to Homescreen'"
            onSubmit={props.onSubmit}
          />
        )}
        {props.platform === platforms.FIREFOX && (
          <DialogActionWithInstructions
            action1={
              <>
                Tap this icon on the address bar:
                <FireFoxA2HSIcon />
              </>
            }
            action2="then tap '+Add to Homescreen'"
            onSubmit={props.onSubmit}
          />
        )}
        {props.platform === platforms.FIREFOX_NEW && (
          <DialogActionWithInstructions
            action1={
              <>
                Tap the menu button:
                <MenuIcon />
              </>
            }
            action2="then tap 'Install'"
            onSubmit={props.onSubmit}
          />
        )}
        {props.platform === platforms.OPERA && (
          <DialogActionWithInstructions
            action1={
              <>
                Tap the menu button:
                <MenuIcon />
              </>
            }
            action2={
              <>
                then tap &nbsp;'
                <OperaA2HSIcon />
                Home screen'
              </>
            }
            onSubmit={props.onSubmit}
          />
        )}
        {props.platform === platforms.OTHER && (
          <div>
            <div>Unfortunately the install feature is not supported by your browser.</div>
            <div width="100%" textAlign="right">
              <button onClick={props.onClose}>Ok</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
