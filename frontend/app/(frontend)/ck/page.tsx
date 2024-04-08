'use client'
import CustomEditor from '@/components/custom-editor';
// ParentComponent.tsx
import React, { useState } from 'react';

const ParentComponent: React.FC = () => {
    const [content, setContent] = useState('');

    const handleEditorChange = (newContent: string) => {
        setContent(newContent);
    };

    const handleSaveToServer = () => {
        // Here, you would implement the logic to upload `content` to your server
        // This might involve sending an HTTP request to your server with `content` in the request body
        console.log('Content to be saved:', content);
        // Example:
        // fetch('/save-content', {
        //     method: 'POST',
        //     body: JSON.stringify({ content }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(response => {
        //     // Handle response
        // }).catch(error => {
        //     // Handle error
        // });
    };

    return (
        <div>
            <CustomEditor onChange={handleEditorChange} onSave={handleSaveToServer} />
        </div>
    );
};

export default ParentComponent;
