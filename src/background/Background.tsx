import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  image: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} rounded-lg bg-local ${props.image}`}>
    {props.children}
  </div>
);

export { Background };
