import React from 'react';
import styled from 'styled-components';

type infoTextProps = {
  Error?: boolean;
};

const StatusText = styled.p<infoTextProps>`
  color: ${(props) => (props.Error ? '#fd3d61' : '#26a1f7')};
  font-weight: 600;
`;

interface Props {
  children: React.ReactNode | string;
  isError?: boolean;
}

const InfoText: React.FC<Props> = (props) => {
  const { children, isError } = props;
  return <StatusText Error={isError}>{children}</StatusText>;
};

export default InfoText;
