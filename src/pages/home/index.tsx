import { Touchable } from '@/components/touchable';
import React from 'react';
import { css } from '@emotion/react';
import { flexBoxCenter } from '@/style';
import { DialogForm, DialogSuccess } from './components/dialog';
import { mobileScreen } from '@/style/media-query-utils';

export function PageHome() {
  const [dialogFormVisible, setFormDialogVisible] = React.useState(false);
  const [dialogSuccessVisible, setDialogSuccessVisible] = React.useState(false);

  return (
    <div
      className="page-home"
      css={css`
        ${flexBoxCenter};
        height: 100%;
      `}
    >
      <div
        css={css`
          padding: 20px 20px 30px;
          border-radius: 8px;
          background: #93c5fd;
          box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
          text-align: center;
          word-break: break-word;
        `}
      >
        <div
          css={css`
            font-size: 44px;
            line-height: 1.2;
            color: #fff;
            ${mobileScreen(`
              font-size: 28px;
            `)}
          `}
        >
          A better way <br />
          to enjoy every day.
        </div>
        <div
          css={css`
            color: rgba(255, 255, 255, 0.7);
            margin: 20px;
            padding-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.7);
            font-size: 24px;
            font-weight: 600;
            ${mobileScreen(`
              font-size: 16px;
            `)}
          `}
        >
          Be the first to know when we launch.
        </div>
        <Touchable
          element="button"
          css={css`
            appearance: none;
            border-radius: 8px;
            border: none;
            height: 44px;
            width: 200px;
            color: #93c5fd;
            font-weight: 600;
            font-size: 20px;
            background: #fff;
          `}
          onClick={() => {
            setFormDialogVisible(true);
          }}
        >
          Request an invite
        </Touchable>
      </div>
      <DialogForm
        visible={dialogFormVisible}
        onClose={() => {
          setFormDialogVisible(false);
        }}
        handleSuccess={() => {
          setFormDialogVisible(false);
          setDialogSuccessVisible(true);
        }}
      ></DialogForm>
      <DialogSuccess
        visible={dialogSuccessVisible}
        onClose={() => setDialogSuccessVisible(false)}
      ></DialogSuccess>
    </div>
  );
}
