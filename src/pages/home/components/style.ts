import { css } from '@emotion/react';

export const ButtonCss = css`
  font-size: 16px;
  background: #1890ff;
  border: none;
  border-radius: 4px;
  color: #fff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px #0000000b;
  margin: 0 auto;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &.disabled {
    background: #ddd;
  }
`;

export const errorBaseCss = css`
  font-size: 14px;
  color: #ff4d4f;
`;

export const FieldCss = css`
  width: 100%;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 700;
  background: none;
  outline: none;
  border: 1px solid #d9d9d9;
  height: 36px;
  padding: 0 10px;
  border-radius: 4px;
`;
