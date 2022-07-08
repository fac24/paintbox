import React from "react";
import Link from "next/link";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


function PromptWord() {
  const [open, setOpen] = React.useState(false);
  function toggleOpen() {
    setOpen(!open);
  }

  // button redirect
  // eslint-disable-next-line react/display-name
  const RedirectButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <FaCloudUploadAlt />
      </a>
    );
  });


  const moreInfo = !open ? null : (
    <div id="prompt-div">
      <p>
        If you’re lacking inspiration or like challenging yourself, our weekly
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

      {/* upload button */}
      <Link href="/upload" passHref>
        <RedirectButton />
      </Link>
      {/* expanding text button */}
      <button id="toggle-btn" onClick={toggleOpen}>
        <FaAngleDown />
      </button>
      {moreInfo}
    </div>

  );
}

export default PromptWord;
