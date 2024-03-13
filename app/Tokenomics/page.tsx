"use client"
import * as React from 'react';
import { Chart } from 'react-google-charts';

const newData = [
  { id: 0, value: 20, label: 'Marketing:20%' },
  { id: 1, value: 11, label: 'BFM Team' },
  { id: 2, value: 5, label: 'Charity' },
  { id: 3, value: 25, label: 'Exchange support, Staking rewards and airdrops' },
  { id: 4, value: 12.6, label: 'Token Redemption' },
  { id: 5, value: 20, label: 'Token Burn' },
  { id: 6, value: 6.4, label: 'Token Presale(ICO & IEO)' },
];

export default function PieActiveArc() {
  return (
  <>
  <div className="min-h-screen bg-black text-white">
    <Chart
      chartType="PieChart"
      data={[['Task', 'Hours per Day'], ...newData.map(item => [item.label, item.value])]}
      
      options={{
        title: 'BFM Tokenomics',
        is3D: true,
        pieSliceText: 'none', // Hide data labels
        colors: ['#FFA07A', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFD700'], 
        backgroundColor:'black',// Shades of orange,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -50, color: 'gray' },
        
      }}
      width={'110%'}
      height={'300px'}
      
    /></div>
  </>
  );
}