import React from 'react';
import { css } from '@emotion/react';
import { LayoutHeaderHeight } from './config';
import { mobileScreen } from '@/style/media-query-utils';

export function LayoutHeader() {
  return (
    <header
      className="layout-header"
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: ${LayoutHeaderHeight};
        /* background-color: rgba(14, 165, 233); */
        background-image: linear-gradient(to right, #2dd4bf, #3b82f6);
        color: #fff;
        line-height: ${LayoutHeaderHeight};
        padding-left: 60px;
        font-weight: 500x;
        ${mobileScreen(`
          padding-left: 20px;
        `)}
      `}
    >
      BROCCOLI & CO.
    </header>
  );
}
