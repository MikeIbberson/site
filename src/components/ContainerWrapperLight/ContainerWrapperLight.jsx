import React from 'react';
import styled from 'styled-components';

const ShapeBottom = styled.svg`
  height: 160px;
  width: 100%;
`;

const WrapperLight = styled.div`
  background-color: #f6fafd;
  margin-top: -160px;
  padding-top: calc(160px + 2rem);
  position: 'relative';
`;

// eslint-disable-next-line
const ContainerWrapperLight = ({ children }) => (
  <>
    <WrapperLight>{children}</WrapperLight>
    <ShapeBottom
      preserveAspectRatio="none"
      viewBox="0 0 1440 390"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 0,400 C 0,400 0,200 0,200 C 63.004784688995215,220.26794258373207 126.00956937799043,240.53588516746413 237,247 C 347.99043062200957,253.46411483253587 506.96650717703346,246.1244019138756 620,252 C 733.0334928229665,257.8755980861244 800.1244019138757,276.9665071770335 868,273 C 935.8755980861243,269.0334928229665 1004.5358851674641,242.00956937799043 1100,226 C 1195.4641148325359,209.99043062200957 1317.732057416268,204.99521531100478 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="#f6fafd"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
        transform="rotate(-180 720 200)"
      />
    </ShapeBottom>
  </>
);

export default ContainerWrapperLight;
