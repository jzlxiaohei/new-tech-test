import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { LayoutHeaderHeight, LayoutFooterHeight } from './config';

type Props = PropsWithChildren<{}>;

export function LayoutContainer(props: Props) {
  return (
    <div
      className="layout-container"
      css={css`
        position: fixed;
        top: ${LayoutHeaderHeight};
        bottom: ${LayoutFooterHeight};
        left: 0;
        right: 0;
        padding: 20px;
        background: #f6f7f8;
      `}
    >
      {props.children}
    </div>
  );
}
