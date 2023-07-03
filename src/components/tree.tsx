import React from 'react';
import Tree from 'react-d3-tree';

const treeData = [
    {
        name: 'Biology - PhD at XYZ University',
        children: [
            {
                name: 'Coding - Python',
                children: [
                    {
                        name: 'Machine Learning - scikit-learn',
                    },
                    {
                        name: 'Web Development - React.js',
                    },
                ],
            },
            {
                name: 'Genomics - CRISPR',
            },
        ],
    },
];

const containerStyles = {
    width: '100%',
    height: '100vh',
};

const LearningTree: React.FC = () => (
    <div style={containerStyles}>
        <Tree data={treeData} orientation="vertical" />
    </div>
);

export default LearningTree;
