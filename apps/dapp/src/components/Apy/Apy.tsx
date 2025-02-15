import React from 'react';
import styled, { css } from 'styled-components';
import BaseImage from 'components/Image/Image';

interface ApyProps extends ApyStyledProps {
  cryptoName: string;
  value: string;
  alignCenter?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Apy = ({ cryptoName, value, isWhite, isHome = false, alignCenter = false }: ApyProps) => {
  return (
    <ApyStyled alignCenter={alignCenter} isHome={isHome}>
      <ApyValue>{value}</ApyValue>
      <ApyLabel isWhite={isWhite}>{cryptoName}</ApyLabel>
    </ApyStyled>
  );
};

interface ApyStyledProps {
  isWhite?: boolean;
  isHome?: boolean;
  alignCenter?: boolean;
}

const Image = styled(BaseImage)`
  margin-bottom: 1.5rem;
`;

const ApyStyled = styled.div<ApyStyledProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 32px;
  margin: 1.25rem 0 3rem 0;

  ${({ alignCenter }) => (alignCenter ? `align-items: center;` : '')}

  ${(props) =>
    props.isHome &&
    css`
      padding-left: 0;

      i {
        position: relative;
        justify-content: flex-start;
        margin-bottom: 1.5rem;
      }

      ${ApyValue} {
        ${(props) => props.theme.typography.h3};
      }

      ${ApyLabel} {
        margin-top: 1.5rem;
      }
    `};
`;

const ApyValue = styled.strong`
  color: ${(props) => props.theme.palette.light};
`;

const ApyLabel = styled.strong<ApyStyledProps>`
  color: ${(props) => props.theme.palette.brand};

  ${(props) =>
    props.isWhite &&
    css`
      color: ${(props) => props.theme.palette.light};
    `};
`;
