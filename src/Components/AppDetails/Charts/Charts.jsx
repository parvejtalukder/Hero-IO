import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const Charts = ({ ratings }) => {
  const sortedRatings = [...ratings].sort((a, b) => {
    const aNum = parseInt(a.name); 
    const bNum = parseInt(b.name);
    return bNum - aNum; 
  });

  const ratingData = sortedRatings.map(r => ({
    name: r.name,
    count: r.count,
    value: r.count,
  }));

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer>
        <BarChart
          data={ratingData}
          layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={70} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />

          <Bar dataKey="value" fill="#ff8800" barSize={25} radius={[4, 4, 4, 4]}>
            <LabelList
              dataKey="count"
              position="right"
              content={(props) => {
                const { x, y, value } = props;
                return (
                  <g>
                    <rect
                      x={x + 8}
                      y={y - 5}
                      rx={4}
                      ry={4}
                      width={40}
                      height={20}
                      fill="#e63946"
                    />
                    <text
                      x={x + 28}
                      y={y + 8}
                      textAnchor="middle"
                      className="fill-white font-bold text-[12px]"
                    >
                      {value}
                    </text>
                  </g>
                );
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
