import React from 'react'
import { Text } from 'react-native'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'

export default function Router() {
    return (
        <ClerkProvider
            publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}
        >
            <SignedIn>
                <Text>Signed In</Text>
            </SignedIn>
            <SignedOut>
                <Text>Signed Out</Text>
            </SignedOut>
        </ClerkProvider>
    )
}
