import React from 'react';

function Expertise() {
    return (
        <div id="expertise" className="p-5 bg-blender">
            <h2 className="text-3xl mb-5 font-bold text-white text-center">
                My Expertise
            </h2>
            <div className="grid grid-cols-2 gap-0 w-15 mx-auto">
                <div className="expertise-card p-4 border-2 w-full h-64 border-white bg-blenderl">
                    <h3 className="font-bold text-xl underline decoration-green-500 pb-4 text-white">Biology</h3>
                    <div className="border-l-2 border-white pl-2">
                        <p className="mt-2 text-white">
                            Specialized in Dynamical Neuroscience with hands-on experience in genetic engineering techniques, including proficiency in CRISPR. Conducted extensive simulations and developed automated analysis techniques for behavioral data.
                        </p>
                    </div>
                </div>
                <div className="expertise-card p-4 border-2 w-full h-64 border-white bg-blenderl">
                    <h3 className="font-bold text-xl underline decoration-green-500 pb-2 text-white">Software Development</h3>
                    <div className="border-l-2 border-white pl-2">
                        <p className="mt-2 text-white">
                            Proficient in Python, R, HTML, and TailwindCSS with strong familiarity in data analysis libraries like pandas, NumPy, cv2, and others. Co-founded an AI startup, developed a unique algorithm for researchers and managed software issues.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
