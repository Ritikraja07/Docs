/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
 
import React, { useRef, useState } from 'react'
import Card from './Card'


function foreground() {
    const ref = useRef(null);

    const data = [
        {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.", filesize: ".9mb", close: false, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.", filesize: ".9mb", close: false, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.", filesize: ".9mb", close: true, tag: {isOpen: false, tagTitle: "Upload", tagColor: "green"},
        },
    ];
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=> (
            // eslint-disable-next-line react/jsx-key
            <Card data={item} reference={ref} />
        ))} 
    </div>
  )
}

export default foreground
