import React from "react";
import Link from "next/link";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import WholeJournalToTheRainbowTitle from "../styled-components/WholeJournalToTheRainbowTitle";
import StyledTextDesc from "../styled-components/StyledTextDesc";
import StyledDiv from "../styled-components/StyledDiv";
import styled from "styled-components";
// import StyledSubmitButton from "../styled-components/StyledSubmitButton";

function PromptWord(props) {
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
    <PromptText>
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
    </PromptText>
  );
  return (
    <div>
      <StyledDivPrompt>
        <WholeJournalToTheRainbowTitle>
          Weekly Prompt
        </WholeJournalToTheRainbowTitle>
        <StyledTextDesc>{props.prompt.toUpperCase()}</StyledTextDesc>
        {/* upload button */}
        <StyledLink>
          <Link href="/upload" passHref>
            <RedirectButton />
          </Link>
        </StyledLink>
        {/* expanding text button */}
        <Button onClick={toggleOpen}>
          <FaAngleDown />
        </Button>
        {moreInfo}
      </StyledDivPrompt>
    </div>
  );
}

export default PromptWord;

const StyledDivPrompt = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--lightly-white-pink);
  border: 5px solid var(--deep-soothing-ocean);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  margin-top: 40px;
  height: fit-content;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const StyledLink = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const PromptText = styled.div`
  text-align: center;
  padding: 10px 30px;
`;
