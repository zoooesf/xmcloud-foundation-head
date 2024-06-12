import { Field, RichText, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import React from 'react';
import '../stories/Card.css';

type CardProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    body: Field<string>;
    category?: Field<string>;
    categoryColor: 'yellow' | 'blue' | 'green';
  };
};
const Card = ({ fields }: CardProps): JSX.Element => {
  return (
    <div className="bg-slate-50">
      <div
        className={[
          'w-1/3 p-2 text-center text-sm text-white uppercase font-bold',
          `background-${fields.categoryColor}`,
        ].join(' ')}
      >
        <Text tag="h5" field={fields.category} />
      </div>
      <Text tag="h2" className="p-3 text-3xl font-bold" field={fields.heading} />
      <RichText className="px-3" field={fields.body} />
    </div>
  );
};

export default withDatasourceCheck()<CardProps>(Card);
