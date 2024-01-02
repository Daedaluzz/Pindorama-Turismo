import React from 'react'

export default function MainElement({ children, locale }) {
    return (
        <main>
            {children}
            <p>LOCAL = {locale}</p>
        </main>
    )
}
