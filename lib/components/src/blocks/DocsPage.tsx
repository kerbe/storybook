import React, { FunctionComponent } from 'react';
import { styled, Theme } from '@storybook/theming';
import { transparentize } from 'polished';

import { withReset } from '../typography/withReset';

const breakpoint = 600;

export interface DocsPageProps {
  title: string;
  subtitle?: string;
}

export const Title = styled.h1<{}>(withReset, ({ theme }: { theme: Theme }) => ({
  color: theme.color.defaultText,
  fontSize: theme.typography.size.m3,
  fontWeight: theme.typography.weight.black,
  lineHeight: '32px',

  [`@media (min-width: ${breakpoint}px)`]: {
    fontSize: theme.typography.size.l1,
    lineHeight: '36px',
    marginBottom: '.5rem', // 8px
  },
}));

export const Subtitle = styled.h2<{}>(withReset, ({ theme }: { theme: Theme }) => ({
  fontWeight: theme.typography.weight.regular,
  fontSize: theme.typography.size.s3,
  lineHeight: '20px',
  borderBottom: 'none',
  marginBottom: '15px',

  [`@media (min-width: ${breakpoint}px)`]: {
    fontSize: theme.typography.size.m1,
    lineHeight: '28px',
    marginBottom: '24px',
  },

  color:
    theme.base === 'light'
      ? transparentize(0.25, theme.color.defaultText)
      : transparentize(0.25, theme.color.defaultText),
}));

export const DocsContent = styled.div({
  maxWidth: 800,
  width: '100%',
});

export const DocsWrapper = styled.div<{}>(({ theme }) => ({
  background: theme.background.content,
  display: 'flex',
  justifyContent: 'center',
  padding: '4rem 20px',

  [`@media (min-width: ${breakpoint}px)`]: {},
}));

export const DocsPageWrapper: FunctionComponent = ({ children }) => (
  <DocsWrapper>
    <DocsContent>{children}</DocsContent>
  </DocsWrapper>
);
