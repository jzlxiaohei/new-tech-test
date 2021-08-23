import React from 'react';
import cns from 'classnames';
import LoadingImg from './loading.png';

import './index.less';

type IProps = {
  /**
   * custom class name
   */
  className?: string;
  /**
   * html element string, default div
   */
  element?: string;

  children: React.ReactNode;
  /**
   * click callback
   */
  onClick?: (e: React.MouseEvent) => void;

  /**
   * default false. when disabled, onClick will not fire
   */
  disabled?: boolean;
  /**
   * default false. when disabled, onClick will not fire
   */
  loading?: boolean;

  // other props should pass to the element
  extraProps?: Record<string, any>;
};

export class Touchable extends React.Component<IProps> {
  state = {
    active: false,
  };

  private showNotTriggerEvent() {
    return this.props.disabled || this.props.loading;
  }

  handleClick = (e: React.MouseEvent) => {
    if (this.showNotTriggerEvent()) {
      return;
    }
    this.props.onClick && this.props.onClick(e);
  };

  handleStart = () => {
    if (this.showNotTriggerEvent()) {
      return;
    }
    this.setState({
      active: true,
    });
  };

  handleEnd = () => {
    if (this.showNotTriggerEvent()) {
      return;
    }
    this.setState({
      active: false,
    });
  };

  render() {
    const animate = 'opacity';
    const className = cns('aw-touchable', {
      [this.props.className!]: !!this.props.className,
      [animate]: this.state.active,
      disabled: this.props.disabled,
      loading: this.props.loading,
    });
    const element = this.props.element || 'div';
    return React.createElement(
      element,
      {
        className,
        onClick: this.handleClick,
        onTouchStart: this.handleStart,
        onMouseDown: this.handleStart,
        onTouchEnd: this.handleEnd,
        onMouseUp: this.handleEnd,
        onMouseLeave: this.handleEnd, // pc 上,按住后把鼠标拖走，不会触发 mouseUp
        style: {
          userSelect: 'none',
        },
        ...this.props.extraProps,
      },

      this.props.loading ? (
        <>
          <img className="aw-touchable-loading-wrapper" src={LoadingImg} />
          {this.props.children}
        </>
      ) : (
        this.props.children
      )
    );
  }
}
