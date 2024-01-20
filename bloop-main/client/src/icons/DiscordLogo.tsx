import IconWrapper from './Wrapper';

const RawIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.5455 2.75875C12.5013 2.28071 11.399 1.94157 10.2667 1.75C10.1118 2.02699 9.97161 2.31197 9.84675 2.60375C8.64064 2.422 7.4141 2.422 6.208 2.60375C6.08307 2.312 5.94288 2.02702 5.788 1.75C4.65498 1.94319 3.55195 2.28313 2.50675 2.76125C0.431746 5.83125 -0.130754 8.825 0.150496 11.7762C1.36567 12.6741 2.72579 13.3569 4.17175 13.795C4.49733 13.3571 4.78543 12.8925 5.033 12.4062C4.56279 12.2306 4.10895 12.014 3.67675 11.7587C3.7905 11.6762 3.90175 11.5913 4.00925 11.5087C5.26687 12.1002 6.6395 12.4068 8.02925 12.4068C9.41899 12.4068 10.7916 12.1002 12.0492 11.5087C12.158 11.5975 12.2692 11.6825 12.3817 11.7587C11.9487 12.0144 11.494 12.2315 11.023 12.4075C11.2703 12.8936 11.5584 13.3577 11.8842 13.795C13.3314 13.3586 14.6926 12.6762 15.908 11.7775C16.238 8.355 15.3442 5.38875 13.5455 2.75875ZM5.38925 9.96125C4.6055 9.96125 3.958 9.25 3.958 8.375C3.958 7.5 4.583 6.7825 5.38675 6.7825C6.1905 6.7825 6.833 7.5 6.81925 8.375C6.8055 9.25 6.188 9.96125 5.38925 9.96125ZM10.6692 9.96125C9.88425 9.96125 9.23925 9.25 9.23925 8.375C9.23925 7.5 9.86425 6.7825 10.6692 6.7825C11.4742 6.7825 12.1117 7.5 12.098 8.375C12.0842 9.25 11.468 9.96125 10.6692 9.96125Z"
      fill="currentColor"
    />
  </svg>
);

const BoxedIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.9419 3.52317C15.6473 2.91744 14.263 2.47723 12.8157 2.22656C12.638 2.5479 12.4304 2.98012 12.2872 3.32394C10.7487 3.09258 9.22445 3.09258 7.7143 3.32394C7.57116 2.98012 7.3588 2.5479 7.17947 2.22656C5.73067 2.47723 4.3448 2.91906 3.05016 3.52638C0.438869 7.47238 -0.269009 11.3204 0.0849305 15.1137C1.81688 16.4071 3.49534 17.1928 5.14548 17.7069C5.55291 17.1462 5.91628 16.5501 6.22931 15.9219C5.63313 15.6954 5.06211 15.4158 4.52256 15.0912C4.6657 14.9852 4.80571 14.8743 4.94098 14.7603C8.23183 16.2995 11.8074 16.2995 15.0589 14.7603C15.1958 14.8743 15.3358 14.9852 15.4774 15.0912C14.9362 15.4174 14.3637 15.6969 13.7675 15.9235C14.0805 16.5501 14.4423 17.1478 14.8513 17.7085C16.503 17.1944 18.183 16.4087 19.915 15.1137C20.3303 10.7163 19.2056 6.90361 16.9419 3.52317ZM6.67765 12.7809C5.68977 12.7809 4.87963 11.8586 4.87963 10.7355C4.87963 9.61247 5.67247 8.68864 6.67765 8.68864C7.68285 8.68864 8.49297 9.61086 8.47567 10.7355C8.47723 11.8586 7.68285 12.7809 6.67765 12.7809ZM13.3223 12.7809C12.3344 12.7809 11.5243 11.8586 11.5243 10.7355C11.5243 9.61247 12.3171 8.68864 13.3223 8.68864C14.3275 8.68864 15.1376 9.61086 15.1203 10.7355C15.1203 11.8586 14.3275 12.7809 13.3223 12.7809Z"
      fill="currentColor"
    />
  </svg>
);

export default IconWrapper(RawIcon, BoxedIcon);
