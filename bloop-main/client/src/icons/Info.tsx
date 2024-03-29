import IconWrapper from './Wrapper';

const RawIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM5.91667 8C5.91667 7.58579 6.25245 7.25 6.66667 7.25H7.75C8.30229 7.25 8.75 7.69772 8.75 8.25V11.3333C8.75 11.7475 8.41421 12.0833 8 12.0833C7.58579 12.0833 7.25 11.7475 7.25 11.3333V8.75H6.66667C6.25245 8.75 5.91667 8.41421 5.91667 8ZM8 6C8.55229 6 9 5.55229 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55229 7.44772 6 8 6Z"
      fill="currentColor"
    />
  </svg>
);

const BoxedIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM5.91667 8C5.91667 7.58579 6.25245 7.25 6.66667 7.25H7.75C8.30229 7.25 8.75 7.69772 8.75 8.25V11.3333C8.75 11.7475 8.41421 12.0833 8 12.0833C7.58579 12.0833 7.25 11.7475 7.25 11.3333V8.75H6.66667C6.25245 8.75 5.91667 8.41421 5.91667 8ZM8 6C8.55229 6 9 5.55229 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55229 7.44772 6 8 6Z"
      fill="currentColor"
    />
  </svg>
);

export default IconWrapper(RawIcon, BoxedIcon);
