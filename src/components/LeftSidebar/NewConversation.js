import React from "react";

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <p>New Conversation</p>
      <span onClick={handleClick}>
        <i className="fa fa-plus-square"></i>
      </span>
    </div>
  );
}

export default NewConversation;
