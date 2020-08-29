import React from 'react'

export interface Event {
  time: string;
  title: string | JSX.Element;
  desc: string;
  now: boolean;
}

export interface WorkingPeriod {
  months: string;
  days: string;
}
