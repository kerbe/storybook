import { PropDef } from '@storybook/components';
import { PropsExtractor, hasDocgen, extractPropsFromDocgen } from '../../lib/docgen';

const SECTIONS = ['props', 'events', 'slots'];

export const extractProps: PropsExtractor = component => {
  if (!hasDocgen(component)) {
    return null;
  }
  const sections: Record<string, PropDef[]> = {};
  SECTIONS.forEach(section => {
    sections[section] = extractPropsFromDocgen(component, section).map(x => x.propDef);
  });
  return { sections };
};
