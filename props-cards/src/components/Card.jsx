import { memo } from 'react';
import '../index.css';
import {Heart} from "lucide-react";
import {ArrowBigUp} from "lucide-react";

const Card = (props) => {
  return (
    
    <div className='card mt-10'>
        <div className='card-left'>
            <div className='card-left-left'>                
                <img className="h-13 w-13 rounded-full"src="https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGljb25zfGVufDB8fDB8fHww"></img>
                <span className="text-sm">{props.domain}</span>
            </div>
            <div className='card-left-right'>
                <h3 className="font-bold text-xl">{props.title}</h3>
                <h4 className="text-md">{props.name} | {props.id}</h4>
                <h5 className="text-sm">{props.description}</h5>
            </div>
        </div>
        <div className='card-right'>
            <div className='card-right-up'>
                <div className="flex items-center gap-1">
                    <Heart size={16} />
                    <span>{props.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                    <ArrowBigUp size={25} />
                    <span className="">{props.votes}</span>
                </div>
            </div>
            <div className='card-right-down'>
                <button className="bg-white text-black px-3 py-1 rounded-md cursor-pointer">View</button>
                <button className="bg-white text-black px-3 py-1 rounded-md cursor-pointer">GitHub</button>
            </div>
        </div>
    </div>
  );
};

export default memo(Card);