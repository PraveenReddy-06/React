import { memo } from 'react';

const Hero = (data) => {
    console.log(data);
  return (
    <div className="container">
            <div className="section ">
                <div className="flex gap-2">
                    <div>
                        <img className="rounded-full h-20 w-20 "src="https://images.unsplash.com/photo-1771199918875-58c95dbee206?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"></img>
                        <span>{data.department}</span>
                    </div>
                    <div>
                        <h2>{data.ProjectName}</h2>
                        <h3>{data.name} | {data.id}</h3>
                        <h3>| This is a simple description of this project solves this problem </h3>
                    </div>
                </div> 
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <p>likes</p>
                        <p>upVotes</p>
                    </div> 
                    <div className="flex gap-5">
                        <p>gitHub</p>
                        <p>veiw</p>
                    </div> 
                </div>        
            </div>
        
      
    </div>
  );
};

export default memo(Hero);