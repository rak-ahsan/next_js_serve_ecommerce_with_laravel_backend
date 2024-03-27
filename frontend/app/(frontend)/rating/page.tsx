'use client'
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Props {
    id: any
}
export default function Rating({ id }: Props) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleStarClick = (value: any, id: any) => {
        setSelectedValue(value);
        console.log('Rating updated to: ' + value + 'id ' + id);
    };

    return (
        <div className="flex">

            {/* Star icons */}
            <label onClick={() => handleStarClick("1", id)}>
                <Star className={selectedValue >= "1" ? "text-orange-400 " : "text-gray-400"} />
            </label>
            <label onClick={() => handleStarClick("2", id)}>
                <Star className={selectedValue >= "2" ? "text-orange-400" : "text-gray-400"} />
            </label>
            <label onClick={() => handleStarClick("3", id)}>
                <Star className={selectedValue >= "3" ? "text-orange-400" : "text-gray-400"} />
            </label>
            <label onClick={() => handleStarClick("4", id)}>
                <Star className={selectedValue >= "4" ? "text-orange-400" : "text-gray-400"} />
            </label>
            <label onClick={() => handleStarClick("5", id)}>
                <Star className={selectedValue >= "5" ? "text-orange-400" : "text-gray-400"} />
            </label>
        </div>
    );
}


// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import { Star } from 'lucide-react';

// const labels: { [index: string]: string } = {
//     0.5: 'Useless',
//     1: 'Useless+',
//     1.5: 'Poor',
//     2: 'Poor+',
//     2.5: 'Ok',
//     3: 'Ok+',
//     3.5: 'Good',
//     4: 'Good+',
//     4.5: 'Excellent',
//     5: 'Excellent+',
// };

// function getLabelText(value: number) {
//     return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

// export default function HoverRating() {
//     const [value, setValue] = React.useState<number | null>(2);
//     const [hover, setHover] = React.useState(-1);

//     return (
//         <Box
//             sx={{
//                 width: 200,
//                 display: 'flex',
//                 alignItems: 'center',
//             }}
//         >
//             <Rating
//                 name="hover-feedback"
//                 value={value}
//                 precision={0.5}
//                 getLabelText={getLabelText}
//                 onChange={(event, newValue) => {
//                     setValue(newValue);
//                 }}
//                 onChangeActive={(event, newHover) => {
//                     setHover(newHover);
//                 }}
//                 emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
//             />
//             {value !== null && (
//                 <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//             )}
//         </Box>
//     );
// }


