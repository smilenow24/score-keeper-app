//import GlobalStyle from '../src/GlobalStyle';

export const decoration = [
  (Story) => {
    return (
      <>
      <GlobalStyle />
      <Story />
      </>
    );
  },
];