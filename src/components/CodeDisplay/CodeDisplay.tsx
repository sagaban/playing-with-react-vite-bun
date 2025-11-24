import { Box, BoxProps } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeDisplayProps extends Omit<BoxProps, 'children'> {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeDisplay = ({ code, language = 'javascript', showLineNumbers = true, ...boxProps }: CodeDisplayProps) => {
  return (
    <Box {...boxProps}>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: '4px',
          padding: '16px',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

