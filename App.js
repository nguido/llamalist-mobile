import React from 'react'
import Router from './Router'
import { StatusBar } from 'expo-status-bar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <StatusBar hidden="true" />
        </QueryClientProvider>
    )
}
