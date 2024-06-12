import React from 'react';
import '../stories/sitecoreButton.css';
import { Link, LinkField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ButtonProps = ComponentProps & {
  fields: {
    backgroundColor?: 'yellow' | 'blue' | 'green';
    size?: 'small' | 'medium' | 'large';
    disableState?: boolean;
    link?: LinkField;
    onClick?: () => void;
  };
};
export const SitecoreButton = ({ fields }: ButtonProps): JSX.Element => {
  const mode = fields.disableState ? 'cursor-not-allowed' : 'cursor-pointer';
  return (
    <button
      type="button"
      className={[
        'border-2 rounded-lg border-black ',
        `background-${fields.backgroundColor} storybook-button--${fields.size}`,
        mode,
      ].join(' ')}
    >
      <Link field={fields.link} className={mode} />
    </button>
  );
};
export default withDatasourceCheck()<ButtonProps>(SitecoreButton);
