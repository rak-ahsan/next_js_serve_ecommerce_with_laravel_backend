// components/CustomEditor.tsx
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface CustomEditorProps {
    onChange: (newData: string) => void;
    onSave: () => void; // Function to trigger save/upload to server
}

const CustomEditor: React.FC<CustomEditorProps> = ({ onChange, onSave }) => {
    const [editorData, setEditorData] = useState('');

    const handleChange = (event: any, editor: any) => {
        const data = editor.getData();
        setEditorData(data);
        onChange(data); // Propagate data change to parent component
    };

    const handleSave = () => {
        onSave(); // Trigger save/upload to server
    };

    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
        </>
    );
};

export default CustomEditor;
