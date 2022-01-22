import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  WIDTH: width,
  HEIGHT: height,
  FONT_FAMILY: {
    REGULAR: 'Mulish-Regular', //  weight-400 - for body text
    BOLD: 'Mulish-Bold', //  weight-700 - for title text
    SEMI_BOLD: 'Mulish-SemiBold', //  weight-600 - for location & date text
    EXTRA_BOLD: 'Mulish-ExtraBold', //  weight-800 - for status text
  },
  COLORS: {
    BACKGROUND_COLOR: '#F3F0F9',
    BLUE: '#240470',
    LIGHT_BLUE: '#0094FF',
    BLACK: '#262626',
    WHITE: '#FFFFFF',
    RED: '#D63031',
    GREEN: '#00B894',
    ORANGE: '#FF8A35',
    GRAY: '#6B828B',
    BORDER_COLOR: '#E9E4F3',
  },
};
