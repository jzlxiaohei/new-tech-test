import React, { PropsWithChildren } from 'react';
import { default as RcDialog } from 'rc-dialog';

import 'rc-dialog/assets/index.css';
import './dialog-reset.less';

type Props = PropsWithChildren<{
  visible: boolean;
  onClose: () => void;
  title: React.ReactNode;
}>;

export function Dialog(props: Props) {
  return (
    <RcDialog
      className="aw-dialog"
      title={props.title}
      visible={props.visible}
      animation="zoom"
      maskAnimation="fade"
      onClose={() => {
        props.onClose();
      }}
    >
      {props.children}
    </RcDialog>
  );
}
