import React from 'react';
import { 
  FaLaptop, 
  FaTheaterMasks, 
  FaMusic, 
  FaRunning, 
  FaUtensils, 
  FaBook, 
  FaPalette, 
  FaChild, 
  FaTshirt, 
  FaLeaf, 
  FaGraduationCap, 
  FaLaughSquint 
} from 'react-icons/fa';

export const CategoryIcons = {
  tech: FaLaptop,
  theatre: FaTheaterMasks,
  music: FaMusic,
  sports: FaRunning,
  food: FaUtensils,
  literature: FaBook,
  art: FaPalette,
  kids: FaChild,
  fashion: FaTshirt,
  outdoor: FaLeaf,
  education: FaGraduationCap,
  comedy: FaLaughSquint
};

export const IconWrapper = ({ icon: Icon, size = 24, color = '#3b82f6', className = '' }) => (
  <Icon 
    size={size} 
    color={color} 
    className={className}
    style={{
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
    }}
  />
);

export default CategoryIcons; 