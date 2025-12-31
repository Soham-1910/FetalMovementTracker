// utils/format.js

/**
 * Converts a total number of seconds into a MM:SS string format.
 * @param {number} seconds 
 * @returns {string} Formatted time (e.g., "02:05")
 */
export const formatSeconds = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
};