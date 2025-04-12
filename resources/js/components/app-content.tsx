import { SidebarInset } from '@/components/ui/sidebar';
import * as React from 'react';

interface AppContentProps extends React.ComponentProps<'main'> {
    variant?: 'header' | 'sidebar';
}

export function AppContent({ variant = 'header', children, ...props }: AppContentProps) {
    if (variant === 'sidebar') {
        return <SidebarInset {...props}>{children}</SidebarInset>;
    }

    return (
        <main 
            className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl min-h-screen"
            style={{
                background: 'linear-gradient(135deg, #000000 0%, #FF4500 50%, #FF0000 100%)',
                backgroundSize: '400% 400%',
                animation: 'gradient 15s ease infinite',
            }}
            {...props}
        >
            <style>
                {`
                    @keyframes gradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}
            </style>
            {children}
        </main>
    );
}
