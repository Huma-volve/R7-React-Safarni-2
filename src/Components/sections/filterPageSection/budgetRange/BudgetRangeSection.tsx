import { Range } from 'react-range';
import React, { useState } from 'react';

const BudgetRangeSection: React.FC = () => {
    // Budget Range state
    const MIN = 0;
    const MAX = 8500;
    const STEP = 100;
    const [values, setValues] = useState([1000, 6000]);
    return (
        <div className="mb-10 pb-10 border-b border-[#E5E7EB]">
            <h4 className="lg:text-[25px] text-[20px] font-medium text-(--main-text) mb-8">
                Budget Range
            </h4>

            {/* Range Chart Style */}
            <div className="relative flex items-center flex-col justify-center">
                {/* Gradient Background Shape */}
                <div className="w-full">
                    <img src="/icons/curve-range.svg" alt="curve-range" className="w-full" />
                </div>

                {/* Actual Range Slider */}
                <Range
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    values={values}
                    onChange={(vals) => setValues(vals)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            className="h-2 w-full rounded-full bg-blue-100"
                            style={props.style}
                        >
                            <div
                                className="h-2 bg-blue-500 rounded-full"
                                style={{
                                    width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
                                    marginLeft: `${(values[0] / MAX) * 100}%`
                                }}
                            />
                            {children}
                        </div>
                    )}
                    renderThumb={({ props, index }) => {
                        const { key, style = {}, ...rest } = props;

                        const translateXMatch = style.transform?.match(/translateX\((.*)px\)/);
                        const translateX = translateXMatch ? translateXMatch[1] : '0';

                        return (
                            <div
                                key={index}
                                {...rest}
                                style={{
                                    ...style,
                                    transform: `translateX(${translateX}px) translateY(-15px)`
                                }}
                                className="w-6 h-6 bg-blue-500 rounded-full shadow-md cursor-pointer"
                            />
                        );
                    }}
                />
            </div>

            {/* Min / Max Values */}
            <div className="flex justify-between mt-6 text-[#6B7280]">
                <div>
                    <p className="text-lg font-medium">Min</p>
                    <p className="text-xl font-semibold text-gray-700">${values[0]}</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-medium">Max</p>
                    <p className="text-xl font-semibold text-gray-700">${values[1]}</p>
                </div>
            </div>
        </div>
    );
};

export default BudgetRangeSection;
