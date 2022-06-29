import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CgMoreVerticalO } from "react-icons/fa";
function PromptWord() {
  const [open, setOpen] = React.useState(false);
  function toggleOpen() {
    setOpen(!open);
  }

  const moreInfo = !open ? null : (
    <div>
      <p>
        If you’re lack of inspiration or like challenging yourself our weekly
        prompt gives you a word to create your next art work based on it.
      </p>
      <p>
        There are no rules, you can interpret the word according to your own
        feelings and mood.
      </p>
      <p>
        Upload your creation and store it in your Mentart Journal or share it
        with the public whenever you’re ready to talk about it.
      </p>
    </div>
  );
  return (
    <div>
      <h3>Weekly Prompt</h3>
      <h4>Prompt word goes here</h4>
      <FaCloudUploadAlt />
      <button onClick={toggleOpen}>
         <CgMoreVerticalO />
      </button>
      {moreInfo}
     </div>
  );
}

export default PromptWord;
