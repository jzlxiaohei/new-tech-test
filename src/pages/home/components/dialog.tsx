import React from 'react';
import { Dialog } from '@/components/dialog';
import { css } from '@emotion/react';
import { EmailForm } from './form';
import { Touchable } from '@/components/touchable';
import { ButtonCss } from './style';

type BaseDialogProps = {
  visible: boolean;
  onClose: () => void;
};

type FormProps = BaseDialogProps & {
  handleSuccess: () => void;
};

export function DialogForm(props: FormProps) {
  return (
    <Dialog
      title="Request an invite"
      visible={props.visible}
      onClose={props.onClose}
    >
      <EmailForm onSuccess={props.handleSuccess} />
    </Dialog>
  );
}

export function DialogSuccess(props: BaseDialogProps) {
  return (
    <Dialog title="All done!" onClose={props.onClose} visible={props.visible}>
      <div
        css={css`
          text-align: center;
          font-size: 16px;
        `}
      >
        You will be one of first to experience <br />
        Broccoli & Co. when we launch.
      </div>
      <Touchable css={ButtonCss} onClick={props.onClose}>
        Ok
      </Touchable>
    </Dialog>
  );
}
