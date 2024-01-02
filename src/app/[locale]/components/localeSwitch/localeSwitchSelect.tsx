'use client';
import {ReactNode} from 'react';


type Props = {
  children: ReactNode;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  label

}: Props) {




  return (
    <div>
       <p>{label}</p>
  {children}
  </div>
  );
}