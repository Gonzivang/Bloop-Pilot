import IconWrapper from './Wrapper';

const RawIcon = (
  <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.875 1.25C9.875 0.628679 10.3787 0.125 11 0.125C17.0061 0.125 21.875 4.9939 21.875 11C21.875 11.6213 21.3713 12.125 20.75 12.125C20.1287 12.125 19.625 11.6213 19.625 11C19.625 6.23654 15.7635 2.375 11 2.375C10.3787 2.375 9.875 1.87132 9.875 1.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.375 11C2.375 15.7635 6.23655 19.625 11 19.625C11.6213 19.625 12.125 20.1287 12.125 20.75C12.125 21.3713 11.6213 21.875 11 21.875C4.9939 21.875 0.125 17.0061 0.125 11C0.125 10.3787 0.62868 9.875 1.25 9.875C1.87132 9.875 2.375 10.3787 2.375 11Z"
      fill="currentColor"
    />
  </svg>
);

const BoxedIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.875 2.25C10.875 1.62868 11.3787 1.125 12 1.125C18.0061 1.125 22.875 5.9939 22.875 12C22.875 12.6213 22.3713 13.125 21.75 13.125C21.1287 13.125 20.625 12.6213 20.625 12C20.625 7.23654 16.7635 3.375 12 3.375C11.3787 3.375 10.875 2.87132 10.875 2.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.375 12C3.375 16.7635 7.23655 20.625 12 20.625C12.6213 20.625 13.125 21.1287 13.125 21.75C13.125 22.3713 12.6213 22.875 12 22.875C5.9939 22.875 1.125 18.0061 1.125 12C1.125 11.3787 1.62868 10.875 2.25 10.875C2.87132 10.875 3.375 11.3787 3.375 12Z"
      fill="currentColor"
    />
  </svg>
);

export default IconWrapper(RawIcon, BoxedIcon);
