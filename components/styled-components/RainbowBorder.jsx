import styled from "styled-components";

const RainbowBorder = styled.div`
  --borderWidth: 10px;
  background: var(--lilly-lilac);
  position: relative;
  margin: 5rem auto;
  max-width: 40rem;
  border-radius: var(--borderWidth);

  &:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    // background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  // for mobile screens.
  @media only screen and (max-width: 768px) {
    margin: 4rem;
    max-width: 25rem;
  }
`;

export default RainbowBorder;
