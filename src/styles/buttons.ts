import { colors } from 'styles';

export type ButtonStyle = {
  container: Record<string, any>;
  text: Record<string, any>;
};

export const mainButtonStyle: ButtonStyle = {
  container: {
    elevation: 8,
    backgroundColor: colors.contrast,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 18,
    color: colors.main,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
};

export const navButtonStyle: ButtonStyle = {
  container: {
    elevation: 8,
    backgroundColor: colors.contrast,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.main,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
};
