import React from 'react'
import {
    IconChevronDown,
    IconChevronUp,
    IconMailForward,
    IconMapPins,
  } from "@tabler/icons";

import { useState } from 'react';
import UserCardDetail from './UserCardDetail';

export default function UserCard(props) {
    const [downicon,setDownicon] = useState(false);
  return (
    <div>
       
      <div className="border-bottom" onClick={()=>setDownicon(!downicon)}>
        
        <div className="d-flex align-items-center p-3">
          <img
            src={props.img}
            width="90px"
            class="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">{props.name}</span>
          {downicon ? <IconChevronUp /> : <IconChevronDown />}
          
        </div>
        {downicon && <UserCardDetail email={props.email} address={props.address} />}
       
      </div>
    </div>
  )
}
