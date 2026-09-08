import React from 'react';
import SourdoughUI from './sourdough-hydration/SourdoughUI';
import BakersPercentageUI from './bakers-percentage/BakersPercentageUI';
import PanConverterUI from './baking-pan-converter/PanConverterUI';
import { SOURDOUGH_CONTENT } from './sourdough-hydration/content';
import { BAKERS_PERCENTAGE_CONTENT } from './bakers-percentage/content';
import { PAN_CONVERTER_CONTENT } from './baking-pan-converter/content';

export const ToolComponentsMap: Record<string, React.ComponentType> = {
  SourdoughUI,
  BakersPercentageUI,
  PanConverterUI,
};

export const ToolContentMap: Record<string, any> = {
  'sourdough-hydration-calculator': SOURDOUGH_CONTENT,
  'bakers-percentage-calculator': BAKERS_PERCENTAGE_CONTENT,
  'baking-pan-converter': PAN_CONVERTER_CONTENT,
};
