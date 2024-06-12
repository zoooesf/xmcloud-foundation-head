import React from 'react';
import '../stories/sitecoreButton.css';
import {
  ComponentRendering,
  Link,
  LinkField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

export interface ButtonProps {
  backgroundColor?: 'yellow' | 'blue' | 'green';
  size?: 'small' | 'medium' | 'large';
  disableState?: boolean;
  link?: LinkField;
  rendering: ComponentRendering;
  onClick?: () => void;
}
export const SitecoreButton = ({
  backgroundColor,
  size = 'medium',
  disableState,
  link,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = disableState ? 'cursor-not-allowed' : 'cursor-pointer';
  return (
    <button
      type="button"
      className={[
        'border-2 rounded-lg border-black ',
        `background-${backgroundColor} storybook-button--${size}`,
        mode,
      ].join(' ')}
      {...props}
    >
      <Link field={link} className={mode} />
    </button>
  );
};
export default withDatasourceCheck()<ButtonProps>(SitecoreButton);
