import React from 'react';

function Expertise() {
    return (
        <div id="expertise" className="p-5 bg-blender">
            <h2 className="text-3xl mb-5 font-bold text-white text-center">
                My Expertise
            </h2>
            <div className="grid grid-cols-2 gap-0 w-15 mx-auto">
                <div className="expertise-card p-4 border-2 w-30 h-64 border-white bg-blenderl">
                    <h3 className="font-bold text-xl underline decoration-green-500 pb-4 text-white">Biology</h3>
                    <div className="border-l-1 pl-2 text-white">
                        <p className="mt-2 text-white">
                            Advanced c
                        </p>
                    </div>
                </div>
                <div className="expertise-card p-4  border-2 w-30 h-64 border-white bg-blenderl">
                    <h3 className="font-bold text-xl underline decoration-green-500 pb-2 text-white">Software Development</h3>
                    <div className="border-l-1 pl-2 text-white">
                        <p className="mt-2 text-white">
                            Experience in creating AI data processing pipelines with Python
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Expertise;
