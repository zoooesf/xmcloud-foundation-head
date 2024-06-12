import React from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';
import '../assets/app.css';
interface Fields {
  Text: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.Text} />
  ) : (
    <span className="is-empty-hint">Rich text</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}  bg-slate-50`}
      id={id ? id : undefined}
    >
      <div className="component-content underline">{text}</div>
    </div>
  );
};
