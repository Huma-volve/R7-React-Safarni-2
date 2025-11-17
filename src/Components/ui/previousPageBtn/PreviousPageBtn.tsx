import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router';

const PreviousPageBtn: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Link
            to="/"
            className="rounded-full w-[55px] h-[55px] flex items-center justify-center bg-[#F3F4F6] cursor-pointer"
            onClick={() => {
                if (window.history.length > 1) navigate(-1);
                else navigate('/');
            }}
        >
            <BsChevronLeft className="text-2xl" />
        </Link>
    );
};

export default PreviousPageBtn;
