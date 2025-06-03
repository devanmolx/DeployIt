import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import ProjectContextProvider from '@/context/ProjectContext/ProjectContextProvider';
import UserContextProvider from '@/context/UserContext/UserContextProvider';
import DeploymentContextProvider from '@/context/DeploymentContext/DeploymentContextProvider';
import GitRepoContextProviser from '@/context/GitRepoContext/GitRepoContextProviser';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deploy | The platform for web developers',
  description: 'Deploy your web applications instantly with our platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <UserContextProvider>
            <ProjectContextProvider>
              <DeploymentContextProvider>
                <GitRepoContextProviser>
                  {children}
                </GitRepoContextProviser>
              </DeploymentContextProvider>
              <Analytics />
            </ProjectContextProvider>
          </UserContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}