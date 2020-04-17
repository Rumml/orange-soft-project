import React from 'react';
import NavigationBar from '../../NavigationBar/NavigationBar'

export default function HomePage() {
    return (
        <>
            <NavigationBar selectedTabName='Home'/>
            <div>
                Hello Home Page
            </div>
        </>
    )
}