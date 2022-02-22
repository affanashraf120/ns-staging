import { ReactNode } from 'react';
import { MainFooter } from '../components/MainFooter';
import { MainNav } from '../components/MainNav';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-1">
    {props.meta}

    <MainNav />
    <div className="py-5 content">{props.children}</div>
    <MainFooter />
  </div>
);

export { Main };
