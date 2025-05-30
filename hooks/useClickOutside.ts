'use client'

import { RefObject, useEffect } from 'react';

export const useClickOutsideAndClose = (ref:  RefObject<HTMLElement> | any, onClick: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClick();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClick]);
};