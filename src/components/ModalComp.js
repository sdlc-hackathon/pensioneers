import React, { useState } from 'react';
import ModalSavings from './ModalSavings'; // Adjust import path as necessary

const ModalComp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalPension, setTotalPension] = useState(10000); // Example initial total pension

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Show Savings Projection</Button>
            <ModalSavings
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                totalPension={totalPension}
            />
        </>
    );
};
