import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/counter/appSlice";
import "../styles/Channel.css";

function Channel({ id, channelName }) {
  const dispatch = useDispatch();
  return (
    <div
      className="channel_container"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="channel_hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default Channel;
