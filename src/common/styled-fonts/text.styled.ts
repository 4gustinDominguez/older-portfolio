import styled from '../../styled-components';

type TextProps = {
  format: 'light' | 'normal' | 'bold';
  lineSpacing: boolean;
};

export const Text = styled.p<TextProps>`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.text};
  font-weight: ${({ format = 'normal' }) => {
    switch (format) {
      case 'light':
        return '200';
      case 'normal':
        return '400';
      case 'bold':
        return '600';
    }
  }};
  margin: ${({ lineSpacing = true }) => !lineSpacing && 0};
  padding: ${({ lineSpacing = true }) => !lineSpacing && 0};
`;

export const HighlightedText = styled.b`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.primary};
  font-weight: 400;
`;
