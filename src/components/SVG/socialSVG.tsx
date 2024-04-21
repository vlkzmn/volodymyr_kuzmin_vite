import React from 'react';
import { TelegramSVG } from './TelegramSVG';
import { LinkedinSVG } from './LinkedinSVG';
import { GitHubSVG } from './GitHubSVG';

type Components = Record<string, React.FC>;

interface ComponentsData {
  name: string;
  link: string;
}

export const socialSvgComponents: Components = {
  GitHubSVG,
  LinkedinSVG,
  TelegramSVG,
};

export const socialSvgData: ComponentsData[] = [
  {
    name: 'TelegramSVG',
    link: 'https://t.me/VolodymyrKuzmin',
  },
  {
    name: 'GitHubSVG',
    link: 'https://github.com/vlkzmn',
  },
  {
    name: 'LinkedinSVG',
    link: 'https://www.linkedin.com/in/volodymyr-kuzmin/',
  },
];
