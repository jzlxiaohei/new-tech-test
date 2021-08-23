import React from 'react';
import { css } from '@emotion/react';
import { LayoutFooterHeight } from './config';

export function LayoutFooter() {
  return (
    <footer
      className="layout-header"
      css={css`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: ${LayoutFooterHeight};
        background-color: rgba(14, 165, 233);
        color: #fff;
        font-size: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        font-family: 'Gill Sans', sans-serif;
      `}
    >
      <div
        css={css`
          width: 100%;
        `}
      >
        <div>
          Made with
          <span
            css={css`
              color: red;
              margin: 0 5px;
            `}
          >
            ❤
          </span>
          in Melbourne.
        </div>
        <div>@ 2021 Broccoli & Co. All rights reserved</div>
      </div>
    </footer>
  );
}
