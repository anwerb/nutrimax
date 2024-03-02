"use Client";

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Header } from './header';
import { Social } from './social';
import { Backbutton } from './back-button';

// Define the props type for CardWrapper
interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

// Define CardWrapper as a functional component
const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
        <CardHeader>
            <Header label={headerLabel} />
        </CardHeader>
     <CardContent>
            {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
            <Social/>
        </CardFooter>
      )}
      <CardFooter>
        <Backbutton
        label={backButtonLabel}
        href={backButtonHref}/>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;