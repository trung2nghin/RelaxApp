import {Typography} from 'react-native-ui-lib';

const FONTS_BASE = 'Helvetica';
const FONTS = {
  Regular: `${FONTS_BASE}-Regular`,
  Medium: `${FONTS_BASE}-Medium`,
  Bold: `${FONTS_BASE}-Bold`,
  Black: `${FONTS_BASE}-Black`,
};

Typography.loadTypographies({
  r14: {
    fontSize: 14,
    lineHeight: 15,
    fontFamily: FONTS.Regular,
  },
  r16: {
    fontSize: 16,
    lineHeight: 27,
    fontFamily: FONTS.Regular,
  },
  r24: {
    fontSize: 24,
    lineHeight: 26,
    fontFamily: FONTS.Regular,
  },
  r28: {
    fontSize: 28,
    lineHeight: 30,
    fontFamily: FONTS.Regular,
  },
  r30: {
    fontSize: 30,
    lineHeight: 41,
    fontFamily: FONTS.Regular,
  },
  r34: {
    fontSize: 34,
    lineHeight: 37,
    fontFamily: FONTS.Regular,
  },
  //
  m14: {
    fontSize: 14,
    lineHeight: 15,
    fontFamily: FONTS.Medium,
  },
  m16: {
    fontSize: 16,
    lineHeight: 27,
    fontFamily: FONTS.Medium,
  },
  m24: {
    fontSize: 24,
    lineHeight: 26,
    fontFamily: FONTS.Medium,
  },
  m28: {
    fontSize: 28,
    lineHeight: 30,
    fontFamily: FONTS.Medium,
  },
  m30: {
    fontSize: 30,
    lineHeight: 41,
    fontFamily: FONTS.Medium,
  },
  m34: {
    fontSize: 34,
    lineHeight: 37,
    fontFamily: FONTS.Medium,
  },
  //
  b14: {
    fontSize: 14,
    lineHeight: 15,
    fontFamily: FONTS.Bold,
  },
  b16: {
    fontSize: 16,
    lineHeight: 27,
    fontFamily: FONTS.Bold,
  },
  b24: {
    fontSize: 24,
    lineHeight: 26,
    fontWeight: 'bold',
    fontFamily: FONTS.Bold,
  },
  b28: {
    fontSize: 28,
    lineHeight: 30,
    fontWeight: 'bold',
    fontFamily: FONTS.Bold,
  },
  b30: {
    fontSize: 30,
    lineHeight: 41,
    fontWeight: 'bold',
    fontFamily: FONTS.Bold,
  },
  b34: {
    fontSize: 34,
    lineHeight: 37,
    fontFamily: FONTS.Bold,
  },
});
