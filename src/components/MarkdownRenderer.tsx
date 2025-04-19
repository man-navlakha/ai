import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy } from 'react-icons/fi';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [isdark, setIsdark] = useState(false);
console.log(isdark)
  // Detect the current theme based on <html class="dark">
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsdark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    setIsdark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Code copied to clipboard!');
    } catch (error) {
      console.error('Clipboard copy failed:', error);
      toast.error('Failed to copy code. Please try manually.');
    }
  };
  interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    inline?: boolean;
  }
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Handle inline and block code
          code({ inline, className, children, ...props }:CodeProps) {
            const match = /language-(\w+)/.exec(className || '');
            const rawCode = String(children).replace(/\n$/, '');
            const isCustom = rawCode.startsWith('@@') && rawCode.endsWith('@@');
            const cleanedCode = isCustom
              ? rawCode.slice(2, -2).trim()
              : rawCode;

            // 🔲 Block Code
            if (!inline) {
              return (
                <div className="relative group my-4">
                  <button
                    className="absolute top-2 right-2 text-xs text-gray-400 dark:bg-gray-800 bg-[#e5e5e5] hover:bg-gray-700 px-2 py-1 rounded transition"
                    onClick={() => handleCopy(cleanedCode)}
                    aria-label="Copy code"
                  >
                    <FiCopy size={14} />
                  </button>

                  <SyntaxHighlighter
  style={oneDark as any}
  language={match?.[1] || 'javascript'}
  customStyle={{
    padding: '1em',
    borderRadius: '6px',
    fontSize: '0.9rem',
    backgroundColor: 'inherit',
  }}
  {...props}
>
  {cleanedCode}
</SyntaxHighlighter>
                </div>
              );
            }

            // 🔲 Inline Code
            return (
              <code
                onClick={() => handleCopy(cleanedCode)}
                className={
                  isCustom
                    ? 'bg-pink-100 text-pink-700 dark:bg-pink-800 dark:text-pink-200 px-2 py-0.5 rounded border border-pink-300 font-mono text-sm cursor-pointer'
                    : 'bg-gray-100 dark:bg-gray-700 text-red-600 dark:text-red-300 text-sm px-1.5 py-0.5 rounded font-mono border border-gray-300 dark:border-gray-600 cursor-pointer'
                }
              >
                {cleanedCode}
              </code>
            );
          },

          // Handle strong (bold) elements
          strong({ children }) {
            return (
              <strong className="text-blue-600 dark:text-blue-400 font-semibold">
                {children}
              </strong>
            );
          },

          // Handle list items
          li({ children }) {
            return <li className="mb-1 ml-6 list-disc">{children}</li>;
          },

          // Handle paragraphs
          p({ children }) {
            return <p className="mb-3">{children}</p>;
          },

          // Handle headers (h2)
          h2({ children }) {
            return (
              <h2 className="text-lg font-bold mt-4 mb-2 text-purple-700 dark:text-purple-300">
                {children}
              </h2>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>

      {/* Toast container for copy feedback */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default MarkdownRenderer;
