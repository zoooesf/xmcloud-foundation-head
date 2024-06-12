import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  RichText,
  Field,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface MyComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    heading: Field<string>;
    body: Field<string>;
  };
}

export const Default = (props: MyComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <p>MyComponent Component</p>
        {/* <Text field={props.fields.heading}/>
        <RichText field={props.fields.body}/> */}
      </div>
    </div>
  );
};
